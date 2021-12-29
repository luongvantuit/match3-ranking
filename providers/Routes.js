'use strict'
const express = require('express');
const API = require('../routes/API')

class Routes {

}

/**
 * 
 * @param {express.Application} _express 
 * @returns {express.Application}
 */
Routes.prototype.mountAPI = function (_express) {
    return _express.use('/api', API);
}



module.exports = new Routes;