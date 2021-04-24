const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


mongoose.connect("mongodb+srv://shah:shah@cluster0.likmg.mongodb.net/whiteboard?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true});


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const demos = require('./controllers/demo-controller');
demos(app);



require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)
require("./controllers/quiz-attempts-controller")(app)


app.listen(process.env.PORT || 4000)