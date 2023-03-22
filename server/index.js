const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require("./service/connect.js");
connectDB();

const Restaurants = require("./models/restaurants.js");

const filter = require("./controllers/filter");
const getRestuarantById = require("./controllers/getRestaurantById.js");
const createOtp = require("./controllers/otp/createOtp.js");
const verifyOtp = require("./controllers/otp/verifyotp.js");


app.listen(4000);
app.use(express.json());
app.use((req, res, next) => {
   console.log(req.method + ":" + req.url + "\n");
   next();
});

app.get("/api/restaurants/filter", filter);

app.get("/api/allRestaurants", async (req, res) => {
   Restaurants.find((err, data) => {
      if (err) {
         console.error(err);
      }
      res.send(data);
   });
});

app.get("/api/restaurant", getRestuarantById);

app.post("/api/createotp", createOtp);
app.post("/api/verifyotp", verifyOtp);
