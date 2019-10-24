const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const request = require('request');


app.use(cors());
app.use('/', express.static('public'));

app.get('/item/:num', (req, res) => {
  const id = req.params.num;
  request(`http://ec2-18-191-231-115.us-east-2.compute.amazonaws.com:7000/item/${id}`, function (error, response, body) {
    res.send(body);
  })
})

app.get('/items/:num', (req, res) => {
  const id = req.params.num;
  request(`http://ec2-34-217-10-22.us-west-2.compute.amazonaws.com:4000/items/${id}`, function (error, response, body) {
    res.send(body);
  })
})

app.get('/vendor.bundle.js', (req, res) => {
  request(`http://ec2-18-191-231-115.us-east-2.compute.amazonaws.com:7000/vendor.bundle.js`, function (error, response, body) {
    res.send(body);
  })
})
app.get('/app2.bundle.js', (req, res) => {
  request(`http://ec2-18-191-231-115.us-east-2.compute.amazonaws.com:7000/app2.bundle.js`, function (error, response, body) {
    res.send(body);
  })
})
app.get('/app.bundle.js', (req, res) => {
  request(`http://ec2-34-217-10-22.us-west-2.compute.amazonaws.com:4000/app.bundle.js`, function (error, response, body) {
    res.send(body);
  })
})

app.get('/images', (req, res) => res.send('<div>images!</div>'))

app.listen(port, () => console.log(`Proxy server listening on port ${port}!`))
