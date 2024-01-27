const $dataModel = require("../models/data.model")

const postData = async (req, res) => {
  const { fname, lname, age } = req.body
  const postData = await $dataModel({ fname, lname, age }).save()

  if (postData) {
    res.redirect('/')
  }
}

const getData = async (req, res) => {
  const getAllData = await $dataModel.find({})
  console.log({
    message: "Get All Data",
    data: getAllData
  });
  res.send({
    data: getAllData
  })
}

const deleteAllData = async (req, res) => {

  await $dataModel.deleteMany({})
  res.redirect('/')
}

module.exports = { postData, getData, deleteAllData }