import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import RSVP from "../../components/RSVP";
import Hero4 from "../../components/hero4/Hero4";

const InvitationPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero4 />
      <RSVP />
    </Fragment>
  );
};

export default InvitationPage;
