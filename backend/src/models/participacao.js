const mongoose = require('mongoose')

const participacaoSchema = mongoose.Schema({
    aluno: {
        type: Schema.Types.ObjectId, 
        ref: 'membro',
        required: true
    },
    data: {
        type: Date
    },
    projeto: {
        type: Schema.Types.ObjectId, 
        ref: 'projeto',
        required: true
    },
    nivel: {
        type: Number,
        required: true
    },
    mensagem: {
        type: String
    }
})

cursoSchema.index({
    aluno: 1,
    data: 1,
    projeto: 1
}, {
    unique: true,
});

module.exports = mongoose.model('participacao', participacaoSchema);