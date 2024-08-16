import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790060/personal/McGillWin/r4gyatnb7aenpqyi0mss.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790060/personal/McGillWin/r4gyatnb7aenpqyi0mss.jpg",
            alt: "personal/McGillWin",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790061/personal/McGillWin/pxnrgfcdwfayp0dhj2hd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790061/personal/McGillWin/pxnrgfcdwfayp0dhj2hd.jpg",
            alt: "personal/McGillWin",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790061/personal/McGillWin/xowbtzkcsur42hynzblq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790061/personal/McGillWin/xowbtzkcsur42hynzblq.jpg",
            alt: "personal/McGillWin",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790061/personal/McGillWin/duppgdlulmcohzqsfeaz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790061/personal/McGillWin/duppgdlulmcohzqsfeaz.jpg",
            alt: "personal/McGillWin",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790061/personal/McGillWin/m2v0zbjb1o1uugh9dqd3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790061/personal/McGillWin/m2v0zbjb1o1uugh9dqd3.jpg",
            alt: "personal/McGillWin",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790061/personal/McGillWin/vwus8bhdav7hzdyxs9on.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790061/personal/McGillWin/vwus8bhdav7hzdyxs9on.jpg",
            alt: "personal/McGillWin",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790062/personal/McGillWin/ekzpijknqyee08aixet0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790062/personal/McGillWin/ekzpijknqyee08aixet0.jpg",
            alt: "personal/McGillWin",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790062/personal/McGillWin/g1tz9i5l6334n1hwtwdz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790062/personal/McGillWin/g1tz9i5l6334n1hwtwdz.jpg",
            alt: "personal/McGillWin",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
