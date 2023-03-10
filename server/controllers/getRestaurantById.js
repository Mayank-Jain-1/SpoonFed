const Restaurants = require("../models/restaurants");

const getRestuarantById = async (req,res) => {
  const {id} = req.query;
  const restaurant = await Restaurants.findById(id);
  res.send(restaurant);
}

module.exports = getRestuarantById;