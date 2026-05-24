# RBAC Dashboard Backend

Backend API service for the RBAC (Role-Based Access Control) Dashboard application built using Node.js, Express, and TypeScript.

---

## Features

- User Authentication API
- Role-Based Access Control (RBAC)
- Admin and General User Roles
- REST API Architecture
- TypeScript Support
- Express Server
- CORS Enabled
- Modular Backend Structure

---

## Tech Stack

- Node.js
- Express.js
- TypeScript
- ts-node-dev
- Nodemon

---

## Project Structure

```plaintext
backend/
│
├── src/
│   ├── server.ts
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/rbac-dashboard.git
```

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

## Run the Application

### Development Mode

```bash
npm run dev
```

### Start Server

```bash
npm start
```

---

## Default Server

```plaintext
http://localhost:3000
```

---

## API Endpoints

### Login

```http
POST /login
```

Request Body:

```json
{
  "userId": "admin",
  "password": "admin123",
  "role": "Admin"
}
```

---

### Get User Records

```http
GET /records
```

---

## Roles Supported

- Admin
- General User

---

## Dependencies

### Production Dependencies

- express
- cors
- nodemon

### Development Dependencies

- typescript
- ts-node-dev
- @types/node
- @types/express
- @types/cors

---

## Setup TypeScript

Compile TypeScript:

```bash
npx tsc
```

---

## Future Improvements

- JWT Authentication
- MongoDB Integration
- AWS DynamoDB Support
- Password Encryption
- Refresh Tokens
- Role Permission Matrix
- API Validation
- Docker Support

---

## Author

Bhoju Aswin

---

## License

This project is licensed under the ISC License.