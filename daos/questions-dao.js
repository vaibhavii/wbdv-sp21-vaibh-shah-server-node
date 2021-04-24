const questionsModel = require('../db/questions/questions-model')


const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
const findQuestionsForQuiz = (qzid) => questionsModel.find({quizId: qzid})

const createQuestion = (question) => questionsModel.create(question)

module.exports = {findAllQuestions, findQuestionById, findQuestionsForQuiz, createQuestion}