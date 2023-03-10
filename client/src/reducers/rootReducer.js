import { combineReducers } from "redux";
import filteredRestaurants from "./filteredRestaurantsReducer";
import filterReducer from "./filterReducers";
import restaurantReducer from "./restaurantReducer";
import searchReducers from "./searchReducers"

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  searchInputs: searchReducers,
  filterInputs: filterReducer,
  filteredRestaurants: filteredRestaurants
})

export default rootReducer;
