const keys = require('../config/keys');
const Shopify = require('shopify-api-node');
const mongoose = require('mongoose');
const ShoppingCarts = mongoose.model('shoppingCart');

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

  // UPDATE ONE CART QTY
  app.post('/api/shopify/shopping_cart/changeCartQty', async (req, res) => {
    const { id, clientId, qty} = req.body

    const query = { _id: id }
    // console.log('qty---',  qty)

    if(qty === 0) {
      await ShoppingCarts.findOneAndDelete(query)
    } else {
      await ShoppingCarts.findOneAndUpdate(query, {qty: qty})
    }

    const clientIdQuery = { clientId: clientId}

    await ShoppingCarts.find(clientIdQuery)
      .then((shoppingCart) => {
        res.send(shoppingCart)
      })
      .catch((error) => {
        console.log(error.message)
      })

  })

  // DELTE ONE CART ITEM
  app.post('/api/shopify/shopping_cart/deleteOne', async (req,res) => {
    const { id, clientId } = req.body

    const idQuery = { _id: id }
    await ShoppingCarts.findOneAndDelete(idQuery)

    const clientIdQuery = { clientId: clientId}

    await ShoppingCarts.find(clientIdQuery)
      .then((shoppingCart) => {
        res.send(shoppingCart)
      })
      .catch((error) => {
        console.log(error.message)
      })
  })


  // ADD TO SHOPPING CART
  app.post('/api/shopify/shopping_cart/new', async (req, res) => {
    // console.log('checkout----', req.body)
    const { clientId, varians_id, name, imgUrl, color, size, price, qty, compledtedCheckout } = req.body
    const line_items = req.body

    const ShoppingCart = new ShoppingCarts({
      clientId,
      varians_id,
      name,
      imgUrl,
      color,
      size,
      price,
      qty,
      compledtedCheckout
    })

    await ShoppingCart.save()

    const query = { clientId: clientId}

    await ShoppingCarts.find(query)
      .then((shoppingCart) => {
        res.send(shoppingCart)
      })
      .catch((error) => {
        console.log(error.message)
      })

  })

  // GET ALL SHOPPING CART ITEMS
  app.post('/api/shopify/shopping_cart/getall', async (req, res) => {
    // console.log('getall shopping cart----', req.body)
    const { clientId } = req.body
    const query = { clientId: clientId }
    await ShoppingCarts.find(query)
      .then((cart) => {
        res.send(cart)
      })
      .catch((error) => {
        console.log(error.message)
      })
  })

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
