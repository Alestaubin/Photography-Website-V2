import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992362/events/OAP/biy1ud2gxc3lqiak3hu2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992362/events/OAP/biy1ud2gxc3lqiak3hu2.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992362/events/OAP/kdklrorttj1k79kr1tjo.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992362/events/OAP/kdklrorttj1k79kr1tjo.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992363/events/OAP/njvhlsks5c0wcy9otxey.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992363/events/OAP/njvhlsks5c0wcy9otxey.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992363/events/OAP/bwlpouluwx0c7fhsyrp8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992363/events/OAP/bwlpouluwx0c7fhsyrp8.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992363/events/OAP/bkqaet89wx0zmjlertgu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992363/events/OAP/bkqaet89wx0zmjlertgu.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992364/events/OAP/bw7twhuvdtc8jdoyiiee.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992364/events/OAP/bw7twhuvdtc8jdoyiiee.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992364/events/OAP/snzk4f4qbpdqsjowjydi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992364/events/OAP/snzk4f4qbpdqsjowjydi.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992364/events/OAP/saq6x9d2a7s5ixq6pzte.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992364/events/OAP/saq6x9d2a7s5ixq6pzte.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992365/events/OAP/u8yzvclo7uu48grwaol7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992365/events/OAP/u8yzvclo7uu48grwaol7.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992365/events/OAP/lijxwqptuapgil3iz1rg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992365/events/OAP/lijxwqptuapgil3iz1rg.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992365/events/OAP/fsnpes8ihduvu31y4z7z.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992365/events/OAP/fsnpes8ihduvu31y4z7z.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992365/events/OAP/dusw35mcjfbszcpegq2t.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992365/events/OAP/dusw35mcjfbszcpegq2t.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992365/events/OAP/lj4goscdznjlqu4934dy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992365/events/OAP/lj4goscdznjlqu4934dy.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992366/events/OAP/yjnatrq9ogtfhiiogpio.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992366/events/OAP/yjnatrq9ogtfhiiogpio.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992366/events/OAP/sx17xwqg0jzu6uzldrr3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992366/events/OAP/sx17xwqg0jzu6uzldrr3.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992367/events/OAP/p9mazk9ksb28f03qbv3l.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992367/events/OAP/p9mazk9ksb28f03qbv3l.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992367/events/OAP/fqc6rrl1ioeney9jomhc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992367/events/OAP/fqc6rrl1ioeney9jomhc.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992367/events/OAP/peuyureleva5drxahden.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992367/events/OAP/peuyureleva5drxahden.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992367/events/OAP/vhywaoszozg3ejty6n0x.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992367/events/OAP/vhywaoszozg3ejty6n0x.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992367/events/OAP/dmpvopiipcekbagf5cqu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992367/events/OAP/dmpvopiipcekbagf5cqu.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992368/events/OAP/xqugnfkg3r9xsghitd40.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992368/events/OAP/xqugnfkg3r9xsghitd40.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992368/events/OAP/o8ds7ttpuklnb1o52jwn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992368/events/OAP/o8ds7ttpuklnb1o52jwn.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992368/events/OAP/u09cqx3fhtsju0fevif0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992368/events/OAP/u09cqx3fhtsju0fevif0.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992368/events/OAP/kfecppx4skfv5ugthpka.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992368/events/OAP/kfecppx4skfv5ugthpka.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992368/events/OAP/bmqfpa7o50zswco3dkfk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992368/events/OAP/bmqfpa7o50zswco3dkfk.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992368/events/OAP/kxucbmnnbsbo2k2wg9va.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992368/events/OAP/kxucbmnnbsbo2k2wg9va.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992369/events/OAP/wxmyfdqedqtcam1wfh8g.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992369/events/OAP/wxmyfdqedqtcam1wfh8g.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992369/events/OAP/uqhvwsrspv0jijmbixbs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992369/events/OAP/uqhvwsrspv0jijmbixbs.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992369/events/OAP/jinfiozhhs3gjirvjltv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992369/events/OAP/jinfiozhhs3gjirvjltv.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992370/events/OAP/li0nips5lctpginitnq5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992370/events/OAP/li0nips5lctpginitnq5.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992370/events/OAP/ws2nhauya9s787f3kji9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992370/events/OAP/ws2nhauya9s787f3kji9.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992370/events/OAP/aatbnfia2hsio6daig96.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992370/events/OAP/aatbnfia2hsio6daig96.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992370/events/OAP/odd08anay4dij8fprm0q.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992370/events/OAP/odd08anay4dij8fprm0q.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992371/events/OAP/srlxk3klaulbx3pjv5au.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992371/events/OAP/srlxk3klaulbx3pjv5au.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992371/events/OAP/ypq6jgx1jbckwnxida45.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992371/events/OAP/ypq6jgx1jbckwnxida45.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992371/events/OAP/exmqz6imexkxtxg3vjpc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992371/events/OAP/exmqz6imexkxtxg3vjpc.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992371/events/OAP/y3mgsyr0pffmllucjuby.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992371/events/OAP/y3mgsyr0pffmllucjuby.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992371/events/OAP/c3buhhnzo6ivbgpnzs9h.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992371/events/OAP/c3buhhnzo6ivbgpnzs9h.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992372/events/OAP/k3ihu0xvefm6wts0ws9t.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992372/events/OAP/k3ihu0xvefm6wts0ws9t.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992372/events/OAP/wei1cohsded5vljxk0yn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992372/events/OAP/wei1cohsded5vljxk0yn.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992372/events/OAP/ee0fjrewh9yelvt7nnk2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992372/events/OAP/ee0fjrewh9yelvt7nnk2.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992372/events/OAP/h1ngsr2fuvcmz0sxzoi5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992372/events/OAP/h1ngsr2fuvcmz0sxzoi5.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992372/events/OAP/mdwylqpcuzgqpw0nahag.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992372/events/OAP/mdwylqpcuzgqpw0nahag.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992372/events/OAP/jk1gwbz7hnugaw8dklh2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992372/events/OAP/jk1gwbz7hnugaw8dklh2.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992373/events/OAP/qfutpjtgnihohnhnmpew.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992373/events/OAP/qfutpjtgnihohnhnmpew.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992373/events/OAP/lrfg7jfcbhbsdjtgionz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992373/events/OAP/lrfg7jfcbhbsdjtgionz.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992373/events/OAP/yo8hz1mudtpcvzc4xo08.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992373/events/OAP/yo8hz1mudtpcvzc4xo08.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992373/events/OAP/kelixufmyezch1yriumv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992373/events/OAP/kelixufmyezch1yriumv.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992373/events/OAP/dvayuupy1w1ooajyb4mn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992373/events/OAP/dvayuupy1w1ooajyb4mn.jpg",
            alt: "OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1723992373/events/OAP/msksp5jwyleccgbwo1fx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992373/events/OAP/msksp5jwyleccgbwo1fx.jpg",
            alt: "OAP",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
