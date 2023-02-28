const initialState = [];

const restaurantReducer =  (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_RESTAURANT":
      return action.restaurant;
    default:
     return state;
  }
};

export default restaurantReducer;

