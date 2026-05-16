# Notification System Design

## Overview

This project is a Campus Notification System developed using React, Node.js, Express, and Material UI.

The system fetches notifications from the evaluation API and displays them in a responsive frontend dashboard.

Logging middleware is integrated to log backend activities.

---

## Architecture

Frontend:
- React
- Material UI
- Axios

Backend:
- Node.js
- Express.js
- Axios

Middleware:
- Custom logging middleware

---

## Flow

1. Frontend sends request to backend
2. Backend authenticates using auth API
3. Backend fetches notifications API
4. Logging middleware logs request
5. Backend returns notifications
6. Frontend displays notifications

---

## Features

- Fetch notifications
- Filter notifications by type
- Responsive UI
- Logging middleware
- API integration

---

## Notification Types

- Event
- Result
- Placement