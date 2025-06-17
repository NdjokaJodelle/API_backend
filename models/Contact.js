const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true, match: [/.+@.+\..+/, 'Veuillez entrer une adresse email valide'] }
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);
