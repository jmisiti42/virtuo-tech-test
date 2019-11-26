const mongoose = require('mongoose');
const express = require('express');

const { cars, stations } = require('./router');
const { DB, PORT } = require('../config');

const startUp = async () => {
    await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });

    const app = express();

    app.use('/cars', cars);

    app.use('/stations', stations);

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
}

startUp();