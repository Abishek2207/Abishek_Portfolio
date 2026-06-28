# 🚀 Abishek R - Production-Grade AI Engineer Portfolio Platform

A full-stack, production-ready portfolio platform showcasing AI/ML projects, skills, and expertise with a sophisticated backend and beautiful animated frontend.

## 🎯 Features

### 🔐 Authentication & Admin Panel
- JWT-based secure authentication
- Admin dashboard for content management
- Role-based access control

### 📊 Dynamic Content Management
- **Projects**: Create, read, update, delete projects with full CRUD operations
- **Certificates**: Manage credentials with verification links and file uploads
- **Skills**: Organize skills by category with proficiency levels
- **Experience**: Timeline-based work experience management
- **Resume**: Parse PDF resumes and auto-extract skills

### 🤖 AI-Powered Features
- **AI Dashboard**: Real-time metrics and training logs visualization
- **GitHub Integration**: Fetch repos, stars, and contributor stats
- **Resume Parser**: Intelligent PDF parsing with skill extraction

### 🎨 Beautiful UI/UX
- Apple-inspired design with glassmorphism
- Smooth animations with Framer Motion
- Responsive design (mobile, tablet, desktop)
- Dark mode optimized
- Neural network particle background

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: React with Lucide Icons
- **State Management**: React Context API
- **HTTP Client**: Fetch API

### Backend
- **Framework**: FastAPI
- **Language**: Python 3.11
- **Database**: PostgreSQL 16
- **ORM**: SQLModel
- **Authentication**: JWT + Passlib
- **File Processing**: PyMuPDF, PyPDF2
- **API Integration**: Requests library

### DevOps & Deployment
- **Containerization**: Docker & Docker Compose
- **Database**: PostgreSQL (persistent volumes)
- **CI/CD Ready**: Structured Dockerfile configs

## 📋 Prerequisites

- Node.js 20+ (for frontend)
- Python 3.11+ (for backend)
- Docker & Docker Compose (for containerized setup)
- PostgreSQL 16 (if not using Docker)
- Git

## 🚀 Quick Start

### Option 1: Docker Compose (Recommended)

```bash
# Clone the repository
git clone https://github.com/yourusername/abishek-portfolio
cd abishek-portfolio

# Create environment file
cp backend/.env.example backend/.env

# Start all services
docker-compose up -d

# Seed the database
docker exec abishek-portfolio-backend python seed.py

# Access the platform
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000/api/docs
```

### Option 2: Manual Setup

#### Backend Setup
```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your settings

# Run migrations and seed database
python seed.py

# Start backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

#### Frontend Setup
```bash
# In root directory
npm install

# Create environment file
echo 'NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1' > .env.local

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

## 📚 API Documentation

### Base URL
```
http://localhost:8000/api/v1
```

### Authentication
All protected endpoints require JWT token in Authorization header:
```
Authorization: Bearer <your_token>
```

### Key Endpoints

#### Auth
- `POST /auth/login` - Login with credentials
- `GET /auth/me` - Get current user info

#### Projects
- `GET /projects` - List all projects
- `POST /projects` - Create project (admin)
- `PUT /projects/{id}` - Update project (admin)
- `DELETE /projects/{id}` - Delete project (admin)

#### Certificates
- `GET /certificates` - List all certificates
- `POST /certificates` - Create certificate (admin)
- `PUT /certificates/{id}` - Update certificate (admin)  
- `DELETE /certificates/{id}` - Delete certificate (admin)

#### Skills
- `GET /skills` - List skills by category
- `POST /skills` - Create skill (admin)
- `DELETE /skills/{id}` - Delete skill (admin)

#### Experience
- `GET /experience` - List work experience
- `POST /experience` - Create experience entry (admin)
- `PUT /experience/{id}` - Update experience (admin)
- `DELETE /experience/{id}` - Delete experience (admin)

#### Resume
- `POST /resume/parse` - Parse PDF resume (admin)
- `GET /resume/download` - Download resume file

#### GitHub
- `GET /github/user/{username}` - Fetch GitHub user data
- `GET /github/repos/{username}` - Fetch repositories

#### AI Metrics
- `GET /ai/metrics` - Get AI training metrics
- `POST /ai/metrics` - Create metric (admin)
- `GET /ai/training-logs` - Get training logs
- `POST /ai/training-logs` - Create training log (admin)

## 🔑 Default Credentials

**Username**: `admin`  
**Password**: `admin123`

⚠️ Change these immediately in production!

## 📁 Project Structure

```
abishek-portfolio/
├── src/
│   ├── app/
│   │   ├── api/          # API routes
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Certificates.tsx
│   │   ├── AdminPanel.tsx
│   │   └── ...
│   ├── context/          # React context
│   │   └── AuthContext.tsx
│   └── lib/
│       ├── api.ts        # API client
│       └── ...
├── backend/
│   ├── main.py           # FastAPI application
│   ├── database.py       # Database models
│   ├── seed.py           # Database seeding script
│   ├── requirements.txt  # Python dependencies
│   └── Dockerfile
├── docker-compose.yml    # Docker Compose config
├── Dockerfile            # Frontend Dockerfile
└── package.json          # Node dependencies
```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```
SECRET_KEY=your-super-secret-key
DATABASE_URL=postgresql://admin:password@localhost:5432/ai_portfolio
GITHUB_TOKEN=your_github_token
```

#### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🎨 Customization

### Add Your Projects
Edit `backend/seed.py` and update the `projects_data` list with your actual projects.

### Customize Branding
- Update text in `src/components/Hero.tsx`
- Modify colors in Tailwind CSS configuration
- Update metadata in `src/app/layout.tsx`

### Add New Skills
Use the admin panel or directly insert into the database.

## 📱 Features Walkthrough

### Admin Panel
1. Click the settings icon (bottom-right) when authenticated
2. Manage projects, certificates, skills, and experience
3. Upload and parse resume files
4. View real-time AI metrics

### AI Dashboard
- View training metrics and logs
- Monitor model performance
- Track inference statistics

### Dynamic Rendering
All content is fetched from the backend API and dynamically rendered, ensuring real-time updates without page refreshes.

## 🧪 Testing

```bash
# Backend tests
cd backend
pytest

# Frontend tests
npm test

# API integration tests
npm run test:api
```

## 🚢 Deployment

### AWS Deployment
```bash
# Build images
docker-compose build

# Push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account>.dkr.ecr.us-east-1.amazonaws.com

docker tag abishek-portfolio-frontend:latest <account>.dkr.ecr.us-east-1.amazonaws.com/abishek-frontend:latest
docker push <account>.dkr.ecr.us-east-1.amazonaws.com/abishek-frontend:latest
```

### Vercel (Frontend Only)
```bash
vercel deploy
```

## 📊 Performance

- **Frontend**: Optimized for Core Web Vitals
- **Backend**: <100ms API response time
- **Database**: Indexed queries for fast retrieval
- **Images**: Compressed and optimized
- **Caching**: Browser caching enabled

## 🐛 Troubleshooting

### Backend won't connect to database
```bash
# Check PostgreSQL is running
docker-compose ps

# Verify connection string in .env
# Ensure PostgreSQL container is healthy
docker-compose logs postgres
```

### Frontend API calls failing
```bash
# Check backend is running
curl http://localhost:8000/api/v1/health

# Verify NEXT_PUBLIC_API_URL in .env.local
# Check CORS configuration in backend
```

### Can't login
```bash
# Default credentials: admin / admin123
# Check JWT token in localStorage
# Verify SECRET_KEY is set correctly
```

## 📈 Monitoring

### Logs
```bash
# Backend logs
docker-compose logs backend -f

# Frontend logs
npm run dev (shows in console)

# Database logs
docker-compose logs postgres -f
```

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👨‍💻 Author

**Abishek R**
- 🌐 Portfolio: https://abishek.dev
- 🐙 GitHub: https://github.com/abishekr
- 💼 LinkedIn: https://linkedin.com/in/abishekr

## 🙏 Acknowledgments

- Inspired by Apple's elegant design language
- Built with modern web technologies
- Community-driven development practices

## 📞 Support

For issues, questions, or suggestions:
1. Open an GitHub Issue
2. Check existing documentation
3. Review API docs at `/api/docs`

---

Built with ❤️ by Abishek R
