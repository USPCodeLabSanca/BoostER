const mongoose = require('mongoose');

const motivacaoSchema = mongoose.Schema({
    aluno: {
        type: Schema.Types.ObjectId,
        ref: 'membro'
    },
    data: {
        type: Date
    },
    projeto: {
        type: Schema.Types.ObjectId,
        ref: 'projeto'
    },
    valorMotivacao: {
        type: Number,
        reuquired: true
    },
    mensagem: {
        type: String
    }
});

campeonatoSchema.index({
    aluno: 1,
    data: 1,
    projeto: 1
}, {
    unique: true,
});

module.exports = mongoose.model('motivacao', motivacaoSchema);