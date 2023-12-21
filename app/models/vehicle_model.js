const { default: mongoose } = require("mongoose");

module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            vehicle_ID: String,
            img: String,
            name: String,
            brand: String,
            production_year: String,
            maximum_weight: String,
            odometer: String,
            complete_documents: String,
            notes: String,

        }, {
        timestamps: true
    }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;

        return object;
    });


    return mongoose.model("vehicle", schema)
}