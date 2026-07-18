@echo off
echo ========================================================
echo Starting EMIP (Education Migration Intelligence Platform)
echo ========================================================
echo.

echo Starting Python FastAPI Backend on Port 8000...
start cmd /k "title EMIP Backend && cd backend && .\venv\Scripts\activate && uvicorn main:app --reload"

echo Starting Next.js Frontend on Port 3000...
start cmd /k "title EMIP Frontend && npm run dev"

echo.
echo Both services are starting in separate windows!
echo - Frontend will be available at: http://localhost:3000
echo - Backend API Docs will be at: http://127.0.0.1:8000/docs
echo.
pause
