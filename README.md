# CricketScoreUser — Live Cricket Match & Stats Web Portal

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-REST_API-black?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Fullstack-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A full-stack web application and API service for viewing real-time cricket matches, ball-by-ball commentary, team scores, and player statistics.

---

## 🌟 Overview

`CricketScoreUser` acts as the user-facing web portal complementing the desktop Cricket Score Card management system (`CricketScoreCardProject`). It provides end-users with live match updates, scoreboards, and statistics through a decoupled REST API and responsive frontend interface.

---

## 📁 System Architecture

```
CricketScoreUser/
├── backend/
│   ├── controllers/      # Match, Over, Player, Stats, Team, TeamScores controllers
│   ├── models/           # Data models for matches, players, and teams
│   ├── routes/           # REST endpoints (/matches, /overs, /players, /stats, /teams)
│   ├── services/         # Calculation and business logic
│   └── server.js         # Express server entry point
└── frontend/             # User-facing client scoreboard interface
```

---

## 🚀 Getting Started

### 1. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start server
npm start
```
The backend server runs at `http://localhost:5000` (or configured port).

### 2. Frontend Setup
```bash
# Navigate to frontend directory and open in browser
cd ../frontend
npm install
npm start
```

---

## 👤 Author

Developed by **Hanzla Ahmad**.
