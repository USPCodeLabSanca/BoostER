const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'membro',
        required: true
    },
    ano: {
        type: Date,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
});

schema.index({ aluno: 1, titulo: 1 }, { unique: true });

module.exports = mongoose.model('realizacao', schema);