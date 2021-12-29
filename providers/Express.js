'use strict'

const express = require("express");
const Kernal = require("../middlewares/Kernal");
const Locals = require('./Locals');
const Routes = require('./Routes');

class Express {
    _express = express();

    constructor() {
        this.mountDotEnv();
        this.mountMiddlewares();
        this.mountRoutes();
    }

    /**
     * @returns {void}
     * @private
     */
    mountDotEnv() {
        this._express = Locals.initialization(this._express);
    }

    /**
     * @returns {void}
     * @private
     */
    mountMiddlewares() {
        this._express = Kernal.initialization(this._express);
    }

    /**
     * @return {void}
     * @private
     */
    mountRoutes() {
        this._express = Routes.mountAPI(this._express);
    }

}




Express.prototype.initialization = function () {
    this._express.listen(Locals.config().port);
}


module.exports = new Express;