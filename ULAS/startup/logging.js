const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
    process.on("uncaughtException",(ex) => {
        console.log("uncaughtException");
        winston.error(ex.message,ex);
    })
    
    process.on('unhandledRejection',(ex) => {
      console.log("unhandledRejection");
      winston.error(ex.message,ex);
    })
    
    winston.add(new winston.transports.File({ filename: 'logfile.log'}));
}