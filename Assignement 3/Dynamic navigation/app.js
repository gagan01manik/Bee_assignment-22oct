const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Simulated user login status
let isLoggedIn = false; // Change this to true to simulate a logged-in user

// Route to display the home page
app.get('/', (req, res) => {
    res.render('index', { isLoggedIn });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
