import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { RxCross1 } from "react-icons/rx";


const GalleryCarousel = ({flag,setFlag,images,className}) => {

  if (flag)
    return (
      <div className="position-fixed top-0 start-0 h-100 w-100 ">
        <Carousel
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-black-800"
        >
          {images &&
            images.map((image, index) => {
              return (
                <Carousel.Item key={index} className="w-100 carouselItem">
                  <img
                    src={image}
                    alt=""
                    className="d-block h-100 max-w-100 object-cover rounded-4 position-absolute start-50 translate-middle-x"
                  />
                </Carousel.Item>
              );
            })}
        </Carousel>
        <button
          onClick={() => setFlag(false)}
          className="position-absolute top-0 end-0 z-30 p-4 bg-transparent border-0 z-20"
        >
          <RxCross1 className="fs-1 text-white" />
        </button>
      </div>
    );
    else return ;
};

export default GalleryCarousel;
