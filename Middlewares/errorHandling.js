module.exports = (err, res, req, next) => {
  req.status(500).send(`We're sorry, the error was: ${err.message}.`);
};
