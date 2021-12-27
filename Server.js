'use strict'

const cluster = require('cluster');
const os = require('os')

const App = require("./providers/App")



if (cluster.default.isMaster()) {

    App.loadConfiguration();

    const CPUs = os.cpus();

    CPUs.forEach(() => {
        cluster.default.fork();
    })

} else {

    App.loadDatabase();


    App.loadServer();
}