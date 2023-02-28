import axios from "axios";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRestaurant } from "../actions";
import QuickSearches from "../components/QuickSearches";
import SearchHeader from "../components/SearchHeader/SearchHeader";

const Landing = () => {
  const dispatch = useDispatch();
  const restaurant = useSelector((store) => store.restaurants);
  console.log("restaurant: ", restaurant);

  useEffect(() => {
    axios
    .get("/restaurants")
    .then((res) => {
      dispatch(updateRestaurant(res.data));
    })
    .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <SearchHeader />
      <QuickSearches />
    </>
  );
};

export default Landing;
