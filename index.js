var express = require('express')
const axios = require('axios');
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
 let url = 'https://api-cloud.huobi.co.jp/market/detail/merged?symbol=btcjpy';
 let price='0';
  axios({
      method:'get',
      url
  })
  .then(function (response) {
       res.send(JSON.stringify(response.data.tick.close));
      console.log(response.data.tick.close);     
  })
  .catch(function (error) {
      console.log(error);
  });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})