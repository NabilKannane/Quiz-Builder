const mongoose = require('mongoose');


const QuestionSchema = mongoose.Schema({
    titre : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true,
        enum : ['Multichoix','Choix unique','Vrais ou faux'],
    },
    difficulte : {
        type : String ,
        required : true,
        enum : ['facile', 'moyenne', 'difficile'],
    },
    BonneReponse : {
        type : Number,
        required : true,
    },
    ReponseErronees:{
        type : Array,
        required : true,
    }
})

const questions = mongoose.model('questions', QuestionSchema);

module.exports = questions;