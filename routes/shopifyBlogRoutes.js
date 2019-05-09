const _ = require('lodash');
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

  let pawsomePals = [];
  const shopifyBlogs = [
    {id: '103573896', title: 'PAWSOME PALS'}
  ]
  // GET ALL BLOGS
  app.get('/api/shopify/blogs/getall', async (req, res) => {
    console.log("inside get ALL blogs")
    await shopify.article.list()
      .then((data) => {
        blogs = [];
        data.forEach((blog) => {
          blogs.push(blog);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });

    res.send(blogs);
  })

  // GET PAWSOME PALS BLOG
  app.get('/api/shopify/blogs/pawsome_pals', async (req, res) => {
    // console.log("inside get pawsome pal blogs")
    await shopify.article.list('103573896')
      .then((data) => {
        pawsomePals = [];
        data.forEach((blog) => {
          pawsomePals.push(blog);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });

    res.send(pawsomePals);
  })

  // GET ONE BLOG
  app.post('/api/shopify/blogs/pawsome_pals/id', async (req, res) => {
    console.log("inside get ONE pawsome pal blogs")

    const id = req.body.blogId

    console.log('blogId', req.body)

    await shopify.article.get('103573896', id)
      .then((blog) => {
        // console.log('blog-----', blog)
        res.send(blog);
      })
      .catch((err) => {
        console.log('err', err);
      });

  })

}
