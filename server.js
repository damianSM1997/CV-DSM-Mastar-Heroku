//const express = require('express');
//const exphbs = require('express-handlebars');
//const path = require('path');
const morgan = require('morgan');
//
//const app = express();

const express = require("express");
const app = express();
const path = require("path")
const exphbs = require("express-handlebars");
const _handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')


const port = process.env.PORT || 3000;

//se agrega el npm hbs y para no tenerlo junto
//se creo un archivo en donde se pondran todos los healpers 
// lo unico que se tiene que hacer es poner en un 
//requiere la direccion de los healpers

app.set('views', path.join(__dirname, "views"));
app.engine(".hbs", exphbs({
    defaultlayouts: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(_handlebars)
}));



const hbs = require('hbs');
require('./hbs/helpers');


app.use(express.static(__dirname + '/public'));
//el hbs serbira para hacer el contenido dinamico
// esto es para tener todos los registros parciales
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    //res.send('Hola mundo');

    //    let salida = {
    //            nombre: 'Damian',
    //            edad: 22,
    //            url: req.url
    //        }
    //hace que la peticion salga
    //res.send(salida);
    res.render('index', {
        nombre: 'fernaNdo HerrerrA',

    });
});


app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(port, () => {
    /// nota si no jala cambiar el puerto xd

    console.log(`Escuchando las peticiones desde el puerto ${port}`);
});