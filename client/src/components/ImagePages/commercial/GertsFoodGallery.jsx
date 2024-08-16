import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789861/commercial/GertsFood/amgm1ghfwibrrfats1dc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789861/commercial/GertsFood/amgm1ghfwibrrfats1dc.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/hafl1n4snczolcuj0lvy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/hafl1n4snczolcuj0lvy.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/xwfikhbi3govyhthvaze.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/xwfikhbi3govyhthvaze.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/afrsogjjtwjmrloj8hk0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/afrsogjjtwjmrloj8hk0.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/yv6izu1axhlovgb5sk0g.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/yv6izu1axhlovgb5sk0g.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/vn824ywbrnl48jwbmpqp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/vn824ywbrnl48jwbmpqp.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/xvohysmkj1itzpaqaj0q.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/xvohysmkj1itzpaqaj0q.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/zqlb2uvlmq4a0xexfsls.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/zqlb2uvlmq4a0xexfsls.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/kjtaqtpczyd7jia1qlvm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/kjtaqtpczyd7jia1qlvm.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/cyujk0kwyr40qyboffa4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/cyujk0kwyr40qyboffa4.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/jn7t6zn186fnwezhecvs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/jn7t6zn186fnwezhecvs.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/ofopfmr8hwrlgal4dkjo.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/ofopfmr8hwrlgal4dkjo.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/mv8r26jqwjhcu9yguabn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/mv8r26jqwjhcu9yguabn.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/wy2hppkt2nylogtggtpy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/wy2hppkt2nylogtggtpy.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/clsjfmy1i2rpobcfq0bp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/clsjfmy1i2rpobcfq0bp.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/vwdcblyrabxks414mtyr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/vwdcblyrabxks414mtyr.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/pivzcn0kygeum7g1hivm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/pivzcn0kygeum7g1hivm.jpg",
            alt: "commercial/GertsFood",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/gocwffh20jddtxr2uazm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789863/commercial/GertsFood/gocwffh20jddtxr2uazm.jpg",
            alt: "commercial/GertsFood",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
