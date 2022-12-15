const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  location: String,
  nearestCity: String,
  email: String,
  id: Number,
  createdAt: Date,
  updatedAt: Date,
})

const parkSchema = new mongoose.Schema({
  name: String,
  location: String,
  jurisdiction: String,
  id: Number,
  createdAt: Date,
  updatedAt: Date,
})

const citySchema = new mongoose.Schema({
  name: String,
  location: String,
  state: String,
  id: Number,
  createdAt: Date,
  updatedAt: Date,
})

module.exports = mongoose.model('User', userSchema)
module.exports = mongoose.model('Park', parkSchema)
module.exports = mongoose.model('City', citySchema)