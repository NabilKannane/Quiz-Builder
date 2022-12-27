const express = require('express');
const {getQuestions , creerQuestion , modifierQuestion , deleteQuestion} = require('../controllers/QuestionControllers');


const router = express.Router();

router.get("/", getQuestions)

router.post("/", creerQuestion)

router.put('/:id', modifierQuestion)

router.delete('/:id', deleteQuestion)

module.exports = router