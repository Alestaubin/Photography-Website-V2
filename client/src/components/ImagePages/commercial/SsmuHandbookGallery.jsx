import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789897/commercial/SSMUhandbook23/tlggyqky3mupdms976mk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789897/commercial/SSMUhandbook23/tlggyqky3mupdms976mk.jpg",
            alt: "commercial/SSMUhandbook23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789897/commercial/SSMUhandbook23/npcv47h5obd1oil4xxkn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789897/commercial/SSMUhandbook23/npcv47h5obd1oil4xxkn.jpg",
            alt: "commercial/SSMUhandbook23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789897/commercial/SSMUhandbook23/je2s32kkqtmsez0bn889.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789897/commercial/SSMUhandbook23/je2s32kkqtmsez0bn889.jpg",
            alt: "commercial/SSMUhandbook23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789897/commercial/SSMUhandbook23/mtddpfx4her6dm6zlwwa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789897/commercial/SSMUhandbook23/mtddpfx4her6dm6zlwwa.jpg",
            alt: "commercial/SSMUhandbook23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789897/commercial/SSMUhandbook23/pach3inlbicixneblhxm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789897/commercial/SSMUhandbook23/pach3inlbicixneblhxm.jpg",
            alt: "commercial/SSMUhandbook23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789898/commercial/SSMUhandbook23/xx16tyexwfy6frgpj2pc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789898/commercial/SSMUhandbook23/xx16tyexwfy6frgpj2pc.jpg",
            alt: "commercial/SSMUhandbook23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789898/commercial/SSMUhandbook23/irz7cgj9uvnjhcetnlqz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789898/commercial/SSMUhandbook23/irz7cgj9uvnjhcetnlqz.jpg",
            alt: "commercial/SSMUhandbook23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789898/commercial/SSMUhandbook23/vcnrpaymlukzlcyzw11z.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789898/commercial/SSMUhandbook23/vcnrpaymlukzlcyzw11z.jpg",
            alt: "commercial/SSMUhandbook23",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
