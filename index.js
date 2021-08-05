const express = require('express');
const routes = require('./routes/order.js');

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.static('public'))

app.use('/api', routes);

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));