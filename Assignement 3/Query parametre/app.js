const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Sample data (you can replace this with a database or API call)
const sampleData = [
    { id: 1, title: 'The Matrix' },
    { id: 2, title: 'Inception' },
    { id: 3, title: 'The Godfather' },
    { id: 4, title: 'The Great Gatsby' },
    { id: 5, title: 'Harry Potter' },
];

// Route for the search form
app.get('/search', (req, res) => {
    res.render('search', { results: [], query: '' });
});

// Route to handle the search query
app.get('/search/results', (req, res) => {
    const query = req.query.q;
    const results = sampleData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

    res.render('search', { results, query });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
