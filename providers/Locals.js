const dotenv = require('dotenv');
const { join } = require('path');
const express = require('express');

class Locals {
    config() {
        dotenv.config({ path: join(__dirname, '../.env') });
        const port = process.env.PORT ?? 8080;
        const mongodbURL = process.env.MONGODB_URL ?? 'mongodb://localhost:27017/dev';

        return {
            port,
            mongodbURL,
        }
    }
}

/**
 * 
 * @param {express.Application} _express 
 * @returns {express.Application}
 */
Locals.prototype.initialization = function (_express) {
    _express.locals.app = this.config();
    return _express;
}



module.exports = new Locals;