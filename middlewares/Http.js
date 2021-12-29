'use strict'
const express = require('express');

class Http {

    /**
     * 
     * @param {express.Application} _express 
     * @returns {express.Application}
     */
    mount(_express) {
        return _express;
    }
}


module.exports = new Http;