'use strict'
const dotenv = require('dotenv');
const { join } = require('path');
const Database = require('./Database');
const Express = require('./Express');

class App {

}

App.prototype.loadConfiguration = function () {
    dotenv.config({ path: join(__dirname, '../.env') });
}

App.prototype.loadServer = function () {
    Express.initialization();
}

App.prototype.loadDatabase = function () {
    Database.initialization();
}




module.exports = new App;