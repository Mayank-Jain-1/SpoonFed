const Order = require("../../models/order");

const placeorder = async (req, res) => {
   const { email, name, address, totalCost, order } = req.body;
   Order.create({
      email: email,
      name: name,
      address: address,
      totalCost: totalCost,
      order: order,
   })
      .then((response) => {
         res.status(200).json({
				message: "Order placed successfully :)",
				status: res.statusCode
			})
      })
      .catch((err) => {
         res.status(400).json({
				message: "Couldn't place order. Try again, or try later if persists.",
				status: res.statusCode
			})
      });
};

module.exports = placeorder;
