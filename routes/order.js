const express = require('express');
const orderServices = require('../services/orderServices.js');


const router = express.Router();


router.get('/orders', orderServices.getOrders);

router.post('/orders', orderServices.postOrders);


module.exports = router;