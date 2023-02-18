import React from "react";
import Navbar from "./Navbar";
import bgimage from "../Images/bg.png";
import Logo from "./Logo";

export const SearchHeader = () => {
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
            className="w-100"
            style={{ objectFit: "cover", zIndex: "-1", minHeight: "960px" }}
          />
        </div>
        <Logo className='mb-4' text='Sf!' size={70}/>
        <h2 className="title text-center mb-4  p1">
          Find the best restaurants, cafés, and bars
        </h2>
        <div className="row w-100 justify-content-center px-4 gx-5 gy-4">
          <select
            id="location"
            name="location"
            className="col-xl-2 col-lg-3 col-md-3 col-sm-9 col-xs-12
          bg-white text-dark border px-3 py-3 mx-3 cl-db"
          >
            <option value="none">Select a location</option>
            <option value="Ludhiana">Ludhiana</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Dehradun">Dehradun</option>
            <option value="Delhi">Delhi</option>
          </select>
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