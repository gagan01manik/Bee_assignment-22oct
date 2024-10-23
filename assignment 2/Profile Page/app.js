const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Sample user data
const userData = {
    alice: { age: 25, hobby: 'Painting' },
    bob: { age: 30, hobby: 'Hiking' },
    charlie: { age: 22, hobby: 'Gaming' }
};

// User profile route
app.get('/profile/:username', (req, res) => {
    const username = req.params.username.toLowerCase(); // Capture the username parameter
    const user = userData[username]; // Look up user data

    if (user) {
        // Render the profile page with user data
        res.render('profile', { username, age: user.age, hobby: user.hobby });
    } else {
        // Handle case where user is not found
        res.status(404).send('User not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

