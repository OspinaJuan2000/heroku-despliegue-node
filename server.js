const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));

//Parciales HBS.
hbs.registerPartials(__dirname + '/views/parcials');

//Express HBS engine.
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        name: 'Juan Ospina'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});