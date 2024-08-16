import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/ljjflncjanjctxn9wxq3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/ljjflncjanjctxn9wxq3.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/xecj67fv9ohbqrcvax2c.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/xecj67fv9ohbqrcvax2c.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/fninkgmy5ojl5dmzkxhw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/fninkgmy5ojl5dmzkxhw.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/cm7qkboccqo7iijbnovs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/cm7qkboccqo7iijbnovs.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/to1uol3lzrqkgolbdxxm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/to1uol3lzrqkgolbdxxm.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/gbs4l4yzsjrdkdqaabsy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/gbs4l4yzsjrdkdqaabsy.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750649/sports/MardiCycliste2023/kipml47q0pqmw1sqrjw7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750649/sports/MardiCycliste2023/kipml47q0pqmw1sqrjw7.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750649/sports/MardiCycliste2023/h96zgx28gedchruzhr3b.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750649/sports/MardiCycliste2023/h96zgx28gedchruzhr3b.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750650/sports/MardiCycliste2023/efpjpf7erl4f2hu0ysjp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750650/sports/MardiCycliste2023/efpjpf7erl4f2hu0ysjp.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750650/sports/MardiCycliste2023/smxvlegz2nbagvm9kwhs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750650/sports/MardiCycliste2023/smxvlegz2nbagvm9kwhs.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750650/sports/MardiCycliste2023/moru0fjvdzjnitlpvq5v.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750650/sports/MardiCycliste2023/moru0fjvdzjnitlpvq5v.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750650/sports/MardiCycliste2023/rgsp9hckygfetpgm5ntg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750650/sports/MardiCycliste2023/rgsp9hckygfetpgm5ntg.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750650/sports/MardiCycliste2023/mzxz689eugj82r9go7wa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750650/sports/MardiCycliste2023/mzxz689eugj82r9go7wa.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750650/sports/MardiCycliste2023/v2ojh6qjwkdlqdmxylmk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750650/sports/MardiCycliste2023/v2ojh6qjwkdlqdmxylmk.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/zyly5bis0btj1mr9vvbv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/zyly5bis0btj1mr9vvbv.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/kd3peblqzkfphuwhzoc6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/kd3peblqzkfphuwhzoc6.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/usg5adl3wfuk6omqauhi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/usg5adl3wfuk6omqauhi.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/l4yqanawlpecxoph1uln.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/l4yqanawlpecxoph1uln.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/efxgigr8nd1vwdfz8fqr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/efxgigr8nd1vwdfz8fqr.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/pfi5ok1qtejhzuwg1fqx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/pfi5ok1qtejhzuwg1fqx.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/fkr6gc8ag0rocgzp2bqb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/fkr6gc8ag0rocgzp2bqb.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/pnrdjdbd1obdnikuspsc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750651/sports/MardiCycliste2023/pnrdjdbd1obdnikuspsc.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750652/sports/MardiCycliste2023/yavotyipn27rouqtja7g.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750652/sports/MardiCycliste2023/yavotyipn27rouqtja7g.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750652/sports/MardiCycliste2023/c97dilqncmnyyyw5glhv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750652/sports/MardiCycliste2023/c97dilqncmnyyyw5glhv.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750652/sports/MardiCycliste2023/dcutrghpdctyapxxbscs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750652/sports/MardiCycliste2023/dcutrghpdctyapxxbscs.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750652/sports/MardiCycliste2023/rtri7oaf0i1q4fpjr1ca.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750652/sports/MardiCycliste2023/rtri7oaf0i1q4fpjr1ca.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750652/sports/MardiCycliste2023/oootxn48ilxlj31eufss.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750652/sports/MardiCycliste2023/oootxn48ilxlj31eufss.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750652/sports/MardiCycliste2023/gei0x3anv4aekgzds4zf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750652/sports/MardiCycliste2023/gei0x3anv4aekgzds4zf.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750653/sports/MardiCycliste2023/akfevgfh19kkcvq7ot1h.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750653/sports/MardiCycliste2023/akfevgfh19kkcvq7ot1h.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750653/sports/MardiCycliste2023/i7thkprmuwph9831ntzw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750653/sports/MardiCycliste2023/i7thkprmuwph9831ntzw.jpg",
            alt: "sports/MardiCycliste2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750653/sports/MardiCycliste2023/f4kosv5ti1c0h8weapem.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750653/sports/MardiCycliste2023/f4kosv5ti1c0h8weapem.jpg",
            alt: "sports/MardiCycliste2023",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
