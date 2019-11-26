const { Router } = require('express');
const { createCar, getCar, deleteCar, updateCar } = require('./controllers/cars')
const cars = Router();

const stations = Router();

stations.get('/', (req, res) => {
    res.json({ ok: true })
});

cars.get('/:carId', getCar);
cars.post('/', createCar);
cars.delete('/:carId', deleteCar);
cars.put('/:carId', updateCar);

module.exports = {
    cars,
    stations
}