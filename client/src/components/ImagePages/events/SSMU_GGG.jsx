import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const coverImage = {
    src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397789/events/SSMU-GGG/lfetdm9riefsd9wg8fxa.jpg",
    alt: "SSMU Great Gatsby Gala"
    }
    const albumTitle = "SSMU Great Gatsby Gala"
    const albumDate = "December 2024"
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397789/events/SSMU-GGG/lfetdm9riefsd9wg8fxa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397789/events/SSMU-GGG/lfetdm9riefsd9wg8fxa.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397546/events/SSMU-GGG/ekylukzjyo2hcdawk2fi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397546/events/SSMU-GGG/ekylukzjyo2hcdawk2fi.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397546/events/SSMU-GGG/xxb7nn0ugpjo4wh4znxu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397546/events/SSMU-GGG/xxb7nn0ugpjo4wh4znxu.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397546/events/SSMU-GGG/qadtp99gvgltase20lst.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397546/events/SSMU-GGG/qadtp99gvgltase20lst.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397546/events/SSMU-GGG/dqqt9hq9t78cdx0m0jmx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397546/events/SSMU-GGG/dqqt9hq9t78cdx0m0jmx.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397545/events/SSMU-GGG/avwblelurlzeixggtwk6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397545/events/SSMU-GGG/avwblelurlzeixggtwk6.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397544/events/SSMU-GGG/ovk4vsb6a12yqyatlu9k.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397544/events/SSMU-GGG/ovk4vsb6a12yqyatlu9k.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397543/events/SSMU-GGG/xh4cskcuybpeeyw0ww6x.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397543/events/SSMU-GGG/xh4cskcuybpeeyw0ww6x.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397543/events/SSMU-GGG/woyl3alvcsxbihhvpwh1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397543/events/SSMU-GGG/woyl3alvcsxbihhvpwh1.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397542/events/SSMU-GGG/ftkf3qi5gmsptzsgi2uk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397542/events/SSMU-GGG/ftkf3qi5gmsptzsgi2uk.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397541/events/SSMU-GGG/rm6dz4z4ug19m5oedjvb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397541/events/SSMU-GGG/rm6dz4z4ug19m5oedjvb.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397541/events/SSMU-GGG/grgmgxdgdd57e6tbp1xo.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397541/events/SSMU-GGG/grgmgxdgdd57e6tbp1xo.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397541/events/SSMU-GGG/duf6uddrtdigqxjphzs7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397541/events/SSMU-GGG/duf6uddrtdigqxjphzs7.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397540/events/SSMU-GGG/zphcchad9nkearb9n75j.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397540/events/SSMU-GGG/zphcchad9nkearb9n75j.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397539/events/SSMU-GGG/e1uvrajfahzmv71bdmwe.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397539/events/SSMU-GGG/e1uvrajfahzmv71bdmwe.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397538/events/SSMU-GGG/nlpoxrjblhku47jnmvpp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397538/events/SSMU-GGG/nlpoxrjblhku47jnmvpp.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397538/events/SSMU-GGG/bghgehmcg0ervz5afdmz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397538/events/SSMU-GGG/bghgehmcg0ervz5afdmz.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397537/events/SSMU-GGG/miuriwn9eneztuzxmgah.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397537/events/SSMU-GGG/miuriwn9eneztuzxmgah.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397537/events/SSMU-GGG/uayqohd8ppwfex64hvvt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397537/events/SSMU-GGG/uayqohd8ppwfex64hvvt.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397536/events/SSMU-GGG/whlv83pldbjb1mlqzle8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397536/events/SSMU-GGG/whlv83pldbjb1mlqzle8.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397536/events/SSMU-GGG/ypanmtjqoxpqpvncqo11.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397536/events/SSMU-GGG/ypanmtjqoxpqpvncqo11.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397535/events/SSMU-GGG/ruec3oo8n66vecdqr4dj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397535/events/SSMU-GGG/ruec3oo8n66vecdqr4dj.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397535/events/SSMU-GGG/zhdpyjkltimmgon2xi0f.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397535/events/SSMU-GGG/zhdpyjkltimmgon2xi0f.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397534/events/SSMU-GGG/cd0g5mq69vbk2snvhnhd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397534/events/SSMU-GGG/cd0g5mq69vbk2snvhnhd.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397534/events/SSMU-GGG/kowpak37ulv6kxbbf5dc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397534/events/SSMU-GGG/kowpak37ulv6kxbbf5dc.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397533/events/SSMU-GGG/tfzek2cjfy4mtyin3jqa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734397533/events/SSMU-GGG/tfzek2cjfy4mtyin3jqa.jpg",
            alt: "SSMU_Great_Gatsby_Gala",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
