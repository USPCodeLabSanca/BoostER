const mongoose = require('mongoose')

const semearSchema = mongoose.Schema({
    nome: {
        type: String, 
        unique: true, 
        required: true
    },
    icone: {
        type: String, 
        required: true
    }
})