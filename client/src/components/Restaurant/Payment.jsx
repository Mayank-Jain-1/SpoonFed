import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";

const Payment = ({ totalCost, restaurant, setPopup, items }) => {
   const { user } = useAuth0();
   const { email, name } = user;
   const [message, setMessage] = useState({
      text: "",
      color: "text-white",
   });
   const removeMessage = () => {
      setMessage({
         text: "",
         color: "text-white",
      });
   };
   const [otpVerification, setOtpVerification] = useState(false);
   const [otpEntered, setOtpEntered] = useState("");

   const handleOtpChange = (e) => {
      setOtpEntered(e.target.value);
   };
   const createNewOTP = async () => {
      setMessage({
         text: "Sending Otp...",
         color: "text-secondary"
      })
      const postData = {
         email: email,
         name: name,
      };
      const createRes = await axios
         .post("/api/createotp", postData)
         .then(
            (res) => {
               return res.data;
            },
            (err) => {
               return err.response.data;
            }
         )
         .catch((err) => console.log(err));
      if (createRes.status >= 200 && createRes.status < 300) {
         setMessage({
            text: createRes.message,
            color: "text-secondary",
         });
      } else {
         setMessage({
            text: createRes.message,
            color: "text-danger",
         });
      }
   };
   const [addressDone, setAddressDone] = useState(false);
   const [address, setAddress] = useState(user.address || "");
   const handleAddressChange = (e) => {
      setAddress(e.target.value);
   };
   const handleAddressSubmit = () => {
      if (!address) {
         setMessage({
            text: "Add your address for delivery",
            color: "text-danger",
         });
      } else {
         removeMessage();
         setAddressDone(true);
      }
   };

   const handleOtpVerify = async () => {
      removeMessage();
      if (!otpEntered) {
         return setMessage({
            text: "Enter the OTP sent to your email",
            color: "text-danger",
         });
      }
      const resData = {
         email: email,
         otp: parseInt(otpEntered),
      };
      const verifyRes = await axios.post("/api/verifyotp", resData).then(
         (res) => {
            return res.data;
         },
         (err) => {
            return err.response.data;
         }
      );
      if (verifyRes.status === 200) {
         setMessage({
            text: verifyRes.message,
            color: "text-success",
         });
         setOtpVerification(true);
      } else {
         setMessage({
            text: verifyRes.message,
            color: "text-danger",
         });
      }
   };
   const handleConfirmOrder = () => {
      removeMessage();
      if (!addressDone) return handleAddressSubmit();
      if (!otpVerification)
         return setMessage({
            text: "Verify OTP first",
            color: "text-danger",
         });
      const postData = {
         email: email,
         name: name,
         address: address,
         totalCost: totalCost,
         order: items.map((item) => {
            return {
               id: item.id,
               name: item.name,
               price: item.price,
               quantity: item.amount,
            };
         }),
      };
      axios.post("/api/placeorder", postData).then(
         (res) => {
            alert(res.data.message);
            setPopup("");
         },
         (err) => {
            setMessage({
               text: err.response.data.message,
               color: "text-danger",
            });
         }
      );
   };

   useEffect(() => {
      if (addressDone && !otpVerification) {
         createNewOTP();
      }
   }, [email, name, addressDone]);

   return (
      <div
         className={`d-flex position-fixed w-100 h-100  flex-column top-0 start-0 align-items-center justify-content-center z-20 `}
      >
         <div className="h-mobile-100 max-h-mobile-100 w-100 max-w-md-550 shadow-md overflow-y-scroll ">
            {/* Upper Div With heading and Items */}
            <div className="w-100  max-w-md-550 max-h-600 max-h-mobile-100 border h-mobile-100  bg-white p-md-5 px-4 py-5 position-relative">
               <button
                  onClick={() => setPopup("")}
                  className="bg-transparent border-0 position-absolute top-0 end-0 p-4 fs-3 text-primary fw-semibold d-flex align-items-center justify-content-center"
               >
                  <RxCross1 />
               </button>
               {/* <h2 className="text-primary fw-semibold">{restaurant.name}</h2> */}
               {!addressDone ? (
                  <>
                     <h2 className="text-primary fw-semibold">
                        Delivery Address
                     </h2>
                     <div className="pt-4">
                        <label htmlFor="email my-2">
                           Enter the full address with extra information if
                           needed for the delivery.
                        </label>
                        <textarea
                           type="text"
                           rows={4}
                           onChange={handleAddressChange}
                           value={address}
                           className="border border-primary rounded-2 p-2 fs-14 my-3 w-100"
                        />
                        <button
                           onClick={handleAddressSubmit}
                           className="btn btn-primary d-block my-2"
                        >
                           Submit
                        </button>
                        <p className={message.color}>
                           {message.text ? message.text : "."}
                        </p>
                     </div>
                  </>
               ) : !otpVerification ? (
                  <>
                     <h2 className="text-primary fw-semibold">
                        Paying{" "}
                        <span className="text-danger">₹ {totalCost}</span> to{" "}
                        {restaurant.name}
                     </h2>
                     <div className="pt-4">
                        <label htmlFor="email my-2">
                           Enter the otp sent to your email address {email}
                        </label>
                        <input
                           type="number"
                           onChange={handleOtpChange}
                           value={otpEntered}
                           className="border border-primary rounded-2 p-2 fs-2 my-3 "
                        />
                        <button
                           onClick={() => handleOtpVerify()}
                           className="btn btn-primary d-block my-2"
                        >
                           Verify
                        </button>

                        <p
                           className={`${
                              !message.text ? "text-white" : message.color
                           }`}
                        >
                           {message.text ? message.text : "."}
                        </p>
                        <p className="d-inline my-2">Didnt received the Otp?</p>
                        <button
                           onClick={() => createNewOTP()}
                           className="text-danger bg-transparent border-0 px-2"
                        >
                           Resend
                        </button>
                     </div>
                  </>
               ) : (
                  <>
                     <h2 className="text-primary fw-semibold mb-4">
                        Paying{" "}
                        <span className="text-danger">₹ {totalCost}</span> to{" "}
                        {restaurant.name}
                     </h2>
                     <p className="fs-14 text-primary">
                        Delivery at address: <br />
                        {address}
                     </p>
                     <h4 className="text-primary fs-18 fw-semibold">Items</h4>
                     <table className="table table-striped fs-14">
                        <thead>
                           <tr className="text-primary">
                              <th>S No.</th>
                              <th>Item Name</th>
                              <th>Price (₹) </th>
                              <th>Quantity</th>
                              <th>Total</th>
                           </tr>
                        </thead>
                        <tbody>
                           {items.map((item, index) => {
                              return (
                                 <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.price * item.amount}</td>
                                 </tr>
                              );
                           })}
                           <tr className="table-primary">
                              <td>--</td>
                              <td>Total Cost</td>
                              <td>--</td>
                              <td>
                                 {items.reduce((total, item) => {
                                    return total + item.amount;
                                 }, 0)}
                              </td>
                              <td>{totalCost}</td>
                           </tr>
                        </tbody>
                     </table>
                     <p className="fs-14">
                        All verifications are done you can complete your order
                        by clicking confirm order now.
                     </p>
                     <p
                        className={`${
                           !message.text ? "text-white" : message.color
                        }`}
                     >
                        {message.text ? message.text : "."}
                     </p>
                  </>
               )}
            </div>
            <div className="max-w-mobile-100 max-w-550 position-sticky bottom-0 position-sm-fixed bottom-0 start-0 w-100 bg-lightAqua d-flex justify-content-between items-center py-3 px-4 px-md-5 ">
               <button
                  onClick={() => handleConfirmOrder()}
                  className="btn btn-primary text-white border-0 rounded-3 btn py-3 px-4"
               >
                  Confirm Order
               </button>
               <button
                  onClick={() => setPopup("")}
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
