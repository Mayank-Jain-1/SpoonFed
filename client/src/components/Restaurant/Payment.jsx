import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RxCross1 } from "react-icons/rx";

const Payment = ({ amount, restaurant, setPopup }) => {
   const { user } = useAuth0();
   const [message, setMessage] = useState({
      text: '',
      color: 'white'
   })
   return (
      <div
         className={`d-flex position-fixed w-100 h-100  flex-column top-0 start-0 align-items-center justify-content-center z-20 `}
      >
         <div className="max-w-mobile-100 max-h-mobile-100 max-w-550 overflow-scroll h-mobile-100 shadow-md ">
            {/* Upper Div With heading and Items */}
            <div className="max-w-mobile-100 max-w-550 max-h-600 max-h-mobile-100 border h-mobile-100 w-100 bg-white p-md-5 px-4 py-5 position-relative">
               <button
                  onClick={() => setPopup("")}
                  className="bg-transparent border-0 position-absolute top-0 end-0 p-4 fs-3 text-primary fw-semibold d-flex align-items-center justify-content-center"
               >
                  <RxCross1 />
               </button>
               {/* <h2 className="text-primary fw-semibold">{restaurant.name}</h2> */}
               <h2 className="text-primary fw-semibold">
                  Paying <span className="text-danger">₹ {amount}</span> to{" "}
                  {restaurant.name}
               </h2>
               <div className="pt-4">
                  <label htmlFor="email my-2">
                     Enter the otp sent to your email address {user.email}
                  </label>
                  <input
                     type="text"
                     className="border border-primary rounded-2 p-2 fs-2 my-3 "
                  />
                  <button className="btn btn-primary d-block my-2">
                     Submit
                  </button>
                  <p className={`${!message.text ? "text-white" : message.color}`}>{message.text ? message.text : '.'}</p>
                  <p className="d-inline my-2">Didnt received the Otp?</p>
                  <button className="text-danger bg-transparent border-0 px-2">
                     Resend
                  </button>
               </div>
            </div>
            <div className="max-w-mobile-100 max-w-550 position-sticky bottom-0 position-sm-fixed bottom-0 start-0 w-100 bg-lightAqua d-flex justify-content-between items-center py-3 px-4 px-md-5 ">
               <button
                  onClick={() => setPopup("payment")}
                  className="btn btn-primary text-white border-0 rounded-3 btn py-3 px-4"
               >
                  Confirm Order
               </button>
               <button
                  onClick={() => setPopup("payment")}
                  className="bg-danger text-white border-0 rounded-3 btn py-3 px-4"
               >
                  Cancel Order
               </button>
            </div>
         </div>
      </div>
   );
};

export default Payment;
