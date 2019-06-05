const _ = require('lodash');
const keys = require('../config/keys');
const Shopify = require('shopify-api-node');
const request = require('request');

module.exports = app => {
  const shopify = new Shopify({
    shopName: keys.shopName,
    apiKey: keys.apiKey,
    password: keys.password
  });

  // Carier Services Example
  // const shipping = {
  //   "origin": {
  //     "country": "USA",
  //     "postal_code": "11373",
  //     "province": "NY",
  //     "city": "Elmhurst",
  //     "name": null,
  //     "address1": "46-06 88th Street",
  //     "address2": "",
  //     "address3": null,
  //     "phone": "16135551212",
  //     "fax": null,
  //     "email": null,
  //     "address_type": null,
  //     "company_name": "Allthingsfrenchie, LLC"
  //   },
  //   "destination": {
  //     "country": "USA",
  //     "postal_code": "11040",
  //     "province": "NY",
  //     "city": "New Hyde Park",
  //     "name": "Melissa Ho",
  //     "address1": "41 Lawrence Street",
  //     "address2": "",
  //     "address3": null,
  //     "phone": null,
  //     "fax": null,
  //     "email": null,
  //     "address_type": null,
  //     "company_name": null
  //   },
  //   "items": [{
  //     "name": "Short Sleeve T-Shirt",
  //     "sku": "",
  //     "quantity": 1,
  //     "grams": 1000,
  //     "price": 1999,
  //     "vendor": "Jamie D's Emporium",
  //     "requires_shipping": true,
  //     "taxable": true,
  //     "fulfillment_service": "manual",
  //     "properties": null,
  //     "product_id": 48447225880,
  //     "variant_id": 258644705304
  //   }],
  //   "currency": "USD",
  //   "locale": "en"
  // }

  // ShipStation Get RATE
  app.post('/api/shopify/shipstation/getrate', async (req, res) => {
    const shippingData = req.body
    // console.log('body----', shippingData)
    const shipstationBody = {
      "carrierCode": "stamps_com",
      "serviceCode": null,
      "packageCode": null,
      "fromPostalCode": "11373",
      "toState": shippingData.state,
      "toCountry": "US",
      "toPostalCode": shippingData.zipcode,
      "toCity": shippingData.city,
      "weight": {
        "value": shippingData.weight,
        "units": "ounces"
      },

      "dimensions": {
        "units": "inches",
        "length": "10",
        "width": "7",
        // "height": "6"
      },
      "confirmation": "delivery",
      "residential": false
    }

    await request({
      method: 'POST',
      url: 'https://ssapi.shipstation.com/shipments/getrates',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ODkxMjM0NzIyOWZjNDEzMzhhYWI4ZjUyMDdjNWE3NTE6YjA2YWRiNDNjMDQ2NDZlNmE0NzQzNmM5MTQ5OWVlMjQ='
      },
      body: JSON.stringify(shipstationBody)
    }, function (error, response, body) {
      // console.log('Status:', response.statusCode);
      // console.log('Headers:', JSON.stringify(response.headers));
      // console.log('Response:----------', body);
      res.send(JSON.parse(body))
    });
  })

  // CREATE NEW CARRIER SERVICES
  app.post('/api/shopify/carrier-services/new', async (req, res) => {
    console.log("inside new carrier services", shipping)

    await shopify.carrierService.create(shipping)
      .then((rate) => {
        // console.log('rate-----', rate)
        res.send(rate);
      })
      .catch((err) => {
        console.log('err', err);
      });

  })

  // GET ALL RATES
  app.get('/api/shopify/carrier-services/list', async (req, res) => {
    console.log("inside get ALL carrier services")

    await shopify.carrierService.list()
      .then((carrierService) => {
        // console.log('carrierService List-----', carrierService)
        res.send(carrierService);
      })
      .catch((err) => {
        console.log('err', err);
      });

  })

}
