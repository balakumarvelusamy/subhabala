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
                        <b>A Man Who is a Software Engineer by Profession and a Passionate Photographer by heart who has found his Eternal Love in his passion and Hopefully Subha finds a way to fit in Bala’s cute little World!!</b>
                      </p>
                      <p>
                        <b>From Bride’s POV :</b> Bala is a Very Creative, Pure, Passionate & Caring Soul often misunderstood for his words that are straight from the heart!! His warm smile and compassionate heart radiate love and kindness, and he has a way of making everyone feel seen and valued. And that made me skip a beat from my heart and I am so proud & lucky to have him as a partner for life!!! <br />
                      </p>{" "}
                      <p>
                        <b>Things that Bala is Great at:</b> Cooking, Gardening(Awesome Right), Painting (My Most favourite thing), Being Funny(Yes, Sometimes..LOL🤪)
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
                        <b>A Girl Who is a Software Engineer By Profession and a Passionate Badminton Player by heart and who has found her Eternal Love in Solitude and Hopefully Bala paves a way to fit in Subha’s beautiful and happy life!!</b>
                      </p>
                      <p>
                        <b>From Groom’s POV:</b> Subha is a Very Happy, Independent Soul and who understands me without even saying things out-loud and she is super crazy about playing badminton every single day for 365 days and sometimes that makes me want to learn and go play with her and be her the best badminton partner!! She is the one who deeply values her family, friends, and life itself. I am lucky to find a best friend & Crime-partner for life!!!{" "}
                      </p>
                      <p>
                        <b>Things that Subha is Great at:</b> We all know it’s her Work..Work..Work and Definitely Not Cooking(Just Kidding), Playing Badminton(Awesome Right), Highly Disciplined 🙁 (which is awesome but sometimes it’s not!)
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
