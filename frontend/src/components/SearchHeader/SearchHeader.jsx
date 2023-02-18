import React, { useState } from "react";
import Navbar from "../Navbar";
import bgimage from "../../Images/bg.png";
import Logo from "../Logo";
import CitySelect from "./CitySelect";

export const SearchHeader = () => {

  const [searchState, setSearchState] = useState({
    city: '',
    restaurant: ''
  })
  const handleStateChange = (e) => {
    setSearchState({...searchState, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Navbar />
      <div
        style={{ height: "480px" }}
        className="backdrop
      position-relative container-fluid d-flex flex-column justify-content-center align-items-center p-3 text-white"
      >
        <div className="position-absolute left-0 h-100 w-100 d-flex justify-content-center align-items-center overflow-hidden">
          <img
            src={bgimage}
            alt=""
            className="w-100 -z-20"
            style={{ objectFit: "cover", minHeight: "960px" }}
          />
        </div>
        <Logo className="mb-4 d-none d-md-block" text="Sf!" size={70} />
        <Logo className="mb-4 d-md-none" text="Sf!" size={50} />
        <p className="fs-2 fw-normal text-center mb-4 p1">
          Find the best restaurants, cafés, and bars
        </p>
        <div className="row w-100 justify-content-center px-4 gx-5 gy-4">
        <CitySelect name='city' value={searchState.city} onChange={handleStateChange}/>

          <div
            className="d-flex col-xl-4 align-items-center col-lg-5 col-md-6 col-sm-9 col-xs-12 bg-white text-dark border px-0 mx-2 cl-dg position-relative
          "
          >
            <i id="searchIcon" className="zmdi zmdi-search zmdi-hc-lg mx-1"></i>
            <input
              id="inpLocation"
              type="text"
              className="h-100 w-100 px-5 cl-db"
              placeholder="Search for restaurants"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchHeader;
