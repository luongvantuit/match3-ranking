'use strict'
const express = require('express');

class RankingController {

}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns {Promise<void>}
 */
RankingController.prototype.index = async function (req, res) {
    const { level, limit, page } = await req.params;
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns {Promise<void>}
 */
RankingController.prototype.show = async function (req, res) {
    const { uid, level, limit, page } = await req.params;
}


module.exports = new RankingController;