const Stations = require('../models/stations');
const Cars = require('../models/cars');
const { Types } = require('mongoose');

const correctCarIds = (carIds) => carIds.reduce((ids, id) => {
    if (id && Types.ObjectId.isValid(id)) {
        ids.push(id)
        return ids;
    }
}, []);

const createStation = async (req, res) => {
    const { name, carIds } = req.body;
    let cars = [];

    if (!name) {
        res.status = 400;
        return res.send('You must provide a name')
    }

    if (carIds) {
        cars = correctCarIds(carIds)
    }

    const station = new Stations();

    station.name = name;
    station.cars = cars

    const savedStation = await station.save();

    res.json(savedStation);
};

const getStation = async (req, res) => {
    const stationId = req.params.stationId;

    if (!stationId || !Types.ObjectId.isValid(stationId)) {
        res.status = 400;
        return res.send('Wrong station id');
    }

    const station = await Stations.findOne({ _id: stationId }).populate('cars').exec();

    res.json(station);
};

const deleteStation = async (req, res) => {
    const stationId = req.params.stationId;

    if (!stationId || !Types.ObjectId.isValid(stationId)) {
        res.status = 400;
        return res.send('Wrong station id');
    }

    const deletedStation = await Stations.findOneAndDelete({ _id: stationId }).exec();

    if (!deletedStation) {
        res.status = 400;
        return res.send(`No station found with id: ${stationId}`);
    }

    res.json(deletedStation);
};

const updateStation = async (req, res) => {
    const stationId = req.params.stationId;
    const { name, carIds } = req.body;
    let cars = [];

    if (!stationId || !Types.ObjectId.isValid(stationId)) {
        res.status = 400;
        return res.send('Wrong station id');
    }

    if (carIds) {
        cars = correctCarIds(carIds);
    }

    const oldStation = await Stations.findOneAndUpdate({ _id: stationId }, { name, cars }).exec();

    if (!oldStation) {
        res.status = 400;
        return res.send(`No station found with id: ${stationId}`);
    }

    res.json(oldStation);
};

module.exports = {
    createStation,
    getStation,
    deleteStation,
    updateStation
};