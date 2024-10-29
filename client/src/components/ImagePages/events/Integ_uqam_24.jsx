import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245857/events/integ_uqam/wf2khft2rbfmzahnhglj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245857/events/integ_uqam/wf2khft2rbfmzahnhglj.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245857/events/integ_uqam/hmznzaoxecrbolewblyz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245857/events/integ_uqam/hmznzaoxecrbolewblyz.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245856/events/integ_uqam/dwcfkwvmswgdg1zrqkp3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245856/events/integ_uqam/dwcfkwvmswgdg1zrqkp3.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245855/events/integ_uqam/bxh428e9lanmybtsgfqe.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245855/events/integ_uqam/bxh428e9lanmybtsgfqe.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245854/events/integ_uqam/u15kjw6nt8t2p0nmfzdi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245854/events/integ_uqam/u15kjw6nt8t2p0nmfzdi.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245853/events/integ_uqam/mijarfnovmdpj9vbgumf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245853/events/integ_uqam/mijarfnovmdpj9vbgumf.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245853/events/integ_uqam/kj2nbm40gaayonrt1ydn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245853/events/integ_uqam/kj2nbm40gaayonrt1ydn.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245853/events/integ_uqam/mdj9rkt7mmuwvqvf9mhx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245853/events/integ_uqam/mdj9rkt7mmuwvqvf9mhx.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245851/events/integ_uqam/efy9j96rz2vl2xg0lxyy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245851/events/integ_uqam/efy9j96rz2vl2xg0lxyy.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245849/events/integ_uqam/gb8qttaixicolauljqrq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245849/events/integ_uqam/gb8qttaixicolauljqrq.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245848/events/integ_uqam/uzuiivbfifzuz6cs2zgi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245848/events/integ_uqam/uzuiivbfifzuz6cs2zgi.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245848/events/integ_uqam/qautvsmmolwnkgvnxrz5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245848/events/integ_uqam/qautvsmmolwnkgvnxrz5.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245846/events/integ_uqam/gtkhjoisrc5ewvcsfjpq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245846/events/integ_uqam/gtkhjoisrc5ewvcsfjpq.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245845/events/integ_uqam/fzp4mvrjrhkm0dcpchvz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245845/events/integ_uqam/fzp4mvrjrhkm0dcpchvz.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245844/events/integ_uqam/xcrzb41v5ivdekn3yg9z.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245844/events/integ_uqam/xcrzb41v5ivdekn3yg9z.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245844/events/integ_uqam/mzpusetam250ti2xkp1h.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245844/events/integ_uqam/mzpusetam250ti2xkp1h.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245844/events/integ_uqam/sjufstvfoxl3niuga8v3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245844/events/integ_uqam/sjufstvfoxl3niuga8v3.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245843/events/integ_uqam/rcswwfolph1iyisawxsb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245843/events/integ_uqam/rcswwfolph1iyisawxsb.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245842/events/integ_uqam/gqcwipzaqjnrhysooamm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245842/events/integ_uqam/gqcwipzaqjnrhysooamm.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245841/events/integ_uqam/omeghuldqxfcmhnvquyk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245841/events/integ_uqam/omeghuldqxfcmhnvquyk.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245840/events/integ_uqam/tfbihpzh2a8ihbcugudk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245840/events/integ_uqam/tfbihpzh2a8ihbcugudk.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245840/events/integ_uqam/wodcghh66bjxfnl6ako0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245840/events/integ_uqam/wodcghh66bjxfnl6ako0.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245840/events/integ_uqam/o1sk4drxuvhje0n3gmlc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245840/events/integ_uqam/o1sk4drxuvhje0n3gmlc.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245838/events/integ_uqam/jgiksrz6bqjxav4mqgao.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245838/events/integ_uqam/jgiksrz6bqjxav4mqgao.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245837/events/integ_uqam/errmsw2dzun2vpf1kwvc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245837/events/integ_uqam/errmsw2dzun2vpf1kwvc.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245836/events/integ_uqam/uqwgbchk8hnzt6uphlhy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245836/events/integ_uqam/uqwgbchk8hnzt6uphlhy.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245834/events/integ_uqam/x1m7l8h5ijb76xyemorl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245834/events/integ_uqam/x1m7l8h5ijb76xyemorl.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245833/events/integ_uqam/cgnxs618wbyuiuewpdt4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245833/events/integ_uqam/cgnxs618wbyuiuewpdt4.jpg",
            alt: "integ_uqam_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245832/events/integ_uqam/osye75aqag2j09zxkvgv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730245832/events/integ_uqam/osye75aqag2j09zxkvgv.jpg",
            alt: "integ_uqam_2024",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
