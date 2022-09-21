const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'membro',
        required: true
    },
    nucleo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nucleo',
        required: true
    },
    cargo: {
        type: String,
        required: true,
        enum: ['DIRETOR', 'VICE-DIRETOR', 'MEMBRO', 'PRESIDENTE'],
        default: 'MEMBRO'
    },
    anoIngresso: {
        type: Date,
        required: true
    },
    anoSaida: {
        type: Date
    },
    mensagem: {
        type: String
    }
});

schema.index({
    aluno: 1,
    nucleo: 1
}, {
    unique: true
});

module.exports = mongoose.model('nucleoParticipacao', schema);