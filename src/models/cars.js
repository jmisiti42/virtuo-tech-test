const { Schema, model } = require('mongoose')

const CarsSchema = new Schema({
    name: { type: String, },
    available: { type: Boolean, default: false }
});

module.exports = model('Cars', CarsSchema);