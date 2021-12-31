const express = require("express");
const ScoreController = require("../controllers/ScoreController");


const API = express.Router();

API.get('/score/:uid/:level', ScoreController.index);
API.get('/score/:uid', ScoreController.index);
API.get('/score/:uid', express.json(), ScoreController.perform);

module.exports = API;