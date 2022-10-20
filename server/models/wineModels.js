const { MongoExpiredSessionError } = require('mongodb');
const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");
require('dotenv').config();
const uri = process.env.ATLAS_KEY;

const client = new MongoClient(uri);

const db = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'corkboard'
})
  .then(() => console.log('Connected to Mongo DB'))
  .catch(err => console.log(err));

  const Schema = mongoose.Schema;

  //sets a schema for the 'wines' collection

  const wineSchema = new Schema({
    name: String,
    wine_color: String,
    varietal: String,
    winery_location: String,
    vintage_year: String,
    price: String,
    tasting_notes: String
  });

  const Wines = mongoose.model('wines', wineSchema);
  module.exports = { Wines, db };