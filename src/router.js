const { Router } = require('express');
const { createCar, getCar, deleteCar, updateCar } = require('./controllers/cars')
const { createStation, getStation, deleteStation, updateStation } = require('./controllers/stations')
const cars = Router();

const stations = Router();

stations.get('/:stationId', getStation);
stations.post('/', createStation);
stations.delete('/:stationId', deleteStation);
stations.put('/:stationId', updateStation);

cars.get('/:carId', getCar);
cars.post('/', createCar);
cars.delete('/:carId', deleteCar);
cars.put('/:carId', updateCar);

module.exports = {
    cars,
    stations
}