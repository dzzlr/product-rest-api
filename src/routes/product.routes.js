module.exports = (app) => {
    const products = require('../controllers/product.controller')
    const router = require('express').Router()

    router.get('/', products.findAll)
    router.post('/', products.create)
    router.get('/:id', products.findOne)
    router.put('/:id', products.update)
    router.delete('/:id', products.delete)

    app.use('/api/products', router)
}