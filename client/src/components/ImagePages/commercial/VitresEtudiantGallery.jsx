import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/fs6477dplcgmwkp5uqbn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/fs6477dplcgmwkp5uqbn.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/nf3qrq0tjc2dutfjnrhy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/nf3qrq0tjc2dutfjnrhy.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/it4jzqqozxx8gravdre0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/it4jzqqozxx8gravdre0.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/wuowumcqniw973w4eryt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/wuowumcqniw973w4eryt.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/d30fq60jkcpthzspuwng.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/d30fq60jkcpthzspuwng.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/by4wleaz0o4ejjfggbk0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/by4wleaz0o4ejjfggbk0.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/kct4mskniorvpjljktqa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/kct4mskniorvpjljktqa.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/go1ngyyusr9mp94ao9xf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/go1ngyyusr9mp94ao9xf.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/vlriq7suhfizpsrszyax.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/vlriq7suhfizpsrszyax.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/xmbyuadml9ohy6k2p2d7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/xmbyuadml9ohy6k2p2d7.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/gtau4ipnao2eca0ku0yg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/gtau4ipnao2eca0ku0yg.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/dndltd4lckmktlpwp2do.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/dndltd4lckmktlpwp2do.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/b8fzrz3b56ivv4vkzouu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/b8fzrz3b56ivv4vkzouu.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/ofc0kaev4vmmbinflxwl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789912/commercial/VitresEtudiant23/ofc0kaev4vmmbinflxwl.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789913/commercial/VitresEtudiant23/u8osccbrxfqbnd8pruxc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789913/commercial/VitresEtudiant23/u8osccbrxfqbnd8pruxc.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789913/commercial/VitresEtudiant23/ognu4sqdav3jpnglv59x.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789913/commercial/VitresEtudiant23/ognu4sqdav3jpnglv59x.jpg",
            alt: "commercial/VitresEtudiant23",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789913/commercial/VitresEtudiant23/q56biakybliv2q2soneb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789913/commercial/VitresEtudiant23/q56biakybliv2q2soneb.jpg",
            alt: "commercial/VitresEtudiant23",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
