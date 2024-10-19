# Event Management Backend

This is a Node.js backend application for managing event booking and user authentication using MongoDB, JWT authentication, and Express.js. Users can register, log in, and reserve seats for events, and the backend handles seat management, event details, and user authentication.

## Features

- **User Authentication**: JWT-based authentication system.
  - Register with `username`, `email`, and `password`.
  - Log in with `username` and `password`.
  - Token-based authentication for protected routes.
- **Event Management**:
  - Create, Read, Update, and Delete (CRUD) operations for events.
  - Events have details like name, description, date, capacity, etc.
  - Prevent overbooking by managing event capacity and available seats.
- **Data Validation**:
  - Unique validation for `username` and `email` (users can't register with the same credentials twice).
  - Validation for event data (e.g., ensuring valid dates, capacity limits).
- **Error Handling**:
  - Robust error handling for all routes and operations.
  - Custom error messages for missing data, validation errors, and authentication failures.

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Token) for authentication
- bcrypt for password hashing
- dotenv for environment variable management
- nodemon for development monitoring

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14.x or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for the database or a local MongoDB instance.

## Installation and Setup

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/event-management-backend.git
cd event-management-backend

npm install

# MongoDB connection string
MONGO_URI=your_mongodb_uri

# JWT Secret for token generation
JWT_SECRET=your_jwt_secret

# Server Port
PORT=3000

npm run dev
```

## Tips for Validation

- Email Validation: Use proper email formats using regex or validation libraries.
- Password Strength: Ensure that the password meets a certain strength (e.g., minimum length, at least one number or special character).
- Event Date: Ensure that the event date is not in the past.
- Capacity Limits: Validate that capacity is a positive integer and greater than 0.
