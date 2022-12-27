const express = require('express')
const {getQuizs , creerQuiz , modifierQuiz , deleteQuiz} = require("../controllers/QuizControllers")

const router = express.Router();

router.get('/',getQuizs)

router.post('/',creerQuiz)

router.put('/:id',modifierQuiz)

router.delete('/:id',deleteQuiz)

module.exports = router;