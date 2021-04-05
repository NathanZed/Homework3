// const express = require('express');
const winston = require('winston');

// const app = express();
const findThing = (thing, search) => {
  let result = null;
  Object.keys(search).forEach((key) => {
    if (key === thing) {
      result = search[key];
    }
  });
  return result;
};

const winstonLogger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

module.exports = ('/', (req, res, next) => {
  winstonLogger.log('info', {
    Epoch: req.method,
    method: req.method,
    url: req.url,
    body: req.body,
    query: req.query,
    headers: req.headers,
  });
  next();
});
