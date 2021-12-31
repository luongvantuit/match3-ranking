'use strict'
const express = require('express');
const Score = require('../models/Score');

class RankingController {

}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @returns {Promise<void>}
 */
RankingController.prototype.index = async function (req, res) {
    const { level } = await req.params;
    let { limit, page } = await req.query;
    const { data } = await req.body;
    if (isNaN(limit))
        limit = 10;
    if (isNaN(page))
        page = 0;
    let countDocuments, ranking, maxPage;
    if (data === undefined) {
        const score = await Score.find({ level: level });
        countDocuments = score.length;
        ranking = await Score.find({ level: level }).limit(Number(limit)).skip(page * limit).sort({
            'score': -1
        });
    } else {
        if (!Array.isArray(data) || data.length === 0 || typeof data[0] !== 'string') {
            return res.status(400)
                .send({
                    error: true,
                    code: 'body-format-wrong',
                    msg: 'body format wrong!'
                })
                .end();
        } else {
            ranking = await Score.aggregate([
                {
                    $match: {
                        level: level,
                        uid: {
                            $in: data
                        }
                    }
                },
                {
                    $sort: {
                        score: -1
                    }
                },
                {
                    $skip: limit * page
                },
                {
                    $limit: limit
                }
            ]);
            const score = await Score.aggregate([
                {
                    $match: {
                        level: level,
                        uid: {
                            $in: data
                        }
                    }
                }
            ]);
            countDocuments = score.length;
        }
    }
    maxPage = Math.ceil(countDocuments / limit);
    return res.status(200)
        .send({
            error: false,
            data: ranking,
            maxPage: maxPage,
        })
        .end();
}



module.exports = new RankingController;