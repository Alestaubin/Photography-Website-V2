import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789974/personal/Golf/lngsv1hk4l5wy1do0prj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789974/personal/Golf/lngsv1hk4l5wy1do0prj.jpg",
            alt: "personal/Golf",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789974/personal/Golf/qbidvlaqrqte1hik7yqh.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789974/personal/Golf/qbidvlaqrqte1hik7yqh.jpg",
            alt: "personal/Golf",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789974/personal/Golf/k2k3yzbqadkyf3zz7g1b.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789974/personal/Golf/k2k3yzbqadkyf3zz7g1b.jpg",
            alt: "personal/Golf",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789975/personal/Golf/ns3khbpje1nk7vpa49uj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789975/personal/Golf/ns3khbpje1nk7vpa49uj.jpg",
            alt: "personal/Golf",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789975/personal/Golf/f2dsi0poiatoljy8huw1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789975/personal/Golf/f2dsi0poiatoljy8huw1.jpg",
            alt: "personal/Golf",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789975/personal/Golf/zzhha0gcdywwdgjl20gv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789975/personal/Golf/zzhha0gcdywwdgjl20gv.jpg",
            alt: "personal/Golf",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789975/personal/Golf/btp446wwloxznvofxzjl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789975/personal/Golf/btp446wwloxznvofxzjl.jpg",
            alt: "personal/Golf",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
