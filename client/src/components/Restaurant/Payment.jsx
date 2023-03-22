import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";

const Payment = ({ amount, restaurant, setPopup }) => {
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
      const postData = {
         email: email,
         name: name,
      };
      await axios.post("/api/createotp", postData);
      setMessage({
         text: "New OTP sent",
         color: "text-secondary",
      });
   };

   const [addressDone, setAddressDone] = useState(false);
   const [address, setAddress] = useState("");
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
      console.log(verifyRes);
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

      console.log(verifyRes);
   };

   const handleConfirmOrder = () => {
      if (!addressDone) {
         handleAddressSubmit();
      } else if (!otpVerification) {
         setMessage({
            text: "Verify OTP first",
            color: "text-danger",
         });
      }
   };

   useEffect(() => {
      if (addressDone) {
         createNewOTP();
      }
   }, [email, name, addressDone]);

   return (
      <div
         className={`d-flex position-fixed w-100 h-100  flex-column top-0 start-0 align-items-center justify-content-center z-20 `}
      >
         <div className="max-w-mobile-100 max-h-mobile-100 max-w-550 h-mobile-100 shadow-md ">
            {/* Upper Div With heading and Items */}
            <div className="max-w-mobile-100 max-w-550 max-h-600 max-h-mobile-100 border h-mobile-100 w-100 bg-white p-md-5 px-4 py-5 position-relative">
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
                        Paying <span className="text-danger">₹ {amount}</span>{" "}
                        to {restaurant.name}
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
                     <h2 className="text-primary fw-semibold">
                        Paying <span className="text-danger">₹ {amount}</span>{" "}
                        to {restaurant.name}
                     </h2>
                     <p>Delivery At {address}</p>
                     <p>All verifications are done you can complete your order by clicking confirm order now.</p>
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
