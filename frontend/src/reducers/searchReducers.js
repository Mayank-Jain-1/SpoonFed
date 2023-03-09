const initialState = {
  city: "",
  search: "",
};

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CITY":
      return {
        ...state,
        city: action.city,
      };
    case "CHANGE_SEARCH":
      return {
        ...state,
        search: action.search,
      };
    default:
      return state;
  }
};

export default searchReducers