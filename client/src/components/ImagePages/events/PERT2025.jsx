import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const coverImage = {
    src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054764/events/PERT-2025/fmgo0poekng4odoubfbi.jpg",
    alt: "PERT Corporate Event"
    }
    const albumTitle = "PERT Corporate Event"
    const albumDate = "March 2025"
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054770/events/PERT-2025/qwsbthr96slmon7jxggz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054770/events/PERT-2025/qwsbthr96slmon7jxggz.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054769/events/PERT-2025/jlp2s649cxlbrznf8f4i.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054769/events/PERT-2025/jlp2s649cxlbrznf8f4i.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054769/events/PERT-2025/nfdtrqhtrtgkaqtzoxgp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054769/events/PERT-2025/nfdtrqhtrtgkaqtzoxgp.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054768/events/PERT-2025/ljlkdbysirsontvctstz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054768/events/PERT-2025/ljlkdbysirsontvctstz.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054768/events/PERT-2025/fxvzqblmlibvj763ufwa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054768/events/PERT-2025/fxvzqblmlibvj763ufwa.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054767/events/PERT-2025/jnamwaakhqpuybpyjq4p.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054767/events/PERT-2025/jnamwaakhqpuybpyjq4p.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054766/events/PERT-2025/pivvnwpcazynsotrpuz0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054766/events/PERT-2025/pivvnwpcazynsotrpuz0.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054765/events/PERT-2025/qizlvbdisiit1yanfl4y.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054765/events/PERT-2025/qizlvbdisiit1yanfl4y.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054765/events/PERT-2025/hiky2xqr0xzmtknhovvc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054765/events/PERT-2025/hiky2xqr0xzmtknhovvc.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054765/events/PERT-2025/xyd0tg07hly3wfwpzmzx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054765/events/PERT-2025/xyd0tg07hly3wfwpzmzx.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054764/events/PERT-2025/qso8slxgjpqutn8wiibg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054764/events/PERT-2025/qso8slxgjpqutn8wiibg.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054764/events/PERT-2025/vj8ldfzydzps7wfl9sog.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054764/events/PERT-2025/vj8ldfzydzps7wfl9sog.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054764/events/PERT-2025/mqw2tnux8hpz1rpe9y4t.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054764/events/PERT-2025/mqw2tnux8hpz1rpe9y4t.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054764/events/PERT-2025/fmgo0poekng4odoubfbi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054764/events/PERT-2025/fmgo0poekng4odoubfbi.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054762/events/PERT-2025/r7gleehyr89baa8iwzh5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054762/events/PERT-2025/r7gleehyr89baa8iwzh5.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054760/events/PERT-2025/dxmkskegybijnnumjwip.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054760/events/PERT-2025/dxmkskegybijnnumjwip.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054760/events/PERT-2025/q58skjffi9dawsmsqhep.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054760/events/PERT-2025/q58skjffi9dawsmsqhep.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054759/events/PERT-2025/uwnzoyaqw7eupmerduhg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054759/events/PERT-2025/uwnzoyaqw7eupmerduhg.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054759/events/PERT-2025/yo6jyiipfv11lbomvr5n.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054759/events/PERT-2025/yo6jyiipfv11lbomvr5n.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054757/events/PERT-2025/rtzjaecwto7akldz7o9e.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054757/events/PERT-2025/rtzjaecwto7akldz7o9e.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054757/events/PERT-2025/ymdezegbt1uxngzxb43j.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054757/events/PERT-2025/ymdezegbt1uxngzxb43j.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054757/events/PERT-2025/fppgtmvs80myuec04dgm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054757/events/PERT-2025/fppgtmvs80myuec04dgm.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054756/events/PERT-2025/lomlivy5dbtnpzk1ocde.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054756/events/PERT-2025/lomlivy5dbtnpzk1ocde.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054755/events/PERT-2025/xhkfrlie21jm5xyqlm8t.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054755/events/PERT-2025/xhkfrlie21jm5xyqlm8t.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054754/events/PERT-2025/xlowzfvzfqpeubhhd3wt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054754/events/PERT-2025/xlowzfvzfqpeubhhd3wt.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054754/events/PERT-2025/xoxslxag7p5one8ddhrn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054754/events/PERT-2025/xoxslxag7p5one8ddhrn.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054753/events/PERT-2025/qfz106v2vty6j1rwiuph.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054753/events/PERT-2025/qfz106v2vty6j1rwiuph.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054752/events/PERT-2025/tixozcwjio3oc8heibpv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054752/events/PERT-2025/tixozcwjio3oc8heibpv.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054750/events/PERT-2025/yfl1gyozjs6z5ppftp3t.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054750/events/PERT-2025/yfl1gyozjs6z5ppftp3t.jpg",
            alt: "PERT_Corporate_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744054740/events/PERT-2025/h9rkjx4hhzoqgbkf95jl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054740/events/PERT-2025/h9rkjx4hhzoqgbkf95jl.jpg",
            alt: "PERT_Corporate_Event",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
