import React from "react";

const SearchResult = ({restaurant}) => {
  return (
    <div 
    className="px-3">
      <div
        style={{ height: "75px" }}
        className="w-100 d-flex align-items-center border-bottom border-2 "
      >
        <img
          src={restaurant.thumb}
          alt=""
          className="searchResultImg rounded-circle object-cover"
        />
        <div className="ms-3">
          <p className="text-primary fw-bold m-0">{restaurant.name}</p>
          <p className="text-secondary fs-14 m-0">{restaurant.locality}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
