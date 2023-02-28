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