import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926395/sports/GPVEL2024/ztw1ptnvez5aafw1mcuz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926395/sports/GPVEL2024/ztw1ptnvez5aafw1mcuz.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926395/sports/GPVEL2024/gccji3ye3cxuyimspuda.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926395/sports/GPVEL2024/gccji3ye3cxuyimspuda.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926400/sports/GPVEL2024/wgrbr1c8iocvx4netago.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926400/sports/GPVEL2024/wgrbr1c8iocvx4netago.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926404/sports/GPVEL2024/bwtomn3rirebidulw3pv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926404/sports/GPVEL2024/bwtomn3rirebidulw3pv.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926405/sports/GPVEL2024/csz6r1fmhvafihdhhlyp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926405/sports/GPVEL2024/csz6r1fmhvafihdhhlyp.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926410/sports/GPVEL2024/pisnob4yacfzbvysi9ef.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926410/sports/GPVEL2024/pisnob4yacfzbvysi9ef.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926411/sports/GPVEL2024/zemvffa7x94k2wk7lp8y.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926411/sports/GPVEL2024/zemvffa7x94k2wk7lp8y.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926415/sports/GPVEL2024/wprt7kabne6epab9fo6n.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926415/sports/GPVEL2024/wprt7kabne6epab9fo6n.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926416/sports/GPVEL2024/qzblrgo4db1bsdiwm94s.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926416/sports/GPVEL2024/qzblrgo4db1bsdiwm94s.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926418/sports/GPVEL2024/dudrchyztuvnlztsct7g.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926418/sports/GPVEL2024/dudrchyztuvnlztsct7g.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926419/sports/GPVEL2024/crqkkmpnpwb8waiyqjop.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926419/sports/GPVEL2024/crqkkmpnpwb8waiyqjop.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926423/sports/GPVEL2024/gyzsiz4sdzv432i0xphz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926423/sports/GPVEL2024/gyzsiz4sdzv432i0xphz.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926425/sports/GPVEL2024/fvhbeg4jrf28dw476wwp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926425/sports/GPVEL2024/fvhbeg4jrf28dw476wwp.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926427/sports/GPVEL2024/chrgtwsyzktomhbd7npx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926427/sports/GPVEL2024/chrgtwsyzktomhbd7npx.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926427/sports/GPVEL2024/jttq3ieuuzd3nklebpxr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926427/sports/GPVEL2024/jttq3ieuuzd3nklebpxr.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926429/sports/GPVEL2024/vmfir5hypapmlee4gcrg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926429/sports/GPVEL2024/vmfir5hypapmlee4gcrg.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926430/sports/GPVEL2024/wghmh1hrict3gsqzyzcg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926430/sports/GPVEL2024/wghmh1hrict3gsqzyzcg.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926430/sports/GPVEL2024/ohklbogppq6qqj0hmtxb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926430/sports/GPVEL2024/ohklbogppq6qqj0hmtxb.jpg",
            alt: "sports/GPVEL2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926431/sports/GPVEL2024/bhx27q7qpufzq4aprhj0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926431/sports/GPVEL2024/bhx27q7qpufzq4aprhj0.jpg",
            alt: "sports/GPVEL2024",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
