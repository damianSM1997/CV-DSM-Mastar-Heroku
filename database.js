const mongoose = require('mongoose');

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;

const MONGODB_URI = 'mongodb+srv://damian:MI0E1zcZXQP20IwK@cluster0-naamb.mongodb.net/notesCV?retryWrites=true&w=majority'
    //const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

//const NOTES_APP_MONGODB_HOST = process.env.NOTES_APP_MONGODB_HOST;

//const NOTES_APP_MONGODB_DATABAse = process.env.NOTES_APP_MONGODB_DATABASE;

mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(db => console.log('la base de datos esta conectada'))
    .catch(err => console.log(err));