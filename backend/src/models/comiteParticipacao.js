const mongoose = require('mongoose');

const comiteParticipacaoSchema = new mongoose.Schema({
    aluno: {
        type: Schema.Types.ObjectId, 
        ref: 'membro',
        required: true
    },
    comite: {
        type: Schema.Types.ObjectId, 
        ref: 'comite',
        required: true
    },
    cargo: {
        type: String,
        required: true,
        enum: ['COORDENADOR', 'MEMBRO'],
        default: 'MEMBRO'
    },
    joinDate: {
        type: Date,
        required: true
    },
    leaveDate: {
        type: Date
    },
    mensagem: {
        type: String
    }
})

comiteParticipacaoSchema.index({
    aluno: 1,
    comite: 1,
}, {
    unique: true,
});

module.exports = mongoose.model('comiteParticipacao', comiteParticipacaoSchema);