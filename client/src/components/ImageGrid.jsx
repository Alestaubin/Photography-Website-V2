import React, { useEffect } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import PropTypes from "prop-types";
import "./ImageGrid.css";
import ModalImage from "react-modal-image";
import ReactDOM from "react-dom"; 


const screenWidth = window.innerWidth;
/* get screen width */
if (screenWidth < 700) {
  var columnWidth = parseInt(screenWidth);
}else if (screenWidth < 1500) {
  var columnWidth = parseInt(screenWidth/2);
}else {
  var columnWidth = parseInt(screenWidth/3);
}

function ImageGrid({ items }) {
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

  return (
    <div id="image_display" className="container-fluid text-center overflow-y-scroll p-4 py-5 mt-2 mb-3">
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
};

export default ImageGrid;