const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  title: String,
  description: String
});

const Notes = mongoose.model('Note', notesSchema);

module.exports = Notes;