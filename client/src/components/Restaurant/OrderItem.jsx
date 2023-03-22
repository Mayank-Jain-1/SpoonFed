import React, { useState } from "react";

const OrderItem = ({ name, desc, price, image, amount, setItems }) => {
  return (
    <div className="d-flex py-2 border-2 border-bottom my-4 align-items-center justify-content-between">
      <div className="me-3 me-md-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
          alt=""
          className="square-18 mb-3"
        />{" "}
        <h5 className="fs-18 text-primary">{name}</h5>
        <h5 className="fs-18 text-primary">₹ {price}</h5>
        <p className="fs-14">{desc}</p>
      </div>
      <div className="ms-3 ms-md-5 d-flex flex-column  align-items-center position-relative h-100">
        <img src={image} alt="" className="square-90 rounded-3 object-cover" />
        <div className="d-flex position-absolute  top-100 translate-middle-y shadow-md p-1 bg-white">
          <button
            onClick={() => {
              if (amount > 0) setItems(amount - 1);
            }}
            className="border-0 d-flex align-items-center justify-content-center fs-6 bg-white square-20 text-danger"
          >
            {" "}
            -{" "}
          </button>
          <p className="d-flex align-items-center justify-content-center fs-14 bg-white square-20 mb-0 text-success">
            {amount}
          </p>
          <button
            onClick={() =>  setItems(amount + 1)}
            className="border-0 d-flex align-items-center justify-content-center fs-6 bg-white square-20 text-success"
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
