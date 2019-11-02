module.exports = class ErrorHandler extends Error {

    constructor(message, status = 500, controller = 'Unknown Controller') {
        super(message);
        // this.message = this.message || msg;
        this.status = status ;
        this.controller = controller;
        Error.captureStackTrace(this, this.constructor);
    }

};
