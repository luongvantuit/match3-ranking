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
    const { level, limit, page } = await req.params;
    const { data } = await req.body;
    const _page = Number(page ?? 0);
    const _limit = Number(limit ?? 10);
    let countDocuments, ranking, maxPage;
    if (data === undefined) {
        const score = await Score.find({ level: level });
        countDocuments = score.length;
        ranking = await Score.find({ level: level }).skip(_page * _limit).sort('score');
    } else {
        if (!Array.isArray(data) || data.length === 0 || typeof data[0] !== 'string') {
            return res.send(400)
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
                        score: 1
                    }
                },
                {
                    $skip: _limit * _page
                },
                {
                    $limit: _limit
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
    maxPage = Math.ceil(countDocuments / _limit);
    return res.send(200)
        .send({
            error: false,
            data: ranking,
            maxPage: maxPage,
        })
        .end();
}



module.exports = new RankingController;