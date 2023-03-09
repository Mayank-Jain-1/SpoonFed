import React from "react";

const SearchResult = ({}) => {
  return (
    <div className="px-3">
      <div
        style={{ height: "75px" }}
        className="w-100 d-flex align-items-center border-bottom border-2 "
      >
        <img
          src="https://media.istockphoto.com/id/479405790/photo/idli-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=7ns3jAC0K54PUmk57947vyEXS0LqKxqaTVU30e-z1S4="
          alt=""
          className="searchResultImg rounded-circle object-cover"
        />
        <div className="ms-3">
          <p className="text-primary fw-bold m-0">The Big Chill Bakery</p>
          <p className="text-secondary fs-14 m-0">Sarjapur Road, Bengaluru</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
