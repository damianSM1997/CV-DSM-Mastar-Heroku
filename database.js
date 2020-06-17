const mongoose = require('mongoose');

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost/notes-app'
} else {
    urlDB = MONGODB1;
    //'mongodb+srv://damian:MI0E1zcZXQP20IwK@cluster0-naamb.mongodb.net/notasCV?retryWrites=true&w=majority'
    //urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;



mongoose.connect(process.env.URLDB, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(db => console.log('la base de datos esta conectada'))
    .catch(err => console.log(err));




//esto ya no sirve xd


//const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;

//const MONGODB_URI = 'mongodb://localhost/notes-app'

//const MONGODB_URI = 'mongodb+srv://damian:MI0E1zcZXQP20IwK@cluster0-naamb.mongodb.net/notasCV?retryWrites=true&w=majority'
//const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

//const NOTES_APP_MONGODB_HOST = process.env.NOTES_APP_MONGODB_HOST;

//const NOTES_APP_MONGODB_DATABAse = process.env.NOTES_APP_MONGODB_DATABASE;