const mongoose = require('mongoose')

const nucleoSchema = mongoose.Schema({
    nome: {
        type: String, 
        unique: true, 
        required: true
    },
    icone: String
})

module.exports = mongoose.model('nucleo', nucleoSchema);