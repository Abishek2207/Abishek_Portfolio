# 🚀 Deployment & Production Guide

## Overview

This guide covers deploying the Abishek R Portfolio Platform to production environments.

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Database migrations tested
- [ ] SSL/HTTPS certificates ready
- [ ] Domain configured
- [ ] CDN setup complete
- [ ] Backup strategy in place
- [ ] Monitoring configured
- [ ] Security headers configured

## 1. Docker Compose Deployment

### Single Server (VPS/EC2)

```bash
# SSH into your server
ssh root@your-server-ip

# Clone repository
git clone https://github.com/yourusername/abishek-portfolio
cd abishek-portfolio

# Create production .env
cat > backend/.env << EOF
SECRET_KEY=your-super-secret-key-at-least-32-chars
DATABASE_URL=postgresql://admin:your-secure-password@postgres:5432/ai_portfolio
GITHUB_TOKEN=your-github-token
EOF

# Create frontend env
cat > .env.local << EOF
NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api/v1
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
EOF

# Build and start
docker-compose -f docker-compose.yml up -d

# Run migrations
docker-compose exec backend python seed.py

# Verify
curl https://yourdomain.com
curl https://api.yourdomain.com/api/v1/health
```

### Using Nginx Reverse Proxy

```nginx
# /etc/nginx/sites-available/abishek-portfolio

upstream frontend {
    server frontend:3000;
}

upstream backend {
    server backend:8000;
}

server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Frontend
    location / {
        proxy_pass http://frontend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Backend API
    location /api/ {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Static files
    location /uploads/ {
        alias /app/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

## 2. Kubernetes Deployment

### Prerequisites
- kubectl installed
- Kubernetes cluster running
- Helm (optional)

### Deployment Files

**deployment.yaml**:
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: abishek-portfolio

---
apiVersion: v1
kind: Secret
metadata:
  name: portfolio-secrets
  namespace: abishek-portfolio
type: Opaque
stringData:
  SECRET_KEY: your-secret-key
  DATABASE_URL: postgresql://admin:password@postgres:5432/ai_portfolio
  GITHUB_TOKEN: your-token

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
  namespace: abishek-portfolio
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: backend
        image: yourusername/abishek-portfolio-backend:latest
        ports:
        - containerPort: 8000
        env:
        - name: SECRET_KEY
          valueFrom:
            secretKeyRef:
              name: portfolio-secrets
              key: SECRET_KEY
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: portfolio-secrets
              key: DATABASE_URL
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
  namespace: abishek-portfolio
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
      - name: frontend
        image: yourusername/abishek-portfolio-frontend:latest
        ports:
        - containerPort: 3000
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"

---
apiVersion: v1
kind: Service
metadata:
  name: backend-service
  namespace: abishek-portfolio
spec:
  selector:
    app: backend
  ports:
    - protocol: TCP
      port: 8000
      targetPort: 8000

---
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
  namespace: abishek-portfolio
spec:
  type: LoadBalancer
  selector:
    app: frontend
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
```

Deploy:
```bash
kubectl apply -f deployment.yaml
kubectl get pods -n abishek-portfolio
kubectl logs -n abishek-portfolio deployment/backend
```

## 3. AWS Deployment

### Using ECS + RDS

1. **Create RDS PostgreSQL database**
```bash
aws rds create-db-instance \
  --db-instance-identifier abishek-portfolio \
  --db-instance-class db.t3.micro \
  --engine postgres \
  --master-username admin \
  --master-user-password your-password \
  --allocated-storage 20
```

2. **Push to ECR**
```bash
aws ecr create-repository --repository-name abishek-portfolio-backend
aws ecr create-repository --repository-name abishek-portfolio-frontend

docker tag abishek-portfolio-backend:latest <account>.dkr.ecr.us-east-1.amazonaws.com/abishek-portfolio-backend:latest
docker push <account>.dkr.ecr.us-east-1.amazonaws.com/abishek-portfolio-backend:latest

docker tag abishek-portfolio-frontend:latest <account>.dkr.ecr.us-east-1.amazonaws.com/abishek-portfolio-frontend:latest
docker push <account>.dkr.ecr.us-east-1.amazonaws.com/abishek-portfolio-frontend:latest
```

3. **Create ECS Tasks and Services**
- Create task definitions for backend and frontend
- Create ECS services
- Configure load balancer

## 4. Vercel Deployment (Frontend Only)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel deploy --prod

# Environment variables in Vercel dashboard
NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api/v1
```

## 5. Database Backups

### PostgreSQL Backups

```bash
# Manual backup
docker-compose exec postgres pg_dump -U admin ai_portfolio > backup.sql

# Restore
docker-compose exec -T postgres psql -U admin ai_portfolio < backup.sql

# Automated daily backup
#!/bin/bash
# /usr/local/bin/backup-portfolio.sh
DATE=$(date +%Y%m%d_%H%M%S)
docker-compose -f /path/to/docker-compose.yml exec -T postgres \
  pg_dump -U admin ai_portfolio > /backups/portfolio_$DATE.sql
```

Add to crontab:
```
0 2 * * * /usr/local/bin/backup-portfolio.sh
```

## 6. Monitoring & Logging

### Using Prometheus + Grafana

```yaml
# docker-compose.yml additions
prometheus:
  image: prom/prometheus:latest
  volumes:
    - ./prometheus.yml:/etc/prometheus/prometheus.yml
  ports:
    - "9090:9090"

grafana:
  image: grafana/grafana:latest
  environment:
    - GF_SECURITY_ADMIN_PASSWORD=admin
  ports:
    - "3001:3000"
  volumes:
    - grafana_data:/var/lib/grafana

volumes:
  grafana_data:
```

### Application Logging

```python
# backend/main.py
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.info(f"{request.method} {request.url.path}")
    response = await call_next(request)
    return response
```

## 7. CI/CD with GitHub Actions

See `.github/workflows/deploy.yml` for full pipeline.

```bash
# Configure secrets in GitHub
gh secret set SECRET_KEY --body "your-secret-key"
gh secret set DATABASE_URL --body "postgresql://..."
gh secret set DOCKER_USERNAME --body "your-docker-username"
gh secret set DOCKER_PASSWORD --body "your-docker-password"
```

## 8. SSL/TLS Setup

### Let's Encrypt with Certbot

```bash
sudo apt install certbot python3-certbot-nginx

sudo certbot certonly --nginx -d yourdomain.com -d api.yourdomain.com

# Auto-renewal
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

## 9. Security Best Practices

- [ ] Use strong SECRET_KEY (32+ characters)
- [ ] Enable HTTPS everywhere
- [ ] Set secure CORS headers
- [ ] Rate limiting on API
- [ ] SQL injection prevention (SQLModel handles this)
- [ ] CSRF protection
- [ ] Regular security updates

### Configure CORS Headers

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://yourdomain.com"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)
```

## 10. Performance Optimization

### Frontend
- Enable gzip compression
- Optimize images
- Code splitting
- Lazy loading

### Backend
- Connection pooling
- Query optimization
- Caching strategies
- Database indexing

```python
# backend/database.py
engine = create_engine(
    DATABASE_URL,
    pool_size=20,
    max_overflow=40,
    pool_pre_ping=True
)
```

## 11. Scaling

### Horizontal Scaling
- Load balancer (Nginx, HAProxy, AWS ALB)
- Multiple backend instances
- Multiple frontend replicas
- CDN for static assets

### Vertical Scaling
- Increase server resources
- Optimize database queries
- Enable caching

## Troubleshooting

### Services won't start
```bash
docker-compose logs -f
docker-compose ps
docker ps -a
```

### Database connection errors
```bash
docker-compose exec backend python -c "from database import engine; engine.connect()"
```

### High memory usage
```bash
docker stats
docker-compose logs backend | grep -i memory
```

## Support

For deployment issues:
1. Check logs: `docker-compose logs`
2. Test health: `curl https://yourdomain.com/api/v1/health`
3. Verify environment variables
4. Check firewall rules
