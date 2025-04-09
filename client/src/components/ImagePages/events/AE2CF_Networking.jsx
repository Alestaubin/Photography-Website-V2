import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const coverImage = {
    src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162261/events/AE2CF/szpxzfeovsoufmjlc0yf.jpg",
    alt: "UQAM Aé2CF Soirée Résautage"
    }
    const albumTitle = "UQAM Aé2CF Soirée Résautage"
    const albumDate = "March 2025"
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162261/events/AE2CF/szpxzfeovsoufmjlc0yf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162261/events/AE2CF/szpxzfeovsoufmjlc0yf.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162261/events/AE2CF/ohvftdllf1ex3vc0j0ri.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162261/events/AE2CF/ohvftdllf1ex3vc0j0ri.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162260/events/AE2CF/iwfx0nlz93bsqwuva0ih.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162260/events/AE2CF/iwfx0nlz93bsqwuva0ih.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162260/events/AE2CF/pr2ojeczvwcmsd1ealix.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162260/events/AE2CF/pr2ojeczvwcmsd1ealix.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162259/events/AE2CF/bmrpsedr6tjvcqvryxan.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162259/events/AE2CF/bmrpsedr6tjvcqvryxan.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162258/events/AE2CF/yrjklxvfqfvn1czgoiad.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162258/events/AE2CF/yrjklxvfqfvn1czgoiad.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162258/events/AE2CF/oak7mezbt5kkf6o65fyn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162258/events/AE2CF/oak7mezbt5kkf6o65fyn.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162258/events/AE2CF/ccxad21leqmx7ewsxwa2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162258/events/AE2CF/ccxad21leqmx7ewsxwa2.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162257/events/AE2CF/ewws1trazhdwrmptr7cn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162257/events/AE2CF/ewws1trazhdwrmptr7cn.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162256/events/AE2CF/gag3cnexnux4dx7nowrn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162256/events/AE2CF/gag3cnexnux4dx7nowrn.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162256/events/AE2CF/llzydoncitzx1wzaedsn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162256/events/AE2CF/llzydoncitzx1wzaedsn.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162255/events/AE2CF/hycq1bhzb2dacjwl1mkz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162255/events/AE2CF/hycq1bhzb2dacjwl1mkz.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162255/events/AE2CF/myhoyjuoth4j7ckyz2db.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162255/events/AE2CF/myhoyjuoth4j7ckyz2db.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162254/events/AE2CF/afnjz1nbz8ncysdxiary.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162254/events/AE2CF/afnjz1nbz8ncysdxiary.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162253/events/AE2CF/huekb8gvkznuwuqqcyax.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162253/events/AE2CF/huekb8gvkznuwuqqcyax.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162252/events/AE2CF/mhsszubp10ingm69umpa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162252/events/AE2CF/mhsszubp10ingm69umpa.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162252/events/AE2CF/c31mddldpcnskwoohykj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162252/events/AE2CF/c31mddldpcnskwoohykj.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162252/events/AE2CF/zhafxj1vbyenhlbkwxq1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162252/events/AE2CF/zhafxj1vbyenhlbkwxq1.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162250/events/AE2CF/try4klldn9itrbvvlqut.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162250/events/AE2CF/try4klldn9itrbvvlqut.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162250/events/AE2CF/srr6k7hakuey2glqksjm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162250/events/AE2CF/srr6k7hakuey2glqksjm.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162249/events/AE2CF/thvcszpgxhd7egskgxqq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162249/events/AE2CF/thvcszpgxhd7egskgxqq.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162248/events/AE2CF/oqt461e5l0grahx7lnc5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162248/events/AE2CF/oqt461e5l0grahx7lnc5.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162248/events/AE2CF/esx9w3pogrfv0us0qzgr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162248/events/AE2CF/esx9w3pogrfv0us0qzgr.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162248/events/AE2CF/pvtaxiet7ihqwa1bvcur.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162248/events/AE2CF/pvtaxiet7ihqwa1bvcur.jpg",
            alt: "UQAM_Aé2CF_Soirée_Résautage",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
