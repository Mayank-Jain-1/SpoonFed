import React from "react";
import SearchItem from "./QuicksearchItem";

const QuickSearches = () => {
  return (
    <div className="container pt-5 px-4 px-sm-0 px-md-auto pb-5 mb-5">
      <h1 className="text-primary fw-bold">Quick Searches</h1>
      <h5 className="text-secondary fw-light mb-4">
        Discover restaurants by type of meal
      </h5>

      <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 gx-4 gy-4 mt-2">
        <SearchItem
          imgURL="https://static.toiimg.com/photo/msid-87930581/87930581.jpg"
          name="Lunch"
          desc="Start your day with exclusive breakfast options"
        />
        <SearchItem
          imgURL="https://assets.cntraveller.in/photos/627a4112cbc04ca509426501/4:3/w_2932,h_2199,c_limit/Vegetarian%20South%20Indian%20breakfast%20thali%20-%20Idli%20vada%20sambar%20chutney%20-%20Image%20ID%202H3783R%20(RF).jpg"
          name="Breakfast"
        />
        <SearchItem
          imgURL="https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
          name="Dinner"
        />
        <SearchItem
          imgURL="https://img.traveltriangle.com/blog/wp-content/uploads/2018/05/Nightlife-in-Chennai-cover-image.jpg"
          name="Nightlife"
        />
        <SearchItem
          imgURL="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/barman-equipment-such-as-measuring-cups-and-essence-royalty-free-image-1062066858-1557252311.jpg"
          name="Drinks"
        />
        <SearchItem
          imgURL="https://myfoodstory.com/wp-content/uploads/2021/08/Punjabi-Samosa-4.jpg"
          name="Snacks"
        />
      </div>
    </div>
  );
};

export default QuickSearches;
