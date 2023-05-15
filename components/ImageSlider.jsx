import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import React from "react";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ sliderStyle }) => {
  const slider = [
    {
      src: "/slider/slider1.jpg",
      alt: "Image 1",
    },
    {
      src: "/slider/slider2.jpg",
      alt: "Image 2",
    },
    {
      src: "/slider/slider3.jpg",
      alt: "Image 3",
    },
    {
      src: "/slider/slider4.jpg",
      alt: "Image 4",
    },
    {
      src: "/slider/slider5.jpg",
      alt: "Image 5",
    },
    // {
    //   src: "/images/image3.jpg",
    //   alt: "Image 3",
    // },
  ];
  return (
    <Slider
      dots={true}
      autoplay={true}
      autoplaySpeed={3000}
      speed={500}
      cssEase="linear"
    >
      {slider.map((image) => (
        <div key={image.src} className={sliderStyle}>
          <img
            src={image.src}
            className="object-cover rounded-lg shadow-xl"
            alt={image.alt}
          />
        </div>
      ))}
    </Slider>
  );
};
export default ImageSlider;
