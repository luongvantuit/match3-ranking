'use strict'
const express = require('express');
const Score = require('../models/Score');

class ScoreController {

}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns {Promise<void>}
 */
ScoreController.prototype.index = async function (req, res) {
    const { uid, level } = await req.params;
    let scores;
    if (level === undefined || typeof level !== 'number')
        scores = await Score.find({ uid: uid });
    else {
        if (isNaN(level))
            return res.status(400)
                .send({
                    error: true,
                    msg: `params format wrong! uid: ${uid}, level: ${level}.`,
                    code: 'params-format-wrong'
                })
                .end();
        scores = await Score.findOne({ uid: uid, level: level });
    }
    return res.status(200)
        .send({
            error: false,
            data: scores,
        })
        .end();
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns {Promise<void>}
 */
ScoreController.prototype.perform = async function (req, res) {
    const { uid } = await req.params;
    const { score, level } = await req.body;
    if (typeof uid !== 'string' || isNaN(score) || isNaN(level)) {
        return res.status(400)
            .send({
                error: true,
                msg: `params format wrong! uid: ${uid}, score: ${score}, level: ${level}.`,
                code: 'params-format-wrong'
            })
            .end();
    } else {
        const _score = await Score.findOne({ uid: uid, level: level });
        let resultScore;
        if (_score === null) {
            const newScore = new Score({
                uid: uid,
                level: level,
                score: score
            })
            resultScore = await newScore.save();
        } else {
            _score.score = score ?? _score.score;
            resultScore = await _score.save();
        }
        return res.status(200)
            .send({
                error: false,
                msg: `uid: ${uid}, score: ${score}, level: ${level}.`,
                data: resultScore
            })
            .end();
    }
}


module.exports = new ScoreController;