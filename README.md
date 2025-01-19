# URL Shortener

A simple URL Shortener built using **Node.js** and **MongoDB**.

---

## Features
- Generate short URLs from long URLs.
- Redirect to the original URL using the short URL.
- Track visit history with timestamps.

---

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Libraries**: shortid, mongoose

---

## Project Structure

```plaintext
URLSHORTENER/
├── controllers/
│   └── url.js         # Controller logic for URL operations
├── models/
│   └── url.js         # MongoDB schema for URLs
├── routes/
│   └── url.js         # Route definitions
├── node_modules/      # Project dependencies
├── connect.js         # MongoDB connection logic
├── index.js           # Entry point of the application
├── package.json       # Dependencies and scripts
├── package-lock.json  # Dependency tree lock file
└── README.md          # Project documentation
```

## Setup Instructions

### Step 1: Clone the repository
git clone https://github.com/prathamshirol/url-shortener.git

### Step 2: Navigate to the project directory
cd url-shortener

### Step 3: Install dependencies
npm install

### Step 4: Start MongoDB (if running locally)
mongod

### Step 5: Run the project
node index.js

