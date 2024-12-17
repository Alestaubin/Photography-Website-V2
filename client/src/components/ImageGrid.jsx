import React, { useEffect } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import PropTypes from "prop-types";
import "./ImageGrid.css";
import ModalImage from "react-modal-image";

const screenWidth = window.innerWidth;
/* get screen width */
let columnWidth;
if (screenWidth < 700) {
  columnWidth = parseInt(screenWidth);
} else if (screenWidth < 1500) {
  columnWidth = parseInt(screenWidth / 2);
} else {
  columnWidth = parseInt(screenWidth / 3);
}

function ImageGrid({ items, coverImage, albumTitle, albumDate }) {
  useEffect(() => {
    load_images();
  }, []);

  async function load_images() {
    const grid = document.querySelector(".image-grid");
    const sizer = document.querySelector(".image-grid-sizer");

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

  function scrollToGrid() {
    const gridElement = document.getElementById("image-grid");
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div id="image_display" className="container-fluid text-center overflow-y-scroll mb-3">
      {/* Cover Image */}
      {coverImage && (
        <div className="cover-image-container">
          <img
            src={coverImage.src}
            alt={coverImage.alt}
            className="cover-image"
          />
          <div className="cover-overlay">
            <h1 className="album-title">{albumTitle}</h1>
            <p className="album-date">{albumDate}</p>
            <button className="see-album-btn" onClick={scrollToGrid}>
              View Album
            </button>
          </div>
        </div>
      )}

      {/* Image Grid */}
      <div className="image-grid overflow-y-scroll" id="image-grid">
        <div id="image-grid-sizer" className="image-grid-sizer"></div>
        {items.map((item, index) => (
          <div className="image-grid-item" key={index}>
            <ModalImage
              small={item.imgSrcLrg.replace("upload", `upload/c_scale,w_${columnWidth}`)}
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
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  coverImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  albumTitle: PropTypes.string.isRequired,
};

export default ImageGrid;