const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'membro',
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    projeto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projeto',
        required: true
    },
    nivel: {
        type: Number,
        required: true
    },
    mensagem: String
});

schema.index({ aluno: 1, data: 1, projeto: 1 }, { unique: true });

module.exports = mongoose.model('sobrecarga', schema);