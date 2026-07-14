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
# ⚙️ GitHub Actions Workflow Explained

The workflow file is located at:

```text
.github/workflows/node-ci.yml
```

---

## Complete Workflow

```yaml
name: Node.js CI/CD

on:
  push:
    branches:
      - main
      - development

  pull_request:
    branches:
      - main
      - development

jobs:

  test:
    name: Node.js CI/CD Project
    runs-on: ubuntu-latest

    steps:

      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install Dependencies
        run: npm install

      - name: Run Jest Tests
        run: npm test

      - name: Generate Coverage
        run: npm run test:coverage

  build:
    name: Build Project
    needs: test
    runs-on: ubuntu-latest

    steps:

      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install Dependencies
        run: npm install

      - name: Build Application
        run: npm run build --if-present

      - name: Build Successful
        run: echo "Build completed successfully."

  deploy:
    name: Ready for Deployment
    needs: build
    runs-on: ubuntu-latest

    steps:

      - name: Deployment Status
        run: |
          echo "===================================="
          echo "CI/CD Pipeline Successful"
          echo "Tests Passed"
          echo "Build Successful"
          echo "Ready for Deployment"
          echo "Branch : ${{ github.ref_name }}"
          echo "===================================="
```

---

# Line-by-Line Explanation

## Workflow Name

```yaml
name: Node.js CI/CD
```

Defines the workflow name shown in the **GitHub Actions** tab.

---

## Trigger Events

```yaml
on:
```

Specifies when the workflow starts.

---

### Push Event

```yaml
push:
```

Runs the workflow whenever code is pushed.

Example:

```bash
git push origin main
```

---

### Branch Filter

```yaml
branches:
  - main
  - development
```

Only pushes to the `main` and `development` branches trigger the workflow.

| Branch | Workflow Runs |
|----------|--------------|
| main | ✅ Yes |
| development | ✅ Yes |
| feature/login | ❌ No |
| feature/product | ❌ No |

---

### Pull Request

```yaml
pull_request:
```

Runs the workflow whenever a Pull Request is opened or updated.

Example:

```
feature/login
      │
      ▼
development
```

---

## Jobs

```yaml
jobs:
```

A workflow is divided into multiple jobs.

This workflow contains three jobs:

```
Test
   ↓
Build
   ↓
Deploy
```

---

# Test Job

```yaml
test:
```

Creates the first job called **test**.

---

```yaml
name: Node.js CI/CD Project
```

Display name shown in GitHub Actions.

---

```yaml
runs-on: ubuntu-latest
```

Starts a fresh Ubuntu virtual machine provided by GitHub.

---

## Checkout Repository

```yaml
uses: actions/checkout@v4
```

Downloads your project source code from GitHub to the runner.

Without this step, GitHub Actions has no code to test.

---

## Setup Node.js

```yaml
uses: actions/setup-node@v4
```

Installs Node.js on the virtual machine.

---

```yaml
node-version: 22
```

Uses Node.js version **22**.

---

```yaml
cache: npm
```

Caches downloaded npm packages to speed up future workflow runs.

---

## Install Dependencies

```yaml
run: npm install
```

Installs all packages listed in `package.json`.

Example:

- express
- mongoose
- jest
- supertest
- dotenv

---

## Run Tests

```yaml
run: npm test
```

Executes Jest test cases.

If any test fails, the workflow stops and the next jobs do not run.

---

## Generate Coverage

```yaml
run: npm run test:coverage
```

Generates the test coverage report.

The report is stored inside:

```
coverage/
```

---

# Build Job

```yaml
build:
```

Starts the build stage.

---

```yaml
needs: test
```

The build job runs **only if the test job succeeds**.

Flow:

```
Tests Passed
      │
      ▼
Build Starts
```

---

## Build Application

```yaml
run: npm run build --if-present
```

Runs the build script if one exists in `package.json`.

If there is no build script, this step is skipped without failing the workflow.

---

## Build Status

```yaml
run: echo "Build completed successfully."
```

Prints a confirmation message in the GitHub Actions log.

---

# Deploy Job

```yaml
deploy:
```

Starts the deployment stage.

---

```yaml
needs: build
```

Deploy runs only if the build job succeeds.

Flow:

```
Test
   ↓
Build
   ↓
Deploy
```

---

## Deployment Status

```yaml
run: |
```

Runs multiple shell commands.

---

## Echo Commands

```yaml
echo "CI/CD Pipeline Successful"
```

Displays:

```
CI/CD Pipeline Successful
```

---

```yaml
echo "Tests Passed"
```

Displays:

```
Tests Passed
```

---

```yaml
echo "Build Successful"
```

Displays:

```
Build Successful
```

---

```yaml
echo "Ready for Deployment"
```

Displays:

```
Ready for Deployment
```

This project currently simulates deployment by printing status messages. In a real production project, this section would contain commands to deploy to a server or cloud platform.

---

```yaml
echo "Branch : ${{ github.ref_name }}"
```

Displays the branch that triggered the workflow.

Example:

```
Branch : main
```

or

```
Branch : development
```

---

# Complete CI/CD Flow

```text
Developer
    │
    ▼
Git Push
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions Trigger
    │
    ▼
Checkout Repository
    │
    ▼
Setup Node.js
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
Build Application
    │
    ▼
Ready for Deployment
    │
    ▼
CI/CD Pipeline Completed Successfully
```

---

# Future Improvements

This workflow can later be extended to include:

- Docker Image Build
- Docker Hub Push
- AWS EC2 Deployment
- Azure App Service Deployment
- Render Deployment
- Railway Deployment
- GitHub Secrets
- SonarQube Code Analysis
- CodeQL Security Scan
- Slack or Email Notifications

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
