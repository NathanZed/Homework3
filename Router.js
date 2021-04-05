const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const express = require('express');
const bodyParser = require('body-parser');
// const winston = require('winston');

const app = express();
const router = express.Router();
app.use(bodyParser.json());

const secondsSinceEpoch = Math.round(Date.now() / 1000); // Epoch time
const dateValidation = secondsSinceEpoch - 300; // 5 minutes after

router.use((req, res, next) => {
  if (secondsSinceEpoch > dateValidation) {
    next();
  } else {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .send(ReasonPhrases.UNAUTHORIZED);
  }
});

router.delete('/', (req, res, next) => {
  res
    .status(StatusCodes.METHOD_NOT_ALLOWED)
    .send(ReasonPhrases.METHOD_NOT_ALLOWED);
});

router.all('/', (req, res) => {
  res.send('Hello World');
});

module.exports = router;
