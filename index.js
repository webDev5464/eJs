const express = require('express')
const cors = require('cors')
const $route = require('./router/route')
const $dataModel = require('./models/data.model')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require('./configs/db')

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.get('/', async (req, res) => {
  const datas = await $dataModel.find({})
  res.render('Main', { datas })
})
app.get('/Form', async (req, res) => {
  res.render('AddNewData')
})

app.use("/data", $route)

const PORT = 5464
app.listen(PORT, () => {
  console.log(`Server Is Running : ${PORT}`);
})