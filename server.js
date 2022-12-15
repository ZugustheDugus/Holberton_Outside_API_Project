const express = require("express");
const app = express();
const mongoose = require('mongoose')

const User = require('./schema')
const Park = require('./schema')
const City = require('./schema')

mongoose.connect("mongodb://localhost:27017")
run()
async function run() {
  const user = await User.create()
  const park = await Park.create()
  const city = await City.create()
  //const user = new User()
  //await user.save()
  console.log(user, park, city)
}

const users = [
  { id: 1, username: 'User 1' },
  { id: 2, username: 'User 2' },
  { id: 3, username: 'User 3' },
  { id: 4, username: 'User 4' },
  { id: 5, username: 'User 5' },
  { id: 6, username: 'User 6' },
  { id: 7, username: 'User 7' },
  { id: 8, username: 'User 8' },
  { id: 9, username: 'User 9' },
  { id: 10, username: 'User 10' },
  { id: 11, username: 'User 11' },
  { id: 12, username: 'User 12' },
]

const posts = [
  { id: 1, postname: 'Post 1' },
  { id: 2, postname: 'Post 2' },
  { id: 3, postname: 'Post 3' },
  { id: 4, postname: 'Post 4' },
  { id: 5, postname: 'Post 5' },
  { id: 6, postname: 'Post 6' },
  { id: 7, postname: 'Post 7' },
  { id: 8, postname: 'Post 8' },
  { id: 9, postname: 'Post 9' },
  { id: 10, postname: 'Post 10' },
  { id: 11, postname: 'Post 11' },
  { id: 12, postname: 'Post 12' },
]

function pagRes(model) {
  return (req, res, next) => {

    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const StartIndex = (page - 1) * limit
    const EndIndex = page * limit

    const results = {}

    results.results = model.slice(StartIndex, EndIndex)
    res.pagRes = results
    next()

    if (StartIndex > 0) {
      results.prev = {
        page: page + 1,
        limit: limit
      }
    }

    if (EndIndex < model.length) {
      results.next = {
        page: page - 1,
        limit: limit
      }
    }
  }
}

app.get('/users', pagRes(users), (req, res) => {
  res.json(res.pagRes)
})

app.get('/posts', pagRes(posts), (req, res) => {
  res.json(res.pagRes)
})

app.listen(3000);