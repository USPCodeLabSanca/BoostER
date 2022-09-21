const mongoose = require('mongoose')

const treinamentoSchema = mongoose.Schema({
    titulo: {
        type: String, 
        required: true
    },
    duracao: {
        type: Number, 
        required: true
    },
    ano: {
        type: Date, 
        required: true
    }
})

module.exports = mongoose.model('treinamento', treinamentoSchema);