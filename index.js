import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';

const app = express();
app.use(bodyParser.json());

// Winston
const winstonLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

app.use((reg, res, next) => {
  winstonLogger.info(reg.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.delete('/', (req, res) => {
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
});

app.listen(8080);
winstonLogger.info('It connects to port 8080');
