const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set up routes
app.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { pageTitle: 'About' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { pageTitle: 'Contact' });
});

// Start the server
const port = 80;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});