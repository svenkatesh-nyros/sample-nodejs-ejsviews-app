var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});


app.get('/', function(req, res) {
    var drinks = [
        { name: 'Venkatesh', drunkness: 'Tanuku' },
        { name: 'Akhil', drunkness: 'Kakinada' },
        { name: 'Haneef', drunkness: "Aakiveedu" }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

app.listen(8080);

console.log('8080 is the magic port');