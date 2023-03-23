const { isValidObjectId } = require("mongoose");
const Restaurants = require("../../models/restaurants");

const getRestuarantById = async (req, res) => {
   const { id } = req.query;
   if(isValidObjectId(id)){
      const restaurant = await Restaurants.findById(id);
      res.send(restaurant);
   }else{
      res.status(400).json({
         message: 'Id not valid',
         status: res.statusCode
      })
   }
};

module.exports = getRestuarantById;
