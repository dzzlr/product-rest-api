const mongoose = require('mongoose')
require('dotenv').config();

mongoose.Promise = global.Promise
const db = mongoose.connect(process.env.DATABASE_URL, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        // useFindAndModify: true
                    })
                    .then(() => {
                        console.log(`Database connected succesfull!`)
                    }).catch((err) => {
                        console.log(`Cannot connect to the database`, err)
                        process.exit()
                    })

module.exports = db