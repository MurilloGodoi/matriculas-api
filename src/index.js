const express = require('express');
const routes = require('./routes/index');
require('dotenv').config();

const app = express();

app.use(express.json());
routes(app);

app.listen(process.env.PORT);

module.exports = app;
