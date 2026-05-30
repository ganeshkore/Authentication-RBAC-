# Authentication-RBAC-
Role Based Access Control using JWT Authentication

## Overview

This project is a Full Stack Authentication and Role-Based Access Control (RBAC) application built using Spring Boot and React. The application demonstrates secure user authentication using JWT (JSON Web Tokens) and role-based authorization for different types of users.

Users can register with a role, log in to receive a JWT token, and access resources based on their assigned permissions.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Token Generation
* Stateless Authentication
* Password Encryption using BCrypt

### Authorization (RBAC)

* USER Role
* ADMIN Role
* Public Endpoint Access
* Protected Endpoint Access
* Role-Based API Authorization

### Frontend

* Responsive User Interface
* Login Form
* Registration Form
* Protected Dashboard
* JWT Storage using Local Storage
* Route Protection
* Role-Based Content Rendering
* Loading and Error States

---

## Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Security
* JWT Authentication
* Spring Data JPA
* Hibernate
* PostgreSQL
* MapStruct
* Lombok
* Maven
* Swagger / OpenAPI

### Frontend

* React
* TypeScript
* Vite
* React Router
* React Query
* Axios
* React Hook Form
* Tailwind CSS
* React Icons

---

## API Endpoints

### Authentication

| Method | Endpoint       | Description                        |
| ------ | -------------- | ---------------------------------- |
| POST   | /auth/register | Register a new user                |
| POST   | /auth/login    | Authenticate user and generate JWT |

### Public Endpoint

| Method | Endpoint    | Access   |
| ------ | ----------- | -------- |
| GET    | /api/public | Everyone |

### User Endpoint

| Method | Endpoint  | Access    |
| ------ | --------- | --------- |
| GET    | /api/user | USER Role |

### Admin Endpoint

| Method | Endpoint   | Access     |
| ------ | ---------- | ---------- |
| GET    | /api/admin | ADMIN Role |

---

## Authentication Flow

1. User registers with a role (USER or ADMIN).
2. User logs in using email and password.
3. Backend validates credentials.
4. JWT token is generated and returned.
5. Frontend stores token in local storage.
6. Token is attached to subsequent API requests.
7. Spring Security validates the token and authorizes access based on user roles.

---

## Running the Backend

Navigate to the backend folder:

Configure MySQL database settings in:

```properties
application.properties
```

Run the application:

```bash
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

## Running the Frontend

Navigate to the frontend folder:

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Security Features

* JWT-Based Authentication
* BCrypt Password Hashing
* Stateless Session Management
* Role-Based Authorization
* Protected Routes
* Secure API Access

---

## Author

**Ganesh Kore**

Java Full Stack Developer

Technologies: Java, Spring Boot, React, TypeScript, PostgreSQL, JWT Authentication

