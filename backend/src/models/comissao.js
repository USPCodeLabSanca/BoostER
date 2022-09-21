const mongoose = require('mongoose');

const comissaoSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    descricao: {
        type: String
    },
});

module.exports = mongoose.model('comissao', comissaoSchema);