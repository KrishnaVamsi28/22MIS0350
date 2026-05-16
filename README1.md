````md
# Campus Notifications System

## Overview

This project is a React-based Campus Notifications System developed for the Frontend Track assessment.

The application fetches notifications from the provided backend API and displays them in a clean and responsive UI.

Users can filter notifications based on notification type:
- Event
- Result
- Placement

The project also integrates the provided logging middleware.

---

## Features

- Fetch notifications from API
- Responsive React UI
- Filter notifications by type
- Material UI components
- Backend API integration
- Logging middleware integration
- Error handling
- Organized folder structure

---

## Technologies Used

### Frontend
- React JS
- Material UI
- Axios

### Backend
- Node.js
- Express.js
- Axios
- CORS

---

## Project Structure

```text
22MIS0350/
│
├── logging_middleware/
├── notification_app_be/
├── notification_app_fe/
├── screenshots/
├── notification_system_design.md
├── README.md
└── .gitignore
````

---

## Setup Instructions

### Backend Setup

```bash
cd notification_app_be

npm install

node server.js
```

Backend runs on:

```text
http://localhost:5000
```

---

### Frontend Setup

```bash
cd notification_app_fe

npm install

npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## API Endpoint

```text
GET /notifications
```

Supports filtering using query parameter:

```text
/notifications?type=Event
```

---

## Screenshots

### All Notifications

![All Notifications](./screenshots/all_notifications.png)

---

### Event Notifications

![Event Notifications](./screenshots/event_filter.png)

---

### Result Notifications

![Result Notifications](./screenshots/result_filter.png)

---

### Placement Notifications

![Placement Notifications](./screenshots/placement_filter.png)

---

## Notification Types

* Event
* Result
* Placement

---

## Logging Middleware

The project integrates the provided logging middleware for backend logging functionality.

---

## Author

Roll Number: 22MIS0350

```

:contentReference[oaicite:0]{index=0}
```
