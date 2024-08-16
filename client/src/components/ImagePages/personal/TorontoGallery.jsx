import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926436/personal/toronto/bxbrjm3wzirknneqxrr8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926436/personal/toronto/bxbrjm3wzirknneqxrr8.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926439/personal/toronto/irehslcfhw0nxbdcyvkb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926439/personal/toronto/irehslcfhw0nxbdcyvkb.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926440/personal/toronto/rkro35qghrdgv8hhfnpv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926440/personal/toronto/rkro35qghrdgv8hhfnpv.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926441/personal/toronto/uayqaikzxyfaqm0nwkqe.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926441/personal/toronto/uayqaikzxyfaqm0nwkqe.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926442/personal/toronto/hms5vaunueqxke6b7txu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926442/personal/toronto/hms5vaunueqxke6b7txu.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926443/personal/toronto/rnoghqshl2bqqjwovfy9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926443/personal/toronto/rnoghqshl2bqqjwovfy9.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926446/personal/toronto/og7o5df8szshfljzcwud.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926446/personal/toronto/og7o5df8szshfljzcwud.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926446/personal/toronto/ulfiopfl79quav66m1bv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926446/personal/toronto/ulfiopfl79quav66m1bv.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926447/personal/toronto/jcuxblo5iqdiecnfkvmm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926447/personal/toronto/jcuxblo5iqdiecnfkvmm.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926447/personal/toronto/ermzeda1gkrwk2izmps4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926447/personal/toronto/ermzeda1gkrwk2izmps4.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926448/personal/toronto/rflzzjanz8ok6gjx0ofe.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926448/personal/toronto/rflzzjanz8ok6gjx0ofe.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926449/personal/toronto/kccksmqzw1yrikwoyu6r.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926449/personal/toronto/kccksmqzw1yrikwoyu6r.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926450/personal/toronto/lprwbzu2mvekjt8zmgsm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926450/personal/toronto/lprwbzu2mvekjt8zmgsm.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926452/personal/toronto/gjbbulg6ca1bt59k6ois.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926452/personal/toronto/gjbbulg6ca1bt59k6ois.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926453/personal/toronto/iwwtijo6evprganqincc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926453/personal/toronto/iwwtijo6evprganqincc.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926454/personal/toronto/ihwoeos21zefedi7n0kx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926454/personal/toronto/ihwoeos21zefedi7n0kx.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926457/personal/toronto/ldch1subqyp65a7dofd8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926457/personal/toronto/ldch1subqyp65a7dofd8.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926462/personal/toronto/rduxzt6dxvcwvollvu00.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926462/personal/toronto/rduxzt6dxvcwvollvu00.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926465/personal/toronto/sggusqhtienw92pltkop.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926465/personal/toronto/sggusqhtienw92pltkop.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926465/personal/toronto/ktupeukytzamk0644nu8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926465/personal/toronto/ktupeukytzamk0644nu8.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926466/personal/toronto/gov9xmhlgpvlb40e0dus.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926466/personal/toronto/gov9xmhlgpvlb40e0dus.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926468/personal/toronto/lkzloj1swlqhalewpif8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926468/personal/toronto/lkzloj1swlqhalewpif8.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926469/personal/toronto/goscgeh1brfunemayozt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926469/personal/toronto/goscgeh1brfunemayozt.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926472/personal/toronto/hfohjzr9mvrl85fefv5v.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926472/personal/toronto/hfohjzr9mvrl85fefv5v.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926472/personal/toronto/idryqp5s8av8mur73ver.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926472/personal/toronto/idryqp5s8av8mur73ver.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926475/personal/toronto/qbtfqvtnd3avvgkowetf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926475/personal/toronto/qbtfqvtnd3avvgkowetf.jpg",
            alt: "personal/toronto",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926476/personal/toronto/kzqb74ildksu2vfs3idk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926476/personal/toronto/kzqb74ildksu2vfs3idk.jpg",
            alt: "personal/toronto",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
