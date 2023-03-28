const dbConfig = require('../configs/db.config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = "mongodb://127.0.0.1:27017/collect_product"
db.products = require('./product.model')(mongoose)

module.exports = db