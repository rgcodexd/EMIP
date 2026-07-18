# Deploying EMIP to Render

This guide explains how to deploy the EMIP project on [Render](https://render.com/). The project will be deployed in two parts:
1. **Frontend**: As a Static Site.
2. **Backend**: As a Web Service.

---

## 1. Frontend (Next.js) - Static Site

Since you want to deploy the frontend as a **Static Site**, Next.js needs to be configured for static HTML export. 
*Note: Static exports mean API routes inside the Next.js `app` folder or image optimizations won't work. Since your backend logic is in Python, this perfectly fits your use case.*

### Pre-deployment: Update Next.js Configuration
Before deploying, make sure your `next.config.ts` (in the `frontend` directory) is configured to output a static export. It should look like this:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export
};

export default nextConfig;
```

### Deployment Steps
1. Go to your Render Dashboard and click **New +** -> **Static Site**.
2. Connect your GitHub repository.
3. Use the following configuration:
   - **Name**: `emip-frontend` (or your preferred name)
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `out`
4. Expand **Advanced** and add your Firebase Environment Variables (from your `.env.local` file).
5. Click **Create Static Site**.

---

## 2. Backend (FastAPI) - Web Service

The Python FastAPI backend will be deployed as a standard Web Service.

### Deployment Steps
1. Go to your Render Dashboard and click **New +** -> **Web Service**.
2. Connect your GitHub repository.
3. Use the following configuration:
   - **Name**: `emip-backend`
   - **Language**: `Python`
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Click **Create Web Service**.

---

## 3. Post-Deployment (Connecting the Services)

Once the backend is deployed, Render will provide a public URL for your FastAPI service (e.g., `https://emip-backend.onrender.com`). 

If your frontend makes API calls to the backend, you will need to:
1. Update your API calls in the frontend to point to this new URL instead of `http://127.0.0.1:8000`.
2. Typically, this is done by adding a new environment variable in your frontend (e.g., `NEXT_PUBLIC_API_URL=https://emip-backend.onrender.com`) and using it in your fetch requests.
3. If you make this change, remember to add that environment variable to your frontend Render configuration and redeploy the frontend.
