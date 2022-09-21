const mongoose = require('mongoose')

const nucleoAvaliacaoSchema = mongoose.Schema({
    data: {
        type: Date,
        required: true
    },
    nucleo: {
        type: Schema.Types.ObjectId, 
        ref: 'nucleo',
        required: true
    },
    membro: {
        type: Schema.Types.ObjectId, 
        ref: 'membro',
        required: true
    },
    diretor: {
        type: Number,
        required: true
    },
    vice: {
        type: Number,
        required: true
    },
    experiencia: {
        type: String,
        required: true
    },
    integracao: {
        type: Number,
        required: true
    },
    comentarios: {
        type: String
    },
    feedbackFormulario: {
        type: String
    }
})

nucleoAvaliacaoSchema.index({
    data: 1,
    nucleo: 1,
    membro: 1
}, {
    unique: true,
});

module.exports = mongoose.model('nucleoAvaliacao', nucleoAvaliacaoSchema);