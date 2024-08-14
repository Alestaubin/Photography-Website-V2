import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926601/events/BDA/rwqn1eqe2pzdke0b3hc2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926601/events/BDA/rwqn1eqe2pzdke0b3hc2.jpg",
            alt: "BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg",
            alt: "BDA",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;

