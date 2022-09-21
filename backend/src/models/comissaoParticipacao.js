const mongoose = require('mongoose');

const comissaoParticipacaoSchema = mongoose.Schema({
    aluno: {
        type: Schema.Types.ObjectId,
         ref: 'membro'
    },
    comissao: {
        type: Schema.Types.ObjectId, 
        ref: 'comissao'
    },
    anoIngresso: {
        type: Date,
        required: true
    },
    AnoTermino: {
        type: Date,
    },
    Cargo: ['COORDENADOR', 'MEMBRO'],
    Mensagem: {
        type: String
    }
});

comissaoParticipacaoSchema.index({
    aluno: 1,
    comissao: 1,
}, {
    unique: true,
});

module.exports = mongoose.model('comissaoParticipacao', comissaoParticipacaoSchema);