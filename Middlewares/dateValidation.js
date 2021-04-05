const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const express = require('express');

const app = express();

module.exports = app.all('/', (req, res, next) => {
  const secondsSinceEpoch = Math.round(Date.now() / 1000); // Epoch time
  const dateValidation = secondsSinceEpoch - 300; // 5 minutes after

  if (dateValidation < secondsSinceEpoch) {
    next();
  } else {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .send(ReasonPhrases.UNAUTHORIZED);
  }
});
