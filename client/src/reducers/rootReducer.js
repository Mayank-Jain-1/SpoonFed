import { combineReducers } from "redux";
import filterReducer from "./filterReducers";
import restaurantReducer from "./restaurantReducer";
import searchReducers from "./searchReducers"

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  searchInputs: searchReducers,
  filterInputs: filterReducer
})

export default rootReducer;
