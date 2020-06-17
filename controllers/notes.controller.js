const notesCtrl = {};
const md5 = require('md5');

// Models
const Note = require("../models/Note");

// este puede que cambie por lo que se desea




notesCtrl.renderNoteForm = (req, res) => {
        //esto tiene que cambiar
        //este se encarga de renderizar la vista
        res.render('notes/new-note');
        //res.render('notes/add');
    }
    /// esto es para generar una nueva nota
notesCtrl.createNewNote = async(req, res) => {
    //// gracias al res.body se puede tomar su informacion

    //const { title, description, name, email, timestamps, gravatar } = req.body;
    //
    //
    //const newNote = new Note({
    //    email,
    //    name,
    //    title,
    //    description,
    //    timestamps,
    //    gravatar,
    //})

    const newNote = new Note(req.body);
    newNote.gravatar = md5(newNote.email);

    if (newNote.email === '' || newNote.name === '' || newNote.description === '') {

        //res.redirect('/notes')
        alert('Tweet eliminado')
    }
    if (newNote.email === '') {
        res.send('vasio')
    } else {
        res.send('si entro :c')
            //await newNote.save();
    }



    console.log(newNote.email);
    console.log(newNote.name);
    console.log(newNote);
    //
    //res.render('notes/new-note1')
}

//creara todas las notdas, mas bien msotrara

notesCtrl.renderNotes = async(req, res) => {
    //esto tiene que cambiar
    //   res.render('notes/new-note');
    //crea un areglo de notas
    const notes = await Note.find().sort({ timestamps: -1 });
    res.render("notes/all-notes", { notes });
    //res.render("notes/all-notes", { notes });
}

notesCtrl.renderEditForm = (req, res) => {
    res.send('editar');
}

notesCtrl.updateNote = (req, res) => {
    res.send('Actualizar');
}

notesCtrl.deleteNote = (req, res) => {
    res.send('eeliminar nota');
}

module.exports = notesCtrl;