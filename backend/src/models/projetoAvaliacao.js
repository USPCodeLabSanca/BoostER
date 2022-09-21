const mongoose = require('mongoose')

const projetoAvaliacao = mongoose.Schema({
    data: {
        type: Date,
        required: true
    },
    projeto: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    membro: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    gerente: {
        type: Number,
        required: true
    },
    experiencia: {
        type: String,
        required: true
    },
    progresso: {
        type: Number,
        required: true
    },
    comentarios: String
})

module.exports = mongoose.model('projetoAvaliacao', projetoAvaliacao);