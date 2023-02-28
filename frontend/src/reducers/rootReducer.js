import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";


const rootReducer = combineReducers({
  restaurant: restaurantReducer,
})

export default rootReducer;
