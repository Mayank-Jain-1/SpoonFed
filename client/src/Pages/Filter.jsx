import React, { useEffect, useState } from "react";
import NavHeader from "../components/NavHeader";
import { useSearchParams } from "react-router-dom";
import FilterForm from "../components/Filter/FilterForm";
import FilterResult from "../components/Filter/FilterResult";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterInputs, updateFilteredRestaurants } from "../actions";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import PageinationButton from "../components/Filter/PageinationButton";
import EndResult from "../components/Filter/EndResult";
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'

const Filter = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const { city, cuisines, cuisinesChecked, cost, sort } = useSelector(
    (store) => store.filterInputs
  );
  const pageSize = 2;
  const [pageIndex, setPageIndex] = useState(0);
  const filteredRestaurants = useSelector((store) => store.filteredRestaurants);
  const [heading, setHeading] = useState("All the best Restaurants")
  const [filtersOpen, setFiltersOpen] = useState(false)

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
        checked.fill(false);
        checked[index] = true;
        dispatch(changeFilterInputs({ cuisinesChecked: checked }));
      }else if(cuisine === "Indian"){
        let checked = cuisinesChecked;
        checked.fill(false);
        checked[0] = true;
        checked[1] = true;
        dispatch(changeFilterInputs({ cuisinesChecked: checked }));
      }
    }
    let filteredCuisines = [];
    cuisinesChecked.forEach((flag, index) => {
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
      // eslint-disable-next-line
  }, []);


  useEffect(() => {
    setPageIndex(0);
    setHeading(city ? "Restaurants in " + city : "All the best Restaurants");
  },[filteredRestaurants])

  return (
    <div>
      <NavHeader />
      <div className="container px-md-auto mx-md-auto w-sm-auto">
        <h1 className="fw-bold text-primary  my-3 my-md-4 mx-4 fs-md-1">{heading}</h1>
        <div className="w-100 px-3 mb-4 d-md-none">
        <button
        onClick={() => setFiltersOpen(!filtersOpen)} className="w-100 border border-secondary p-10px fs-14 d-flex justify-content-between text-primary fw-semibold bg-white">
          <p className="mb-0">Filters/Sort</p>
          <div className="">
            {filtersOpen ? <BsChevronUp /> : <BsChevronDown />}
          </div>
        </button>
        </div>
        <div className="d-flex">
          <FilterForm className={`${!filtersOpen && "d-none"} d-md-block z-20`} changeFilterOpen={setFiltersOpen}/>
          <div className="FilterResults  px-md-3 me-md-2 w-100">
            <div className="min-h-650">
              {filteredRestaurants &&
                filteredRestaurants.map((restaurant, index) => {
                  if (
                    pageSize * pageIndex <= index &&
                    index < pageSize * pageIndex + pageSize
                  ) {
                    return (
                      <FilterResult
                        className="max-h-300"
                        key={index}
                        restaurant={restaurant}
                      />
                    );
                  }
                  else{
                    return "";
                  }
                })}
              {pageSize * pageIndex <= filteredRestaurants.length &&
                filteredRestaurants.length < pageSize * pageIndex + pageSize && <EndResult index={filteredRestaurants.length}/>}
            </div>
            <div className="w-100 border-2 d-flex justify-content-center">
              <div className="d-flex align-items-center justify-content-evenly">
                <PageinationButton
                  placeholder={<AiOutlineLeft className="text-secondary" />}
                  onClick={() => {
                    if (pageIndex > 0) setPageIndex(pageIndex - 1);
                  }}
                />
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
                  return (
                    <PageinationButton
                      className={`${
                        pageIndex === num - 1
                        ? "bg-secondary text-white"
                        : "bg-transparent text-secondary"
                      } ${
                        Math.ceil((filteredRestaurants.length + 1) / 2) < num && "opacity-50"
                      }
                      `
                    }
                      placeholder={num}
                      onClick={() => setPageIndex(num - 1)}
                      disabled={
                        Math.ceil((filteredRestaurants.length + 1) / 2) < num
                      }
                    />
                  );
                })}

                <PageinationButton
                  placeholder={<AiOutlineRight className="text-secondary " />}
                  onClick={() => {
                    if (
                      pageIndex <
                      Math.ceil((filteredRestaurants.length + 1) / pageSize) - 1
                    )
                      setPageIndex(pageIndex + 1);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
