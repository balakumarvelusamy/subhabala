import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from "../../images/partners/1zr.png";
import pimg2 from "../../images/partners/1makeup.png";
import pimg3 from "../../images/partners/1gt.png";
import pimg4 from "../../images/partners/1mahal.png";
import pimg5 from "../../images/partners/tuclogo.png";
import SectionTitle from "../SectionTitle";
const partners = [
  {
    pImg: pimg5,
    link: "https://www.instagram.com/theuniquecreations",
  },
  {
    pImg: pimg2,
  },
  {
    pImg: pimg3,
  },
  {
    pImg: pimg4,
  },
  {
    pImg: pimg1,
  },
];

const PartnerSection = (props) => {
  var settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className={`wpo-partners-section ${props.pClass}`}>
      <SectionTitle MainTitle={"Our Partners"} />
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="partner-grids partners-slider owl-carousel">
              <Slider {...settings}>
                {partners.map((partner, pitem) => (
                  <a href={partner.link} target="_blank">
                    <div className="grid" key={pitem}>
                      <img src={partner.pImg} alt="" />
                    </div>
                  </a>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default PartnerSection;
