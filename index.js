const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Got request');
  res.send('Hello World');
});

app.listen(8080);
console.log('It works');
