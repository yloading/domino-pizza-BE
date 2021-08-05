const express = require('express');
const models = require('../models');



const orderServices = {
    async getOrders(req,res) {
        try {
            const result = await models.Order.findAll({
                include: {
                    model: models.Pizza,
                    required: true,
                    include: [ models.Pizza_Addons]
                }});
            res.send(result);
        } catch (error) {
            
        }
        // return res.send('This is an API');
    },

    postOrders(req,res) {
        return res.send('Hi POST');
    }
}

module.exports = orderServices;