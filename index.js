'use strict'

const cluster = require('node:cluster');
const os = require('os');
const NativeEvent = require('./app/NativeEvent');

const App = require("./providers/App");


if (cluster.default.isMaster) {

    App.loadConfiguration();

    const CPUs = os.cpus();

    CPUs.forEach(() => {
        cluster.default.fork();
    })

    NativeEvent.cluster(cluster);

} else {

    App.loadDatabase();


    App.loadServer();
    
}