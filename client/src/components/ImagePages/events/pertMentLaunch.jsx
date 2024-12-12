import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023489/events/PERT-Mentorship/u2tcfbs6pumx5pt4xanx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023489/events/PERT-Mentorship/u2tcfbs6pumx5pt4xanx.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023489/events/PERT-Mentorship/f8g8quivgyhrbwsjwmaw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023489/events/PERT-Mentorship/f8g8quivgyhrbwsjwmaw.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023489/events/PERT-Mentorship/gohqyo0aoumlr4gfdegk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023489/events/PERT-Mentorship/gohqyo0aoumlr4gfdegk.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023488/events/PERT-Mentorship/jc2ylrgfojknyag6vba3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023488/events/PERT-Mentorship/jc2ylrgfojknyag6vba3.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023488/events/PERT-Mentorship/vkto4i6wo1iktprkx6op.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023488/events/PERT-Mentorship/vkto4i6wo1iktprkx6op.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023487/events/PERT-Mentorship/x301ss1lhv3ef79ufjyp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023487/events/PERT-Mentorship/x301ss1lhv3ef79ufjyp.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023486/events/PERT-Mentorship/dpmpyb7jvkg7apou6yfl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023486/events/PERT-Mentorship/dpmpyb7jvkg7apou6yfl.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023486/events/PERT-Mentorship/e67fxxup1m2npvucqrkv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023486/events/PERT-Mentorship/e67fxxup1m2npvucqrkv.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023485/events/PERT-Mentorship/vswvlhmpwkuk0x6t3xf5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023485/events/PERT-Mentorship/vswvlhmpwkuk0x6t3xf5.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023485/events/PERT-Mentorship/hyldmnibjm0jsf4xtgdp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023485/events/PERT-Mentorship/hyldmnibjm0jsf4xtgdp.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023483/events/PERT-Mentorship/uitb7jnvtyrgmgzhfoef.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023483/events/PERT-Mentorship/uitb7jnvtyrgmgzhfoef.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023482/events/PERT-Mentorship/qzypjayic9uyd36n2zsi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023482/events/PERT-Mentorship/qzypjayic9uyd36n2zsi.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023482/events/PERT-Mentorship/t2bfbs6r49t9oiyvgyko.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023482/events/PERT-Mentorship/t2bfbs6r49t9oiyvgyko.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023481/events/PERT-Mentorship/gvoyh7fnhkbcujvttgq8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023481/events/PERT-Mentorship/gvoyh7fnhkbcujvttgq8.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023481/events/PERT-Mentorship/tugshtngaw85gj1jtngf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023481/events/PERT-Mentorship/tugshtngaw85gj1jtngf.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023480/events/PERT-Mentorship/meckcv84hpmlah96qez4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023480/events/PERT-Mentorship/meckcv84hpmlah96qez4.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023480/events/PERT-Mentorship/jjbyxcay7jfcyiwow50a.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023480/events/PERT-Mentorship/jjbyxcay7jfcyiwow50a.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023479/events/PERT-Mentorship/ftljafvlrwwg3mp9uwjy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023479/events/PERT-Mentorship/ftljafvlrwwg3mp9uwjy.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023478/events/PERT-Mentorship/ccl7ikcxlkvyhtgdp604.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023478/events/PERT-Mentorship/ccl7ikcxlkvyhtgdp604.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023478/events/PERT-Mentorship/xirsutesmocy73srz8os.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023478/events/PERT-Mentorship/xirsutesmocy73srz8os.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023477/events/PERT-Mentorship/x54yeamuqa5kbphe3v2j.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023477/events/PERT-Mentorship/x54yeamuqa5kbphe3v2j.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023477/events/PERT-Mentorship/plcnhfd1dxybtcdqkdcs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023477/events/PERT-Mentorship/plcnhfd1dxybtcdqkdcs.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023476/events/PERT-Mentorship/awfl2qswzvzdpn5gujfb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023476/events/PERT-Mentorship/awfl2qswzvzdpn5gujfb.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023476/events/PERT-Mentorship/a60d44jw0jr8t8pl9fjn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023476/events/PERT-Mentorship/a60d44jw0jr8t8pl9fjn.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023476/events/PERT-Mentorship/a7aot6m3bjpdbnmegokr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023476/events/PERT-Mentorship/a7aot6m3bjpdbnmegokr.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023474/events/PERT-Mentorship/ltridbgzapiviruvwnqc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023474/events/PERT-Mentorship/ltridbgzapiviruvwnqc.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023473/events/PERT-Mentorship/a4dqp2v5ayyvqjxgqlny.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023473/events/PERT-Mentorship/a4dqp2v5ayyvqjxgqlny.jpg",
            alt: "PERT_Mentorship_Launch",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023472/events/PERT-Mentorship/hpe3o8nvjzakihmryclh.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734023472/events/PERT-Mentorship/hpe3o8nvjzakihmryclh.jpg",
            alt: "PERT_Mentorship_Launch",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
