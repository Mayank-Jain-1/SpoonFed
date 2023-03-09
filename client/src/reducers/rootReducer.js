import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";
import searchReducers from "./searchReducers"

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  searchInputs: searchReducers
})

export default rootReducer;
