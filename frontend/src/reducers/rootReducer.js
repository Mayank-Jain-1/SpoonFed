import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";


const rootReducer = combineReducers({
  restaurants: restaurantReducer,
})

export default rootReducer;
