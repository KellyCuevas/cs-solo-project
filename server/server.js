const express = require('express');
const app = express();
const path = require('path');
const wineCardController = require('./controllers/wineCardController');
const multer  = require('multer');
const upload = multer();
app.use(express.json());

// const PORT = 3000;

app.get('/wines', wineCardController.getWine, (req, res) => {
  console.log('this is get');
  return res.status(200).send({wineList})
});

// app.get('/wines/red', wineCardController.getWineRed, (req, res) => {
//   console.log('this is get');
//   return res.status(200).json(res.locals.wineList)
// });

// app.get('/wines/white', wineCardController.getWineWhite, (req, res) => {
//   console.log('this is get');
//   return res.status(200).json(res.locals.wineList)
// });

// app.get('/wines/rose', wineCardController.getWineRose, (req, res) => {
//   console.log('this is get');
//   return res.status(200).json(res.locals.wineList)
// });

// app.get('/wines/sparkling', wineCardController.getWineSparkling, (req, res) => {
//   console.log('this is get');
//   return res.status(200).json(res.locals.wineList)
// });

// app.get('/wines/undertwentyfive', wineCardController.getWineUnderTwentyFive, (req, res) => {
//   console.log('this is get');
//   return res.status(200).json(res.locals.wineList)
// });

app.post('/wines', upload.none(), wineCardController.addWine, (req, res) => {
  console.log(req.body);
  return res.status(200).json(res.locals.wine)
});

if('NODE_ENV=production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
};

//404 error handler
app.use((req, res) => {
  return res.status(404).sendFile(path.join(__dirname, '/client/404.html'));
});


// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000);

// app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}...`);
// });