const express = require('express')
const QUESTION = require('../models/question/QuestionModel')

async function getQuestions(req,res){
    let questions = await QUESTION.find();
    console.log(questions);
}

async function creerQuestion(req ,res){
    const qst = new QUESTION({
        titre : req.body.titre,
        type : req.body.type,
        difficulte : req.body.difficulte, 
        BonneReponse : req.body.BonneReponse, 
        ReponseErronees: req.body.ReponseErronees,
    })
    qst.save((err)=>console.error(err));
    res.redirect('/');
}


async function modifierQuestion(req,res){
    QUESTION.findByIdAndUpdate(req.params.id,{
        titre : req.body.titre,
        type : req.body.type,
        difficulte : req.body.difficulte, 
        BonneReponse : req.body.BonneReponse, 
        ReponseErronees: req.body.ReponseErronees,
    })
    .then(result => res.redirect('/'))
    .catch((err)=>console.error(err));
}

async function deleteQuestion(req,res){
    QUESTION.findByIdAndDelete(req.params.id)
    .then(result => res.redirect("/"))
    .catch((err)=>console.error(err));
}

module.exports ={getQuestions , creerQuestion , modifierQuestion , deleteQuestion}
