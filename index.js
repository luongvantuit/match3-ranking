'use strict'

const cluster = require('node:cluster');
const os = require('os');

const App = require("./providers/App");

App.loadConfiguration();

App.loadDatabase();

App.loadServer();

