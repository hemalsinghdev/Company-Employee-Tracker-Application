# 🏢 Company & Employee Tracker Application

A full-stack **Company & Employee Tracker Application** built with **React 19**, **Vite**, **Node.js**, and **Express.js**.

The application provides an authentication-based dashboard where administrators can view and manage employee information and company listings (including employee IDs, assigned companies, and employment status). New company and employee records can be added through a RESTful API and are immediately reflected on the interactive dashboard without requiring a full page refresh.

---

## 🚀 Features

- 🔐 **User Authentication**: Login flow for administrators with secure access to the dashboard.
- 📊 **Dynamic Dashboard**: Centralized interactive dashboard showcasing active companies and employees with zero page reloads.
- 👥 **Employee & Company Management**: View and track active employees, employee IDs, assigned companies, and employment status.
- ➕ **Real-Time Additions**: Register new companies and employees via a modal/form interface.
- 🔄 **RESTful API Integration**: Frontend connects to the Express backend (`/api/companies`) for seamless data persistence.

---

## ⚡ Tech Stack

### Frontend
- **React 19**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3**

### Backend & API
- **Node.js**
- **Express.js**
- **RESTful API** (`my-react-app-backend`)

---

## 📂 Project Structure

```text
my-react-app/
├── my-react-app-backend/     # Express API backend server & local JSON DB
│   └── server.js
├── src/
│   ├── components/
│   │   ├── AddCompany.jsx     # Form to register new company / employee
│   │   ├── CompanyList.jsx    # Component listing registered companies
│   │   ├── Dashboard.jsx      # Main application dashboard
│   │   └── Login.jsx          # Login component
│   ├── services/
│   │   └── api.js             # API request service functions
│   ├── App.jsx                # Main application component & auth state
│   └── main.jsx               # React root entry point
├── package.json               # Dependencies and scripts
└── vite.config.js             # Vite configuration
```

---

## 🚀 Getting Started

### 1. Start the Backend API Server

```bash
cd my-react-app-backend
npm install
npm start
```

### 2. Start the React Frontend Application

```bash
cd ..
npm install
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.
