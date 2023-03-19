import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavHeader from "../components/NavHeader";
import GalleryCarousel from "../components/Restaurant/GalleryCarousel";
import Order from "../components/Restaurant/Order";

const Restaurant = () => {
   const [restaurant, setRestaurant] = useState({});
   let { id } = useParams();
   const cuisines = restaurant.Cuisine
      ? restaurant.Cuisine.map((cuisine) => cuisine.name)
      : [];

   const { isAuthenticated, loginWithPopup } = useAuth0();

   const [popup, setPopup] = useState("");
   const handlePopupChange = (value) => {
      if (!isAuthenticated) loginWithPopup();
      else setPopup(value);
   };

   const [items, setItems] = useState([
      {
        id: 1,
        name: "Gobi Munchurian",
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
   const [totalCost, setTotalCost] = useState(0)

   // IMPROVEMENT: I understand that making a get request is unneccessary as we have all the restaurants already in the redux state. But just for the sake of assignment and more backend reliability i have made this api and used it to get the restaurants data.
   const [infoSelected, setInfoSelected] = useState("Overview");
   const [carouselOpen, setCarouselOpen] = useState(false);

   useEffect(() => {
      axios
         .get(`/restaurant?id=${id}`)
         .then((res) => setRestaurant(res.data))
         .catch((err) => console.log(err));

      // eslint-disable-next-line
   }, []);

   return (
      <>
         <NavHeader />
         {/* Image and carousel button */}
         <div className="container-fluid px-0 px-sm-3 px-md-4 px-lg-5 max-w-xl">
            <div className="mt-3 mt-md-5 position-relative">
               <img
                  src={restaurant.thumb}
                  alt=""
                  className="w-100 object-cover  restaurantCoverImage "
               />
               <button
                  onClick={() => setCarouselOpen(true)}
                  className="position-absolute end-0 bottom-0 border-0 text-primary fw-bold py-2 py-md-3 px-3 px-md-4 rounded-2 bg-white-800 m-2 m-md-3 fs-14 fs-md-6
          "
               >
                  Click to see image gallery
               </button>
            </div>
            {/* Information about the Restaurant */}
            <div className="px-3 px-md-0 pb-5 mb-5">
               <div className="d-flex align-items-center">
                  <img
                     src={restaurant.thumb}
                     alt=""
                     style={{ width: "52px", height: "52px" }}
                     className="object-cover restaurantCoverImage rounded-3 me-3 mx-md-3"
                  />
                  <h2 className="fw-bold my-4 text-primary">
                     {restaurant.name}
                  </h2>
               </div>
               <div className="d-flex justify-content-between border-3 border-bottom align-items-end mb-3">
                  <div className="">
                     <button
                        onClick={() => setInfoSelected("Overview")}
                        className={`bg-transparent border-0
              py-2 px-2 px-sm-4 text-primary fw-bold -mb-2 ${
                 infoSelected === "Overview" && "border-bottom border-danger"
              }`}
                     >
                        Overview
                     </button>
                     <button
                        onClick={() => setInfoSelected("Contact")}
                        className={`bg-transparent border-0
              py-2 px-2 px-sm-4 text-primary fw-bold -mb-2 ${
                 infoSelected === "Contact" && "border-bottom border-danger"
              }`}
                     >
                        Contact
                     </button>
                  </div>
                  <button
                     onClick={() => handlePopupChange("order")}
                     className="bg-danger text-white py-2 px-3 border-0 rounded-2 mb-3"
                  >
                     Place an order
                  </button>
               </div>

               <div
                  className={`${infoSelected !== "Overview" && "d-none"} px-3`}
               >
                  <h5 className="text-primary fw-bold mt-5">
                     About this Place
                  </h5>
                  <p className="text-primary">
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Modi dolore corrupti nihil harum, reprehenderit neque
                     repellendus nam eveniet perspiciatis? Accusamus quisquam
                     rerum illo voluptatibus.
                  </p>
                  <p className="text-primary fw-bold my-1 mt-4">Cuisines</p>
                  <p className="text-primary ">{cuisines.join(", ")}</p>
                  <p className="text-primary fw-bold my-1 mt-4">Average Cost</p>
                  <p className="text-primary ">
                     ₹{" "}
                     {`${restaurant.cost - (restaurant.cost % 100)} - ${
                        restaurant.cost - (restaurant.cost % 100) + 100
                     } for two people (approx.)`}{" "}
                  </p>
               </div>
               <div
                  className={`${infoSelected !== "Contact" && "d-none"} px-3 `}
               >
                  <p className="text-primary fw-bold mb-1 mt-5">Phone Number</p>
                  <p className="text-danger mb-4">+91 7888632012</p>
                  <p className="text-primary fw-bold my-1">{restaurant.name}</p>
                  <p className="text-primary ">{restaurant.address}</p>
               </div>
            </div>
         </div>
         {/* Carousel Below */}
         <GalleryCarousel
            flag={carouselOpen}
            setFlag={setCarouselOpen}
            images={restaurant.Images}
         />
         {popup === "order" ? (
            <Order
               // flag={orderOpen}
               items={items}
               setItems={setItems}
               totalCost={totalCost}
               setTotalCost={setTotalCost}
               restaurant={restaurant}
               setPopup={handlePopupChange}
            />
         ) : (
            popup === "payment" && <></>
         )}
      </>
   );
};

export default Restaurant;
