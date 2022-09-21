const mongoose = require('mongoose');

const gestaoParticipacaoSchema = mongoose.Schema({
    aluno: {
        type: Schema.Types.ObjectId,
        ref: 'membro'
    },
    ano: {
        type: Date,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    mensagem: String
});

campeonatoSchema.index({
    aluno: 1,
    titulo: 1,
}, {
    unique: true,
});

module.exports = mongoose.model('gestaoParticipacao', gestaoParticipacaoSchema);