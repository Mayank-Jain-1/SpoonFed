const initialState = []

const filteredRestaurants = (state = initialState, action) => {
  switch(action.type){
    case "UPDATE_FILTERED_RESTAURANTS":
      return action.restaurants
    default:
      return state
  }
}

export default filteredRestaurants;