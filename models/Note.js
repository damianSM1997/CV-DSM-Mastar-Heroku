const { Mongoose } = require("mongoose");

// los dos sirven para modelar el dato
const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
    //title: {
    //    type: String,
    //    required: true
    //},
    description: {
        type: String,
        required: true,
    },
    email: { type: String },
    comment: { type: String },
    name: { type: String },

    //comentaro_id: { type: ObjectId },
    //
    //email: { type: String },
    //name: { type: String },
    //gravatar: { type: String },
    //comment: { type: String },
    //timestamp: { type: Date, default: Date.now }


}, {
    timestamps: true
});


module.exports = model('Note', NoteSchema);