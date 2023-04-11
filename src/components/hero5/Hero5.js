import React from "react";
import TimeCountDown from "../countdown";

const Hero5 = (props) => {
  return (
    <section className="wpo-hero-style-4">
      <div className="wedding-announcement">
        <div className="couple-text">
          <h2>Bala & Subha</h2>
          <p>WE ARE GETTING MARRIED JUNE 5, 2023</p>
          <div className="wpo-wedding-date">
            <div className="clock-grids">
              <TimeCountDown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
