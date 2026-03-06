```markdown
# Pulse HR – Employee Skill Matrix

**Candidate:** Hitesh Suthar  
**Assessment:** MERN Stack Developer Technical Assessment  
**Stack:** MERN (MongoDB, Express, React 19, Node.js) + TypeScript + Docker

---

# Project Overview

Pulse HR is an internal HR dashboard that allows organizations to maintain a **Skill Matrix of employees**.  
The application helps HR teams quickly identify internal talent based on:

- Department
- Primary technical skill
- Experience level

The system allows HR executives to:

- Register employees
- View employee list
- Filter employees by department

---

# Tech Stack

## Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- MVC Architecture

## Frontend
- React 19
- TypeScript
- TailwindCSS
- Context API (state management)

## DevOps
- Docker
- Docker Compose

---

# Important Note About Port 5000 (macOS)

In recent versions of **macOS (Monterey, Ventura, Sonoma, etc.)**, **port 5000 is commonly used by the system service called _AirPlay Receiver_**.

Because of this, port **5000 may already be occupied**, which causes Docker containers or Node servers to fail during startup.

To avoid this conflict, this project uses:

```

Backend Port: 3000
Frontend Port: 5173
MongoDB Port: 27017

```

This ensures the application runs without port conflicts on macOS.

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
├── server/                 # Node backend
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

```

POST /api/employees

````

### Request Body

```json
{
  "fullName": "John Doe",
  "department": "MERN",
  "primarySkill": "React",
  "experienceLevel": "Junior"
}
````

---

## Get All Employees

```
GET /api/employees
```

Returns the complete list of employees.

---

## Filter Employees by Department

```
POST /api/employees/filter
```

### Request Body

```json
{
  "department": "MERN"
}
```

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

---

## Step 4 — Open Application

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

Docker Compose creates **three services**:

```
client  → React Application
backend → Node.js API
mongo   → MongoDB Database
```

Internal Docker networking allows containers to communicate using service names:

```
client → http://backend:3000
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
* Employee listing
* Department filtering
* MVC backend architecture
* TypeScript interfaces (strict typing)
* Context API state management
* Executive dashboard UI
* Docker containerization
* MongoDB persistence

---

# Git Commit Discipline

The repository includes multiple commits demonstrating development progress:

```
init: project setup
feat: employee schema and model
feat: employee API endpoints
feat: department filtering logic
feat: dashboard UI
feat: docker configuration
```

---

# Evaluation Criteria Addressed

| Criteria                   | Implementation                          |
| -------------------------- | --------------------------------------- |
| Logic & Functionality      | Filtering, employee creation, API logic |
| TypeScript & Code Quality  | Interfaces, MVC structure               |
| Docker & Environment Setup | docker-compose networking               |
| Professionalism            | Clean UI, meaningful commits            |

---

# Author

**Hitesh Suthar**

MERN Stack Developer

```
```
