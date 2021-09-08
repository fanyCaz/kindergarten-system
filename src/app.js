"use strict";

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Holi');
});

app.listen(port, () => {
  console.log(`Servidor funcionando en localhost:${port}`);
});
