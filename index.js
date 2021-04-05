const express = require('express');
const bodyParser = require('body-parser');
const Router = require('./Router');
const Logger = require('./loggerMiddleware');
// const Handling = require('./errorHandling'); remember res.send();

const app = express();

app.use(bodyParser.json());
app.use(Logger);
app.use(Router);
// app.use(errorHandler);

/*
const findThing = (thing, search) => {
    let result = null;
    Object.keys(search).forEach((key) => {
        if (key === thing) {
            result = search[key];
        }
    });
    return result;
};

router.use((req, res, next) => {
  winstonLogger.info(findThing(dateValidation, secondsSinceEpoch));
  next();
});
*/

app.listen(8080);
