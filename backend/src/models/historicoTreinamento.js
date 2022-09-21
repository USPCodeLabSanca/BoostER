const mongoose = require('mongoose')

const historicoTreinamentoSchema = mongoose.Schema({
    aluno: {
        type: Schema.Types.ObjectId, 
        ref: 'membro',
        required: true
    },
    treinamento: {
        type: Schema.Types.ObjectId, 
        ref: 'treinamento',
        required: true
    }
})

historicoTreinamentoSchema.index({
    aluno: 1,
    treinamento: 1,
}, {
    unique: true,
});

module.exports = mongoose.model('historicoTreinamento', historicoTreinamentoSchema);