import React, { useEffect, useState } from "react";
import NavHeader from "../components/NavHeader";
import { useSearchParams } from "react-router-dom";
import FilterForm from "../components/Filter/FilterForm";
import FilterResult from "../components/Filter/FilterResult";
import axios from 'axios'
import { useSelector } from "react-redux";

const Filter = () => {
  const [params] = useSearchParams();
  const city = useSelector(store => store.filterInputs.city);
  const [cuisine, setCuisine] = useState(params.get("cuisine") || "");

  // useEffect(() =>{
  //   axios.get('/restaurants/filter',{})
  // },[])


  return (
    <div>
      <NavHeader />
      <div className="container px-md-auto">
        <h1 className="fw-bold text-primary  my-3 mx-4 fs-md-1">All Places</h1>
        <div className="d-flex">
          <FilterForm className=""/>
          <div className="FilterResults  px-md-3 me-md-2 w-100">
            <FilterResult />
            <FilterResult />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
