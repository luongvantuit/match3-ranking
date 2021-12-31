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
    if (level === undefined)
        scores = await Score.find({ uid: uid, level: level });
    else
        scores = await Score.find({ uid: uid, level: level });
    return res.send(200)
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
        return res.send(400)
            .send({
                error: true,
                msg: `params format wrong! uid: ${uid}, score: ${score}, level: ${level}.`,
                code: 'params-format-wrong'
            })
            .end();
    } else {
        const score = await Score.findOne({ uid: uid, level: level });
        let resultScore;
        if (score === null) {
            const newScore = new Score({
                uid: uid,
                level: level,
                score: score
            })
            resultScore = await newScore.save();
        } else {
            score.score = score ?? score.score;
            resultScore = await score.save();
        }
        return res.send(200)
            .send({
                error: false,
                msg: `uid: ${uid}, score: ${score}, level: ${level}.`,
                data: resultScore
            })
            .end();
    }
}


module.exports = new ScoreController;