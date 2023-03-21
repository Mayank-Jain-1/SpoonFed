import React, { useState } from "react";
import OrderItem from "./OrderItem";
import { RxCross1 } from "react-icons/rx";

const Order = ({ restaurant,setPopup,items,setItems,totalCost,setTotalCost }) => {
  


  function handleUpdateAmount(index, amount) {
    let newItems = items;
    newItems[index].amount = amount;
    let newTotalCost = 0;
    newItems.forEach((item) => (newTotalCost += item.price * item.amount));
    setTotalCost(newTotalCost);
    setItems([...newItems]);
  }

  return (
    <div className={`d-flex position-fixed w-100 h-100  flex-column top-0 start-0 align-items-center justify-content-center z-20`}>
      <div className="max-w-mobile-100 max-h-mobile-100 max-w-550 overflow-scroll h-mobile-100 shadow-md">
        
        {/* Upper Div With heading and Items */}
        <div className="max-w-mobile-100 max-w-550 max-h-600 max-h-mobile-100 h-100 border w-100 bg-white p-md-5 px-4 py-5   position-relative">
          <button onClick={() => setPopup("")} className="bg-transparent border-0 position-absolute top-0 end-0 p-4 fs-3 text-primary fw-semibold d-flex align-items-center justify-content-center" >
            <RxCross1 />
          </button>
          <h2 className="text-primary fw-semibold">{restaurant.name}</h2>

          {/* Div with the Items  */}

          <div className="overflow-y-scroll max-h-mobile-100 max-h-500 pb-5 pb-md-0 mb-md-0">
            {items.map((item, index) => {
              return (
                <OrderItem
                  key={index}
                  setItems={(amount) => handleUpdateAmount(index, amount)}
                  amount={item.amount}
                  name={item.name}
                  price={item.price}
                  desc={item.desc}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>

        {/* Payment Div */}
        <div className="max-w-mobile-100 max-w-550 position-sm-fixed bottom-0 start-0 w-100 bg-lightAqua d-flex justify-content-between items-center py-3 px-4 px-md-5 ">
          <div className="d-flex align-items-center text-primary gap-4 gap-md-5">
            <h4 className="mb-0 fw-semibold">Subtotal</h4>
            <h4 className="mb-0 fw-semibold">₹ {totalCost}</h4>
          </div>
          <button onClick={() => setPopup('payment')} className="bg-danger text-white border-0 rounded-3 btn py-3 px-4">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
