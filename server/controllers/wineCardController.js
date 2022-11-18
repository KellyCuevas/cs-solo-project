const models = require('../models/wineModels');
const { MongoClient } = require("mongodb");
require('dotenv').config();
const uri = process.env.ATLAS_KEY;

const client = new MongoClient(uri);
const database = client.db('corkboard');
const wines = database.collection('wines');
// const db = 'corkboard';
const wineCardController = {};

wineCardController.addWine = async(req, res, next) => {
  // const {name, wine_color, varietal, winery_location, vintage_year, price, tasting_notes} = req.body;
  console.log(req.body.name, req.body.wine_color);
  const {name, wine_color, varietal, winery_location, vintage_year, price, tasting_notes} = req.body;
 try{
  const newWineEntry = {
  name: name,
  wine_color: wine_color,
  varietal: varietal,
  winery_location: winery_location,
  vintage_year: vintage_year,
  price: price,
  tasting_notes: tasting_notes
 }
 
 console.log(newWineEntry);
 console.log(wines);
 const newWine = await wines.save(newWineEntry);
 console.log(newWine);
  res.locals.wine = newWine; 
  return next();
 }catch(err) {
  return next(err);
 }
};

wineCardController.getWine = async(req, res, next) => {
  console.log('this is wineCardController.getWine');
  try{
    const wineData = await wines.find({});
  
    console.log('this is wineData' + wineData);
    res.locals.wineList = wineData;
    return next();
  }catch(err) {
    return next({
      log: 'error in wineController.getWine',
      status: 204,
      message: { err: 'WineList not available' },
    });
   };
};

wineCardController.getWineRed = async(req, res, next) => {
  console.log('this is wineCardController.getWine');
  try{
    const wineData = await wines.find({wine_color: ['red', 'Red']});
    console.log('this is wineData' + wineData);
    res.locals.wineList = wineData;
    return next();
  }catch(err) {
    return next({
      log: 'error in wineController.getWine',
      status: 204,
      message: { err: 'WineList not available' },
    });
   };
};

wineCardController.getWineWhite = async(req, res, next) => {
  console.log('this is wineCardController.getWine');
  try{
    const wineData = await wines.find({wine_color: ['white', 'White']});
    console.log('this is wineData' + wineData);
    res.locals.wineList = wineData;
    return next();
  }catch(err) {
    return next({
      log: 'error in wineController.getWine',
      status: 204,
      message: { err: 'WineList not available' },
    });
   };
};

wineCardController.getWineRose = async(req, res, next) => {
  console.log('this is wineCardController.getWine');
  try{
    const wineData = await wines.find({wine_color: ['rose', 'Rose', 'pink', 'Pink']});
    console.log('this is wineData' + wineData);
    res.locals.wineList = wineData;
    return next();
  }catch(err) {
    return next({
      log: 'error in wineController.getWine',
      status: 204,
      message: { err: 'WineList not available' },
    });
   };
};

wineCardController.getWineSparkling = async(req, res, next) => {
  console.log('this is wineCardController.getWine');
  try{
    const wineData = await wines.find({wine_color: ['sparkling', 'Sparkling', 'champagne', 'Champagne']});
    console.log('this is wineData' + wineData);
    res.locals.wineList = wineData;
    return next();
  }catch(err) {
    return next({
      log: 'error in wineController.getWine',
      status: 204,
      message: { err: 'WineList not available' },
    });
   };
};

wineCardController.getWineUnderTwentyFive = async(req, res, next) => {
  console.log('this is wineCardController.getWine');
  try{
    const wineData = await wines.find({price: {$lt: 25}});
    console.log('this is wineData' + wineData);
    res.locals.wineList = wineData;
    return next();
  }catch(err) {
    return next({
      log: 'error in wineController.getWine',
      status: 204,
      message: { err: 'WineList not available' },
    });
   };
};

module.exports = wineCardController;