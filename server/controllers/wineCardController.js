const models = require('../models/wineModels');

const wineCardController = {};

wineCardController.addWine = (req, res, next) => {
  try {
    res.locals.wine = req.body.name;
  }
  next();
}