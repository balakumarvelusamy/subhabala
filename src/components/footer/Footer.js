import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer d-none">
        <div className="container">
          <div className="row">
            <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="widget-title">
                  <Link onClick={ClickHandler} className="logo" to="/">
                    <small>My</small> Tales of Suba
                    <span>
                      <i className="fi flaticon-dove"></i>
                    </span>
                  </Link>
                </div>
                <p>Blandit ipsum arcu donec auctor a, turpis vitae. Egestas pretium euenim non euoeu dignissim nulla nunc quisque</p>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Information</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/blog">
                      Latest News
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/accomodation">
                      Accomodation
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/story">
                      Our story
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-email"></i>Mylove@gmail.com
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call"></i>+888 (123) 869523
                    </li>
                    <li>
                      <i className="fi flaticon-maps-and-flags"></i>New York – 1075 Firs Avenue
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget newsletter">
                <div className="widget-title">
                  <h3>Newsletter</h3>
                </div>
                <form onSubmit={SubmitHandler}>
                  <input type="text" placeholder="Email" required />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer border-top ">
        <div className="container ">
          <div className="row ">
            <div className="col col-xs-12">
              <p className="copyright ">
                {" "}
                &copy; 2023, Designed with 💚 by Subha & Bala. <br />
              </p>
              <Link className="" onClick={ClickHandler} to="https://theuniquecreations.com/contact">
                <p className="small">
                  Contact <b>www.theuniquecreations.com</b> for Digital Invitation/ Website development
                </p>
              </Link>
              <br />
              <br />
              <Link className="small text-dark d-none" to="/admin">
                <i>Admin Log in</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
