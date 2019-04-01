const keys = require('../config/keys');
const Shopify = require('shopify-api-node');

module.exports = app => {
  const shopify = new Shopify({
    shopName: keys.shopName,
    apiKey: keys.apiKey,
    password: keys.password
  });

  app.get('/api/shopify/order', async (req, res) => {
    await shopify.checkout.list()
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
