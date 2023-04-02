import React, { Component, useEffect, useState, useCallback } from "react";
import PortfolioFilter from "../portfolio/portfolio-filter";
import PortfolioItem from "../portfolio/portfolio-item";
import useMasonry from "../hooks/use-masonry";
import SectionTitle from "../SectionTitle";
import { slugify } from "../utils";
import config from "../../config.json";
const Gallery = () => {
  // Isotope Categories list JS
  const [tucdata, setGalleryImage] = useState([]);
  const [networkError, setNetworkError] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const getGalleryDetails = async () => {
    setLoading(true);
    console.log("galleryimages");
    await fetch(config.service_url + "getgallery")
      .then((response) => response.json())
      .then((data1) => {
        let length = data1.length;
        let active1 = data1.filter((filter1) => filter1.isactive === 1 && filter1.viewingallery === 1);
        setGalleryImage(active1);
        setLoading(false);
        console.log("galleryimages", data1);
      })
      .catch((err) => {
        setNetworkError("Something went wrong, Please try again later!!");
        console.log("galleryimages", err);
        setLoading(false);
      });
  };
  useEffect(() => {
    console.log("galleryimages");
    getGalleryDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { categories } = useMasonry(tucdata, ".portfolio-list", ".masonry-grid", ".messonry-button", ".messonry-button button");
  return (
    <div className="portfolio-area portfolio-default-area ">
      <SectionTitle MainTitle={"Our Handpicked Gallery"} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="messonry-button text-center mb-50">
              <PortfolioFilter categories={categories} />
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list mb-n30 min-height-700">
          <div className="col resizer"></div>
          {tucdata &&
            tucdata.map((portfolio) => (
              <div key={portfolio.gallery_id} className={`col masonry-grid mb-10 ${portfolio.title}`}>
                <PortfolioItem portfolio={portfolio} />
              </div>
            ))}
        </div>
        <br />
        <div className="row d-none">
          <div className="col-lg-12 text-center mt-60">
            <button className="btn-portfolio"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
