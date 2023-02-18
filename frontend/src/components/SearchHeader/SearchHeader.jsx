import React, { useState } from "react";
import Navbar from "../Navbar";
import Logo from "../Logo";
import CitySelect from "./CitySelect";
import BgImage from "./BgImage";
import RestaurantInput from "./RestaurantInput";

export const SearchHeader = () => {
  const [searchState, setSearchState] = useState({
    city: "",
    restaurant: "",
  });
  const handleStateChange = (e) => {
    setSearchState({ ...searchState, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div
        style={{ height: "480px" }}
        className="backdrop
      position-relative container-fluid d-flex flex-column justify-content-center align-items-center p-3 text-white"
      >
        <BgImage />
        <Logo className="mb-4 d-none d-md-block" text="Sf!" size={70} />
        <Logo className="mb-4 d-md-none" text="Sf!" size={50} />
        <p className="fs-2 fw-normal text-center mb-4 p1">
          Find the best restaurants, cafés, and bars
        </p>
        <div className="row w-100 justify-content-center px-4 gx-5 gy-4">
          <CitySelect
            name="city"
            value={searchState.city}
            onChange={handleStateChange}
          />

          <RestaurantInput name='restaurant' value={searchState.restaurant} onChange={handleStateChange}/>
        </div>
      </div>
    </>
  );
};

export default SearchHeader;