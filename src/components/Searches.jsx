import React from "react";
import SearchItem from "./SearchItem";

const ShopItem = () => {
  return (
    <div className="container pt-5 px-4 px-sm-0 px-md-auto">
      <h1 className="cl-db fw-bold">Quick Searches</h1>
      <h5 className="cl-dg fw-light mb-4">Discover restaurants by type of meal</h5>
      
      <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 gx-3 gy-3">
      <SearchItem />
      <SearchItem />
      <SearchItem />
      </div>
    </div>
  );
};

export default ShopItem;
