//const express = require('express');
//const exphbs = require('express-handlebars');
//const path = require('path');
const morgan = require('morgan');
require('./database');
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






//app.set('views', path.join(__dirname, 'views'));
//
//app.engine('.hbs', exphbs({
//    defaultLayout: 'main',
//    layoutsDir: path.join(app.get('views'), 'layouts'),
//    partialsDir: path.join(app.get('views'), 'partials'),
//    extname: '.hbs'
//}));
//para ocupar el ingine

app.set('view engine', '.hbs');

//middlewares estos son funciones que se ejecutan para hacer peticiones
app.use(morgan('dev'));
//hace posible que el servidor entienda los objetos enviados desde el html
app.use(express.urlencoded({ extended: false }));


//variagles globales


//rutas
//app.get('/', (req, res) => {
//    res.render('index');
//})
// va a buscar aqui las rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

//static files  //aqui puedes dejar de ocupar el direccionamiento todo te lleva
// a esta ruta por defecto
app.use(express.static(path.join(__dirname, 'public')));
//esta linea es para que sepa que ahi esta la carpeta publica
app.use(express.static(path.join(__dirname + 'views')));

app.listen(port, () => {
    /// nota si no jala cambiar el puerto xd

    console.log(`Escuchando las peticiones desde el puerto ${port}`);
});