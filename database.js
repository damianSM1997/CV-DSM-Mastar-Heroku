const mongoose = require('mongoose');



process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


let urlDB;


if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost/notes-app'
} else {
    //esta sintaxis es la correcta de lo contrario heroku no reconocera
    // la variable de entorno, bueno en este caso
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;



mongoose.connect(process.env.URLDB, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(db => console.log('la base de datos esta conectada'))
    .catch(err => console.log(err));