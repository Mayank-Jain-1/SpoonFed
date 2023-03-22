const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
   {
      email: {
         type: String,
         required: true,
      },
      name: {
         type: String,
         required: true,
      },
      address: {
         type: String,
         required: true,
      },
      totalCost: {
         type: Number,
         required: true,
      },
      order: [
         {
            id: {
               type: Number,
               required: true,
            },
            name: {
               type: String,
               required: true,
            },
            price: {
               type: Number,
               required: true,
            },
            quantity: {
               type: Number,
               required: true,
            },
         },
      ],
   },
   { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
