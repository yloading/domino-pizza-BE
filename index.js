const express = require('express');
const routes = require('./routes/order.js');

const app = express();

app.use(express.json());
app.use(express.static('public'))

app.use('/api', routes);

app.listen(process.env.PORT || 5000);