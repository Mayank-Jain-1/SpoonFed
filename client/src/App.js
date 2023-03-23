import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";
import Landing from "./Pages/Landing";
import { useDispatch } from "react-redux";
import { updateRestaurant } from "./actions";
import { Routes, Route } from "react-router-dom";
import Restaurant from "./Pages/Restaurant";
import Filter from "./Pages/Filter";

function App() {
   const dispatch = useDispatch();
   useEffect(() => {
      axios
         .get("/api/allRestaurants")
         .then((res) => {
            dispatch(updateRestaurant(res.data));
            // dispatch(updateFilteredRestaurants(res.data));
         })
         .catch((err) => {
            dispatch(updateRestaurant([]));
         });
      // eslint-disable-next-line
   }, []);

   return (
      <Routes>
         <Route path="/" element={<Landing />} />
         <Route path="/restaurant/:id" element={<Restaurant />} />
         <Route path="/filter" element={<Filter />} />
      </Routes>
   );
}

export default App;
