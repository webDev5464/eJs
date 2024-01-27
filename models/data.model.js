const mongoose = require('mongoose')

const schema = mongoose.Schema({
  fname: String,
  lname: String,
  age: Number
})

const $dataModel = mongoose.model('data', schema)

module.exports = $dataModel