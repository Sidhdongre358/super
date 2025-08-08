# React Dashboard with CI/CD, Docker, and AWS EC2 Deployment

This repository demonstrates the complete lifecycle of a modern frontend application — from development to automated deployment on a cloud server.  
It highlights skills in **React.js**, **Tailwind CSS**, **Docker**, **GitHub Actions**, and **AWS EC2**.

---

## 1. Project Overview

The objective of this project is to showcase an end-to-end deployment workflow for a production-ready dashboard application.

**Key Goals:**
- Build a responsive, maintainable frontend with **React.js** and **Tailwind CSS**
- Containerize the application with **Docker**
- Automate build and deployment using **GitHub Actions**
- Host the application on **AWS EC2** with **Nginx** as a reverse proxy

---

## 2. Technology Stack

| Layer                | Technologies Used |
|----------------------|-------------------|
| **Frontend**         | React.js, Tailwind CSS |
| **Containerization** | Docker |
| **CI/CD**            | GitHub Actions |
| **Hosting**          | AWS EC2, Nginx |
| **Version Control**  | Git, GitHub |

---

## 3. Features

- **Responsive UI** – Works seamlessly across devices
- **Containerized Deployment** – Consistent environments via Docker
- **Automated CI/CD Pipeline** – Continuous integration and delivery using GitHub Actions
- **Cloud Hosting** – Application hosted on AWS EC2 with Nginx
- **Scalable Setup** – Easily extendable for backend integration

---

## 4. System Architecture

```plaintext
Developer Commit → GitHub Actions → Docker Build → Push to AWS EC2 → Nginx Serves Application


# Clone repository
git clone https://github.com/Sidhdongre358/super.git
cd <your-repo>

# Install dependencies
npm install

# Start development server
npm start

# Build image
docker build -t react-dashboard .

# Run container
docker run -p 3000:3000 react-dashboard
