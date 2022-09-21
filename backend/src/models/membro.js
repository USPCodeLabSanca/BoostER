const mongoose = require('mongoose');

const membroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    numeroUSP: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    ingresso: {
        type: Date,
        required: true
    },
    saida: {
        type: Date
    },
    status: {
        type: String,
        required: true,
        enum: ['ATIVO', 'INATIVO', 'CONVIDADO'],
        default: 'ATIVO'
    }
})

module.exports = mongoose.model('membro', membroSchema);