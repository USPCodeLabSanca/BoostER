const mongoose = require('mongoose');

const premiacaoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        unique: true

    },
    descricao: {
        type: String
    }
})

module.exports = mongoose.model('premiacao', premiacaoSchema);