import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCity } from "../../actions";

const CitySelect = ({ className, name }) => {
  const dispatch = useDispatch();

  return (
    <select
      id="location"
      name={name}
      value={useSelector(store => store.searchInputs.city)}
      className={`${className} z-0 col-xl-2 col-lg-3 col-md-3 col-sm-9 col-12
      bg-white text-dark border px-3 py-3 mx-3 text-primary`}
      onChange={(e) => {
        dispatch(changeCity(e.target.value));
      }}
    >
      <option value="">Select a location</option>
      <option value="Pune">Pune</option>
      <option value="Chandigarh">Chandigarh</option>
      <option value="Delhi">Delhi</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Hyderabad">Hyderabad</option>
    </select>
  );
};

export default CitySelect;
