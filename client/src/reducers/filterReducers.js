const initialState = {
  city: "",
  cuisines: [
    "North Indian",
    "South Indian",
    "Chinese",
    "Fast Food",
    "Street Food",
  ],
  cuisinesChecked: [false,false,false,false,false],
  cost: "",
  sort: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return {
        ...state,
        ...action.params,
      };
    default:
      return state;
  }
};

export default filterReducer;
