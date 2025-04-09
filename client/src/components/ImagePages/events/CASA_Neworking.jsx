import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const coverImage = {
    src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162224/events/CASA/biwutxrgygerzvsiuqqr.jpg",
    alt: "Concordia CASA Networking Event"
    }
    const albumTitle = "Concordia CASA Networking Event"
    const albumDate = "Febuary 2025"
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162229/events/CASA/uj2pnqznfxxgiiqduw8z.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162229/events/CASA/uj2pnqznfxxgiiqduw8z.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162229/events/CASA/tyntebpnlj7sexc94ncy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162229/events/CASA/tyntebpnlj7sexc94ncy.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162228/events/CASA/lubddu551izo1jb1hikx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162228/events/CASA/lubddu551izo1jb1hikx.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162228/events/CASA/zps71g8rlbwfi0zqet97.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162228/events/CASA/zps71g8rlbwfi0zqet97.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162228/events/CASA/zgzq8suj9icp6gu4vcwe.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162228/events/CASA/zgzq8suj9icp6gu4vcwe.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162227/events/CASA/bpshe0f2pyipcpvuejax.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162227/events/CASA/bpshe0f2pyipcpvuejax.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162227/events/CASA/zdyck3xgqfhfdep6hxed.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162227/events/CASA/zdyck3xgqfhfdep6hxed.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162226/events/CASA/zsqb8usxpgoaeirhxwu5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162226/events/CASA/zsqb8usxpgoaeirhxwu5.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162224/events/CASA/awzakvmgyuqj5cidtx7s.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162224/events/CASA/awzakvmgyuqj5cidtx7s.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162224/events/CASA/biwutxrgygerzvsiuqqr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162224/events/CASA/biwutxrgygerzvsiuqqr.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162224/events/CASA/dld7nexfsmeg8ywx9jwv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162224/events/CASA/dld7nexfsmeg8ywx9jwv.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162224/events/CASA/om0wc5hwi2uexchi9pwg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162224/events/CASA/om0wc5hwi2uexchi9pwg.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162222/events/CASA/mpxk88futr5p8pcdgjwb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162222/events/CASA/mpxk88futr5p8pcdgjwb.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162221/events/CASA/avria6q1eay6skposlzz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162221/events/CASA/avria6q1eay6skposlzz.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162221/events/CASA/athslccccnowgtmd0bbl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162221/events/CASA/athslccccnowgtmd0bbl.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162220/events/CASA/sjrmkuir5e7gedzmvf50.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162220/events/CASA/sjrmkuir5e7gedzmvf50.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162220/events/CASA/cenmtz9uzljcxck5ivlz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162220/events/CASA/cenmtz9uzljcxck5ivlz.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162219/events/CASA/y6hd0k065yjmosuhteji.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162219/events/CASA/y6hd0k065yjmosuhteji.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162218/events/CASA/kci0rj6isrqkjmp33pjm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162218/events/CASA/kci0rj6isrqkjmp33pjm.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162217/events/CASA/i2v9jez1rdmypehg5wsu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162217/events/CASA/i2v9jez1rdmypehg5wsu.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162217/events/CASA/b90qsyze08aivuxq4gjy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162217/events/CASA/b90qsyze08aivuxq4gjy.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162216/events/CASA/u9ptxwi12sgues7w8nyp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162216/events/CASA/u9ptxwi12sgues7w8nyp.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744162215/events/CASA/rsjzn0dklkqnptzycl32.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744162215/events/CASA/rsjzn0dklkqnptzycl32.jpg",
            alt: "Concordia_CASA_Networking_Event",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
