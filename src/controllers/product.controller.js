const db = require('../models');
const Product = db.products;

exports.findAll = async (req, res) => {
    const allBrandCategories  = await Product.distinct('brand');

    const search = req.query.search || '';
    const brand = req.query.brand || allBrandCategories;
    const price = req.query.price || 0;

    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;

    try {
        const result = await Product.find({
            name: { $regex: '.*' + search + '.*', $options: 'i'},
            brand: brand,
            price: { $gt: price } 
        }, ['-url', '-__v'])
        .skip(page * limit)
        .limit(limit);

        res.status(200).send({
            code: 200,
            status: "OK",
            data: result,
            metadata: {
                page: page + 1,
                limit: limit,
                // current: "",
                // prev: "",
                // next: "",
            }
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error while retrieving products."
        });
    }
}

exports.create = async (req, res) => {
    const product = await new Product({
        sku: req.body.sku,
        brand: req.body.brand,
        name: req.body.name,
        edition: req.body.edition ? req.body.edition : null,
        color: req.body.color ? req.body.color : null,
        price: req.body.price,
        url: req.body.url,
        // description: req.body.description ? req.body.description : "null"
    });

    try {
        const savedProduct = await product.save();
        res.status(200).send({
            code: 200,
            status: "OK",
            data: savedProduct
        });
    } catch (error) {
        res.status(409).send({
            message: error.message || "Some error while create products."
        });
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Product.findById(id);

        if (!result) {
            res.status(404).send({
                code: 404,
                status: "NOT_FOUND",
                message: "Product not found"
            });
        }

        res.status(200).send({
            code: 200,
            status: "OK",
            data: result
        });
    } catch (error) {
        res.status(409).send({
            message: error.message || "Some error while show product."
        });
    }
}

exports.update = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Product.findByIdAndUpdate(id, req.body);

        if (!result) {
            res.status(404).send({
                code: 404,
                status: "NOT_FOUND",
                message: "Product not found"
            });
        }

        res.status(200).send({
            code: 200,
            status: "OK",
            message: "Product was updated",
            data: result
        });
    } catch (error) {
        res.status(409).send({
            message: error.message || "Some error while update product."
        });
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Product.findByIdAndDelete(id);

        if (!result) {
            res.status(404).send({
                code: 404,
                status: "NOT_FOUND",
                message: "Product not found"
            });
        }

        res.status(200).send({
            code: 200,
            status: "OK",
            message: "Product was deleted"
        });
    } catch (error) {
        res.status(409).send({
            message: error.message || "Some error while delete product."
        });
    }
}