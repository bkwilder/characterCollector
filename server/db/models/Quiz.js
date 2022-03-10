const Sequelize = require('sequelize')
const db = require('../db')




const Quiz = db.define('quiz', {
    name: {
        type: Sequelize.STRING
    },

    description: {
        type: Sequelize.TEXT
    }, 

    linkToQuiz: {
        type: Sequelize.STRING
    },

    image: {
        type: Sequelize.STRING
    },

    // value of quiz, ex: if type is enneagram, value might be Seven: The Enthusiast
    value: {
        type: Sequelize.STRING
    }
}
)

module.exports = Quiz