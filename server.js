var express = require('express');
var app = express();

app.use('/external', express.static(__dirname + '/node_modules'));
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
   res.render('index.html');
})

var server = app.listen(process.env.PORT || 4000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})