import React from "react";
import { Link } from "react-router-dom";
//TODO : inspite of taking full restaurant only take the required information as props.

const FilterResult = ({ restaurant,className }) => {
  const cuisines = restaurant.Cuisine
    ? restaurant.Cuisine.map((cuisine) => cuisine.name)
    : [];

  return (
    <Link to={"/restaurant/" + restaurant._id} className={` ${className} d-block text-decoration-none product shadow-md bg-white mb-36 w-100 px-35 py-25`}>
      <div className="productHead d-flex pb-30 border-2 border-bottom align-items-center">
        <img
          src={restaurant.thumb}
          alt=""
          className="object-cover rounded-4 square-120 me-3 flex-shrink-0"
        />
        <div className="placeDesc ms-4">
          <h2 className="text-primary fw-bold">{restaurant.name}</h2>
          <h6 className="text-primary">{restaurant.locality}</h6>
          <p className="text-primary mb-0 fw-light">{restaurant.address.split(' ').slice(0,7).join(" ") + "..."}</p>
        </div>
      </div>

      <div className="productFoot mt-4 d-flex">
        <div className="featureLabels text-secondary me-2 pe-1">
          <p className="mb-2">CUISINES:</p>
          <p className="mb-0">COST FOR TWO:</p>
        </div>
        <div className="features text-primary ms-4">
          <p className="mb-2">{cuisines.join(", ")}</p>
          <p className="mb-0">
            ₹{" "}
            {restaurant.cost}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FilterResult;
