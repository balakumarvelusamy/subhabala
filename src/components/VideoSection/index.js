import React from "react";
import VideoModal from "../ModalVideo";
import pic from "../../images/meu.png";
const VideoSection = (props) => {
  return (
    <>
      <section className="wpo-video-section">
        <h2 className="hidden">some</h2>
        <img src={pic} />
        <VideoModal />
      </section>
    </>
  );
};

export default VideoSection;
