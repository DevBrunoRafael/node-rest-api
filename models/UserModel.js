const mongoose = require('mongoose');

const User = mongoose.model('User', {
  nome: String,
  cpf: String,
  telefone: String
});

module.exports = User;