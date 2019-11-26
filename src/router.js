const { Router } = require('express');

const cars = Router();

const stations = Router();

stations.get('/', (req, res) => {
    res.json({ ok: true })
});

cars.get('/', (req, res) => {

});

module.exports = {
    cars,
    stations
}