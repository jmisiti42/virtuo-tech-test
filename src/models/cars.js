const { Schema, model } = require('mongoose')

const CarsSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        minlength: 3
    },
    available: { type: Boolean, default: false }
});

module.exports = model('Cars', CarsSchema);