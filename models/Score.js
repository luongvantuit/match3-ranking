'use strict'
const mongoose = require('mongoose')

/**
 * @interface
 */
class ScoreModel extends mongoose.Document {
    /**
     * @type {string} is uid from Facebook user
     */
    uid;
    /**
     * @type {number}
     */
    score;
    /**
     * @type {number}
     */
    level;
}


const ScoreSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    score: { type: Number, required: true },
    level: { type: Number, required: true },
})

/**
 * @type {mongoose.Model<ScoreModel>}
 */
const Score = mongoose.model('score', ScoreSchema);

module.exports = Score;