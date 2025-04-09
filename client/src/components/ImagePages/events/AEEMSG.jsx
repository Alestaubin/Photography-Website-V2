import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const coverImage = {
    src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161825/events/AEMSG/tiw4ednwovaxka89upqu.jpg",
    alt: "UQAM AéMSG Networking Event"
    }
    const albumTitle = "UQAM AéMSG Networking Event"
    const albumDate = "Febuary 2025"
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161833/events/AEMSG/cks35rxk72mutyf8t4gt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161833/events/AEMSG/cks35rxk72mutyf8t4gt.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161833/events/AEMSG/evhsiddydz9vqj7uuqx9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161833/events/AEMSG/evhsiddydz9vqj7uuqx9.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161832/events/AEMSG/pwgzibosaqpceo7rzt1l.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161832/events/AEMSG/pwgzibosaqpceo7rzt1l.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161832/events/AEMSG/eyszyxpijqr0ix0r2xqw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161832/events/AEMSG/eyszyxpijqr0ix0r2xqw.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161832/events/AEMSG/iq8cala923yj3uinuyrt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161832/events/AEMSG/iq8cala923yj3uinuyrt.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161830/events/AEMSG/r9fdz9dvgu8xbkrglvck.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161830/events/AEMSG/r9fdz9dvgu8xbkrglvck.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161830/events/AEMSG/ai7jbijpqzfrxyjzbpf4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161830/events/AEMSG/ai7jbijpqzfrxyjzbpf4.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161829/events/AEMSG/re2r66vggtpbuzpp5ywg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161829/events/AEMSG/re2r66vggtpbuzpp5ywg.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161828/events/AEMSG/bufwgjcle4h2gzdbuxpy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161828/events/AEMSG/bufwgjcle4h2gzdbuxpy.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161828/events/AEMSG/id5bkykpxy0mejruddw1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161828/events/AEMSG/id5bkykpxy0mejruddw1.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161828/events/AEMSG/f4cnrdmy9nd4v9vlqrep.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161828/events/AEMSG/f4cnrdmy9nd4v9vlqrep.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161826/events/AEMSG/t164kpuem26mp2mk1u24.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161826/events/AEMSG/t164kpuem26mp2mk1u24.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161825/events/AEMSG/tiw4ednwovaxka89upqu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161825/events/AEMSG/tiw4ednwovaxka89upqu.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161825/events/AEMSG/nfjlnfpx8bbmvzdfpr9e.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161825/events/AEMSG/nfjlnfpx8bbmvzdfpr9e.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161825/events/AEMSG/lu2u6omdp8looylsz9zd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161825/events/AEMSG/lu2u6omdp8looylsz9zd.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161825/events/AEMSG/u0wdok85x6k3d86cjz1m.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161825/events/AEMSG/u0wdok85x6k3d86cjz1m.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161823/events/AEMSG/vzls8pkmorizuro7qvpm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161823/events/AEMSG/vzls8pkmorizuro7qvpm.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161822/events/AEMSG/z0oyitbausfpp2ivnn67.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161822/events/AEMSG/z0oyitbausfpp2ivnn67.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161821/events/AEMSG/ufgv6wi6tjo0iocxslhv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161821/events/AEMSG/ufgv6wi6tjo0iocxslhv.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161819/events/AEMSG/c0gus29e12tfvab87jx4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161819/events/AEMSG/c0gus29e12tfvab87jx4.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161818/events/AEMSG/qvm2uhpbk210frs6zo9g.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161818/events/AEMSG/qvm2uhpbk210frs6zo9g.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161818/events/AEMSG/b22bk9gtgpbyrn2h9ted.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161818/events/AEMSG/b22bk9gtgpbyrn2h9ted.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744161817/events/AEMSG/moihgrfxfbaubcfna9dw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744161817/events/AEMSG/moihgrfxfbaubcfna9dw.jpg",
            alt: "UQAM_AéMSG_Networking_Event",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
