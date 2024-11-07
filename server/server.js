// server.js

const jsonServer = require('json-server');
const path = require('path');
const PORT = process.env.PORT || 5000;
// Create a new JSON server instance
const server = jsonServer.create();

const cors = require('cors');


// Allow all domains to access the API (for development purposes)
server.use(cors());

// Middlewares
const middlewares = jsonServer.defaults(); // You can add your custom middlewares here
server.use(middlewares);

// Set up the database (db.json file)
const dbPath = path.join(__dirname, 'db.json');
const router = jsonServer.router(dbPath); 

// Use the router to handle API requests
server.use(router);

// Start the server on a port (e.g., 5000)
server.listen(PORT, () => {
  console.log('JSON Server is running on http://localhost:5000');
});
