import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import SectionTitle from "../../components/SectionTitle";

import vec1 from "../../images/rsvp/flower1.png";
import vec2 from "../../images/rsvp/flower2.png";

import shape1 from "../../images/rsvp/shape1.png";
import shape2 from "../../images/rsvp/shape2.png";

const RSVP = (props) => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    wishes: "",
    attend: "",
    guest: "",
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    console.log("subarsvp", forms);
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      setForms({
        name: "",
        email: "",

        attend: "",
        guest: "",
        wishes: "",
      });
    } else {
      validator.showMessages();
    }
  };

  return (
    <section className={`wpo-contact-section ${props.pt}`} id="RSVP">
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="wpo-contact-form-area">
            <SectionTitle MainTitle={"Are you attending?"} />

            <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active">
              <div className="form-field">
                <input value={forms.name} type="text" name="name" onBlur={(e) => changeHandler(e)} onChange={(e) => changeHandler(e)} required className="form-control" placeholder="Your Name" />
                {validator.message("name", forms.name, "required|alpha_space")}
              </div>
              <div className="form-field">
                <input value={forms.email} type="email" name="email" onBlur={(e) => changeHandler(e)} onChange={(e) => changeHandler(e)} required className="form-control" placeholder="Your Email" />
                {validator.message("email", forms.email, "required|email")}
              </div>
              {/* <div className="radio-buttons">
                <p>
                  <input type="radio" id="attend" name="radiogroup1" />
                  <label htmlFor="attend">Yes, I will be there</label>
                </p>
                <p>
                  <input type="radio" id="not" name="radiogroup1" />
                  <label htmlFor="not">Sorry, I can’t come</label>
                </p>
              </div> */}

              <div className="form-field">
                <input value={forms.guest} type="number" name="guest" maxLength="10" minLength="1" onBlur={(e) => changeHandler(e)} required onChange={(e) => changeHandler(e)} className="form-control" placeholder="Number Of Guests"></input>
                {validator.message("guest", forms.guest, "required|number")}
              </div>

              <div className="form-field">
                I will attend:
                <select onBlur={(e) => changeHandler(e)} onChange={(e) => changeHandler(e)} value={forms.meal} type="text" className="form-control" name="attend">
                  <option></option>
                  <option value="Reception">Reception, July 4 7:00 PM</option>
                  <option value="Marriage">Marriage, July 5 9:00 AM</option>
                  <option value="Both">Both</option>
                  <option value="No">Sorry, I can’t come.</option>
                </select>
              </div>
              <div className="form-field">
                <textarea rows="4" value={forms.wishes} name="wishes" onBlur={(e) => changeHandler(e)} onChange={(e) => changeHandler(e)} className="form-control" placeholder="Your Best Wishes for our next phase of life."></textarea>
              </div>

              <div className="submit-area">
                <button type="submit" className="theme-btn">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
          <div className="vector-1">
            <img src={vec1} alt="" />
          </div>
          <div className="vector-2">
            <img src={vec2} alt="" />
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
export default RSVP;
