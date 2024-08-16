import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789950/personal/Dogs/e2mi3ysuym0nwio2ezmg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789950/personal/Dogs/e2mi3ysuym0nwio2ezmg.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789951/personal/Dogs/uraukreglfxoyv4ec4my.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789951/personal/Dogs/uraukreglfxoyv4ec4my.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789951/personal/Dogs/kuwphju9jzd9z0dghgfk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789951/personal/Dogs/kuwphju9jzd9z0dghgfk.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/pxicrwtkxlpxkxvp7yma.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/pxicrwtkxlpxkxvp7yma.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/ivhawuhoj81kaqkmvesj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/ivhawuhoj81kaqkmvesj.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/tl8k8gw5egaratgtbzbl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/tl8k8gw5egaratgtbzbl.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/giu9guoqir75wrzzqduw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/giu9guoqir75wrzzqduw.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/busj3ov97mkaigimj82b.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/busj3ov97mkaigimj82b.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/orlr2mbwljgn2n6lo3ug.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/orlr2mbwljgn2n6lo3ug.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/ddtsrqvkapyaqyeosyqg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/ddtsrqvkapyaqyeosyqg.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/qcteeko77mfdkdcfe0rp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/qcteeko77mfdkdcfe0rp.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789953/personal/Dogs/k2ikixyausqx6nc4gwrf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789953/personal/Dogs/k2ikixyausqx6nc4gwrf.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789953/personal/Dogs/yvy8eaz8gmy6jdboir2j.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789953/personal/Dogs/yvy8eaz8gmy6jdboir2j.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789953/personal/Dogs/b9nwojdfpdfrqdex9s7e.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789953/personal/Dogs/b9nwojdfpdfrqdex9s7e.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789953/personal/Dogs/zsfhqetgwuyxtftyxe8h.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789953/personal/Dogs/zsfhqetgwuyxtftyxe8h.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789953/personal/Dogs/zchligetca6gr4vtz2jt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789953/personal/Dogs/zchligetca6gr4vtz2jt.jpg",
            alt: "personal/Dogs",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789953/personal/Dogs/vtezln8ea7b4xkpbxb3y.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789953/personal/Dogs/vtezln8ea7b4xkpbxb3y.jpg",
            alt: "personal/Dogs",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
