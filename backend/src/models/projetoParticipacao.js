const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'membro',
        required: true
    },
    projeto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projeto',
        required: true
    },
    cargo: {
        type: String,
        required: true,
        enum: ['GERENTE', 'MEMBRO', 'COLABORADOR']
    },
    ingresso: {
        type: Date,
        required: true
    },
    saida: {
        type: Date,
        required: false
    },
    descricao: String
});

schema.index({aluno: 1, projeto: 1}, {unique: true});

module.exports = mongoose.model('projetoParticipacao', schema);