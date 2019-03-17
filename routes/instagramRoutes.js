const axios = require('axios');

module.exports = app => {


  app.get('/api/instagram/feeds', async (req, res) => {
    // $.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=2220345295.aaaced0.d8319c47df1646e19ec4824e53e673d9')

    const instaFeeds = await axios
      .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=2220345295.aaaced0.d8319c47df1646e19ec4824e53e673d9');

      console.log(instaFeeds.data)

    res.send(instaFeeds.data)

  })
}
