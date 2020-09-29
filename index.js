var express = require('express')
const axios = require('axios');
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))






function myTimer() {
  axios.get("https://script.google.com/macros/s/AKfycbxuaXtlqR-Gvr8yEejWTZc18FwpinN703OIiaPOZRT-CwFTwBU/exec?action=insert-data&name=phuong&phone=0965100635&address=nghikieu,nghiloc,nghean")
     .then((response)  =>  {
       console.log(response.data);
     }, (error)  =>  {
       
 })

   }
 setInterval(myTimer, 6000);



app.get('/', function(req, res) {
  axios({
      method:'get',
      url:'https://api-cloud.huobi.co.jp/market/detail/merged?symbol=btcjpy'
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