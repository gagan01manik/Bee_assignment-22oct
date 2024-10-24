const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Sample data to store blog posts
let posts = [];

// Route to display all blog posts
app.get('/posts', (req, res) => {
    res.render('posts', { posts });
});

// Route to handle the form submission for new blog posts
app.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        body: req.body.body,
    };
    posts.push(newPost);
    res.redirect('/posts');
});

// Route to display a single post
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.render('post', { post });
    } else {
        res.status(404).send('Post not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
