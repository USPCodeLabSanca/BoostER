const mongoose = require('mongoose')

const projetoSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        unique: true
    },
    descricao: {
        type: String
    },
    joinDate: {
        type: Date,
        required: true
    },
    leaveDate: {
        type: Date
    },
    gerente: {
        type: Schema.Types.ObjectId, 
        ref: 'membro',
        required: true
    }
})


module.exports = mongoose.model('projeto', projetoSchema);