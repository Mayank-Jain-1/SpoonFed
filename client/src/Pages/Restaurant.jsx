import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavHeader from "../components/Restaurant/NavHeader";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState({});
  let { id } = useParams();

  // IMPROVEMENT: I understand that making a get request is unneccessary as we have all the restaurants already in the redux state. But just for the sake of assignment and more backend reliability i have made this api and used it to get the restaurants data.

  useEffect(() => {
    axios
      .get(`/restaurant?id=${id}`)
      .then((res) => setRestaurant(res.data))
      .catch((err) => console.log(err));

    // eslint-disable-next-line
  }, []);

  return (
    <div className="">
      <NavHeader />
      <h1>{restaurant.name}</h1>
    </div>
  );
};

export default Restaurant;
