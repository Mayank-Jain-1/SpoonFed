import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";
import Landing from "./Pages/Landing";
import { useDispatch } from "react-redux";
import { updateRestaurant } from "./actions";
import { Routes, Route } from "react-router-dom";
import Restaurant from "./Pages/Restaurant";
import Filter from "./Pages/Filter";
import Authentication from "./Pages/Authentication";
import { gapi } from "gapi-script";

function App() {
  gapi.load("client:auth2", () => {
    gapi.auth2.init({
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      plugin_name: "chat",
    });
  });


  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/allRestaurants")
      .then((res) => {
        dispatch(updateRestaurant(res.data));
        // dispatch(updateFilteredRestaurants(res.data));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/restaurant/:id" element={<Restaurant />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/authentication" element={<Authentication />} />
    </Routes>
  );
}

export default App;
