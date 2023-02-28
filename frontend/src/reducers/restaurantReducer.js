const initialState = [];

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return [...state, action.restaurant];
    case "DELETE_RESTAURANT":
      return state.filter((restaurant) => restaurant.id !== action.id);
    default:
      return state;
  }
};

export default restaurantReducer;