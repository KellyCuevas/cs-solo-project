const express = require('express');
const app = express();
const path = require('path');
const wineCardController = require('./controllers/wineCardController');
const multer  = require('multer');
const upload = multer();
app.use(express.json());


app.post('/', upload.none(), wineCardController.addWine, (req, res) => {
  console.log(req.body);
  return res.status(200).json(res.locals.wine)
});

if('NODE_ENV=production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(3000);