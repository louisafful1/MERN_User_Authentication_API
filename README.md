### MERN User Authentication API

A backend-only web application that provides user authentication and registration features using the MERN stack. This project serves as a foundation for implementing user management in web applications. It leverages JSON Web Tokens (JWT) for secure HTTP-based authentication and has been tested with Postman for comprehensive validation.

### Features
User Authentication: Users can log in using their email and password, and a JSON Web Token (JWT) is generated for authentication.
User Registration: New users can register with their name, email, and password. The system checks for duplicate email addresses.
User Profile: Authenticated users can view and update their profile information, including name, email, and password.
User Logout: Users can log out, and the JWT token is cleared from the client.
Getting Started

### Prerequisites
Node.js
MongoDB

### Installation
Clone the repository: git clone https://github.com/louisafful1/MERN_User_Authentication_API.git
Navigate to the project directory: cd mern-auth
Install server dependencies: npm install

### API Endpoints
POST /api/users/auth: Authenticate a user.
POST /api/users/register: Register a new user.
POST /api/users/logout: Log out a user.
GET /api/users/profile: Retrieve user profile.
PUT /api/users/profile: Update user profile.

### Database
The project uses MongoDB to store user data. The schema includes fields for user name, email, and hashed passwords.

### Authentication
User authentication is based on JSON Web Tokens (JWT). Upon successful login, a JWT is generated and sent to the client for secure HTTP-based authentication.

### Testing with Postman
The project has been rigorously tested with Postman to ensure the functionality of its authentication and registration features.
