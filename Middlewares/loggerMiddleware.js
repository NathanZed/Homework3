const winston = require('winston');

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
  findThing(req, res);
  winstonLogger.log('info', {
    Epoch: req.secondsSinceEpoch = Math.round(Date.now() / 1000),
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    query: req.query,
    headers: req.headers,
    date_Validation: req.dateValidation = Math.round(Date.now() / 1000) - 300,
  });
  next();
});
