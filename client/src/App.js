import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Landing from "./Pages/Landing";
import { useDispatch } from "react-redux";
import { updateRestaurant } from "./actions";
import { Routes, Route } from "react-router-dom";
import Restaurant from "./Pages/Restaurant";
import Filter from "./Pages/Filter";

function App() {
   const dispatch = useDispatch();

    const [testStrig, setTestStrig] = useState("")
    console.log('testStrig: ', testStrig);

   useEffect(() => {
      axios
         .get("/test")
         .them((res) => {
            console.log(res.data);
            setTestStrig(res.data);
         })
         .catch((err) => console.log(err));

      axios
         .get("/allRestaurants")
         .then((res) => {
            dispatch(updateRestaurant(res.data));
            console.log("restaurant data fetched succesfully");
            // dispatch(updateFilteredRestaurants(res.data));
         })
         .catch((err) => console.log(err));
      console.log("couldnt fetch the restaurant data");
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
