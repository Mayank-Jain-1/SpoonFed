import React from "react";
import { BiSearch } from "react-icons/bi";
import {useSelector} from 'react-redux'
import SearchResult from "./SearchResult"

const RestaurantInput = ({ className, name, value, onChange }) => {

  const restaurants = useSelector(store => store.restaurants);



  return (
    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-12 px-0 mx-2  position-relative">
      <div
        className={`${className} d-flex align-items-center  bg-white text-dark border text-secondary`}
      >
        <BiSearch className="mx-3 fs-4" />
        <input
          id=""
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="h-100 w-100 text-primary py-3 outline-none border-0"
          placeholder="Search for restaurants"
        />
      </div>
      <div className="position-absolute start-0 top-100 bg-white w-100 px-2 shadow">
        <SearchResult />
      </div>
    </div>
  );
};

export default RestaurantInput;
