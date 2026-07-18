# EMIP (Education Migration Intelligence Platform)

EMIP is a government-level intelligence platform designed to track student migration patterns across India. By analyzing spatial data and economic indicators, the platform calculates the financial drain on home districts and the infrastructure burden on Tier-1 cities, providing AI-driven policy insights.

## Architecture & Tech Stack

This project is built using a dual-stack architecture to separate fast UI delivery from heavy Machine Learning computation.

### Frontend: Next.js & Firebase
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Premium Vanilla CSS Modules (Dark mode, Glassmorphism, Framer Motion)
- **Data Visualization:** Apache ECharts (`echarts-for-react`)
- **Backend-as-a-Service (BaaS):** Firebase (Authentication & Firestore Database)

### Backend: Python ML Microservice
- **Framework:** FastAPI
- **Machine Learning:** `scikit-learn` (DBSCAN for spatial clustering, Linear Regression for economic modeling)
- **Data Processing:** `pandas`, `numpy`

## Project Structure

- `/frontend/src/app/portal` - Public Student Portal (ROI Calculator)
- `/frontend/src/app/dashboard` - Secure Government Admin Dashboard
- `/frontend/src/components/charts` - Reusable ECharts components (Heatmaps, Resource graphs)
- `/backend` - Python FastAPI microservice for AI/ML tasks
- `/frontend/scripts/seed.mjs` - Firestore database population script

## Getting Started

### 1. Frontend Setup (Next.js)

Ensure you have Node.js installed, then navigate to the frontend directory and install the dependencies:

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 2. Backend Setup (FastAPI ML Service)

Open a new terminal and navigate to the `backend` directory:

```bash
cd backend
```

Create and activate a virtual environment, then install dependencies:

```bash
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The API docs will be available at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

## Environment Variables

Create a `.env.local` file in the root directory with your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```
