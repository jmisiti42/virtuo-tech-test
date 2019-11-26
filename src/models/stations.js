const { Schema, model } = require('mongoose')

const StationsSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        minlength: 3
    },
    cars: [{ type: Schema.Types.ObjectId, ref: 'Cars' }]
});

module.exports = model('Stations', StationsSchema);