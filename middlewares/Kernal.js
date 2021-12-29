'use strict'
const express = require('express');
const Http = require('./Http');

class Kernal {

}

/**
 * 
 * @param {express.Application} _express 
 * @returns {express.Application}
 */
Kernal.prototype.initialization = function (_express) {
    _express = Http.mount(_express);
    return _express;
}





module.exports = new Kernal;