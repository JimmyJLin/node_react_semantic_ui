const keys = require('../config/keys');
const Shopify = require('shopify-api-node');

module.exports = app => {
  const shopify = new Shopify({
    shopName: keys.shopName,
    apiKey: keys.apiKey,
    password: keys.password
  });

  const currentCollectons = [
    { id: '432828168', name: 'women' },
    { id: '432828040', name: 'men' },
    { id: '422637896', name: 'jewelry' },
    { id: '422638024', name: 'bag_accessories' },
    { id: '422637320', name: 'socks' },
    { id: '448677832', name: 'sale' },
    { id: '422685448', name: 'new_arrivals'}
  ];

  let smartCollection = [];
  let womenCollection = [];
  let menCollection = [];
  let jewelryCollection = [];
  let bagAndAccessoriesCollection = [];
  let socksCollection = [];
  let salesCollection = [];
  let newArrivalCollection = [];

  // get all collections not including New Arrivals
  app.get('/api/shopify/collections', async (req, res) => {
    await shopify.smartCollection.list()
      .then((data) => {
        smartCollection = [];
        data.forEach((collection) => {
          smartCollection.push(collection);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });

    res.send(smartCollection);
  })

  // get women collection
  app.get('/api/shopify/collection/women', async (req, res) => {
    await shopify.product.list({
      collection_id: currentCollectons[0].id
    })
      .then((data) => {
        womenCollection = [];
        data.forEach((collection) => {
          womenCollection.push(collection);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });

    res.send(womenCollection);
  })

  // get men collection
  app.get('/api/shopify/collection/men', async (req, res) => {
    await shopify.product.list({
      collection_id: currentCollectons[1].id
    })
      .then((data) => {
        menCollection = [];
        data.forEach((collection) => {
          menCollection.push(collection);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });

    res.send(menCollection);
  })

  // get jewelry collection
  app.get('/api/shopify/collection/jewelry', async (req, res) => {
    await shopify.product.list({
      collection_id: currentCollectons[2].id
    })
      .then((data) => {
        jewelryCollection = [];
        data.forEach((collection) => {
          jewelryCollection.push(collection);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });

    res.send(jewelryCollection);
  })

  // get bag & accessories collection
  app.get('/api/shopify/collection/bag_accessories', async (req, res) => {
    await shopify.product.list({
      collection_id: currentCollectons[3].id
    })
      .then((data) => {
        bagAndAccessoriesCollection = [];
        data.forEach((collection) => {
          bagAndAccessoriesCollection.push(collection);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });

    res.send(bagAndAccessoriesCollection);
  })

  // get socks collection
  app.get('/api/shopify/collection/socks', async (req, res) => {
    await shopify.product.list({
      collection_id: currentCollectons[4].id
    })
      .then((data) => {
        socksCollection = [];
        data.forEach((collection) => {
          socksCollection.push(collection);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });

    res.send(socksCollection);
  })

  // get sales collection
  app.get('/api/shopify/collection/sales', async (req, res) => {
    await shopify.product.list({
      collection_id: currentCollectons[5].id
    })
      .then((data) => {
        salesCollection = [];
        data.forEach((collection) => {
          salesCollection.push(collection);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });

    res.send(salesCollection);
  })

  // new arrivals collection
  app.get('/api/shopify/collection/new_arrivals', async (req, res) => {
    await shopify.productListing.list({
      collection_id: currentCollectons[6].id
    })
      .then((data) => {
        newArrivalCollection = [];
        data.forEach((collection) => {
          newArrivalCollection.push(collection);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });

    res.send(newArrivalCollection);
  })

  // get one product
  app.get('/api/shopify/product/:id', async (req, res) => {
    const id = req.params.id
    await shopify.product.get(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log('err', err);
      });

  })



};
