import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavHeader from "../components/NavHeader";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState({});
  let { id } = useParams();
  const cuisines = restaurant.Cuisine
    ? restaurant.Cuisine.map((cuisine) => cuisine.name)
    : [];
  console.log("cuisines: ", cuisines);
  // IMPROVEMENT: I understand that making a get request is unneccessary as we have all the restaurants already in the redux state. But just for the sake of assignment and more backend reliability i have made this api and used it to get the restaurants data.
  const [infoSelected, setInfoSelected] = useState("Overview");

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
      <div className="container px-sm-0">
        <img
          src={restaurant.thumb}
          alt=""
          className="w-100 object-cover mt-3 mt-md-5 restaurantCoverImage "
        />

        <div className="px-3 px-md-0">
          <div className="d-flex align-items-center">
            <img
              src={restaurant.thumb}
              alt=""
              style={{width: "52px", height: '52px'}}
              className="object-cover restaurantCoverImage rounded-3 me-3  d-md-none"
            />
            <h2 className="fw-semibold my-4 text-primary">{restaurant.name}</h2>
          </div>
          <div className="d-flex justify-content-between border-3 border-bottom align-items-end mb-3">
            <div className="">
              <button
                onClick={() => setInfoSelected("Overview")}
                className={`bg-transparent border-0
              py-2 px-3 px-sm-4 text-primary fw-bold -mb-2 ${
                infoSelected === "Overview" && "border-bottom border-danger"
              }`}
              >
                Overview
              </button>
              <button
                onClick={() => setInfoSelected("Contact")}
                className={`bg-transparent border-0
              py-2 px-3 px-sm-4 text-primary fw-bold -mb-2 ${
                infoSelected === "Contact" && "border-bottom border-danger"
              }`}
              >
                Contact
              </button>
            </div>
            <button className="bg-danger text-white py-2 px-3 border-0 rounded-2 mb-3">
              Place and order
            </button>
          </div>

          <div className={`${infoSelected !== "Overview" && "d-none"} px-3`}>
            <p className="text-primary fw-bold mb-4 mt-5">About this Place</p>
            <p className="text-primary fw-bold my-1">Cuisines</p>
            <p className="text-primary ">{cuisines.join(", ")}</p>
            <p className="text-primary fw-bold my-1 mt-4">Average Cost</p>
            <p className="text-primary ">
              ₹{" "}
              {`${restaurant.cost - (restaurant.cost % 100)} - ${
                restaurant.cost - (restaurant.cost % 100) + 100
              } for two people (approx.)`}{" "}
            </p>
          </div>
          <div className={`${infoSelected !== "Contact" && "d-none"} px-3 `}>
            <p className="text-primary fw-bold mb-1 mt-5">Phone Number</p>
            <p className="text-danger mb-4">+91 7888632012</p>
            <p className="text-primary fw-bold my-1">{restaurant.name}</p>
            <p className="text-primary ">{restaurant.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
