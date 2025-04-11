// AlbumGrid.jsx
import React, { useEffect } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./AlbumGrid.css";

function AlbumGrid({ items }) {
  useEffect(() => {
    loadEverything();
  }, []);

  async function loadEverything() {
    load_albums();
  }

  async function load_albums() {
    console.log("load_albums function is executed at runtime");

    const grid = document.querySelector(".album-grid");
    const msnry = new Masonry(grid, {
      itemSelector: ".album-grid-item",
      columnWidth: ".album-grid-sizer",
      percentPosition: true,
    });

    imagesLoaded(grid).on("progress", function () {
      msnry.layout();
      console.log(msnry);
    });
  }

  return (
    <div id="image_display" className="container-fluid text-center overflow-auto px-5 p-4 py-5 mt-2 mb-3">
      <div className="album-grid" id="album-grid">
        <div className="album-grid-sizer"></div>
        {items.map((item, index) => (
          <div className="album-grid-item" key={index}>
            <div className="image-container">
              <NavLink className="nav-link" to={item.link}>
                <img src={item.imgSrc} alt={item.alt} className="album-img" />
              </NavLink>
              <label htmlFor={item.alt} className="image-label">{item.label}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

AlbumGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AlbumGrid;