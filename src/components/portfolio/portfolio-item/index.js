import PropTypes from "prop-types";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";
import { Link } from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
  return (
    <div className="single-portfolio">
      <LightgalleryProvider>
        <LightgalleryItem group="any" src={portfolio.imageurl}>
          <div className="thumbnail">
            <div className="overlay">
              <img src={portfolio.imageurl} alt="portfolio" />
            </div>
          </div>
        </LightgalleryItem>
      </LightgalleryProvider>
      <div className="content d-none">
        <p className="title">{portfolio.title}</p>
        {/* <p className="desc">{portfolio.excerpt}</p> */}
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  portfolio: PropTypes.object,
};

export default PortfolioItem;
