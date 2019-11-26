const { Schema, model } = require('mongoose')

const StationsSchema = new Schema({
    name: { type: String, },
    cars: [{ type: Schema.Types.ObjectId, ref: 'Cars' }]
});

module.exports = model('Stations', StationsSchema);