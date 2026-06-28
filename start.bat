@echo off
REM Abishek R Portfolio - Quick Start Script for Windows

echo.
echo 🚀 Abishek R - AI Portfolio Platform Setup
echo ==========================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not installed. Please install Docker Desktop first.
    pause
    exit /b 1
)

echo ✅ Docker found
echo.

REM Create environment files if they don't exist
echo Setting up environment variables...

if not exist "backend\.env" (
    echo Creating backend\.env...
    copy backend\.env.example backend\.env
    echo ✅ Created backend\.env (please review and update if needed)
)

if not exist ".env.local" (
    echo Creating .env.local...
    (
        echo NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
        echo NEXT_PUBLIC_SITE_URL=http://localhost:3000
    ) > .env.local
    echo ✅ Created .env.local
)

echo.
echo Building Docker images...
docker-compose build

echo.
echo Starting services...
docker-compose up -d

echo.
echo Waiting for PostgreSQL to be ready...
timeout /t 5 /nobreak

echo Initializing database...
docker-compose exec -T backend python seed.py

echo.
echo ✅ Platform is running!
echo.
echo Frontend: http://localhost:3000
echo Backend API: http://localhost:8000
echo API Docs: http://localhost:8000/api/docs
echo.
echo Default Credentials:
echo   Username: admin
echo   Password: admin123
echo.
echo View logs: docker-compose logs -f
echo Stop platform: docker-compose down
echo.
pause
