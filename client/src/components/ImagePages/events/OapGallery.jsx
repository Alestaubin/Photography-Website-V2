import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787321/events/OAP/us1afi1axsjljmomdnel.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787321/events/OAP/us1afi1axsjljmomdnel.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787321/events/OAP/lyvmezxbaewjvgrisbsr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787321/events/OAP/lyvmezxbaewjvgrisbsr.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787321/events/OAP/clnv8tiyjaqj8kobeix3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787321/events/OAP/clnv8tiyjaqj8kobeix3.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787321/events/OAP/sr8pqklc20pdztz6ajs5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787321/events/OAP/sr8pqklc20pdztz6ajs5.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787321/events/OAP/tlkc6egijsfcjzwwcump.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787321/events/OAP/tlkc6egijsfcjzwwcump.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787321/events/OAP/uq4kukndctqbtinknfkp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787321/events/OAP/uq4kukndctqbtinknfkp.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/ucldnfw8gxxsfncygyjf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/ucldnfw8gxxsfncygyjf.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/ym6ilm1vi50fzo7o30vr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/ym6ilm1vi50fzo7o30vr.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/zb3eiggdnwubnm8bramy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/zb3eiggdnwubnm8bramy.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/yzmwp7h4wshrmeth0x5n.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/yzmwp7h4wshrmeth0x5n.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/w2nn6cny5ctzmsp5irrk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/w2nn6cny5ctzmsp5irrk.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/jniiarvaukzxphjgwqpt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/jniiarvaukzxphjgwqpt.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/ssw0v3zwocdqzlimgnrt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/ssw0v3zwocdqzlimgnrt.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/dgcww7tchts2sijczzmz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/dgcww7tchts2sijczzmz.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/yp9csnfcis5tnjdyuicl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787322/events/OAP/yp9csnfcis5tnjdyuicl.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787323/events/OAP/iq5vpejsqgtqrikb6i7m.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787323/events/OAP/iq5vpejsqgtqrikb6i7m.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787323/events/OAP/txbabtd9ybyvcx6kwbqp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787323/events/OAP/txbabtd9ybyvcx6kwbqp.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787323/events/OAP/wqdkeiresr3oayhfyh1r.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787323/events/OAP/wqdkeiresr3oayhfyh1r.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787323/events/OAP/pr5vlzxs3raget0jp4hx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787323/events/OAP/pr5vlzxs3raget0jp4hx.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787323/events/OAP/yjv9cpl51kvebppsx1cj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787323/events/OAP/yjv9cpl51kvebppsx1cj.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787330/events/OAP/icto4betoszacyzzy7wb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787330/events/OAP/icto4betoszacyzzy7wb.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/mtib0lpjnx3noqv2hiuu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/mtib0lpjnx3noqv2hiuu.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/bzbrmzrxlgh5ok5mreqo.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/bzbrmzrxlgh5ok5mreqo.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/cmfmtehw91d9bkrjklot.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/cmfmtehw91d9bkrjklot.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/yrilr9vbsisatldam5zq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/yrilr9vbsisatldam5zq.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/gun4wk5k7z7gmrh5lpwv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/gun4wk5k7z7gmrh5lpwv.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/ouh1uwhyilwxdvl9tqpy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/ouh1uwhyilwxdvl9tqpy.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/dvvlp0o0wigqswditupd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/dvvlp0o0wigqswditupd.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/m9xvq0djgtnoc3qlm2nx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787348/events/OAP/m9xvq0djgtnoc3qlm2nx.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/otipy6gejhmewnzoetnx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/otipy6gejhmewnzoetnx.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/zg0vtfs4khlw4nrem99d.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/zg0vtfs4khlw4nrem99d.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/ybqcrktodxlmxlpjtgoe.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/ybqcrktodxlmxlpjtgoe.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/sgw2rvaqamxgzulnqll6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/sgw2rvaqamxgzulnqll6.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/ehz6fmdaqdfrswgmx0wn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/ehz6fmdaqdfrswgmx0wn.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/kojiaacc72dhbzyo98pk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/kojiaacc72dhbzyo98pk.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/gitdxjz7gq4inmmv6l1s.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/gitdxjz7gq4inmmv6l1s.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/lntds7fvemqx1ue5nkne.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/lntds7fvemqx1ue5nkne.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/vrk8qtblzkuyzqxdanc4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/vrk8qtblzkuyzqxdanc4.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/cmzzrdaxwiz6pjryy7yr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787349/events/OAP/cmzzrdaxwiz6pjryy7yr.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/vfsa676cxi1fazsez1yb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/vfsa676cxi1fazsez1yb.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/u9vgib0rrhnnei187ok2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/u9vgib0rrhnnei187ok2.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/qiu3v2tyrzd9vmsq0s85.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/qiu3v2tyrzd9vmsq0s85.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/zugramr4jhxxaj0crfv5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/zugramr4jhxxaj0crfv5.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/jzmw7urvxbfckl0lvcia.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/jzmw7urvxbfckl0lvcia.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/as24aztfiaueoxhvcw36.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/as24aztfiaueoxhvcw36.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/uw7thq2br6difehlndda.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/uw7thq2br6difehlndda.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/atbpu5kblepnxzfydn6t.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/atbpu5kblepnxzfydn6t.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/kbcq7qslrak6k4isjh9c.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787350/events/OAP/kbcq7qslrak6k4isjh9c.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787351/events/OAP/bppz8w35ermip1cej8hn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787351/events/OAP/bppz8w35ermip1cej8hn.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787351/events/OAP/mkw0zilftwte30kvreib.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787351/events/OAP/mkw0zilftwte30kvreib.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787351/events/OAP/m54ruwldu81i3qadlolb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787351/events/OAP/m54ruwldu81i3qadlolb.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787351/events/OAP/ejlnl20hqznvcdnk4kls.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787351/events/OAP/ejlnl20hqznvcdnk4kls.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787351/events/OAP/cajel8qvakowslekfwd9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787351/events/OAP/cajel8qvakowslekfwd9.jpg",
            alt: "events/OAP",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787351/events/OAP/dgi9gigjviip41lls6yx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723787351/events/OAP/dgi9gigjviip41lls6yx.jpg",
            alt: "events/OAP",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
