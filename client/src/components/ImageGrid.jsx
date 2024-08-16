// AlbumGrid.jsx
import React, { useEffect } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./ImageGrid.css";
import ModalImage from "react-modal-image";

function ImageGrid({ items }) {
  useEffect(() => {
    loadEverything();
  }, []);

  async function loadEverything() {
    load_images();
  }

  async function load_images() {
    console.log("load_images function is executed at runtime");

    const grid = document.querySelector(".image-grid");
    const msnry = new Masonry(grid, {
      itemSelector: ".image-grid-item",
      columnWidth: ".image-grid-sizer",
      percentPosition: true,
    });

    imagesLoaded(grid).on("progress", function () {
      msnry.layout();
      console.log(msnry);
    });
  }

  return (
    <div id="image_display" className="container-fluid text-center overflow-auto py-5 mt-2 mb-3">
      <div className="image-grid" id="image-grid">
        <div className="image-grid-sizer"></div>
        {items.map((item, index) => (
          <div className="image-grid-item" key={index}>
                <ModalImage
                    small={item.imgSrcSmll}
                    large={item.imgSrcLrg}
                    hideZoom={false}
                    hideDownload={true}
                />
          </div>
        ))}
      </div>
    </div>
  );
}

ImageGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrcSmll: PropTypes.string.isRequired,
      imgSrcLrg: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default ImageGrid;