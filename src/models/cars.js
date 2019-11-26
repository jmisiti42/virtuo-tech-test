const { Schema } = require('mongoose')

const Cars = new Schema({
    name: { type: String, },
    available: { type: Boolean, default: true }
});

module.exports = {
    Cars
}