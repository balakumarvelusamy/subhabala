import React from "react";

const SectionTitle = (props) => {
  return (
    <>
      {props.Name != "green" ? (
        <div className="wpo-section-title mb-2">
          <div className="section-title-icon">
            <i className="fi flaticon-dove"></i>
          </div>
          <h2>{props.MainTitle}</h2>
        </div>
      ) : (
        <div className="wpo-section-title p-4 mb-1">
          <h3 className="">{props.MainTitle}</h3>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
