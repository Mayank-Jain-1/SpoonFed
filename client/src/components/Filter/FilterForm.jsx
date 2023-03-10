import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCity } from "../../actions";
import { BsCheckLg } from "react-icons/bs";

//TODO : Convert the checkboxes and the radio circles to component also if possible these inputs also to components.

const FilterForm = () => {
  const city = useSelector((store) => store.searchInputs.city);
  const dispatch = useDispatch();

  return (
    <div className="px-3 px-md-0 position-md-block w-100 max-w-md-sm">
      <form
        id="filters"
        method="GET"
        class="w-100 border  mx-md-4 px-4 py-3"
      >
        <h4 className="text-primary fw-semibold fs-18 mb-10px">Filters</h4>
        <h5 className="text-primary fs-14 fw-normal mb-10px">
          Select Location
        </h5>
        <select
          onChange={(e) => {
            dispatch(changeCity(e.target.value));
          }}
          value={city}
          class="w-100 border border-secondary text-secondary p-10px fs-14 mb-4"
        >
          <option value="">Select a location</option>
          <option value="Pune">Pune</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
        <h5 className="text-primary fs-14 fw-normal mb-10px">Cuisines</h5>
        <div class="cuisines">
          <label class="cuisine d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
            North Indian
            <input
              type="checkbox"
              name="northIndian"
              id="northIndian"
              className="opacity-0"
              defaultChecked={true}
            />
            <span class="checkmark">
              <BsCheckLg className="fs-14" />
            </span>
          </label>
          <label class="cuisine d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
            South Indian
            <input
              type="checkbox"
              name="southIndian"
              id="southIndian"
              className="opacity-0"
            />
            <span class="checkmark">
              <BsCheckLg className="fs-14" />
            </span>
          </label>
          <label class="cuisine d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
            Chinese
            <input
              type="checkbox"
              name="chinese"
              id="chinese"
              className="opacity-0"
            />
            <span class="checkmark">
              <BsCheckLg className="fs-14" />
            </span>
          </label>
          <label class="cuisine d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
            Fast Food
            <input
              type="checkbox"
              name="fastFood"
              id="fastFood"
              className="opacity-0"
            />
            <span class="checkmark">
              <BsCheckLg className="fs-14" />
            </span>
          </label>
          <label class="cuisine d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
            Street Food
            <input
              type="checkbox"
              name="streetFood"
              id="streetFood"
              className="opacity-0"
            />
            <span class="checkmark">
              <BsCheckLg className="fs-14" />
            </span>
          </label>
        </div>
        <h5 className="text-primary fs-14 fw-normal mb-10px">Cost For Two</h5>
        <div class="costRange">
          <label class="cost d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
            Less than 500
            <input type="radio" name="costRange" className="opacity-0" value="<500" />
            <span class="radioCircle"></span>
            <span class="radioInnerCircle"></span>
          </label>
          <label class="cost d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
            ` 500 to ` 1000
            <input type="radio" name="costRange" className="opacity-0" value="500-1000" />
            <span class="radioCircle"></span>
            <span class="radioInnerCircle"></span>
          </label>
          <label class="cost d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
            ` 1000 to ` 1500
            <input type="radio" name="costRange" className="opacity-0" value="1000-1500" />
            <span class="radioCircle"></span>
            <span class="radioInnerCircle"></span>
          </label>
          <label class="cost d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
            ` 1500 to ` 2000
            <input type="radio" name="costRange" className="opacity-0" value="1500-2000" />
            <span class="radioCircle"></span>
            <span class="radioInnerCircle"></span>
          </label>
          <label class="cost d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
            ` 2000+
            <input type="radio" name="costRange" className="opacity-0" value=">2000" />
            <span class="radioCircle"></span>
            <span class="radioInnerCircle"></span>
          </label>
        </div>
        <h4 className="text-primary fw-semibold fs-18 mb-10px">Sort</h4>
        <label class="sort d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
          Price low to high
          <input type="radio" name="sortdirection" value="low" className="opacity-0" />
          <span class="radioCircle"></span>
          <span class="radioInnerCircle"></span>
        </label>
        <label class="sort d-flex align-items-center position-relative ps-30 text-secondary fs-14 mb-3">
          Price high to low
          <input type="radio" name="sortdirection" value="high" className="opacity-0" />
          <span class="radioCircle"></span>
          <span class="radioInnerCircle"></span>
        </label>

        <button class="applyFilter text-danger bg-white border border-danger fs-6 rounded-3 fw-semibold w-100 py-2 mt-4">Apply</button>
      </form>
    </div>
  );
};

export default FilterForm;
