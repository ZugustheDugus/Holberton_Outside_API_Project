const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  location: String,
  id: Number,
})

const parkSchema = new mongoose.Schema({
  name: String,
  location: String,
  id: Number,
})

module.exports = mongoose.model('User', userSchema)