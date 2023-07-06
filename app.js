const express = require('express');
const app = express();

countHome = 0;
countAbout = 0;
countContact = 0;
countProjects = 0;
countResume = 0;


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the public directory for static files
app.use(express.static('views'));

// Set up routes
app.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Home' });
  console.log(req.get('User-Agent'));
  countHome += 1;
  console.log("Home page visits: ", countHome);
});

app.get('/about', (req, res) => {
  res.render('about', { pageTitle: 'About' });
  countAbout += 1;
  console.log("About page visits: ", countAbout);
});

app.get('/contact', (req, res) => {
  res.render('contact', { pageTitle: 'Contact' });
  countContact += 1;
  console.log("Contact page visits: ", countContact);
});

app.get('/projects', (req, res) => {
  res.render('projects', { pageTitle: 'Projects' });
  countProjects += 1;
  console.log("Projects page visits: ", countProjects);
});

app.get('/resume', (req, res) => {
  res.render('resume', { pageTitle: 'Resume' });
  countResume += 1;
  console.log("Resume page visits: ", countResume);
});

app.get('/site.webmanifest', (req, res) => {
  res.render('webmanifest', { pageTitle: 'webmanifest' });
});


// Start the server
const defined_port = process.env.PORT || 80;
app.listen(defined_port, () => {
  console.log(`Server is listening on port ${defined_port}`);
});