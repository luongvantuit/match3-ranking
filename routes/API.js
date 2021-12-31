const express = require("express");
const RankingController = require("../controllers/RankingController");
const ScoreController = require("../controllers/ScoreController");


const API = express.Router();

API.get('/score/:uid/:level', ScoreController.index);
API.get('/score/:uid', ScoreController.index);
API.post('/score/:uid', express.json(), ScoreController.perform);

API.get('/ranking/:level', express.json(), RankingController.index);

module.exports = API;