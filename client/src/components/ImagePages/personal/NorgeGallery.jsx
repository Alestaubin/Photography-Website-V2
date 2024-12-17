import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const albumTitle = "Norway"
    const albumDate = "August 2024"
    const coverImage = {
        src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/xivrihreio6ktzja8svc.jpg",
        alt: "Norway"}
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/xz8byzpu2wzxeewwphub.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/xz8byzpu2wzxeewwphub.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/chgrwd6oaqde13expcyt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/chgrwd6oaqde13expcyt.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/hsdcg6w2gfjwx70bxh6b.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/hsdcg6w2gfjwx70bxh6b.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/sqslvj01aigotjk9slio.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/sqslvj01aigotjk9slio.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/wycdqombyrvqhgi7qsms.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/wycdqombyrvqhgi7qsms.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/nkpo262kqkg4vkppt52k.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/nkpo262kqkg4vkppt52k.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/xivrihreio6ktzja8svc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808743/personal/Norge/xivrihreio6ktzja8svc.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/bhqwqihdtzzmlnnrq0zl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/bhqwqihdtzzmlnnrq0zl.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/vqzt5f9dcj9us4jvyeur.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/vqzt5f9dcj9us4jvyeur.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/m37gsxxwdtacmfpyjhk8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/m37gsxxwdtacmfpyjhk8.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/s5ve6ufuchxk73j0bkez.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/s5ve6ufuchxk73j0bkez.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/gcscvttqxdrgwinwvdob.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/gcscvttqxdrgwinwvdob.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/zar0ycayew6hzzjsqai2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/zar0ycayew6hzzjsqai2.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/x4amevdmvnaxq4xykete.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/x4amevdmvnaxq4xykete.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/pkxdudkjk94y4scffnmx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/pkxdudkjk94y4scffnmx.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/sxf2p8p21sfrp89bzklw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/sxf2p8p21sfrp89bzklw.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/uxyhvcuznfpw7dohjxhn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/uxyhvcuznfpw7dohjxhn.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/qvvcgned1ibdxv8guhve.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/qvvcgned1ibdxv8guhve.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/qh9dg6aecr4iw23hywzy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/qh9dg6aecr4iw23hywzy.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/pa7yn0ul1lydnarfmfwr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/pa7yn0ul1lydnarfmfwr.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/osmm7phwgd0qfifh7gbs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808745/personal/Norge/osmm7phwgd0qfifh7gbs.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/oiussloijasjgdqtqsrz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/oiussloijasjgdqtqsrz.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/b8qhmk17gvbwnui64jjj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/b8qhmk17gvbwnui64jjj.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/tvd1wifvr4atcycfawy0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/tvd1wifvr4atcycfawy0.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/llzccnhs5bykikieoaex.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/llzccnhs5bykikieoaex.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/mddyklm6wqv1ewtxhilt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/mddyklm6wqv1ewtxhilt.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/edllem4dbofaklnlizya.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/edllem4dbofaklnlizya.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/v7yf8uaryildpbmak6ar.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/v7yf8uaryildpbmak6ar.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/vgvpgqkkjiscdl5nbrup.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/vgvpgqkkjiscdl5nbrup.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/c6wudskxjv9ajkimdgrf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808746/personal/Norge/c6wudskxjv9ajkimdgrf.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/p6kemjrguc6zgqxvqrg1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/p6kemjrguc6zgqxvqrg1.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/egnuk63lxpdy7t4qdbwz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/egnuk63lxpdy7t4qdbwz.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/xahbhhkpe5vkhkoudpz4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/xahbhhkpe5vkhkoudpz4.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/nxp7qlefdkrixaeqvbbl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/nxp7qlefdkrixaeqvbbl.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/ldkoprtkgm7jikqfwasz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/ldkoprtkgm7jikqfwasz.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/xfkzb89bbvu8z3frsnkd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/xfkzb89bbvu8z3frsnkd.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/cgirmmlh8atjxrsymkmc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/cgirmmlh8atjxrsymkmc.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/efkjc2fjb3dtf8iaiaak.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/efkjc2fjb3dtf8iaiaak.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/o6itq9ngiljienz4clse.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808747/personal/Norge/o6itq9ngiljienz4clse.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/hmepuhowhqhpdgle2bqu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/hmepuhowhqhpdgle2bqu.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/x8g2ioklu4atzmlgcuge.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/x8g2ioklu4atzmlgcuge.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/lroicydu9hva0mghooie.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/lroicydu9hva0mghooie.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/un2b3iunujthmj6pq4s1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/un2b3iunujthmj6pq4s1.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/csjuefjfh94t3m93idjb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/csjuefjfh94t3m93idjb.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/iqqxibqtfplfwd9nc9go.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/iqqxibqtfplfwd9nc9go.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/ai2x1glywkzfbvn4x6jk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/ai2x1glywkzfbvn4x6jk.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/jytpjw5xh6tvp1ldceqj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/jytpjw5xh6tvp1ldceqj.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/uh8gyiroabf0vgkzdyq7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808748/personal/Norge/uh8gyiroabf0vgkzdyq7.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808749/personal/Norge/afd7y4imhwjmqnnu2h3d.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808749/personal/Norge/afd7y4imhwjmqnnu2h3d.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808749/personal/Norge/hflrixv1lf62exkdmxfh.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808749/personal/Norge/hflrixv1lf62exkdmxfh.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808749/personal/Norge/uwssj0h3yjnmqss0wpka.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808749/personal/Norge/uwssj0h3yjnmqss0wpka.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808749/personal/Norge/qjpkmsfgamwdbvzx6khz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808749/personal/Norge/qjpkmsfgamwdbvzx6khz.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808749/personal/Norge/bmsj65edrlell4b8roco.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808749/personal/Norge/bmsj65edrlell4b8roco.jpg",
            alt: "personal/Norge",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808749/personal/Norge/u0yggtucdhxswa7ujkh6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808749/personal/Norge/u0yggtucdhxswa7ujkh6.jpg",
            alt: "personal/Norge",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
