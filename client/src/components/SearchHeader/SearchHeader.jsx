import React from "react";
import Navbar from "../HomeNavbar";
import Logo from "../Logo";
import CitySelect from "./CitySelect";
import BgImage from "./BgImage";
import RestaurantInput from "./RestaurantInput";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";

// TODO Change the search result so that it says no result found if no retaurannt found. rather than just nothing.

export const SearchHeader = () => {
   const city = useSelector((store) => store.searchInputs.city);
   const searchValue = useSelector((store) => store.searchInputs.search);

   const restaurant = useSelector((store) => store.restaurants);

   const filter = (city, search) => {
      let filteredRes = restaurant;
      if (filteredRes.length > 0) {
         if (city) {
            filteredRes = filteredRes?.filter(
               (restaurant) =>
                  restaurant.city_name.toLowerCase() === city.toLowerCase()
            );
         }
         if (search) {
            filteredRes = filteredRes?.filter((restaurant) =>
               restaurant.name.toLowerCase().includes(search.toLowerCase())
            );
         }
      }
      return filteredRes;
   };
   const filteredRestaurants = filter(city, searchValue);

   return (
      <>
         <Navbar />
         <div
            style={{ height: "480px" }}
            className="backdrop
      position-relative container-fluid d-flex flex-column justify-content-center align-items-center p-3 text-white"
         >
            <BgImage />
            <Logo className="mb-4 d-none d-md-block" text="Sf!" size={70} />
            <Logo className="mb-4 d-md-none" text="Sf!" size={50} />
            <p className="fs-2 fw-normal text-center mb-4 p1">
               Find the best restaurants, cafés, and bars
            </p>
            <div className="row w-100 justify-content-center px-4 gx-5 gy-4">
               <CitySelect />
               <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-12 px-0 mx-2 position-relative">
                  <RestaurantInput className="position-relative" />
                  <div
                     className={`${
                        !searchValue && !city && "d-none"
                     } position-absolute start-0 top-100 bg-white w-100 px-2 shadow z-10 max-h-4 overflow-y-scroll`}
                  >
                     {filteredRestaurants?.map((restaurant, index) => {
                        return (
                           <SearchResult key={index} restaurant={restaurant} />
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SearchHeader;
