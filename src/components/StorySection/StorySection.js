import React from "react";
import SectionTitle from "../SectionTitle";
import sImg1 from "../../images/story/1.jpg";
import sImg2 from "../../images/story/2.gif";
import sImg3 from "../../images/story/3.jpg";

import shape1 from "../../images/rsvp/shape1.png";
import shape2 from "../../images/rsvp/shape2.png";

const StorySection = (props) => {
  return (
    <section className="story-section section-padding" id="story">
      <div className="container">
        <div className="row">
          <SectionTitle MainTitle={"Our Sweet Story"} />
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="story-timeline">
              <div className="row">
                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                  <span className="heart">
                    <i className="fi flaticon-balloon"></i>
                  </span>
                </div>
              </div>
              <div className="story-timeline-item s1">
                <div className="row align-items-center">
                  <div className="col col-lg-6 col-12">
                    <div className="img-holder right-align-text fadeInLeftSlow" data-wow-duration="1500ms">
                      <img src={sImg1} className="img img-responsive" alt="stroy" />
                    </div>
                  </div>
                  <div className="col col-lg-6 col-12">
                    <div className="story-text left-align-text fadeInRightSlow" data-wow-duration="2000ms">
                      <h3>Our First Virtual Meet</h3>
                      <span className="date">20 Dec 2022</span>
                      <div className="line-shape">
                        <div className="outer-ball">
                          <div className="inner-ball"></div>
                        </div>
                      </div>
                      <p>Our First Meet was a Virtual which was “Totally Arranged by Parents” & We actually think of it as a “Destiny”!!! We just had a normal conversation of how everything was going with our lives and most of the conversation our filled with “Vadivel Sir” dialogues and I realized how funny we can be together!!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-timeline-item">
                <div className="row align-items-center">
                  <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder left-text">
                    <div className="story-text right-align-text fadeInLeftSlow" data-wow-duration="2000ms">
                      <h3>Our First Official Meet</h3>
                      <span className="date">18 Jan 2023</span>
                      <div className="line-shape s2">
                        <div className="outer-ball">
                          <div className="inner-ball"></div>
                        </div>
                      </div>
                      <p>After a Month of Long Conversations, We Planned for the official meet. Bala, Just literally Flew back from US to India wherein he had to go through the 36 hours long flight Journey despite of his work and health conditions and he did all of this to make sure to meet me and made me realize that he is the one promising partner!</p>
                    </div>
                  </div>
                  <div className="col col-lg-6 col-12 order-lg-2 order-1">
                    <div className="img-holder left-align-text">
                      <img src={sImg2} alt="stroy" className="img img-responsive fadeInRightSlow" data-wow-duration="1500ms" />
                      <span className="heart">
                        <i className="fi flaticon-dance"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-timeline-item">
                <div className="row align-items-center">
                  <div className="col col-lg-6 col-12">
                    <div className="img-holder right-align-text left-site right-heart">
                      <img src={sImg3} alt="stroy" className="img img-responsive fadeInLeftSlow" data-wow-duration="1500ms" />
                      <span className="heart">
                        <i className="fi flaticon-dove"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col col-lg-6 col-12">
                    <div className="story-text left-align-text fadeInRightSlow" data-wow-duration="2000ms">
                      <h3>She Said Yes!!!</h3>
                      <span className="date">18 Jan 2023</span>
                      <div className="line-shape">
                        <div className="outer-ball">
                          <div className="inner-ball"></div>
                        </div>
                      </div>
                      <p>
                        The day I met Subha is the day She officially Said “Yes” and She went on to Quote Saying that <span className="text-primary-suba">“Love, Life, Time have chosen us to be together” </span>and I felt that and there is no looking back since then 😊 and One month later we got engaged officially on 1st Feb 2023 and from there on, it’s your countless blessings keeping us safe and happy together forever!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <div className="sticky-shape">
          <img src={shape1} alt="" />
        </div>
      </div>
      <div className="shape-2">
        <div className="sticky-shape">
          <img src={shape2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
