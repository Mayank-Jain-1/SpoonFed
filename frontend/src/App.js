import "./App.css";
import axios from "axios"
import React, { useEffect } from "react";
import Landing from "./Pages/Landing";
import { useDispatch } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { updateRestaurant } from "./actions";


function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    axios
    .get("/restaurants")
    .then((res) => {
      dispatch(updateRestaurant(res.data));
    })
    .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  
  return (
      <Landing />
  );
}

export default App;
