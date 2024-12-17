import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const coverImage = {
        src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030134/events/UDES-med/xkcljoiguxjil1uv7zqu.jpg",
        alt: "UDES Med - Cérémonie de Consécration"
        }
    const albumTitle = "UDES Med - Cérémonie de Consécration"
    const albumDate = "November 2024"
    
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030139/events/UDES-med/kgjiamedjjszkd9ulgda.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030139/events/UDES-med/kgjiamedjjszkd9ulgda.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030138/events/UDES-med/m0qqswmlguixim1r8kjb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030138/events/UDES-med/m0qqswmlguixim1r8kjb.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030138/events/UDES-med/wdwwdgtlru5j9cdkqwqf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030138/events/UDES-med/wdwwdgtlru5j9cdkqwqf.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030137/events/UDES-med/apnr629w86ytcrvyxarm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030137/events/UDES-med/apnr629w86ytcrvyxarm.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030137/events/UDES-med/vrzcqfshwaky5gtebodn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030137/events/UDES-med/vrzcqfshwaky5gtebodn.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030136/events/UDES-med/kaqza8xwfwot1ze6wmuv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030136/events/UDES-med/kaqza8xwfwot1ze6wmuv.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030134/events/UDES-med/whobx43z7hn7wzyr8ilj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030134/events/UDES-med/whobx43z7hn7wzyr8ilj.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030134/events/UDES-med/opxe3sqdrctunywabiwk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030134/events/UDES-med/opxe3sqdrctunywabiwk.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030134/events/UDES-med/xkcljoiguxjil1uv7zqu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030134/events/UDES-med/xkcljoiguxjil1uv7zqu.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030134/events/UDES-med/vxm5gl7wfw1gejg12fgp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030134/events/UDES-med/vxm5gl7wfw1gejg12fgp.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030133/events/UDES-med/ghoyugjyt4wssfgfjwcl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030133/events/UDES-med/ghoyugjyt4wssfgfjwcl.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030132/events/UDES-med/ycfpnklgxrkfjkug8pho.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030132/events/UDES-med/ycfpnklgxrkfjkug8pho.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030132/events/UDES-med/asuqwndnm6oijagapcms.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030132/events/UDES-med/asuqwndnm6oijagapcms.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030131/events/UDES-med/cca0rvv7v8zfuxiqfdiq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030131/events/UDES-med/cca0rvv7v8zfuxiqfdiq.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030129/events/UDES-med/afbswfwkdcngqv8h6itu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030129/events/UDES-med/afbswfwkdcngqv8h6itu.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030129/events/UDES-med/fb7tlmvbosj9drynm6yk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030129/events/UDES-med/fb7tlmvbosj9drynm6yk.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030129/events/UDES-med/ofnd1fjzykzqbfdoxmai.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030129/events/UDES-med/ofnd1fjzykzqbfdoxmai.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030128/events/UDES-med/llhrdlurvmgicmuxcnv1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030128/events/UDES-med/llhrdlurvmgicmuxcnv1.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030127/events/UDES-med/uqyxvliy0jn7riacrrrh.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030127/events/UDES-med/uqyxvliy0jn7riacrrrh.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030126/events/UDES-med/iiqo57udujq6w0uydbwi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030126/events/UDES-med/iiqo57udujq6w0uydbwi.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030125/events/UDES-med/zvlp4oc2qr7rcydmcrm4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030125/events/UDES-med/zvlp4oc2qr7rcydmcrm4.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030124/events/UDES-med/ai0kk5ou505pjnmjpsos.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030124/events/UDES-med/ai0kk5ou505pjnmjpsos.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030123/events/UDES-med/ilkf93knmf1hb6bojpus.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030123/events/UDES-med/ilkf93knmf1hb6bojpus.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030121/events/UDES-med/n2v1lvqvdjonr4sjtyj7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030121/events/UDES-med/n2v1lvqvdjonr4sjtyj7.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030120/events/UDES-med/mbohxd6ajvdky3xmrufb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030120/events/UDES-med/mbohxd6ajvdky3xmrufb.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030120/events/UDES-med/b0ecevvwstpsynkoegyy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030120/events/UDES-med/b0ecevvwstpsynkoegyy.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030117/events/UDES-med/ylcvuvykllgujhrvtjyp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1734030117/events/UDES-med/ylcvuvykllgujhrvtjyp.jpg",
            alt: "UDES_Med_-_Cérémonie_de_Consécration",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
