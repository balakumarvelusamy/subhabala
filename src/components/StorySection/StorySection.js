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
                      <p>Our first meet was virtual and it was totally arranged by our parents. We actually think of it as destiny! We just had a normal conversation about how everything was going on with our lives, and most of the conversation was filled with <span className="text-primary-suba">"Vadivel Sir"</span> dialogues. I realized how funny we can be together!</p>
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
                      <p>After a month of long conversations, we planned for an official meet. Bala literally flew back from the US to India, despite his work and health conditions, enduring the <span className="text-primary-suba">"36-hour-long flight journey"</span>, just to meet me. He made me realize that he is the one promising partner!</p>
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
                        The day I met Subha was the day she officially said 'Yes', and she went on to say that <span className="text-primary-suba">“Love, Life, Time have chosen us to be together” </span>I felt that, and there has been no looking back since then 😊. One month later, we officially got engaged on 1st February 2023, and from there on, it's been your countless blessings keeping us safe and happy together forever!
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
