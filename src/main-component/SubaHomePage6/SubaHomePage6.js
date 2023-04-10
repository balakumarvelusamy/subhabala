import React, { Fragment } from "react";
import Navbar2 from "../../components/Navbar2";
import Hero6 from "../../components/hero6/Hero6";
import Scrollbar from "../../components/scrollbar";
import CoupleSection from "../../components/CoupleSection/CoupleSection";
import SectionTitle from "../../components/SectionTitle";
import VideoSection from "../../components/VideoSection";
import StorySection from "../../components/StorySection/StorySection";
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection";
import BrideGrooms from "../../components/BrideGrooms/BrideGrooms";
import EventSection from "../../components/EventSection/EventSection";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import RSVP from "../../components/RSVP";
import Gallery from "../../components/Gallery";
const SubaHomePage6 = () => {
  return (
    <Fragment>
      <Navbar2 />
      <Hero6 />
      <SectionTitle Name={"green"} MainTitle={"Destiny Brought Us Together 🤝 & Now, Your blessings & Our Love will seal the bond forever ♾️ ❤️‍🔥"} className="p-1" />
      <CoupleSection />
      <VideoSection />
      <StorySection />
      <CtaSection />
      <PortfolioSection />

      <BrideGrooms />
      <EventSection />
      <Gallery />
      <PartnerSection />
      {/* <BlogSection /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default SubaHomePage6;
