import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import config from "../../config.json";

const VideoModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={config.ytvideoId} onClose={() => setOpen(false)} />

      <div className="video-btn">
        <ul>
          <li>
            <button className="wrap" onClick={() => setOpen(true)}>
              <i className="fi flaticon-play" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default VideoModal;
