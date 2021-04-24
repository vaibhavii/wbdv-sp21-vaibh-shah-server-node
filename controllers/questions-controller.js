module.exports = (app) => {
    const questionService = require("../services/questions/questions-service")

    const findAllQuestions = (req, res) => {
        
        questionService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }
    const findQuestionById = (req, res) => {
        const questionId = req.params.qid;
        questionService.findQuestionById(questionId)
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qzid;
        
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }
    const createQuestion = (req, res) => {
        questionService.createQuestion(req.body)
            .then(question => res.send(question))
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/questions/:qid", findQuestionById);
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
    app.post('/api/questions', createQuestion)
}