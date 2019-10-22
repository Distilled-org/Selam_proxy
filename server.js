const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')


app.use(cors());
app.use('/', express.static('public'));

// app.get('/info', (req, res) => {
//   request('http://localhost:7000', function (error, response, body) {
//     res.send(body);
//   })
// })
// app.get('/images', (req, res) => res.send('<div>images!</div>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
