**Blog App**

A full-stack blogging platform built with React and Node.js that allows users to create accounts, write blog posts, and interact with content.

**Features**

User authentication (login/register)

JWT-based session management

Create and publish blog posts

Rich text editing with React Quill

Responsive design

**Tech Stack**

*Frontend*

React

React Quill (rich text editor)

CSS3 for styling

*Backend*

Node.js

Express

MongoDB with Mongoose

JWT for authentication

bcrypt for password hashing

**Installation**

1. Clone the repository

2. Install backend dependencies:
```bash
cd api
npm install
npm install nodemon
```

3. Install frontend dependencies:
```bash
cd ../client
npm install
```

4. Start the servers
```bash
# In api directory
nodemon index.js
# In client directory
npm start
```

