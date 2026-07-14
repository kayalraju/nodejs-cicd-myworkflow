# 🚀 Node.js CRUD API with Jest Testing & GitHub Actions CI/CD

A production-style Node.js CRUD REST API built using **Express.js**, **MongoDB**, **Mongoose**, **Jest**, **Supertest**, and **GitHub Actions**.

This project demonstrates:

- REST API Development
- Layered Architecture
- CRUD Operations
- Input Validation
- Repository Pattern
- Service Layer
- Jest Unit & Integration Testing
- MongoDB Memory Server
- GitHub Actions CI/CD Pipeline

---

# 📁 Project Structure

```text
node_card_cicd_workflow/
│
├── .github/
│   └── workflows/
│       └── node-ci.yml
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validator/
│   ├── app.js
│   └── server.js
│
├── tests/
│   ├── setup.js
│   ├── product.test.js
│   └── helpers/
│
├── coverage/
│
├── docker-compose.yml
├── jest.config.js
├── package.json
├── .gitignore
└── README.md
```

---

# 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Jest
- Supertest
- MongoDB Memory Server
- GitHub Actions
- Docker (Optional)

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/node_card_cicd_workflow.git
```

Go inside the project

```bash
cd node_card_cicd_workflow
```

Install dependencies

```bash
npm install
```

---

# ▶️ Run Application

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

---

# 🧪 Run Tests

Run all test cases

```bash
npm test
```

Generate coverage

```bash
npm run test:coverage
```

---

# 📊 Test Coverage

Jest automatically generates

```text
coverage/
```

Open

```text
coverage/lcov-report/index.html
```

inside your browser.

---

# 🔗 REST API Endpoints

## Create Product

```http
POST /api/product/create
```

## Get All Products

```http
GET /api/product
```

## Get Product By ID

```http
GET /api/product/:id
```

## Update Product

```http
PUT /api/product/:id
```

## Delete Product

```http
DELETE /api/product/:id
```

---

# 🧪 Testing Stack

This project uses

- Jest
- Supertest
- MongoDB Memory Server

Testing includes

- Create Product
- Read Product
- Read All Products
- Update Product
- Delete Product
- Coverage Report

---

# 🔄 CI/CD Pipeline

GitHub Actions automatically runs whenever code is pushed to:

- main
- development

Pipeline Stages

```
Developer Push
        │
        ▼
Checkout Repository
        │
        ▼
Install Dependencies
        │
        ▼
Run Jest Tests
        │
        ▼
Generate Coverage
        │
        ▼
Build Project
        │
        ▼
Ready For Deployment
```

---

# 📄 GitHub Workflow

```
.github/workflows/node-ci.yml
```

Workflow contains three jobs

### ✅ Test

- Checkout Repository
- Setup Node.js
- Install Dependencies
- Run Jest Tests
- Generate Coverage

---

### ✅ Build

- Build Project
- Verify Build

---

### ✅ Deploy

(Currently simulated)

Displays

```
CI/CD Pipeline Successful

Tests Passed

Build Successful

Ready for Deployment
```

---

# 📌 Project Features

- Express REST API
- MongoDB CRUD
- Repository Pattern
- Service Layer
- Validation
- Error Handling
- Jest Testing
- Supertest
- Coverage Report
- GitHub Actions
- Production Folder Structure

---

# 📷 GitHub Actions Flow

```
Push Code
    │
    ▼
Test Project
    │
    ▼
Run Jest Tests
    │
    ▼
Generate Coverage
    │
    ▼
Build Project
    │
    ▼
Ready For Deployment
```

---

# 📚 Learning Objectives

This project helps you learn

- REST API Development
- Layered Architecture
- Repository Pattern
- Service Layer
- Jest Testing
- API Testing
- GitHub Actions
- CI/CD Pipeline
- Production Project Structure

---

# 👨‍💻 Author

**Raju Kayal**

Backend Engineering | MERN Stack | Node.js | CI/CD | DevOps

---

# ⭐ Future Improvements

- JWT Authentication
- Role-Based Authorization
- Docker Deployment
- AWS EC2 Deployment
- GitHub Secrets
- SonarQube Integration
- CodeQL Security Scan
- Multi-Environment Deployment
