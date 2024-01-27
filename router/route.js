const express = require('express')
const { getData, postData, deleteAllData } = require('../controllers/data.controller')

const $route = express.Router()

$route.route('/post').post(postData)
$route.route('/get').get(getData)
$route.route('/deleteAll').get(deleteAllData)

module.exports = $route