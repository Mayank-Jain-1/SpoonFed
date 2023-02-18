import React from "react";
import { BiSearch } from "react-icons/bi";

const RestaurantInput = ({ className, name, value, onChange }) => {
  return (
    <div
      className={`${className} d-flex align-items-center col-xl-4 col-lg-5 col-md-6 col-sm-9 col-12 bg-white text-dark border px-0 mx-2 cl-dg position-relative`}
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
  );
};

export default RestaurantInput;
