const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  location: String,
  email: String,
  id: Number,
  createdOn: String,
})

const parkSchema = new mongoose.Schema({
  name: String,
  location: String,
  jurisdiction: String,
  id: Number,
})

module.exports = mongoose.model('User', userSchema)