
const questionsDao = require("../../daos/questions-dao")
const createQuestion = (question) => {
    return questionsDao.createQuestion(question)
}

const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    return questionsDao.findAllQuestions()
}

const findQuestionsForQuiz = (qzid) => {
    return questionsDao.findQuestionsForQuiz(qzid)
   
}
const findQuestionById = (quid) => {
    return questionsDao.findQuestionById(quid)
    
}

const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    createQuestion, createQuestionForQuiz,
    findAllQuestions, findQuestionById,
    findQuestionsForQuiz,
    updateQuestion, deleteQuestion
}