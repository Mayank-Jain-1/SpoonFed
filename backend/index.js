const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connectDB = require("./service/connect.js");
connectDB();

const Restaurants = require("./models/restaurants.js");

const filter = require("./controllers/filter");

app.listen(4000);
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method + ":" + req.url);
  next();
});

app.get("/restaurants/filter", filter);


app.get("/restaurants", async (req, res) => {
  Restaurants.find((err, data) => {
    if (err) {
      console.error(err);
    }
    res.send(data);
  });
});