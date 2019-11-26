const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')

const { cars, stations } = require('./router');
const { DB, PORT } = require('../config');

const startUp = async () => {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    await mongoose.connect(DB);

    const app = express();

    app.use(bodyParser.json())

    app.use('/cars', cars);

    app.use('/stations', stations);

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
}

startUp();