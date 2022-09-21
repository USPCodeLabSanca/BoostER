const mongoose = require('mongoose')

const comiteSchema = mongoose.Schema({
    nome: {
        type: String,
        unique: true
    },
    descricao: String
});

module.exports = mongoose.model('comite', comiteSchema);