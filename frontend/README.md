# Quizo - Quiz Management System

Quizo is a web-based Quiz Management System that allows teachers to create, manage, and evaluate quizzes efficiently. Built with a modern tech stack, it provides a seamless and responsive experience.

## 🚀 Features
- Create, edit, and delete quizzes
- Real-time quiz management
- User authentication (Teacher Login)
- Secure backend with authentication

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS, ShadCN UI
- **Backend:** TypeScript, Node.js, Express
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Tokens)

## 📌 Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/quizo.git
cd quizo
```
### 2. Install Dependencies
#### Frontend
```sh
cd frontend
npm install
```
#### Backend
```sh
cd backend
npm install
```
### 3. Configure the Environment
Create a `.env` file in the backend directory and add the following:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=quizo
JWT_SECRET=your_secret_key
PORT=5000
```
### 4. Database Setup
Ensure you have MySQL installed and running. Create the database manually or run:
```sql
CREATE DATABASE quizo;
```
Run migrations (if applicable) or execute schema creation SQL files.

### 5. Start the Application
#### Start Backend
```sh
cd backend
npm run dev
```
#### Start Frontend
```sh
cd frontend
npm run dev
```

## 📌 API Documentation
### 🔹 User Authentication
#### Login
**Endpoint:** `POST /api/auth/login`
**Request Body:**
```json
{
  "username": "teacher1",
  "password": "password123"
}

## 📌 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

## 📌 License
This project is licensed under the MIT License.

## 📌 Contact
For any issues or inquiries, reach out via GitHub Issues.

