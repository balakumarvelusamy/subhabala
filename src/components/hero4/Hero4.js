import React from "react";
import LocationMap from "../Modal";
import shape1 from "../../images/slider/flower1.png";
import shape2 from "../../images/slider/flower2.png";

const Hero4 = (props) => {
  return (
    <section className="static-hero-s3">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="wpo-event-item">
                  <div className="wpo-event-text">
                    <h2>Subha & Bala</h2>
                    <p>are whole heartedly inviting you!!!</p>
                    <ul>
                      <li>
                        <b className="text-primary-suba">Reception</b> <br />
                        <p>Sunday, 4 June, 2023 7:00PM IST Onwards</p>
                      </li>
                      <li>
                        <b className="text-primary-suba">Wedding</b> <br />
                        <p>Monday, 5 June, 2023 9:00AM – 12:30PM IST</p>
                      </li>
                      <li>Sri Venkateshwara Mahal, Thuraiyur</li>
                      <li>
                        <LocationMap />
                      </li>
                    </ul>
                  </div>
                  <div className="shape-1">
                    <img src={shape1} alt="" />
                  </div>
                  <div className="shape-2">
                    <img src={shape2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
