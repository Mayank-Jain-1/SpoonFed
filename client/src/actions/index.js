export const updateRestaurant = (restaurant) => {
  return {
    type: "UPDATE_RESTAURANT",
    restaurant: restaurant
  }
}
export const ADD_RESTAURANT = (restaurant) => {
  return {
    type: "ADD_RESTAURANT",
    restaurant
  }
}

export const changeCity = (city) => {
  return {
    type: "CHANGE_CITY",
    city
  }
}

export const changeSearch = (search) => {
  return {
    type: "CHANGE_SEARCH",
    search
  }
}

export const changeFilterInputs = (params) => {
  return {
    type: "UPDATE_FILTER",
    params: {...params}
  }
}

export const updateFilteredRestaurants = (restaurants) => {
  return {
    type: "UPDATE_FILTERED_RESTAURANTS",
    restaurants: restaurants
  }
}