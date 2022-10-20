const models = require('../models/wineModels');
const { MongoClient } = require("mongodb");
require('dotenv').config();
const uri = process.env.ATLAS_KEY;

const client = new MongoClient(uri);
const database = client.db('corkboard');
const wines = database.collection('wines');
// const db = 'corkboard';
const wineCardController = {};

wineCardController.getWine = async(req, res, next) => {
  console.log('this is wineCardController.getWine');
  try{
    const wineData = await models.Wines.find({tasting_notes: 'oppulent'});
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

wineCardController.addWine = async(req, res, next) => {
  // const {name, wine_color, varietal, winery_location, vintage_year, price, tasting_notes} = req.body;
  console.log(req.body.name);
 try{
  const newWineEntry = {
  name: req.body.name,
  wine_color: req.body.wine_color,
  varietal: req.body.varietal,
  winery_location: req.body.winery_location,
  vintage_year: req.body.vintage_year,
  price: req.body.price,
  tasting_notes: req.body.tasting_notes
 } 
 const newWine = await wines.insertOne(newWineEntry);
  res.locals.wine = newWine; 
  return next();
 }catch(err) {
  return next(err);
 }
};

module.exports = wineCardController;