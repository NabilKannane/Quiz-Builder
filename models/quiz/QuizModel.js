const mongoose = require('mongoose');

const QuizModel = mongoose.Schema({

    nom : {
        type : String,
        require : true,

    },
    dateDemarrage : {
        type : Date,
        require : true,
    },
    dateArret : {
        type : Date,
        require : true,
    },
    listQuestions : {
        type : Array,
        required : true,
    },
    nbrTentation : {
        type : Number,
        require : true,
        default : 3,
    },
    ListTentation : {
        type : Array,
    }
    
})

const quizs = mongoose.model('quizs' , QuizModel)

module.exports = quizs;