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
            res.status(500).send("Something went wrong");
        }
    },

    async postOrders(req,res) {
        var message = 'Something went wrong. Please try again later'
        const requestFromClient = req.body.pml;
        let requestJson;
        try {
            let xmlInput = pmlConvertionService.transformPmlToXml(requestFromClient)
            requestJson = pmlConvertionService.xmlToJSon(xmlInput)
        } catch(error) {
            message = 'Input format error. Please check PML';
            res.status(500).send(message);
            return;
        }

        requestJson.order['order_number'] = requestJson.order._attributes.number;
        
        delete requestJson.order._attributes;
        let pizzaLength = requestJson.order.pizza.length;

        if(pizzaLength > 24) {
            message = 'You can only order a maximum of 24 pizza'
            throw new Error();
        }

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
        try {
            const orderResult = await models.Order.create({ order_number: requestJson.order.order_number });            
        } catch (error) {
            if(error.parent.errno === 1062) {
                message = 'Duplicate order number is not allowed.'
            }
            res.status(500).send(message);
        }
        try {   
            requestJson.order.pizza.forEach(async(p) => {
                const pizzaResult = await models.Pizza.create({
                    size: p.size,
                    crust: p.crust,
                    type: p.type,
                    pizza_number: p.pizza_number,
                    order_number: requestJson.order.order_number,
                });
                const pizzaId = pizzaResult.dataValues.pizza_id;
                const toppingData = [];
                if (p.toppings) {
                    p.toppings.forEach(topping => {
                        if (Array.isArray(topping.item)) {
                            topping.item.forEach(tI => {
                                toppingData.push({
                                    pizza_id: pizzaId,
                                    toppings_area: topping.toppings_area,
                                    toppings_item: tI.toppings_item,
                                });
                            })
                            return;
                        }
                        toppingData.push({
                            pizza_id: pizzaId,
                            toppings_area: topping.toppings_area,
                            toppings_item: topping.item.toppings_item,
                        });
                    })
                    const toppingsResult = await models.Pizza_Addons.bulkCreate(toppingData);
                }
    
            });
            res.send('success');
        } catch (error) {
            console.log(error.code)
            res.status(500).send(message);
        }
    }
}

module.exports = orderServices;