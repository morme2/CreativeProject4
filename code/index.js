const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

let tickets = [];
let id = 0;


app.post('/info', function(req, res, next) {
  var fs = require('fs');
  console.log("got post");
  var dataObject = {
    name: req.body.name,
    ssn: req.body.ssn,
    ccn: req.body.ccn,
  };
  fs.appendFile(__dirname + '/accountInfo.txt', JSON.stringify(dataObject, null, 4), function(err) {
    if (err) throw err;
    console.log('Updated!');
  });
  res.sendStatus(200);
});



app.get('/getinfo', (req, res) => {
  var fs = require('fs');
  console.log("getting");
  fs.readFile(__dirname + '/accountInfo.txt', function(err, data) {
    if (err) console.log(err);
    res.write(data);
    res.end();
  });
});


app.listen(4202, () => console.log('Server listening on port 4202!'));
