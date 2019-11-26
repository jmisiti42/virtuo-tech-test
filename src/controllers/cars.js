const Cars = require('../models/cars');
const Stations = require('../models/stations');
const { Types } = require('mongoose');

const createCar = async (req, res) => {
    const { name, stationId, available } = req.body;
    let station;

    if (!name) {
        res.status = 400;
        return res.send('You must provide a name')
    }

    if (stationId && Types.ObjectId.isValid(stationId)) {
        station = await Stations.findOne({ _id: stationId }).exec();
        if (!station) {
            res.status = 400;
            return res.send(`No station found with id: ${stationId}`)
        }
    }

    const car = new Cars();

    car.name = name;
    car.available = available === "true" ? true : false;

    const savedCar = await car.save();

    if (station) {
        station.cars.push(savedCar);
        station.save();
    }

    res.json(car);
};

const getCar = async (req, res) => {
    const carId = req.params.carId;

    if (!carId || !Types.ObjectId.isValid(carId)) {
        res.status = 400;
        return res.send('Wrong car id');
    }

    const car = await Cars.findOne({ _id: carId }).exec();

    res.json(car);
};

const deleteCar = async (req, res) => {
    const carId = req.params.carId;

    if (!carId || !Types.ObjectId.isValid(carId)) {
        res.status = 400;
        return res.send('Wrong car id');
    }

    const deletedCar = await Cars.findOneAndDelete({ _id: carId }).exec();

    if (!deletedCar) {
        res.status = 400;
        return res.send(`No car found with id: ${carId}`);
    }

    res.json(deletedCar);
};

const updateCar = async (req, res) => {
    const carId = req.params.carId;
    const { name, available } = req.body;

    if (!carId || !Types.ObjectId.isValid(carId)) {
        res.status = 400;
        return res.send('Wrong car id');
    }

    const oldCar = await Cars.findOneAndUpdate({ _id: carId }, { name, available }).exec();

    if (!oldCar) {
        res.status = 400;
        return res.send(`No car found with id: ${carId}`);
    }

    res.json(oldCar);
};

module.exports = {
    createCar,
    getCar,
    deleteCar,
    updateCar
};