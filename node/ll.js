const ee = require('events');

const EventEmitter = ee.EventEmitter;

const LoggingType = {
    LOG_ERROR: "LOG_ERROR",
    LOG_INFO: "LOG_INFO"
}
class Logger extends EventEmitter {

    log(msg, logType) {

        if (LoggingType[logType]) {
            this.emit(logType, { msg, logType })
        }
    }

}

module.exports = Logger;