import React from "react";
import SectionTitle from "../SectionTitle";
import timg1 from "../../images/team/sanju.jpg";
import timg2 from "../../images/team/van.jpg";
import timg3 from "../../images/team/aravind.jpg";
import timg4 from "../../images/team/img-4.jpg";
import timg5 from "../../images/team/img-5.jpg";
import timg6 from "../../images/team/img-6.jpg";

import shape1 from "../../images/team/shape1.jpg";
import shape2 from "../../images/team/shape2.jpg";

const brideGrooms = [
  {
    id: "1",
    tImg: timg1,
    name: "Sanjay kumar",
    title: "Bride’s Brother",
  },
  {
    id: "2",
    tImg: timg2,
    name: "Vanmathy",
    title: "Bridesmaid",
  },
  {
    id: "3",
    tImg: timg3,
    name: "Aravind",
    title: "Groom's Brother",
  },
];

const BrideGrooms = (props) => {
  return (
    <section className={`wpo-team-section ${props.tClass}`}>
      <div className="container">
        <SectionTitle MainTitle={"Engagement Scenes"} />
        <div className="wpo-team-wrap">
          <div className="row">
            {brideGrooms.map((brideGroom, tm) => (
              <div className="col col-lg-4 col-md-6 col-sm-12 col-12" key={tm}>
                <div className="wpo-team-item">
                  <div className="wpo-team-img">
                    <div className="wpo-team-img-inner">
                      <img src={brideGroom.tImg} alt="" />
                    </div>
                    <div className="shape-1">
                      <img src={shape1} alt="" />
                    </div>
                    <div className="shape-2">
                      <img src={shape2} alt="" />
                    </div>
                  </div>
                  <div className="wpo-team-text">
                    <h3>{brideGroom.name}</h3>
                    <span>{brideGroom.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrideGrooms;
