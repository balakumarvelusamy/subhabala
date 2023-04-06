import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import SectionTitle from "../../components/SectionTitle";

import vec1 from "../../images/rsvp/flower1.png";
import vec2 from "../../images/rsvp/flower2.png";
import uuid from "react-uuid";
import shape1 from "../../images/rsvp/shape1.png";
import shape2 from "../../images/rsvp/shape2.png";
import config from "../../config.json";
const RSVP = (props) => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    wishes: "",
    attend: "",
    guest: "",
  });
  const [messagae, setMessage] = useState("");
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });

    console.log("subarsvp", e.target.name.value);

    e.preventDefault();

    const body = "<p>Hello " + e.target.name.value + "," + "</p>" + "<p>Thank you for reaching out to us.</p>" + "<br/><p>Regards,</p> <p><a href='" + config.website + "'>" + config.websitetitle + "</a></p>" + "<table  style='border: 1px solid black'>" + "<tr style='border: 1px solid black'><td> <i>Name:</i></td> <td> <i>" + e.target.name.value + "</i></td></tr>" + "<tr style='border: 1px solid black'><td><i>Email:</i></td><td> <i>" + e.target.email.value + "</i></td></tr>" + "<tr style='border: 1px solid black'><td><i>Guest:</i></td><td> <i>" + e.target.guest.value + "</i></td></tr>" + "<tr style='border: 1px solid black'><td><i>Attent:</i></td><td> <i>" + e.target.attend.value + "</i></td></tr>" + "<tr style='border: 1px solid black'><td><i>Message:</i></td><td> <i>" + e.target.wishes.value + "</i></td></tr>" + "</table>";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: config.fromemail,
        to: e.target.email.value + "," + config.fromemail,
        subject: config.subject + e.target.name.value,
        text: "",
        html: body,
      }),
    };
    console.log(requestOptions);
    try {
      fetch(config.email_service_url, requestOptions).then((response) => console.log(response.json()));
      setMessage("Thanks for Contacting us.");
      savetoDB(forms);
      e.target.reset();
    } catch (err) {
      console.log(err);
    }

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
      setMessage("");
    }
  };
  const savetoDB = (data) => {
    forms.id = uuid();
    forms.createddate = new Date();
    if (data.attend == "No") {
      forms.guest = 0;
    }
    console.log("savetodb", data);
    let methodname = "addcontact";
    fetch(config.service_url + methodname, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ data }) })
      .then((response) => response.json())
      .then((data) => {
        console.log("regitered user", data);
        if (data.status === 200) {
          setMessage("Thanks for Contacting us....");
        } else {
          setMessage("");
        }
      })
      .catch((err) => {});
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
              </div>
              <div className="form-field">
                <input value={forms.email} type="email" name="email" onBlur={(e) => changeHandler(e)} onChange={(e) => changeHandler(e)} required className="form-control" placeholder="Your Email" />
              </div>

              <div className="form-field">
                I will attend:
                <select onBlur={(e) => changeHandler(e)} required onChange={(e) => changeHandler(e)} value={forms.meal} type="text" className="form-control" name="attend">
                  <option></option>
                  <option value="Reception">Reception, July 4 7:00 PM</option>
                  <option value="Marriage">Marriage, July 5 9:00 AM</option>
                  <option value="Both">Both</option>
                  <option value="No">Sorry, I can’t come.</option>
                </select>
              </div>

              <div className={forms.attend != "No" ? "form-field" : "d-none"}>
                <input value={forms.attend == "No" ? 0 : forms.guest} type="number" name="guest" onBlur={(e) => changeHandler(e)} onChange={(e) => changeHandler(e)} maxLength="10" minLength="1" className="form-control" placeholder="Number Of Guests"></input>
              </div>

              <div className="form-field">
                <textarea rows="4" value={forms.wishes} name="wishes" onBlur={(e) => changeHandler(e)} onChange={(e) => changeHandler(e)} className="form-control1 w-100" placeholder="Share your Best Wishes for our next phase of life."></textarea>
              </div>
              <span className="text-primary-suba">{messagae}</span>
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
