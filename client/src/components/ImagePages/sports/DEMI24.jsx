import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const albumTitle = "Demi Marathon de Lachine 2024"
    const albumDate = "October 2024"
    const coverImage = {
        src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657691/sports/demiLachine2024/biudyberdonphkfzygkx.jpg",
        alt: "Demi Marathon de Lachine 2024"}
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657651/sports/demiLachine2024/zghgqziawnter9hk9yai.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657651/sports/demiLachine2024/zghgqziawnter9hk9yai.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657653/sports/demiLachine2024/jm2tgc3hnlguvp4puep0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657653/sports/demiLachine2024/jm2tgc3hnlguvp4puep0.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657654/sports/demiLachine2024/tovveybwrpbccrm7nloa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657654/sports/demiLachine2024/tovveybwrpbccrm7nloa.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657655/sports/demiLachine2024/ylbj0wcmwaialtwz2tje.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657655/sports/demiLachine2024/ylbj0wcmwaialtwz2tje.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657655/sports/demiLachine2024/pgb4r00yq64tshl84oyp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657655/sports/demiLachine2024/pgb4r00yq64tshl84oyp.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657655/sports/demiLachine2024/yol9jvcr3cxhwkaafsjb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657655/sports/demiLachine2024/yol9jvcr3cxhwkaafsjb.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657655/sports/demiLachine2024/g9r0ryqdy77cqpedeyab.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657655/sports/demiLachine2024/g9r0ryqdy77cqpedeyab.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657657/sports/demiLachine2024/wd4ogdgnkn74zuo9hums.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657657/sports/demiLachine2024/wd4ogdgnkn74zuo9hums.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657659/sports/demiLachine2024/sptwuoenoxj5uau0pjii.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657659/sports/demiLachine2024/sptwuoenoxj5uau0pjii.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657660/sports/demiLachine2024/tyky9tkibxvxo6tsbxdu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657660/sports/demiLachine2024/tyky9tkibxvxo6tsbxdu.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657661/sports/demiLachine2024/hjx4dx17ktxozrhwuhht.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657661/sports/demiLachine2024/hjx4dx17ktxozrhwuhht.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657662/sports/demiLachine2024/vfzovydl89gsmtbppgky.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657662/sports/demiLachine2024/vfzovydl89gsmtbppgky.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657664/sports/demiLachine2024/x6llbacpbgtiorrbl69n.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657664/sports/demiLachine2024/x6llbacpbgtiorrbl69n.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657665/sports/demiLachine2024/gbose4qp2hmr1cs3vciu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657665/sports/demiLachine2024/gbose4qp2hmr1cs3vciu.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657666/sports/demiLachine2024/j9h0yrfwvq66mibvgam2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657666/sports/demiLachine2024/j9h0yrfwvq66mibvgam2.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657666/sports/demiLachine2024/loyg264jtkiix2ycstur.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657666/sports/demiLachine2024/loyg264jtkiix2ycstur.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657668/sports/demiLachine2024/pvvn0gvtp1kaehb5bv0k.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657668/sports/demiLachine2024/pvvn0gvtp1kaehb5bv0k.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657668/sports/demiLachine2024/ueyhqo5chrbdfo4ojjjz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657668/sports/demiLachine2024/ueyhqo5chrbdfo4ojjjz.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657669/sports/demiLachine2024/vcvosrn1eousflw5qeww.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657669/sports/demiLachine2024/vcvosrn1eousflw5qeww.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657670/sports/demiLachine2024/wwti74nlgxxf0fxn2lsl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657670/sports/demiLachine2024/wwti74nlgxxf0fxn2lsl.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657672/sports/demiLachine2024/re2ycauioyb63mscc0fc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657672/sports/demiLachine2024/re2ycauioyb63mscc0fc.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657673/sports/demiLachine2024/av8q9uokhnxmzowekzga.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657673/sports/demiLachine2024/av8q9uokhnxmzowekzga.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657674/sports/demiLachine2024/llff7ym8czbn6cs5gvll.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657674/sports/demiLachine2024/llff7ym8czbn6cs5gvll.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657676/sports/demiLachine2024/fbdx2ygdlmrbowev29bc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657676/sports/demiLachine2024/fbdx2ygdlmrbowev29bc.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657677/sports/demiLachine2024/togu8adroh3qzbmzv3zu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657677/sports/demiLachine2024/togu8adroh3qzbmzv3zu.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657679/sports/demiLachine2024/lqfgbd0id4vmnqyo4cr4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657679/sports/demiLachine2024/lqfgbd0id4vmnqyo4cr4.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657679/sports/demiLachine2024/bsxv0nv1iwujhgogg3rc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657679/sports/demiLachine2024/bsxv0nv1iwujhgogg3rc.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657679/sports/demiLachine2024/hutrwo9ewxluiyfo4jxq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657679/sports/demiLachine2024/hutrwo9ewxluiyfo4jxq.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657679/sports/demiLachine2024/zdquxijggq9jgufyryjf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657679/sports/demiLachine2024/zdquxijggq9jgufyryjf.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657681/sports/demiLachine2024/qog21w6pmmjvhftedcbx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657681/sports/demiLachine2024/qog21w6pmmjvhftedcbx.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657683/sports/demiLachine2024/muhgt7zjyaaohzkmeais.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657683/sports/demiLachine2024/muhgt7zjyaaohzkmeais.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657683/sports/demiLachine2024/ymhm91vplcrdjdxgunpe.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657683/sports/demiLachine2024/ymhm91vplcrdjdxgunpe.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657685/sports/demiLachine2024/gcuboaskd8kxhwz0xjxs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657685/sports/demiLachine2024/gcuboaskd8kxhwz0xjxs.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657686/sports/demiLachine2024/kejwvwcpa1rqjfbzikyz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657686/sports/demiLachine2024/kejwvwcpa1rqjfbzikyz.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657688/sports/demiLachine2024/sixljvv73ku1expjqjqj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657688/sports/demiLachine2024/sixljvv73ku1expjqjqj.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657688/sports/demiLachine2024/rmawolhwvcj8fr8cdr28.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657688/sports/demiLachine2024/rmawolhwvcj8fr8cdr28.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657689/sports/demiLachine2024/zwg21ggutbok2zwjttyo.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657689/sports/demiLachine2024/zwg21ggutbok2zwjttyo.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657690/sports/demiLachine2024/jzcczqkipceo2edqqskz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657690/sports/demiLachine2024/jzcczqkipceo2edqqskz.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657691/sports/demiLachine2024/biudyberdonphkfzygkx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657691/sports/demiLachine2024/biudyberdonphkfzygkx.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657692/sports/demiLachine2024/emvepdflm3ew4clcx2p5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657692/sports/demiLachine2024/emvepdflm3ew4clcx2p5.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657692/sports/demiLachine2024/ckvifvsh8fv3dtu4mkvg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657692/sports/demiLachine2024/ckvifvsh8fv3dtu4mkvg.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657694/sports/demiLachine2024/vnapl5dow09kve59qbln.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657694/sports/demiLachine2024/vnapl5dow09kve59qbln.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657694/sports/demiLachine2024/pudpg4xiyqo96hedqnkx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657694/sports/demiLachine2024/pudpg4xiyqo96hedqnkx.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657695/sports/demiLachine2024/qms2l2fli0392kobv3vd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657695/sports/demiLachine2024/qms2l2fli0392kobv3vd.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657696/sports/demiLachine2024/tgkltvk1sbnzhgumqq9t.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657696/sports/demiLachine2024/tgkltvk1sbnzhgumqq9t.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657697/sports/demiLachine2024/sisj3ehlom3dqlhiviz6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657697/sports/demiLachine2024/sisj3ehlom3dqlhiviz6.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657698/sports/demiLachine2024/h0tbxdobtilf644ucvgj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657698/sports/demiLachine2024/h0tbxdobtilf644ucvgj.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657700/sports/demiLachine2024/ntu72ltjoefveum6bkzy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657700/sports/demiLachine2024/ntu72ltjoefveum6bkzy.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657700/sports/demiLachine2024/jx3o6tqzefkx91agirss.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657700/sports/demiLachine2024/jx3o6tqzefkx91agirss.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657701/sports/demiLachine2024/xhsy97wfn43eucxn7vru.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657701/sports/demiLachine2024/xhsy97wfn43eucxn7vru.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657701/sports/demiLachine2024/bykwmm7dgc7ltnbugmsy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657701/sports/demiLachine2024/bykwmm7dgc7ltnbugmsy.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657702/sports/demiLachine2024/bf20bf998s4qccpbzxsk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657702/sports/demiLachine2024/bf20bf998s4qccpbzxsk.jpg",
            alt: "demiLachine2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657702/sports/demiLachine2024/obtslajmihappf1m68zj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1728657702/sports/demiLachine2024/obtslajmihappf1m68zj.jpg",
            alt: "demiLachine2024",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
