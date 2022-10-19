const models = require('../models/wineModels');
const { MongoClient } = require("mongodb");
require('dotenv').config();
const uri = process.env.ATLAS_KEY;

const client = new MongoClient(uri);

const wineCardController = {};

// wineCardController.addWine = (req, res, next) => {
//   try {
//     res.locals.wine = req.body.name;
//   }
//   next();
// }