import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCity } from "../../actions";

const CitySelect = ({ className, name, value, onChange }) => {
  const dispatch = useDispatch();
  const city = useSelector((store) => store.searchInputs);
  console.log("city: ", city);

  return (
    <select
      id="location"
      name={name}
      value={value}
      className={`${className} z-0 col-xl-2 col-lg-3 col-md-3 col-sm-9 col-12
      bg-white text-dark border px-3 py-3 mx-3 text-primary`}
      onChange={(e) => {
        dispatch(changeCity(e.target.value));
      }}
    >
      <option value="">Select a location</option>
      <option value="Ludhiana">Ludhiana</option>
      <option value="Chandigarh">Chandigarh</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Chennai">Chennai</option>
      <option value="Dehradun">Dehradun</option>
      <option value="Delhi">Delhi</option>
    </select>
  );
};

export default CitySelect;
