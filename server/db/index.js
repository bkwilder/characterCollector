//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Quiz = require('./models/Quiz')
User.belongsToMany(Quiz, {through: 'ring'})
Quiz.belongsToMany(User,{through: 'ring'})

module.exports = {
  db,
  models: {
    User,
    Quiz
  },
}
