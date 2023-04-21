module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            sku: {type: String, required: true, unique: true},
            brand: {type: String, required: true},
            name: {type: String, required: true},
            edition: {type: String, required: false},
            color: {type: String, required: false},
            price: {type: Number, required: true},
            // size: Object,
            // image: Object,
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