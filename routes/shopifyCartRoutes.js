const keys = require('../config/keys');
const Shopify = require('shopify-api-node');

module.exports = app => {
  const shopify = new Shopify({
    shopName: keys.shopName,
    apiKey: keys.apiKey,
    password: keys.password
  });

  const order = {
      "email": "usmcjimmy@gmail.com",
      "send_receipt": true,
      "line_items": [
        {
          "variant_id": 33791786248,
          "quantity": 1,
        }
      ]
    }

  // CREATE NEW ORDER
  app.post('/api/shopify/order/new', async (req, res) => {
    console.log('order----', order)
    await shopify.order.create(order)
      .then((data) => {
        console.log('data', data)
      })
      .catch((err) => {
        console.log('err', err);
      })

    res.send(order)
  })

  // GET ONE ORDER
  app.post('/api/shopify/order/id', async (req, res) => {
    console.log('order----', order)
    const orderId = '734567563375'
    await shopify.order.get(orderId)
      .then((order) => {
        console.log('data', order)
        res.send(order)
      })
      .catch((err) => {
        console.log('err', err);
      })
  })


  // GET ALL ORDERS
  app.get('/api/shopify/order', async (req, res) => {
    await shopify.order.list()
      .then((data) => {
        orderList = [];
        data.forEach((order) => {
          orderList.push(order);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });

    res.send(orderList);
  })


};
