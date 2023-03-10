import React, { useEffect, useState } from "react";
import NavHeader from "../components/NavHeader";
import { useSearchParams } from "react-router-dom";
import FilterForm from "../components/Filter/FilterForm";
import FilterResult from "../components/Filter/FilterResult";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterInputs, updateFilteredRestaurants } from "../actions";

const Filter = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const { city, cuisines, cuisinesChecked, cost, sort } = useSelector(
    (store) => store.filterInputs
  );
  const filteredRestaurants = useSelector(store => store.filteredRestaurants)
  console.log('filteredRestaurants: ', filteredRestaurants);

  useEffect(() => {
    if (params.get("city")) {
      let city = params.get("city");
      dispatch(changeFilterInputs({ city: city }));
    }
    if (params.get("cuisine")) {
      let cuisine = params.get("cuisine");
      const index = cuisines.indexOf(cuisine);
      if (index !== -1) {
        let checked = cuisinesChecked;
        checked[index] = true;
        dispatch(changeFilterInputs({ cuisinesChecked: checked }));
      }
    }
    let filteredCuisines = [];
    cuisinesChecked.map((flag, index) => {
      if (flag) filteredCuisines.push(cuisines[index].toLowerCase());
    });
    axios
      .get("/restaurants/filter", {
        params: {
          city: city,
          cuisinesarr: filteredCuisines,
          cost: cost,
          sort: sort,
        },
      })
      .then((res) => dispatch(updateFilteredRestaurants(res.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavHeader />
      <div className="container px-md-auto mx-md-auto">
        <h1 className="fw-bold text-primary  my-3 mx-4 fs-md-1">All Places</h1>
        <div className="d-flex">
          <FilterForm className="" />
          <div className="FilterResults  px-md-3 me-md-2 w-100">
            {filteredRestaurants && filteredRestaurants.map((restaurant,index) => {
              return (
                <FilterResult key={index} restaurant={restaurant}/>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
