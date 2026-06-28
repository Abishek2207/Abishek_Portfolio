#!/bin/bash

# Abishek R Portfolio - Quick Start Script
# This script sets up and runs the entire platform

set -e

echo "🚀 Abishek R - AI Portfolio Platform Setup"
echo "=========================================="
echo ""

# Check prerequisites
echo "Checking prerequisites..."

if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

echo "✅ Docker and Docker Compose found"
echo ""

# Create environment files if they don't exist
echo "Setting up environment variables..."

if [ ! -f "backend/.env" ]; then
    echo "Creating backend/.env..."
    cp backend/.env.example backend/.env
    echo "✅ Created backend/.env (please review and update if needed)"
fi

if [ ! -f ".env.local" ]; then
    echo "Creating .env.local..."
    cat > .env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF
    echo "✅ Created .env.local"
fi

echo ""
echo "Building Docker images..."
docker-compose build

echo ""
echo "Starting services..."
docker-compose up -d

echo ""
echo "Waiting for PostgreSQL to be ready..."
sleep 5

echo "Initializing database..."
docker-compose exec -T backend python seed.py

echo ""
echo "✅ Platform is running!"
echo ""
echo "Frontend: http://localhost:3000"
echo "Backend API: http://localhost:8000"
echo "API Docs: http://localhost:8000/api/docs"
echo ""
echo "Default Credentials:"
echo "  Username: admin"
echo "  Password: admin123"
echo ""
echo "View logs: docker-compose logs -f"
echo "Stop platform: docker-compose down"
