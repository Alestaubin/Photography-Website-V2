import React, { useEffect } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const BdaGallery = () => {
    useEffect(() => {
        const screenWidth = window.innerWidth;
              
        //call masonry
        var grid = document.querySelector('.grid');
    
        var msnry = new Masonry( grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    
        imagesLoaded( grid ).on( 'progress', function() {
            // layout Masonry after each image loads
            msnry.layout();
        });
        return;
    
        
    }, []);
    
    return (
        <div id="image_display" className="container-fluid text-center overflow-auto p-2 pt-5">
            <div className="grid" id="image_grid">
                <div className="grid-sizer"></div>
                <div className="grid-item">
                    <img src="https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg" alt="BDA" />
                </div>
                <div className="grid-item">
                    <img src="https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg" alt="BDA" />
                </div>
                <div className="grid-item">
                    <img src="https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg" alt="BDA" />
                </div>
                <div className="grid-item">
                    <img src="https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg" alt="BDA" />
                </div>
                <div className="grid-item">
                    <img src="https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg" alt="BDA" />
                </div>
                <div className="grid-item">
                    <img src="https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg" alt="BDA" />
                </div>
                <div className="grid-item">
                    <img src="https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg" alt="BDA" />
                </div>
                <div className="grid-item">
                    <img src="https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg" alt="BDA" />
                </div>
            </div>
            <div className="container" id="footer"></div>
        </div>
    );
    }

export default BdaGallery;