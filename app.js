const express = require('express');
const UserRoutes = require("./routes/UserRoutes")
const QuestionRoutes = require("./routes/QuestionRoutes")
const QuizRoutes = require("./routes/QuizRoutes")

const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("<h1>BONJOUJR</h1>");
})


app.use('/',UserRoutes);
app.use('/question', QuestionRoutes);
app.use('/quiz',QuizRoutes);


module.exports = app;