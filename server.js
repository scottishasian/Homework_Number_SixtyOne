const express = require('express');
const controllers = require('./controllers/')
const app = express();

app.use(express.static('client/public'));
// app.use(require('./controllers/index.js'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.use(controllers);

app.listen(3000, function () {
  console.log(`Films app listening on port ${ this.address().port }`);
});
