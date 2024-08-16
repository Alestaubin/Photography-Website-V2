import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750612/sports/Camo2023/e8brebkqrxt87sivziaf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750612/sports/Camo2023/e8brebkqrxt87sivziaf.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750612/sports/Camo2023/vp6fw6dg1f3xkltajqlq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750612/sports/Camo2023/vp6fw6dg1f3xkltajqlq.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/bpuapgwsnrt70xqzgnd7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/bpuapgwsnrt70xqzgnd7.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/oalkb3ikbjb0idktaaih.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/oalkb3ikbjb0idktaaih.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/dsl5ybtq2k7flavz4wzl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/dsl5ybtq2k7flavz4wzl.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/fqalcefv64qpvwvdd3kt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/fqalcefv64qpvwvdd3kt.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/e5uobvb8desll6dzf5w3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/e5uobvb8desll6dzf5w3.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/w6yqcjpe2u87c0lruxqx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/w6yqcjpe2u87c0lruxqx.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/ccoljy1bx7eqm0kf49tk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/ccoljy1bx7eqm0kf49tk.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/zuu7zvgii5yynkxarha6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/zuu7zvgii5yynkxarha6.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/nvlpglrrwy67wgtsi8ql.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750613/sports/Camo2023/nvlpglrrwy67wgtsi8ql.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/j1suc2nt9rtjcsukjyu9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/j1suc2nt9rtjcsukjyu9.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/my5xuhrwdhveo5wsftle.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/my5xuhrwdhveo5wsftle.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/vx5fhdyf3xsvmvjntr2r.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/vx5fhdyf3xsvmvjntr2r.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/hpsplkenpo6z9y8wlcgo.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/hpsplkenpo6z9y8wlcgo.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/puqunxw5friptiqeeuvo.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/puqunxw5friptiqeeuvo.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/yxet6axdf4zrbncsww0p.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/yxet6axdf4zrbncsww0p.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750615/sports/Camo2023/zlszd8ebse8p1izigigq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750615/sports/Camo2023/zlszd8ebse8p1izigigq.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750615/sports/Camo2023/shujoszehkvgygudcdlz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750615/sports/Camo2023/shujoszehkvgygudcdlz.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750615/sports/Camo2023/xmbwxvmh3y3bx2ewxaoq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750615/sports/Camo2023/xmbwxvmh3y3bx2ewxaoq.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750615/sports/Camo2023/cc2wl93mm2wgjt0wmboe.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750615/sports/Camo2023/cc2wl93mm2wgjt0wmboe.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750615/sports/Camo2023/dhshivehvcsax6oz2fut.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750615/sports/Camo2023/dhshivehvcsax6oz2fut.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750615/sports/Camo2023/ro8b2qql7uqxttd3nunh.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750615/sports/Camo2023/ro8b2qql7uqxttd3nunh.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750616/sports/Camo2023/zjnlzwojpzkmwlydwtnc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750616/sports/Camo2023/zjnlzwojpzkmwlydwtnc.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750616/sports/Camo2023/fnnzqrutt1tr5c4trozf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750616/sports/Camo2023/fnnzqrutt1tr5c4trozf.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750616/sports/Camo2023/mgm7rjabbukkomu9loac.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750616/sports/Camo2023/mgm7rjabbukkomu9loac.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750616/sports/Camo2023/o6bmtw6y4dgc9z4nnaim.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750616/sports/Camo2023/o6bmtw6y4dgc9z4nnaim.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750616/sports/Camo2023/mqjpo1bvafkcyvogm5np.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750616/sports/Camo2023/mqjpo1bvafkcyvogm5np.jpg",
            alt: "sports/Camo2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750616/sports/Camo2023/kf1bsyjrbvopwt9ilko5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750616/sports/Camo2023/kf1bsyjrbvopwt9ilko5.jpg",
            alt: "sports/Camo2023",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
