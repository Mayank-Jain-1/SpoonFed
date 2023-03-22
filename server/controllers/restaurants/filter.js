const Restaurants = require("../../models/restaurants");

const filter = async (req, res) => {
  const restaurants = await Restaurants.find();
  const defaultFilter = {
    city: "",
    cuisinesarr: null,
    minCost: 0,
    maxCost: Number.MAX_VALUE,
    page: 1,
    pagesize: 100,
  };

  
  let {city, cuisinesarr, cost, page, pageSize,sort} = req.query
  let minCost = 0, maxCost = Number.MAX_VALUE;
  
  city = city ? city.toLowerCase() : 
  defaultFilter.city;
  page = page ? page : defaultFilter.page;
  pageSize = pageSize ? pageSize : defaultFilter.pagesize;
  
  if (cost) {
    switch (cost[0]) {
      case "<":
        maxCost = parseInt(cost.slice(1));
        break;
      case ">":
        minCost = parseInt(cost.slice(1));
        break;
      default:
        minCost = parseInt(cost.split("-")[0]);
        maxCost = parseInt(cost.split("-")[1]);
        break;
    }
  }

  const resultData = restaurants.filter((restaurant) => {
    return (
      minCost <= restaurant.cost &&
      restaurant.cost <= maxCost &&
      (!cuisinesarr ||
        restaurant.Cuisine.some((cuisine) =>
          cuisinesarr.includes(cuisine.name.toLowerCase())
        )) &&
      (!city || restaurant.city_name.toLowerCase() === city)
    );
  });

  switch (sort) {
    case "low":
      resultData.sort((a, b) => a.cost - b.cost);
      break;
    case "high":
      resultData.sort((a, b) => b.cost - a.cost);
      break;
    default:
      break;
  }

  res.send(resultData.slice((page - 1) * pageSize, page * pageSize));
};

module.exports = filter;
