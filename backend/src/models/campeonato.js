const mongoose = require('mongoose');

const campeonatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,

    },
    descricao: {
        type: String
    },
    data: {
        type: Date,
        required: true,
    },
    colocacao: {
        type: Number
    },
    aluno: {
        type: Schema.Types.ObjectId, 
        ref: 'projeto',
        required: true
    }
})

campeonatoSchema.index({
    nome: 1,
    data: 1,
}, {
    unique: true,
});

module.exports = mongoose.model('campeonato', campeonatoSchema);