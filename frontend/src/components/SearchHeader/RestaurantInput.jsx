import React from "react";
import { BiSearch } from "react-icons/bi";
import {useDispatch, useSelector} from 'react-redux'
import { changeSearch } from "../../actions";
import SearchResult from "./SearchResult"

const RestaurantInput = ({ className, name,value }) => {

  
  const dispatch = useDispatch();

  return (

      <div
        className={`${className} d-flex align-items-center  bg-white text-dark border text-secondary`}
      >
        <BiSearch className="mx-3 fs-4" />
        <input
          id=""
          type="text"
          name={name}
          value={value}
          onChange={(e) => dispatch(changeSearch(e.target.value))}
          className="h-100 w-100 text-primary py-3 outline-none border-0"
          placeholder="Search for restaurants"
        />
      </div>
  );
};

export default RestaurantInput;
