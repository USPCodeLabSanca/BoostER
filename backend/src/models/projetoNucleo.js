const mongoose = require('mongoose');

const projetoNucleoSchema = new mongoose.Schema({
    projeto: {
        type: Schema.Types.ObjectId, 
        ref: 'projeto',
        required: true
    },
    nucleo: {
        type: Schema.Types.ObjectId, 
        ref: 'nucleo',
        required: true
    }
})

projetoNucleoSchema.index({
    projeto: 1,
    nucleo: 1,
}, {
    unique: true,
});

module.exports = mongoose.model('projetoNucleo', projetoNucleoSchema);