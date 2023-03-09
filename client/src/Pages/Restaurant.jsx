import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/restaurant?id=${id}`)
      .then((res) => setRestaurant(res.data))
      .catch((err) => console.log(err));
  }, []);


  return <h1>{restaurant.name}</h1>;
};

export default Restaurant;
