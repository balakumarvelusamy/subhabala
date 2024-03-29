import React from "react";
import classes from "../../css/BackgroundVideo.module.css";

const Hero7 = (props) => {
  const videoSource = "https://pic.pikbest.com/19/87/10/257888piCYXn.mp4";
  return (
    <section className="vedio-area">
      <div className={classes.Container}>
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={classes.Content}>
          <div className="wedding-announcement">
            <div className="couple-text">
              <h2>Bala & Subha</h2>
              <p>WE ARE GETTING MARRIED JUNE 5, 2023 111</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero7;
