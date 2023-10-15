module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            sku: {type: String, required: true, unique: true},
            brand: {type: String, required: true},
            name: {type: String, required: true},
            color: {type: String, required: false},
            price: {
                value: {type: Number, required: true},
                currency: {type: String, required: true}
            },
            size: [{
                _id: false,
                value: {type: String, required: true}, 
                in_stock: {type: Number, required: true}
            }],
            // image: {type: String, required: false},
            url: {type: String, required: true},
            // description: String,
        },
        { timestamps: true }
    );

    // schema.method('toJSON', function() {
    //     const {__v, _id, ...object} = this.toObject()
    //     object.id = _id
    //     return object
    // })

    const Product = mongoose.model("products", schema);
    return Product;
}