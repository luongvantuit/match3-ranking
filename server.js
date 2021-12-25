'use strict'

const cluster = require('cluster');

const App = require("./providers/app")



if (cluster.default.isMaster()) {

} else {


    App.loadDatabase();

    
    App.loadServer();
}