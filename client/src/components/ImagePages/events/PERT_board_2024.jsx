import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const albumTitle = "PERT Board Meeting"
    const albumDate = "October 2024"
    const coverImage = {
        src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692917/events/PERT-board/hhbwtqzhxc3eeizague0.jpg",
        alt: "PERT Board Meeting"}
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692957/events/PERT-board/fac9wsahzctcue5rolf4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692957/events/PERT-board/fac9wsahzctcue5rolf4.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692949/events/PERT-board/eiw1ndwzgsqkmtuyl3qk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692949/events/PERT-board/eiw1ndwzgsqkmtuyl3qk.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692941/events/PERT-board/icfcmuul7wnrd7rx5gso.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692941/events/PERT-board/icfcmuul7wnrd7rx5gso.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692933/events/PERT-board/euempe2uwamkwng46trn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692933/events/PERT-board/euempe2uwamkwng46trn.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692925/events/PERT-board/qtqrnveqbhkjnhznnzt2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692925/events/PERT-board/qtqrnveqbhkjnhznnzt2.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692917/events/PERT-board/hhbwtqzhxc3eeizague0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692917/events/PERT-board/hhbwtqzhxc3eeizague0.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692909/events/PERT-board/vpbasadr2lq0ehriz9cb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692909/events/PERT-board/vpbasadr2lq0ehriz9cb.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692901/events/PERT-board/sa4zf5qcohe0rgxmo15s.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692901/events/PERT-board/sa4zf5qcohe0rgxmo15s.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692893/events/PERT-board/bsqcrxsptdvj0qyk8plg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692893/events/PERT-board/bsqcrxsptdvj0qyk8plg.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692885/events/PERT-board/qlghbb5pfydohff6nijr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692885/events/PERT-board/qlghbb5pfydohff6nijr.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692877/events/PERT-board/zooeuassqpadw3s0ioxj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692877/events/PERT-board/zooeuassqpadw3s0ioxj.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692874/events/PERT-board/hzwxnlzwxik2r95psish.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692874/events/PERT-board/hzwxnlzwxik2r95psish.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692874/events/PERT-board/k3cuupuk5kdcls8sn6fb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692874/events/PERT-board/k3cuupuk5kdcls8sn6fb.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692873/events/PERT-board/bcq1tbndnbzd3od2o2em.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692873/events/PERT-board/bcq1tbndnbzd3od2o2em.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692872/events/PERT-board/pcvqiyedosrna3hh9ij5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692872/events/PERT-board/pcvqiyedosrna3hh9ij5.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692871/events/PERT-board/q7gvdacfmovrwkm1f1y5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692871/events/PERT-board/q7gvdacfmovrwkm1f1y5.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692871/events/PERT-board/dasrfumpnif9zjvdewl8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692871/events/PERT-board/dasrfumpnif9zjvdewl8.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692869/events/PERT-board/ixcecnruq6icykullkbb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692869/events/PERT-board/ixcecnruq6icykullkbb.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692868/events/PERT-board/bys5zs1lrti1scrgr92r.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692868/events/PERT-board/bys5zs1lrti1scrgr92r.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692867/events/PERT-board/yooorhjfcsal8z1uvje4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692867/events/PERT-board/yooorhjfcsal8z1uvje4.jpg",
            alt: "PERT-board-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692865/events/PERT-board/qxazucrjxsaizrpxudps.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730692865/events/PERT-board/qxazucrjxsaizrpxudps.jpg",
            alt: "PERT-board-2024",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
