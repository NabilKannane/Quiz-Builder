const express = require('express')
const QUIZ = require("../models/quiz/QuizModel")

async function getQuizs(req,res){
let quizs = await QUIZ.find();
console.log(quizs);
}

async function creerQuiz(req,res){
const quiz = new QUIZ({
    nom : req.body.nom,
    dateDemarrage : req.body.dateDemarrage,
    dateArret: req.body.dateArret,
    listQuestions : req.body.listQuestions,
    nbrTentation: req.body.nbrTentation,
    ListTentation : req.body.nbrTentation,
})
quiz.save((err)=>console.error(err));
    res.redirect('/');
}


async function modifierQuiz(req,res){
    await QUIZ.findByAndUpdate(req.params.id,{
        nom : req.body.nom,
        dateDemarrage : req.body.dateDemarrage,
        dateArret: req.body.dateArret,
    })
    .then(result => res.redirect('/'))
    .catch((err)=>console.error(err));
}

async function deleteQuiz(req,res){
     QUIZ.findByAndDelete(req.params.id)
    .then(result => res.redirect('/'))
    .catch((err)=> console.error(err));
}

module.exports = {getQuizs , creerQuiz ,modifierQuiz, deleteQuiz}