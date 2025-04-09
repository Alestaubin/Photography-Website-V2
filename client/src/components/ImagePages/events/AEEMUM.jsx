import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const coverImage = {
    src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161787/events/AEEMUM/nb9xeknjq4mhu9dxu896.jpg",
    alt: "UDEM AEEMUM Vin et Fromage"
    }
    const albumTitle = "UDEM AEEMUM Vin et Fromage"
    const albumDate = "Febuary 2025"
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161803/events/AEEMUM/wq3zrktdqnr3osfg2qwu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161803/events/AEEMUM/wq3zrktdqnr3osfg2qwu.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161803/events/AEEMUM/ux3f7qyjcidg0f1elrag.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161803/events/AEEMUM/ux3f7qyjcidg0f1elrag.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161802/events/AEEMUM/razjwzxnx2a5yvhunwq1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161802/events/AEEMUM/razjwzxnx2a5yvhunwq1.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161801/events/AEEMUM/ueq3dppg6pxrxk0pon2q.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161801/events/AEEMUM/ueq3dppg6pxrxk0pon2q.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161801/events/AEEMUM/kex39ix7h4js6m9wny3u.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161801/events/AEEMUM/kex39ix7h4js6m9wny3u.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161800/events/AEEMUM/vahmc0guugndscrwrt1o.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161800/events/AEEMUM/vahmc0guugndscrwrt1o.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161799/events/AEEMUM/qotleeotjc3knf1c3gjk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161799/events/AEEMUM/qotleeotjc3knf1c3gjk.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161798/events/AEEMUM/yliynso3wnsmij5udeff.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161798/events/AEEMUM/yliynso3wnsmij5udeff.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161798/events/AEEMUM/amgvpzafkv2ilji5k351.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161798/events/AEEMUM/amgvpzafkv2ilji5k351.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161797/events/AEEMUM/flzyibzgs9jccjhyqscb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161797/events/AEEMUM/flzyibzgs9jccjhyqscb.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161795/events/AEEMUM/mkaekcbqzwbgia2gqmn6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161795/events/AEEMUM/mkaekcbqzwbgia2gqmn6.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161795/events/AEEMUM/ydhgdcehq1tvpirphfny.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161795/events/AEEMUM/ydhgdcehq1tvpirphfny.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161795/events/AEEMUM/ca2hxsyvyfzp1zavriqm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161795/events/AEEMUM/ca2hxsyvyfzp1zavriqm.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161793/events/AEEMUM/sfepdpkdusnfc8tq8w6e.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161793/events/AEEMUM/sfepdpkdusnfc8tq8w6e.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161792/events/AEEMUM/urp5u2x3x5xveuvvly5x.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161792/events/AEEMUM/urp5u2x3x5xveuvvly5x.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161792/events/AEEMUM/ehd1f4qtvkijbkmenmsj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161792/events/AEEMUM/ehd1f4qtvkijbkmenmsj.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161792/events/AEEMUM/cymkxyuirplk0b8rnqku.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161792/events/AEEMUM/cymkxyuirplk0b8rnqku.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161790/events/AEEMUM/x7lrqsdcoctj8ccziz3c.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161790/events/AEEMUM/x7lrqsdcoctj8ccziz3c.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161789/events/AEEMUM/tcwg2qpfrq2e5gosgirj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161789/events/AEEMUM/tcwg2qpfrq2e5gosgirj.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161789/events/AEEMUM/zrouljjsxkoaru04i8uf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161789/events/AEEMUM/zrouljjsxkoaru04i8uf.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161789/events/AEEMUM/wlsmt4nh3vmeryum1m79.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161789/events/AEEMUM/wlsmt4nh3vmeryum1m79.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161788/events/AEEMUM/hpxyep7dpivlej8uobd5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161788/events/AEEMUM/hpxyep7dpivlej8uobd5.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161787/events/AEEMUM/d3dvgwf4ytcorz9cljjt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161787/events/AEEMUM/d3dvgwf4ytcorz9cljjt.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161787/events/AEEMUM/nb9xeknjq4mhu9dxu896.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161787/events/AEEMUM/nb9xeknjq4mhu9dxu896.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161786/events/AEEMUM/kiaoakt9dg4zecxg1zi3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161786/events/AEEMUM/kiaoakt9dg4zecxg1zi3.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161785/events/AEEMUM/y4cbn3icmet4ihkzyge9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161785/events/AEEMUM/y4cbn3icmet4ihkzyge9.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161785/events/AEEMUM/h4gkrw7zo25g1bid9ono.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161785/events/AEEMUM/h4gkrw7zo25g1bid9ono.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161784/events/AEEMUM/cb6mgk1cmkigfnhy3xds.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161784/events/AEEMUM/cb6mgk1cmkigfnhy3xds.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161783/events/AEEMUM/kx5da00ayduhjxrorlyd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161783/events/AEEMUM/kx5da00ayduhjxrorlyd.jpg",
            alt: "UDEM_AEEMUM_Vin_et_Fromage",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
