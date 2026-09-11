# 🏢 Company & Employee Tracker

A full-stack **Company & Employee Tracker Application** built with **React, Vite, Node.js, and Express.js**.

The application provides an authentication-based dashboard where administrators can view and manage employee information, including their assigned company, employee ID, and employment status. New employee records can be added through a RESTful API and are immediately reflected on the dashboard without requiring a page refresh.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Login flow for administrators
  - Secure access to the employee dashboard

- 👥 **Employee Management**
  - View active employees
  - Display employee ID
  - Display employee name
  - Display assigned company
  - Display employment status

- 🏢 **Company Management**
  - View company information associated with employees
  - REST API integration for company-related data

- ➕ **Add New Employees**
  - Register new employee records
  - Employee data is persisted in a local JSON database
  - Newly added employees appear immediately on the dashboard

- 🔄 **RESTful API Integration**
  - Frontend communicates with the backend using REST APIs
  - API endpoint: `/api/companies`

- ⚡ **Dynamic Dashboard**
  - Interactive React dashboard
  - No page reload required after adding employee records

---

## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- REST API

### Database

- Local JSON database

### Development Tools

- Git
- GitHub
- npm

---

## 📂 Project Structure

```text
Company-Employee-Tracker-Application/
│
├── my-react-app-backend/
│   ├── ...
│   └── server.js
│
├── public/
│   └── ...
│
├── src/
│   ├── components/
│   ├── ...
│   └── ...
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
