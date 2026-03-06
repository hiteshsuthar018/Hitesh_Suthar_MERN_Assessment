# Pulse HR – Employee Skill Matrix

**Candidate:** Hitesh Suthar
**Assessment:** MERN Stack Developer Technical Assessment
**Stack:** MERN (MongoDB, Express, React 19, Node.js) + TypeScript + Docker

---

# Project Overview

**Pulse HR** is an internal **Employee Skill Matrix dashboard** designed to help HR teams track and analyze employee capabilities across an organization.

The system allows HR managers to:

* Maintain a centralized employee database
* Identify employees by **department**
* Track **primary technical skills**
* Categorize employees by **experience level**

This makes it easier to understand **internal talent distribution** and support better resource allocation within engineering teams.

---

# 🎬 Project Video Preview

A short demonstration of the application is included below.

`ProjectPreview.mov`


This video showcases:

* Employee registration
* Employee listing
* Department-based filtering
* Dashboard UI interaction

---

# Key Features

* Employee registration form
* Dynamic employee listing
* Department-based filtering
* Clean HR dashboard interface
* Type-safe frontend and backend
* MVC backend architecture
* Dockerized environment
* MongoDB database persistence

---

# Technology Stack

## Backend

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose
* MVC Architecture

## Frontend

* React 19
* TypeScript
* TailwindCSS
* Context API (state management)

## DevOps

* Docker
* Docker Compose
* Container networking

---

# Important Note About Port 5000 (macOS)

In recent versions of **macOS (Monterey, Ventura, Sonoma, etc.)**, **port 5000 is commonly used by a system service called *AirPlay Receiver***.

Because of this, port **5000 may already be occupied**, which can prevent Docker containers or Node.js servers from starting properly.

To avoid this issue, this project uses:

Backend Port: 3000
Frontend Port: 5173
MongoDB Port: 27017

This ensures the application runs smoothly without port conflicts on macOS systems.

---

# Project Architecture

```
pulse-hr-skill-matrix
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── EmployeeCard.tsx
│   │   │   ├── EmployeeForm.tsx
│   │   │   └── DepartmentFilter.tsx
│   │   │
│   │   ├── context/
│   │   │   └── EmployeeContext.tsx
│   │   │
│   │   ├── pages/
│   │   │   └── Dashboard.tsx
│   │   │
│   │   ├── services/
│   │   │   └── employeeApi.ts
│   │   │
│   │   └── types/
│   │       └── employee.ts
│   │
│   └── Dockerfile
│
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── config/
│   │   │   └── db.ts
│   │   │
│   │   ├── controllers/
│   │   │   └── employeeController.ts
│   │   │
│   │   ├── models/
│   │   │   └── employeeModel.ts
│   │   │
│   │   ├── routes/
│   │   │   └── employeeRoutes.ts
│   │   │
│   │   ├── interfaces/
│   │   │   └── employeeInterface.ts
│   │   │
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

# Backend API Endpoints

## Register Employee

POST /api/employees

### Request Body

```json
{
  "fullName": "John Doe",
  "department": "MERN",
  "primarySkill": "React",
  "experienceLevel": "Junior"
}
```

This endpoint registers a new employee into the skill matrix.

---

## Get All Employees

GET /api/employees

Returns the complete list of employees stored in the database.

---

## Filter Employees by Department

POST /api/employees/filter

### Request Body

```json
{
  "department": "MERN"
}
```

Returns only employees belonging to the specified department.

---

# Running the Project with Docker

## Step 1 — Clone Repository

```
git clone <repository-url>
cd pulse-hr-skill-matrix
```

---

## Step 2 — Build Containers

```
docker compose build
```

---

## Step 3 — Start Application

```
docker compose up
```

Docker will automatically start:

* MongoDB database
* Backend API server
* React frontend application

---

## Step 4 — Access the Application

Frontend Dashboard

```
http://localhost:5173
```

Backend API

```
http://localhost:3000/api/employees
```

---

# Docker Architecture

Docker Compose orchestrates **three services**:

```
client   → React application
backend  → Node.js API server
mongo    → MongoDB database
```

Containers communicate internally through Docker networking:

```
client  → http://backend:3000
backend → mongodb://mongo:27017
```

---

# Environment Variables

### Backend (.env)

```
PORT=3000
MONGO_URI=mongodb://mongo:27017/pulseHR
NODE_ENV=development
```

---

# Features Implemented

* Employee registration
* Employee listing dashboard
* Department filtering system
* MVC backend architecture
* TypeScript strict typing
* Context API state management
* Executive-style dashboard UI
* Docker containerization
* MongoDB persistent storage

---


# Evaluation Criteria Addressed

| Criteria                   | Implementation                                       |
| -------------------------- | ---------------------------------------------------- |
| Logic & Functionality      | Employee CRUD logic and department filtering         |
| TypeScript & Code Quality  | Interfaces, strict typing, MVC pattern               |
| Docker & Environment Setup | docker-compose orchestration                         |
| Professionalism            | Clean UI, structured repository, clear documentation |

---

# Author

**Hitesh Suthar**
MERN Stack Developer
