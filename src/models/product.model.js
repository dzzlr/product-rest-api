module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            sku: String,
            brand: String,
            name: String,
            edition: String,
            color: String,
            price: Number,
            size: Object,
            image: Object,
            url: String,
            // description: String,
        },
        { timestamps: true }
    )

    schema.method('toJSON', function() {
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Product = mongoose.model("products", schema)
    return Product
}