# 📈 Zerodha Clone - Full Stack MERN Application

A comprehensive full-stack clone of **Zerodha**, India's leading stock trading and investment platform. Built using the **MERN (MongoDB, Express.js, React.js, Node.js)** stack with modern UI components, interactive charts, and cloud database integration.

---

## 🚀 Overview

This repository consists of three integrated micro-applications:

1. **Frontend (`/frontend`)**: The public-facing Zerodha marketing and educational portal (Home, About, Products, Pricing, Support, Signup) with responsive Bootstrap styling, SVG/PNG illustrations, brand favicon, and interactive leadership team bios.
2. **Dashboard (`/dashboard`)**: The trading terminal interface featuring real-time watchlists, portfolio holdings table, positions summary, order placement actions, funds breakdown, and interactive visual charts (Doughnut and Bar charts with Chart.js).
3. **Backend (`/backend`)**: A RESTful Express API service connected to MongoDB Atlas for managing stock holdings, open positions, and executing orders.

---

## 🛠️ Tech Stack

### Frontend & Dashboard
- **React.js** (v18)
- **React Router DOM** (Client-side routing)
- **Bootstrap 5 & Vanilla CSS** (Responsive layout and Zerodha branding)
- **Material-UI (MUI)** (Icons & dashboard components)
- **Chart.js & react-chartjs-2** (Portfolio analytics and asset visualization)
- **Axios** (API communication)

### Backend & Database
- **Node.js & Express.js** (REST API architecture)
- **MongoDB & Mongoose ODM** (Document database with Cloud Atlas support)
- **dotenv & CORS** (Configuration and cross-origin resource sharing)
- **Nodemon** (Development hot-reloading)

---

## 📂 Project Architecture

```plaintext
Zerodha-main/
├── backend/
│   ├── model/           # Mongoose Data Models (Holdings, Positions, Orders)
│   ├── schemas/         # Database Schemas
│   ├── index.js         # Express server & API endpoints (Port 3002)
│   ├── seed.js          # MongoDB database seeder script
│   └── .env.example     # Environment template
│
├── frontend/
│   ├── public/
│   │   ├── favicon.svg  # Zerodha blue kite favicon
│   │   ├── media/images # Brand assets, product illustrations & team photos
│   │   └── index.html   # Bootstrap 5 & FontAwesome CDN setup
│   └── src/
│       ├── landing_page/# Home, About (with leadership team), Products, Pricing, Support
│       ├── index.js     # Global router
│       └── index.css    # Custom hover states & active route indicators
│
├── dashboard/
│   ├── public/          # Assets and dashboard HTML template
│   └── src/
│       ├── components/  # TopBar, WatchList, Holdings, Orders, Positions, Funds
│       ├── data/        # Mock data feeds
│       └── index.js     # Dashboard entry (Port 3000)
│
└── .gitignore           # Protects credentials and ignores node_modules
```

---

## ⚡ Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [MongoDB](https://www.mongodb.com/) (Local server or free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster)
- [Git](https://git-scm.com/)

---

### 2. Installation

Clone this repository:
```bash
git clone https://github.com/gaurav8754/<YOUR-REPO-NAME>.git
cd Zerodha-main
```

Install dependencies for all three services:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Install dashboard dependencies
cd ../dashboard
npm install
```

---

### 3. Environment Variables Configuration

Create a `.env` file in the `backend/` directory (you can copy `.env.example`):

```env
PORT=3002
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/zerodha?retryWrites=true&w=majority
```

*(Optional: Set `PORT=3001` in `frontend/.env` and `PORT=3000` in `dashboard/.env`).*

---

### 4. Seed the Database

Populate initial stock holdings (`BHARTIARTL`, `HDFCBANK`, `INFY`, `RELIANCE`, `TCS`, etc.) and positions into MongoDB:

```bash
cd backend
npm run seed
```

---

### 5. Running the Application

Run each component in a separate terminal:

#### Terminal 1 — Backend API:
```bash
cd backend
npm start
# Server runs on: http://localhost:3002
```

#### Terminal 2 — Frontend Marketing App:
```bash
cd frontend
npm start
# Web app runs on: http://localhost:3001
```

#### Terminal 3 — Trading Dashboard:
```bash
cd dashboard
npm start
# Trading terminal runs on: http://localhost:3000
```

---

## 📡 API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/allHoldings` | Retrieves all stock holdings with quantity, average buy price, and current market price |
| `GET` | `/allPositions` | Retrieves open day positions and P&L data |
| `POST` | `/newOrder` | Places a new buy/sell order with stock name, quantity, price, and trade mode |

---

## ✨ Features Implemented

- **Pixel-Perfect Landing Pages**: Exact replication of Zerodha's Home, Products, Pricing, and Support pages.
- **Full Leadership Team**: About page with interactive `Bio ^` toggle showcasing Nithin Kamath, Nikhil Kamath, Dr. Kailash Nadh, Venu Madhav, Seema Patil, Karthik Rangappa, and Austin Prakesh.
- **Dynamic Navigation**: Active link tracking with smooth Zerodha blue (`#387ed1`) hover transitions and sliding underline indicators.
- **Cloud Database Ready**: Built-in support for MongoDB Atlas cloud clusters with automated SRV resolution.
- **Interactive Trading Terminal**: Stock watchlist with buy/sell actions, holdings distribution graphs, and profit/loss calculations.

---

## 📄 License
This project is for educational and learning purposes as a clone of Zerodha. All brand assets and logos belong to Zerodha Broking Ltd.
