import React, { useState } from "react";
import OrderItem from "./OrderItem";
import { RxCross1 } from "react-icons/rx";

const Order = ({ restaurant,flag,setFlag }) => {
  //TODO: THis data should be in the fetched data but cannot add new data to the mongo. Can be done later

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Gobhi Munchurian",
      amount: 0,
      price: 89,
      desc: "Deep-fried cauliflower florets tossed in pungent spices to form a flavorsome dry curry",
      image:
        "https://myfoodstory.com/wp-content/uploads/2021/10/Veg-Manchurian-FI-1.jpg",
    },
    {
      id: 2,
      name: "Farmhouse Pizza",
      amount: 0,
      price: 199,
      desc: "Freshly baked pizza with thin crust. Dont miss the chance to save the savories.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    },
    {
      id: 3,
      name: "Honey Pancakes",
      amount: 0,
      price: 119,
      desc: "Sweet pancakes with the sweet topping of Honey. You cant get more of it.",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg",
    },
    {
      id: 4,
      name: "Farmhouse Pizza",
      amount: 0,
      price: 199,
      desc: "Freshly baked pizza with thin crust. Dont miss the chance to save the savories.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    },
  ]);

  const [totalCost, setTotalCost] = useState(0);

  function handleUpdateAmount(index, amount) {
    let newItems = items;
    newItems[index].amount = amount;
    let newTotalCost = 0;
    newItems.forEach((item) => (newTotalCost += item.price * item.amount));
    setTotalCost(newTotalCost);
    setItems([...newItems]);
  }

  return (
    <div className={`${flag ? "d-flex" : "d-none"} position-fixed w-100 h-100  flex-column top-0 start-0 align-items-center justify-content-center z-20`}>
      <div className="max-w-mobile-100 max-h-mobile-100 max-w-550 overflow-scroll h-mobile-100 shadow-md">
        
        {/* Upper Div With heading and Items */}
        <div className="max-w-mobile-100 max-w-550 max-h-600 max-h-mobile-100 h-100 border w-100 bg-white p-md-5 px-4 py-5   position-relative">
          <button onClick={() => setFlag(false)} className="bg-transparent border-0 position-absolute top-0 end-0 p-4 fs-3 text-primary fw-semibold d-flex align-items-center justify-content-center" >
            <RxCross1 />
          </button>
          <h2 className="text-primary fw-semibold">{restaurant.name}</h2>
          {/*  */}
          <div className="overflow-scroll max-h-mobile-100 max-h-500 pb-5 pb-md-0 mb-md-0">
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
          <button className="bg-danger text-white border-0 rounded-3 btn py-3 px-4">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
