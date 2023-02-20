const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connectDB = require("./service/connect.js");
connectDB();

const Restaurants = require("./models/restaurants.js");

const filter = require("./controllers/filter");

app.listen(3000);
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method + ":" + req.url);
  next();
});

const funct =  (req,res) => {
  Restaurants.find({city_name: "Delhi" }, (err, restaurants) => {
    if (err) return console.log(err);
    res.send({length: restaurants.length, restaurants: restaurants})
;
  });
  // Restaurants.updateMany({city_name: "New Delhi"}, {$set: {city_name: "Delhi"}} ,(err, result) => {
  //   if(err) return res.send(err);
  //   res.send(result);
  // })
};


app.get("/restaurants", async (req, res) => {
  Restaurants.find((err, data) => {
    if (err) {
      console.error(err);
    }
    res.send(data);
  });
});

app.get("/restaurants/filter", filter);

app.get("/find", funct);

//   'Mumbai',
//   'Delhi',
//   'Chandigarh',
//   'Bangalore',
//   'Pune',
//   'New Delhi',
//   'Bengaluru',
//   'Hyderabad'
