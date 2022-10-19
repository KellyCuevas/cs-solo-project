const models = require('../models/wineModels');
const { MongoClient } = require("mongodb");

const uri = 'mongodb+srv://kcuevas:corkboardwine@cluster0.vd73340.mongodb.net/?retryWrites=true&w=majority';

const wineCardController = {};

wineCardController.addWine = (req, res, next) => {
  try {
    res.locals.wine = req.body.name;
  }
  next();
}