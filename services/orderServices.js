const express = require('express');
const models = require('../models');
const pmlConvertionService = require('./pmlConvertionService');



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
            console.log(error);
            res.status(500).send("Something went wrong");
        }
        // return res.send('This is an API');
    },

    async postOrders(req,res) {
        try {
            var message = 'Something Went Wrong'
            const requestFromClient = req.body.pml;
            let xmlInput = pmlConvertionService.transformPmlToXml(requestFromClient)
            let requestJson = pmlConvertionService.xmlToJSon(xmlInput)

            // let pizzaLength = requestInJsonFormat.order.pizza.length;
            requestJson.order['order_number'] = requestJson.order._attributes.number;
            
            delete requestJson.order._attributes;
            let pizzaLength = requestJson.order.pizza.length;

            if(pizzaLength > 24) {
                message = 'You can only order a maximum of 24 pizza'
                throw new Error();
            }
            console.log(pizzaLength)

            for (let i = 0; i < pizzaLength; i++) {
                requestJson.order.pizza[i]['pizza_number'] = requestJson.order.pizza[i]._attributes.number
                delete requestJson.order.pizza[i]._attributes;
                requestJson.order.pizza[i]['size'] = requestJson.order.pizza[i].size._text
                requestJson.order.pizza[i]['crust'] = requestJson.order.pizza[i].crust._text
                requestJson.order.pizza[i]['type'] = requestJson.order.pizza[i].type._text

                if(requestJson.order.pizza[i]['type'] == 'custom') {
                    let pizzaToppingsLength = requestJson.order.pizza[i].toppings.length;
                    if(pizzaToppingsLength <= 0){
                        message = 'Invalid format.'
                        throw new Error();
                    }
                    console.log(pizzaToppingsLength)
                    for (let j = 0; j < pizzaToppingsLength; j++) {
                        requestJson.order.pizza[i].toppings[j]['toppings_area'] = requestJson.order.pizza[i].toppings[j]._attributes.area;
                        delete requestJson.order.pizza[i].toppings[j]._attributes;
                        let pizzaItemsLength = requestJson.order.pizza[i].toppings[j].item.length
                        if(pizzaItemsLength > 12){
                            message = 'You can only have a maximum of 12 toppings item.'
                            throw new Error();
                        }

                        if (pizzaItemsLength !== undefined) {
                            for (let k = 0; k < pizzaItemsLength; k++) {
                                requestJson.order.pizza[i].toppings[j].item[k]['toppings_item'] = requestJson.order.pizza[i].toppings[j].item[k]._text;
                                delete requestJson.order.pizza[i].toppings[j].item[k]._text;
    
                            }                            
                        } else {
                            requestJson.order.pizza[i].toppings[j].item['toppings_item'] = requestJson.order.pizza[i].toppings[j].item._text;
                            delete requestJson.order.pizza[i].toppings[j].item._text;
                        }
                    }
                }
            }
            console.log(requestJson.order)
            // // console.log(requestJson.order.pizza.toppings.toppings_area)
            // res.send(requestJson);
            const result = await models.Order.create(requestJson.order,
                {
                    include: {
                    model: models.Pizza,
                    required: true,
                    include: [ models.Pizza_Addons]
                }});
            res.send(result);
        } catch (error) {
            console.log(error);
            res.status(500).send(message);
        }
    }
}

module.exports = orderServices;