const mongoose = require('mongoose')

const cursoSchema = mongoose.Schema({
    aluno: {
        type: Schema.Types.ObjectId, 
        ref: 'membro',
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        required: true
    },
    leaveDate: {
        type: Date
    }
})

cursoSchema.index({
    nome: 1,
    aluno: 1,
}, {
    unique: true,
});

module.exports = mongoose.model('curso', cursoSchema);