const { StatusCodes } = require('http-status-codes');
const express = require('express');

const router = express.Router();

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = router.all('/', (req, res) => {
  const result = random(1, 2);
  if (result === 1) {
    res
      .status(StatusCodes.OK)
      .send('Hello World');
  }
  if (result === 2) {
    throw new Error('Oops');
  }
});
