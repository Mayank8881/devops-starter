# My K8s App (React + Node) — CI/CD with DockerHub, Render, and Vercel

This project is a simple full-stack application:

- **Frontend:** React (Vite) deployed on **Vercel**
- **Backend:** Node.js (Express) deployed on **Render**
- **CI (Docker Images):** GitHub Actions builds Docker images and pushes them to **DockerHub**
- **CD:** Render redeploys backend using Docker image updates (via Deploy Hook)

---

## Tech Stack

### Frontend
- React (Vite)
- Hosted on Vercel

### Backend
- Node.js + Express
- Hosted on Render

### DevOps / CI-CD
- Docker + DockerHub
- GitHub Actions

---

## Project Structure

```
my-k8s-app/
  frontend/        # React (Vite) app
  backend/         # Node + Express API
```

---

## Deployment

### Frontend Deployment (Vercel)
Frontend is deployed directly from GitHub using Vercel.

Vercel builds the project from:

```
frontend/
```

---

### Backend Deployment (Render)
Backend is deployed on Render using a Docker image from DockerHub:

```
munkss/backend:latest
```

---

## CI Pipeline (GitHub Actions)

Every push to the `main` branch triggers GitHub Actions:

1. Builds backend Docker image
2. Pushes backend image to DockerHub
3. Builds frontend Docker image
4. Pushes frontend image to DockerHub

DockerHub images:
- `munkss/backend:latest`
- `munkss/frontend:latest`

---

## Environment Variables

### Frontend (Vercel)
Set this in Vercel project environment variables:

```
VITE_BACKEND_URL=https://<your-backend-service>.onrender.com
```

Frontend uses it to call the backend API.

---

## API Endpoints

Backend sample endpoints:

- `GET /api/health` → health check
- `GET /api/message` → test message

---

## Author
Mayank
