const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
    remetente: {
        type: Schema.Types.ObjectId, 
        ref: 'membro',
        required: true,
        unique: true
    },
    destinatario: {
        type: Schema.Types.ObjectId, 
        ref: 'membro',
        required: true,
        unique: true
    },
    visivel: {
        type: Boolean,
        required: true
    },
    ano: {
        type: Date,
        required: true
    },
    mensagem: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('comentario', comentarioSchema);