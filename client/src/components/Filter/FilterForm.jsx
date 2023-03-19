import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilterInputs,
  updateFilteredRestaurants,
} from "../../actions";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";

//TODO : Convert the checkboxes and the radio circles to component also if possible these inputs also to components.

const FilterForm = ({ className, changeFilterOpen }) => {
  const dispatch = useDispatch();
  const { city, cuisines, cuisinesChecked, cost, sort } = useSelector(
    (store) => store.filterInputs
  );
  const availableCost = ["<500", "500-1000", "1000-1500", "1500-2000", ">2000"];
  const costLabels = [
    "Less than 500",
    "` 500 to ` 1000",
    "` 1000 to ` 1500",
    "` 1500 to ` 2000",
    "2000+",
  ];

  const handleCuisineChange = (index) => {
    let checked = cuisinesChecked;
    checked[index] = !checked[index];
    dispatch(changeFilterInputs({ cuisinesChecked: checked }));
  };

  const handleRadioChange = (pair) => {
    dispatch(changeFilterInputs(pair));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let filteredCuisines = [];
    cuisinesChecked.forEach((flag, index) => {
      if (flag) filteredCuisines.push(cuisines[index].toLowerCase());
    });
    axios
      .get("/api/restaurants/filter", {
        params: {
          city: city,
          cuisinesarr: filteredCuisines,
          cost: cost,
          sort: sort,
        },
      })
      .then((res) => dispatch(updateFilteredRestaurants(res.data)))
      .catch((err) => console.log(err));
      changeFilterOpen(false);
  };

  return (
    <div
      className={`${className} px-3 px-md-0 position-abs-md-block w-100 max-w-md-sm mx-md-4`}
    >
      <form
        id="filters"
        method="GET"
        className="w-100 border px-4 py-3 d-block bg-white shadow-md"
      >
        <h4 className="text-primary fw-semibold fs-18 mb-10px">Filters</h4>

        <div className="locationSelect">
          <h5 className="text-primary fs-14 fw-normal mb-10px">
            Select Location
          </h5>
          <select
            onChange={(e) => {
              dispatch(changeFilterInputs({ city: e.target.value }));
            }}
            value={city}
            className="w-100 border border-secondary text-secondary p-10px fs-14 mb-4"
          >
            <option value="">Select a location</option>
            <option value="Pune">Pune</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>
        <div className="cuisines">
          <h5 className="text-primary fs-14 fw-normal mb-10px">Cuisines</h5>
          {cuisines.map((cuisine, index) => {
            return (
              <label
                key={index}
                className="cuisine d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3"
              >
                {cuisine}
                <input
                  type="checkbox"
                  checked={cuisinesChecked[index]}
                  onChange={() => handleCuisineChange(index)}
                  name={cuisine}
                  id={cuisine}
                  className="opacity-0"
                />
                <span className="checkmark">
                  <BsCheckLg className="fs-14" />
                </span>
              </label>
            );
          })}
        </div>
        <div className="costRange">
          <h5 className="text-primary fs-14 fw-normal mb-10px">Cost For Two</h5>
          {availableCost.map((currcost, index) => {
            let label = costLabels[index];
            return (
              <label
                key={index}
                className="cost d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3"
              >
                {label}
                <input
                  onChange={() => handleRadioChange({ cost: currcost })}
                  checked={cost === currcost}
                  type="radio"
                  name="cost"
                  className="opacity-0"
                  value={currcost}
                />
                <span className="radioCircle"></span>
                <span className="radioInnerCircle"></span>
              </label>
            );
          })}
        </div>
        <div className="sort">
          <h4 className="text-primary fw-semibold fs-18 mb-10px">Sort</h4>
          <label className="sort d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
            Price low to high
            <input
              onChange={() => handleRadioChange({ sort: "low" })}
              checked={sort === "low"}
              type="radio"
              name="sortdirection"
              value="low"
              className="opacity-0"
            />
            <span className="radioCircle"></span>
            <span className="radioInnerCircle"></span>
          </label>
          <label className="sort d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
            Price high to low
            <input
              onChange={() => handleRadioChange({ sort: "high" })}
              checked={sort === "high"}
              type="radio"
              name="sortdirection"
              value="high"
              className="opacity-0"
            />
            <span className="radioCircle"></span>
            <span className="radioInnerCircle"></span>
          </label>
        </div>

        <button
          onClick={(e) => handleSubmit(e)}
          className="applyFilter text-danger bg-white border border-danger fs-6 rounded-3 fw-semibold w-100 py-2 mt-4"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default FilterForm;
