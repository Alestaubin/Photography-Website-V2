import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const coverImage = {
    src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160609/events/ECA-Jonc/wokmvm1ocg4iofiwvns2.jpg",
    alt: "Concordia ECA Cérémonie Jonc"
    }
    const albumTitle = "Concordia ECA Cérémonie Jonc"
    const albumDate = "March 2025"
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160619/events/ECA-Jonc/vu4vegvrnfiujkuxvtao.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160619/events/ECA-Jonc/vu4vegvrnfiujkuxvtao.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160618/events/ECA-Jonc/hc77ytp3chjtjc9dopxi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160618/events/ECA-Jonc/hc77ytp3chjtjc9dopxi.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160618/events/ECA-Jonc/lsg8c9yvlbowjfi68bye.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160618/events/ECA-Jonc/lsg8c9yvlbowjfi68bye.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160617/events/ECA-Jonc/wknx7qm0rkdsshiplfwf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160617/events/ECA-Jonc/wknx7qm0rkdsshiplfwf.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160617/events/ECA-Jonc/tub7wnlvjfkgd1ivzqvu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160617/events/ECA-Jonc/tub7wnlvjfkgd1ivzqvu.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160616/events/ECA-Jonc/bt0ps3ccajfvsehztcnq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160616/events/ECA-Jonc/bt0ps3ccajfvsehztcnq.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160615/events/ECA-Jonc/rhoanfqy4uri36kvfjdy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160615/events/ECA-Jonc/rhoanfqy4uri36kvfjdy.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160614/events/ECA-Jonc/rgctmhwanud15dafwcdx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160614/events/ECA-Jonc/rgctmhwanud15dafwcdx.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160614/events/ECA-Jonc/mbcber472gcdj3vlbmjl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160614/events/ECA-Jonc/mbcber472gcdj3vlbmjl.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160613/events/ECA-Jonc/ewzy6daza1khbzqgczdi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160613/events/ECA-Jonc/ewzy6daza1khbzqgczdi.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160613/events/ECA-Jonc/sehnmpjmv1z5wd7cvatj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160613/events/ECA-Jonc/sehnmpjmv1z5wd7cvatj.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160612/events/ECA-Jonc/uqat1rgvxpuk5sfjx12t.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160612/events/ECA-Jonc/uqat1rgvxpuk5sfjx12t.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160612/events/ECA-Jonc/tm0uxcybbvaqk1vplntj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160612/events/ECA-Jonc/tm0uxcybbvaqk1vplntj.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160611/events/ECA-Jonc/cw64fokktivbhtzxb8rz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160611/events/ECA-Jonc/cw64fokktivbhtzxb8rz.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160610/events/ECA-Jonc/enifi8rxvljnj4jaswjk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160610/events/ECA-Jonc/enifi8rxvljnj4jaswjk.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160610/events/ECA-Jonc/unizytpyjqfg2cb0vdl0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160610/events/ECA-Jonc/unizytpyjqfg2cb0vdl0.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160610/events/ECA-Jonc/rxmbndpkzptl707hwew4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160610/events/ECA-Jonc/rxmbndpkzptl707hwew4.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160610/events/ECA-Jonc/vppzdxln7jpgxrhrifej.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160610/events/ECA-Jonc/vppzdxln7jpgxrhrifej.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160609/events/ECA-Jonc/wokmvm1ocg4iofiwvns2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160609/events/ECA-Jonc/wokmvm1ocg4iofiwvns2.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160608/events/ECA-Jonc/bninarscoifdkw60x7q5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160608/events/ECA-Jonc/bninarscoifdkw60x7q5.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160606/events/ECA-Jonc/q4zeapwbemp25itlifea.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160606/events/ECA-Jonc/q4zeapwbemp25itlifea.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160606/events/ECA-Jonc/agif1bofiddbnlfm1q7p.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160606/events/ECA-Jonc/agif1bofiddbnlfm1q7p.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160605/events/ECA-Jonc/d87ncjm1dxrnvgjzyesw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160605/events/ECA-Jonc/d87ncjm1dxrnvgjzyesw.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160604/events/ECA-Jonc/yxhnul7hmzg9ghe5evsj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160604/events/ECA-Jonc/yxhnul7hmzg9ghe5evsj.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160604/events/ECA-Jonc/ejadaxqfix8xwdpvq7wn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160604/events/ECA-Jonc/ejadaxqfix8xwdpvq7wn.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160603/events/ECA-Jonc/jvjmxphxm0uns06z3vng.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160603/events/ECA-Jonc/jvjmxphxm0uns06z3vng.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160602/events/ECA-Jonc/ldm0f0963iorsva6ziri.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160602/events/ECA-Jonc/ldm0f0963iorsva6ziri.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160602/events/ECA-Jonc/zzhdekfeh3hry1ngluxj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160602/events/ECA-Jonc/zzhdekfeh3hry1ngluxj.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744160601/events/ECA-Jonc/dsuu0m6c6qgu73vptfkf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744160601/events/ECA-Jonc/dsuu0m6c6qgu73vptfkf.jpg",
            alt: "Concordia_ECA_Cérémonie_Jonc",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
