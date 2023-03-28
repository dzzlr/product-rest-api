const express = require('express')
const cors = require('cors')
const app = express()

const port = 8000
const db = require('./src/configs/db.config')
const response = require('./src/utils/response')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to RESTful API Product Express"
    })
})

require('./src/routes/product.routes')(app)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})