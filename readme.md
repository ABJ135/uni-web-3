# Uni Web 3

A project repository for **Uni Web 3**, demonstrating web development concepts and practices. This project includes features such as authentication, routing, database integration, and more.

## 🚀 Features

- **User Authentication**: Login with username and password using `passport-local`.
- **Database Integration**: Seamless interaction with MongoDB using Mongoose.
- **RESTful API**: Create, Read, Update, and Delete operations for managing data.
- **Error Handling**: Comprehensive error-handling mechanisms for smoother debugging.

---

## 🛠️ Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building APIs and middleware.
- **Passport.js**: Authentication middleware.
- **MongoDB & Mongoose**: Database and Object Data Modeling (ODM) library.
- **Body-Parser**: Middleware for parsing incoming JSON requests.

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ABJ135/uni-web-3.git
   cd uni-web-3
   Install dependencies:
   ```

npm install
Create a .env file in the root directory with the following details:

env
DB_URI=your_mongodb_connection_string
PORT=3000
Run the development server:

npm start
📄 API Endpoints
Authentication
POST /login: User login with username and password.
User Management
POST /addUser: Add a new user.
GET /showUser: Retrieve all users.
Menu Management
POST /addMenu: Add a menu item (requires authentication).
GET /showMenu: Retrieve all menu items (requires authentication).
📦 Directory Structure

uni-web-3/
├── models/ # Mongoose schemas for database
├── controller/ # Logic for handling routes
├── router/ # Route definitions
├── .env # Environment variables (not included in the repo)
├── index.js # Main application file
🤝 Contribution
Fork the repository.
Create a feature branch:

git checkout -b feature-name
Commit your changes:

git commit -m "Add your message here"
Push to the branch:

git push origin feature-name
Create a pull request.
