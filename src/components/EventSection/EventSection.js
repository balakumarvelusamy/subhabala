import React from "react";
import LocationMap from "../Modal";
import SectionTitleS2 from "../SectionTitleS2";

const Events = [
  {
    title: "The Reception & The Wedding",
    li1: "Reception - Sunday, 4 June, 2023 7:00 PM IST Onwards",
    li12: "Wedding - Monday, 5 June, 2023 9:00 AM IST Onwards",
    li2: "Sri Venkateshwara Mahal, Thuraiyur",
    li3: "Perambalur District",
  },
];

const EventSection = (props) => {
  return (
    <section className={`wpo-event-section section-padding ${props.eClass}`} id="event">
      <div className="container">
        <SectionTitleS2 MainTitle={"When & Where"} />
        <div className="wpo-event-wrap">
          <div className="row">
            {Events.map((event, eitem) => (
              <div className=" col-12" key={eitem}>
                <div className="wpo-event-item">
                  <div className="wpo-event-text">
                    <h2>{event.title}</h2>
                    <ul>
                      <li>{event.li1}</li>
                      <li>{event.li12}</li>
                      <li>{event.li2}</li>
                      <li>{event.li3}</li>
                      <li>
                        <LocationMap />
                      </li>
                    </ul>
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

export default EventSection;
