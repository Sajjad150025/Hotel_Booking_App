import React, { useState } from "react";
import CAROUSEL from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [hotelCarousel, setHotelCarousel] = useState(0);

  const handleSelect = (selectedIndex) => {
    setHotelCarousel(selectedIndex);
  };


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) =>
      console.log(`Slide changing from ${current} to ${next}`),
  };
  return (
    <div className="slider-container">
      <Slider {...settings} onSelect={handleSelect}>
        {CAROUSEL.map((item) => (
          <div className="relative">
            <div className="slide" key={item.id}>
              <div className="h-full overflow-hidden">
                <img
                  className="w-100 h-100"
                  src={item.image}
                  alt={item.title || "Slide image"}
                />
              </div>
              <div className="absolute left-[25%] top-[20%] justify-center bg-slate-700 opacity-75 w-[50%] h-[30rem] rounded">
                <div className="text-justify slide-content items-center py-[19%] px-[10%]">
                  <h1 className="text-center text-white text-3xl uppercase font-bold">
                    {item.title}
                  </h1>
                  <p className="justify-center px-3 text-white text-xl text-justify py-2">
                    {item.description}
                  </p>
                  <div className="items-center ps-6 mx-[20%] pb-2 pt-2">
                    <button className="btn  px-3 py-2 ms-2 me-2 text-xl font-boldx rounded bg-orange-700 text-white uppercase">
                      Our resort
                    </button>
                    <button className="btn px-3 text-xl py-2 ms-2 me-2 rounded bg-slate-900 text-white animate uppercase">
                      Book room
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
