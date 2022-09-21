const mongoose = require('mongoose');

const nucleoAvaliacaoPessoalSchema = mongoose.Schema({
    nucleoParticipacao: {
        type: Schema.Types.ObjectId,
        ref: 'nucleoParticipacao'
    },
    nucleoPresenca: {
        type: String,
        required: true
    },
    comentario: {
        type: String
    },
    conciliacaoDoisNucleos: {
        type: String,
        required: true
    },
    comentarioAtividades: {
        type: String,
        required: true
    },
    motivacao: {
        type: Number,
        required: true
    },
    comentarioMotivacao: {
        type: String
    },
    comiteParticipacao: {
        type: Schema.Types.ObjectId,
        ref: 'comiteParticipacao'
    },
    comissaoParticipacao: {
        type: Schema.Types.ObjectId,
        ref: 'comissaoParticipacao'
    },
    comentarioPresencaComissaoComite: {
        type: String,
        required: true
    },
    conversarComRH: {
        type: String,
        required: true
    },
    assuntoRH: {
        type: String
    },
    sugestoes: {
        type: String
    }
});

campeonatoSchema.index({
    nucleoParticipacao: 1,
    comiteParticipacao: 1,
    comissaoParticipacao: 1
}, {
    unique: true,
});

module.exports = mongoose.model('nucleoAvaliacaoPessoal', nucleoAvaliacaoPessoalSchema);