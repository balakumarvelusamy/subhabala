import React from "react";
import { Link } from "react-router-dom";
import coupleImg1 from "../../images/couple/bala.jpg";
import coupleImg2 from "../../images/couple/subha.jpg";

import shape1 from "../../images/couple/shape-1.png";
import shape2 from "../../images/couple/shape-2.png";
import shape3 from "../../images/couple/shape-3.png";
import shape4 from "../../images/couple/shape-4.png";

const CoupleSection = (props) => {
  return (
    <section className={`couple-section p-1 section-padding ${props.cClass}`} id="couple">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col col-lg-11">
            <div className="couple-area clearfix">
              <div className="couple-item bride">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="couple-img">
                      <img src={coupleImg1} alt="" />
                      <div className="couple-shape">
                        <img src={shape3} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="couple-text">
                      <h3 className="text-primary-suba">BalaKumar</h3>
                      <p>
                        <b>A Man Who is a Software Engineer by profession & a Passionate Photographer at heart, who has found his eternal love in his passion. Hopefully, Subha finds a way to fit in Bala’s cute little World!</b>
                      </p>
                      <p>
                        <b>From the Subha’s POV :</b> Bala is a very creative, pure, passionate & caring soul often misunderstood for his words that come straight from the heart. His warm smile and compassionate heart radiate love and kindness, and he has a way of making everyone feel seen and valued. That made my heart skip a beat, and I am so proud & lucky to have him as a partner for life!!! <br />
                      </p>{" "}
                      <p>
                        <b>Things that Bala is Great at:</b> cooking, gardening(awesome right?), painting (my most favourite thing), being funny(yes, Sometimes..LOL🤪)
                      </p>
                      <div className="social">
                        <ul>
                          {/* <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                                    <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li> */}
                          <li>
                            <Link target="_blank" to="https://www.instagram.com/theuniquecreations/">
                              <i className="ti-instagram"></i>
                            </Link>
                          </li>
                          {/* <li><Link to="/"><i className="ti-pinterest"></i></Link></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="couple-item groom">
                <div className="row align-items-center">
                  <div className="col-lg-7 order-lg-1 order-2">
                    <div className="couple-text">
                      <h3 className="text-primary-suba">Subha Swetha</h3>
                      <p>
                        <b>A girl who is a software engineer by profession and a passionate badminton player at heart, who has found her eternal love in solitude. Hopefully, Bala can pave a way to fit into Subha's beautiful and happy life!</b>
                      </p>
                      <p>
                        <b>From Bala’s POV:</b> Subha is a very happy, independent soul who understands me without even saying things out loud. She is super crazy about playing badminton every single day for 365 days, and sometimes that makes me want to learn and go play with her and be her best badminton partner! She is the one who deeply values her family, friends, and life itself. I am lucky to find a best friend and crime partner for life!{" "}
                      </p>
                      <p>
                        <b>Things that Subha is Great at:</b> We all know it's her work... work... work, and definitely not cooking (just kidding). Playing badminton (awesome, right?), and highly disciplined 🙁 (awesome, but sometimes it's not!).
                      </p>
                      <div className="social">
                        <ul>
                          {/* <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                                    <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li> */}
                          <li>
                            <Link target="_blank" to="https://www.instagram.com/subhaswethaa/">
                              <i className="ti-instagram"></i>
                            </Link>
                          </li>
                          {/* <li><Link to="/"><i className="ti-pinterest"></i></Link></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 order-lg-2 order-1">
                    <div className="couple-img">
                      <img src={coupleImg2} alt="" />
                      <div className="couple-shape">
                        <img src={shape4} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <img src={shape1} alt="" />
      </div>
      <div className="shape-2">
        <img src={shape2} alt="" />
      </div>
    </section>
  );
};

export default CoupleSection;
