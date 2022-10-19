const { MongoExpiredSessionError } = require('mongodb');
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://kcuevas:corkboardwine@cluster0.vd73340.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(MONGO_URI, {
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
    price: Mixed,
    tasting_notes: String
  });

  const Wine = mongoose.model('wine', wineSchema);
  module.exports = { Wine };