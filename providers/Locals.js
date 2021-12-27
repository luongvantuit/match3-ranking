const dotenv = require('dotenv');
const { join } = require('path')

class Locals {
    config() {
        dotenv.config({ path: join(__dirname, '../.env') });
        const port = process.env.PORT ?? 8080;

        return {
            port,
        }
    }
}


Locals.prototype.initialization = function (express) {
    express.locals.app = this.config();
    return express;
}



module.exports = new Locals;