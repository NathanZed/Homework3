const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const express = require('express');

const app = express();

module.exports = app.delete('/', (req, res) => {
  res
    .status(StatusCodes.METHOD_NOT_ALLOWED)
    .send(ReasonPhrases.METHOD_NOT_ALLOWED);
});
