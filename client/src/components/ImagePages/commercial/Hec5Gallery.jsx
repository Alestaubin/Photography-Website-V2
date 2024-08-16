import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789883/commercial/Hec5/z8xhzqffskkfrugxqssb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789883/commercial/Hec5/z8xhzqffskkfrugxqssb.jpg",
            alt: "commercial/Hec5",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789883/commercial/Hec5/gr28yhghrzlzgrxgid6s.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789883/commercial/Hec5/gr28yhghrzlzgrxgid6s.jpg",
            alt: "commercial/Hec5",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789883/commercial/Hec5/qkrjevcalok3ndrfpowj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789883/commercial/Hec5/qkrjevcalok3ndrfpowj.jpg",
            alt: "commercial/Hec5",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789883/commercial/Hec5/sl8xefpy1fkf5xgmmhfc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789883/commercial/Hec5/sl8xefpy1fkf5xgmmhfc.jpg",
            alt: "commercial/Hec5",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789883/commercial/Hec5/drg8dgkxyyrk2mthyqdu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789883/commercial/Hec5/drg8dgkxyyrk2mthyqdu.jpg",
            alt: "commercial/Hec5",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789883/commercial/Hec5/tvricojdjapytcqhlxm5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789883/commercial/Hec5/tvricojdjapytcqhlxm5.jpg",
            alt: "commercial/Hec5",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789884/commercial/Hec5/tyd1vdknpkerxxrefirl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789884/commercial/Hec5/tyd1vdknpkerxxrefirl.jpg",
            alt: "commercial/Hec5",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789884/commercial/Hec5/aqjlqvw47393pqfwqrso.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789884/commercial/Hec5/aqjlqvw47393pqfwqrso.jpg",
            alt: "commercial/Hec5",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789884/commercial/Hec5/jhclkx9lafzgnleguaak.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789884/commercial/Hec5/jhclkx9lafzgnleguaak.jpg",
            alt: "commercial/Hec5",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789884/commercial/Hec5/nbsoztl8fdhavjsvwgbv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789884/commercial/Hec5/nbsoztl8fdhavjsvwgbv.jpg",
            alt: "commercial/Hec5",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
