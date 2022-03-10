//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Quiz = require('./models/Quiz')
const Note = require('./models/Note')

User.belongsToMany(Quiz, {through: 'Ring'})
Quiz.belongsToMany(User,{through: 'Ring'})


module.exports = {
  db,
  models: {
    User,
    Quiz,
    Note
  },
}
