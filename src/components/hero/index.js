import React from "react";
import TimeCountDown from "../countdown";
import hImg1 from "../../images/slider/s1.png";
// import shape1 from "../../images/slider/shape.svg";
import shape1 from "../../images/slider/heart.png";
import shape2 from "../../images/slider/flower1.png";
import shape3 from "../../images/slider/flower2.png";

const Hero = (props) => {
  return (
    <section className="static-hero " id="home">
      <div className="hero-container ">
        <div className="hero-inner">
          <div className="container-fluid">
            <div className="row align-items-right">
              <div className="col-xl-8 col-lg-6 col-12">
                <div className="wpo-static-hero-inner">
                  <div className="shape-1">
                    <img src={shape1} alt="" />
                  </div>
                  <div data-swiper-parallax="300" className="slide-title">
                    <h2>
                      Subha <span>&</span> Bala
                    </h2>
                  </div>
                  <div data-swiper-parallax="400" className="slide-text">
                    <p>WE ARE GETTING MARRIED JUNE 5, 2023</p>
                  </div>
                  <div className="wpo-wedding-date">
                    <div className="clock-grids">
                      <TimeCountDown />
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="static-hero-right">
        <div className="static-hero-img">
          <div className="static-hero-img-inner">
            <img src={hImg1} alt="" />
          </div>
          <div className="static-hero-shape-1 d-none">
            <img src={shape2} alt="" />
          </div>
          <div className="static-hero-shape-2 d-none">
            <img src={shape3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
