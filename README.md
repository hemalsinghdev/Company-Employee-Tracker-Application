# 🏢 Company & Employee Tracker Application

A full-stack tracking web application built with **React 19**, **Vite**, **Express.js**, and **Node.js**.

The **Company & Employee Tracker Application** provides an interactive, authenticated dashboard designed to manage employee job applications, hiring statuses, and company assignments in real-time with zero page reloads.

---

## ⚡ Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- **Backend API:** Node.js + Express.js (`http://localhost:5000/api/companies`)
- **Persistence:** Local JSON Data Store (`data/company.json`)
- **HTTP Client:** Fetch API with CORS integration
- **Styling:** Modular CSS

---

## ✨ Features & Functionality

- 🔐 **Authentication System**: Controlled login interface requiring Employee ID and Username before dashboard access.
- 📊 **Real-Time Interactive Dashboard**: Instantly view tracked employee records, target companies, and current application statuses (`Applied`, `Interview`, `Hired`, `Rejected`).
- ➕ **Add Company & Employee Entry**: Form component enabling administrators to add new entries with live validation feedback and automatic list sync.
- 📋 **Structured Data Table**: Responsive table displaying Employee ID, Employee Name, Company Name, and Status with fallback indicators.
- 🔄 **REST API Backend**: Express server handling `GET /api/companies` and `POST /api/companies` endpoints with persistent JSON storage.

---

## 📂 Project Architecture

```text
Company-Employee-Tracker-Application/
├── my-react-app/                   # React Frontend Client
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddCompany.jsx     # Form to register company/employee entry
│   │   │   ├── CompanyList.jsx    # Table listing registered entries
│   │   │   ├── Dashboard.jsx      # Main dashboard combining forms & lists
│   │   │   └── Login.jsx          # User login view
│   │   ├── services/
│   │   │   └── api.js             # Fetch wrapper API service calls
│   │   ├── App.css                # Base application styling
│   │   ├── App.jsx                # Auth state wrapper component
│   │   ├── index.css              # Global styles
│   │   └── main.jsx               # React DOM entry point
│   ├── index.html                 # Main HTML file
│   ├── package.json               # Frontend dependencies & scripts
│   └── vite.config.js             # Vite configuration
│
└── my-react-app-backend/          # Node.js / Express Backend
    ├── data/
    │   └── company.json           # JSON persistent database store
    ├── routes/
    │   └── companyRoutes.js       # Express route handlers (GET/POST)
    ├── package.json               # Backend dependencies
    └── service.js                 # Express server initialization (Port 5000)
```

---

## 🔌 API Endpoints Reference

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/companies` | Retrieves all registered company/employee tracking entries. | N/A |
| `POST` | `/api/companies` | Adds a new tracking record to `company.json`. | `{ employeeId, employeeName, company, status }` |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (Node Package Manager)

### Step 1: Start the Backend API Server

```bash
cd my-react-app/my-react-app-backend
npm install
npm start
```
*The Express backend server will run on `http://localhost:5000`.*

### Step 2: Start the React Frontend Client

In a separate terminal window:

```bash
cd my-react-app
npm install
npm run dev
```
*The Vite frontend application will run on `http://localhost:5173`.*

---

## 🛠️ Scripts & Commands

| Location | Command | Description |
| :--- | :--- | :--- |
| **Frontend** | `npm run dev` | Starts Vite development server. |
| **Frontend** | `npm run build` | Builds production bundle. |
| **Backend** | `npm start` | Launches Node Express API server. |
