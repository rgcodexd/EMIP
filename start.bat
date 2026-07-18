@echo off
echo ========================================================
echo Starting EMIP (Education Migration Intelligence Platform)
echo ========================================================
echo.

echo Starting Python FastAPI Backend on Port 8000...
start cmd /k "title EMIP Backend && .\.venv\Scripts\activate && cd backend && uvicorn main:app --reload"

echo Starting Next.js Frontend on Port 3000...
start cmd /k "title EMIP Frontend && cd frontend && npm run dev"

