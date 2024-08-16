import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790037/personal/McGillFall/rji9h2zjg3sfaxzr5qf8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790037/personal/McGillFall/rji9h2zjg3sfaxzr5qf8.jpg",
            alt: "personal/McGillFall",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790037/personal/McGillFall/ynu3zmxa35eg4rinpumb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790037/personal/McGillFall/ynu3zmxa35eg4rinpumb.jpg",
            alt: "personal/McGillFall",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790038/personal/McGillFall/eaqrdoacjz9bp7hsau6d.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790038/personal/McGillFall/eaqrdoacjz9bp7hsau6d.jpg",
            alt: "personal/McGillFall",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790038/personal/McGillFall/vaq5kgbcawlspirsl6i0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790038/personal/McGillFall/vaq5kgbcawlspirsl6i0.jpg",
            alt: "personal/McGillFall",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790038/personal/McGillFall/brgnqepme22hdshhnfkp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790038/personal/McGillFall/brgnqepme22hdshhnfkp.jpg",
            alt: "personal/McGillFall",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790038/personal/McGillFall/oeabznfnckc3dd2blaus.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790038/personal/McGillFall/oeabznfnckc3dd2blaus.jpg",
            alt: "personal/McGillFall",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790038/personal/McGillFall/oezruug7utn21iogsroa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790038/personal/McGillFall/oezruug7utn21iogsroa.jpg",
            alt: "personal/McGillFall",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790039/personal/McGillFall/utuxmfopmyetylfeuwic.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790039/personal/McGillFall/utuxmfopmyetylfeuwic.jpg",
            alt: "personal/McGillFall",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790039/personal/McGillFall/ezsrduhwugresnf78et3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790039/personal/McGillFall/ezsrduhwugresnf78et3.jpg",
            alt: "personal/McGillFall",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790039/personal/McGillFall/oagd9sgpoycvv1k5ojpl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790039/personal/McGillFall/oagd9sgpoycvv1k5ojpl.jpg",
            alt: "personal/McGillFall",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790039/personal/McGillFall/om7ev913c6ed75r4szmn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790039/personal/McGillFall/om7ev913c6ed75r4szmn.jpg",
            alt: "personal/McGillFall",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
