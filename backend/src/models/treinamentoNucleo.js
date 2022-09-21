const mongoose = require('mongoose')

const treinamentoNucleoSchema = mongoose.Schema({
    nucleo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nucleo',
        required: true
    },
    treinamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'treinamento',
        required: true
    }
})

treinamentoNucleoSchema.index({
    nucleo: 1,
    treinamento: 1,
}, {
    unique: true,
});

module.exports = mongoose.model('treinamentoNucleo', treinamentoNucleoSchema);