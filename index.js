var express = require('express')
const axios = require('axios');
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))





let isdone=true;
function myTimer() {
  if(isdone){
    isdone=false;
        axios({
          method:'get',
          url:'https://api-cloud.huobi.co.jp/market/detail/merged?symbol=btcjpy'
        }).then(function (response) {
          console.log(response.data);
            axios.get("https://script.google.com/macros/s/AKfycbwhq4DLdwrfkow57q2LaklmujQSWvTw3ztxYtyj6zUt5jN2tprd/exec?action=huobijp&price="+response.data.tick.close)
            .then((response)  =>  {
              console.log(response.data);
              isdone=true;
            }, (error)  =>  {isdone=true;})  
        })
        .catch(function (error) {
            console.log(error);
            isdone=true;
        });
  }else{
    myTimer();
  }
}
setInterval(myTimer, 6000);




app.get('/', function(req, res) {
  res.send('HELLO');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})