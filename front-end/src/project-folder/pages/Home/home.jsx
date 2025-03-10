import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import "./home.css";
import Img1 from "../../assets/Inklink-prints-home/2d-signage-Inklink.jpg";
import Img2 from "../../assets/Inklink-prints-home/stop-signage-Inklink.jpg";
import Img3 from "../../assets/Inklink-prints-home/LED-signage-Inklink.jpg";
import Img4 from "../../assets/Inklink-prints-home/Printed-mug-Inklink.jpg";
import Img5 from "../../assets/Inklink-prints-home/Photo-frame-Inklink.jpg";



export default function Home() {
  const images = [Img1, Img2, Img3, Img4, Img5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <button className="slick-prev">Prev</button>,
    nextArrow: <button className="slick-next">Next</button>,
};


  return (
    <div className="home-container">
      <div className="home-slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="home-slide" key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="home-image"
              />
            </div>
          ))}
        </Slider>
        <div className="home-heading">
          <div>
            <h1 className="home-title">
             One stop solution for digital print, signage, & branding
            </h1>
            <p className="home-description">
              The ultimate destination for top-quality products
            </p>
          </div>
          <Link
            to="/services/design"
            className="home-footer-btn"
        
          >
            Explore more
            <span className="right-arrow">
               <i className="fa-solid fa-chevron-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
