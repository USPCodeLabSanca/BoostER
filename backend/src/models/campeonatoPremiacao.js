const mongoose = require('mongoose');

const campeonatoPremiacaoSchema = new mongoose.Schema({
    campeonato: {
        type: Schema.Types.ObjectId, 
        ref: 'campeonato',
        required: true
    },
    premiacao: {
        type: Schema.Types.ObjectId, 
        ref: 'premiacao',
        required: true
    }
})

campeonatoPremiacaoSchema.index({
    campeonato: 1,
    premiacao: 1,
}, {
    unique: true,
});

module.exports = mongoose.model('campeonatoPremiacao', campeonatoPremiacaoSchema);