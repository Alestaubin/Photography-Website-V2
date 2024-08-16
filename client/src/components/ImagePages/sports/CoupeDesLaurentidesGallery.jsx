import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750691/sports/CoupeLaurentides2023/ekfp85acqchpitx8wpyk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750691/sports/CoupeLaurentides2023/ekfp85acqchpitx8wpyk.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/o8qhvyumijqvpg88byqc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/o8qhvyumijqvpg88byqc.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/jqwg7n9hzwwwkstj8a6z.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/jqwg7n9hzwwwkstj8a6z.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/kqsyyobnnoftzcbaodoc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/kqsyyobnnoftzcbaodoc.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/icqf2vyhqzs45q2vp5pp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/icqf2vyhqzs45q2vp5pp.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/qwg9xebaeudpaxfq2qjn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/qwg9xebaeudpaxfq2qjn.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/m6ga1qu0gdsjs9mno57h.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/m6ga1qu0gdsjs9mno57h.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750693/sports/CoupeLaurentides2023/nvsgrogj77zhlaglwosn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750693/sports/CoupeLaurentides2023/nvsgrogj77zhlaglwosn.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750693/sports/CoupeLaurentides2023/fjudpmqdjxxc6z8sd5yt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750693/sports/CoupeLaurentides2023/fjudpmqdjxxc6z8sd5yt.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750693/sports/CoupeLaurentides2023/jbod6dmy4x2tadd19gmu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750693/sports/CoupeLaurentides2023/jbod6dmy4x2tadd19gmu.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750693/sports/CoupeLaurentides2023/ygvnsrng44ulyafl0o9r.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750693/sports/CoupeLaurentides2023/ygvnsrng44ulyafl0o9r.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750693/sports/CoupeLaurentides2023/wzpup9mdcot8spvq8otm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750693/sports/CoupeLaurentides2023/wzpup9mdcot8spvq8otm.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750694/sports/CoupeLaurentides2023/myzshgpnutlnfdgadndp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750694/sports/CoupeLaurentides2023/myzshgpnutlnfdgadndp.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750694/sports/CoupeLaurentides2023/z3tslhftbk8w3ots1pbi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750694/sports/CoupeLaurentides2023/z3tslhftbk8w3ots1pbi.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750694/sports/CoupeLaurentides2023/w6tc0mn8j9oswsmm4yfx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750694/sports/CoupeLaurentides2023/w6tc0mn8j9oswsmm4yfx.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750694/sports/CoupeLaurentides2023/jhpxbbgjwmdc4tflkepo.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750694/sports/CoupeLaurentides2023/jhpxbbgjwmdc4tflkepo.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750695/sports/CoupeLaurentides2023/mc0cia3ptrtuviej3qhq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750695/sports/CoupeLaurentides2023/mc0cia3ptrtuviej3qhq.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750695/sports/CoupeLaurentides2023/qqwejtygqiamwnjhzfem.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750695/sports/CoupeLaurentides2023/qqwejtygqiamwnjhzfem.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750695/sports/CoupeLaurentides2023/ykcnwqnx2kcvamnmrsss.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750695/sports/CoupeLaurentides2023/ykcnwqnx2kcvamnmrsss.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750695/sports/CoupeLaurentides2023/liynkf929renlnzvfzey.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750695/sports/CoupeLaurentides2023/liynkf929renlnzvfzey.jpg",
            alt: "sports/CoupeLaurentides2023",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
