'use strict'

const express = require("express");
const Locals = require('./Locals');


class Express {
    _express = express();

    constructor() {
        this.moutDotEnv();
    }

    moutDotEnv() {
        this._express = Locals.initialization(this._express);
    }

}




Express.prototype.initialization = function () {
    this._express.listen(Locals.config().port);
}


module.exports = new Express;