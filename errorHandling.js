const { ReasonPhrases, StatusCodes } = require('http-status-codes');

module.exports = (err, res, req, next) => {
  req.status(500).send('There was an error');
};
