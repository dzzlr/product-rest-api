const express = require('express')
const cors = require('cors')
const app = express()

const port = 8000
const db = require('./src/configs/db.config')
const response = require('./src/utils/response')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    response(200, 'Welcome to RESTful API Product Express', res)
})

app.get('/product', (req, res) => {
    let name = req.query.name || '';
    let sortby = req.query.sortby || '';

    response(200, `Query name is ${name} and SortBy is ${sortby}`, res)
})

require('./src/routes/product.routes')(app)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})