'use strict'
const mongoose = require('mongoose');
const Locals = require('./Locals');

class Database {

}

Database.prototype.initialization = async function () {
    await mongoose.connect(Locals.config().mongodbURL, {}, async (error) => {
        if (error != null)
            await mongoose.disconnect();
    })
}




module.exports = new Database;