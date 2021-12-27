'use strict'
const cluter = require('cluster')

class NativeEvent {

}

/**
 * 
 * @param {cluter.Cluster} cluster 
 * @returns {void}
 */
NativeEvent.prototype.cluster = function (cluster) {
    cluster.on('online', (worker) => {
        console.log(`Cluster run process! State online :: PID @${worker.process.pid}`);
    })

    cluster.on('exit', (worker) => {
        console.log(`Cluster exit process! State exit :: PID @${worker.process.pid}`);
        cluster.fork();
    })
}


module.exports = new NativeEvent;