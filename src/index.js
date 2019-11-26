const mongoose = require('mongoose');
const express = require('express');

const { DB, PORT } = require('../config');

const startUp = async () => {
    await mongoose.connect(DB)

    const app = express()

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`)
    })
}

startUp();