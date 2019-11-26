const { Schema } = require('mongoose')
const Cars = require('./cars')

const Stations = new Schema({
    name: { type: String, },
    cars: [Cars]
});

module.exports = {
    Stations
}