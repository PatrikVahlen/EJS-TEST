const express = require('express');
const app = express();

const PORT = 3000;
// set the view engine to ejs
// app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
    let mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012 },
        { name: 'Tux', organization: "Linux", birth_year: 1996 },
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013 }
    ];
    let tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index.ejs', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function (req, res) {
    res.render("pages/about.ejs");
});

//home page
app.get('/home', function (req, res) {
    res.render("pages/home.ejs");
});

app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});