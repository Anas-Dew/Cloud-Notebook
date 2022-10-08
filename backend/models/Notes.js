const mongoose = require('mongoose');
const NotesSchema = new mongoose.Schema({
    "title" : {
        type: String,
        required: true
    },
    "description" : {
        type: String,
        required: false,
        unique: false
    },
    "tags" : {
        type: String,
        required: false
    },
    "date" : {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('notes', NotesSchema)