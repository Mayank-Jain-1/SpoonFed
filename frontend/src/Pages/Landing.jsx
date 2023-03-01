import { React } from "react";
import {  useSelector } from "react-redux";
import QuickSearches from "../components/QuickSearches";
import SearchHeader from "../components/SearchHeader/SearchHeader";

const Landing = () => {
  const restaurant = useSelector((store) => store.restaurants);
  console.log("restaurant: ", restaurant);

  

  return (
    <>
      <SearchHeader />
      <QuickSearches />
    </>
  );
};

export default Landing;
