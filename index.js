// 2021 EXIT Inc: PETU, team exit

const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

// Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = 'hello, this other!';

// Set Handlebar Routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: otherstuff
    });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('on here: ' + PORT));
