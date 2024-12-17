import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const albumTitle = "Halloween @ Rouge Bar"
    const albumDate = "October 2024"
    const coverImage = {
        src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694624/events/halloween-rouge/zt2drl3ca8frs6nmghhi.jpg",
        alt: "Halloween @ Rouge Bar"}
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694625/events/halloween-rouge/rrc3g3ibch47xbnmjzwy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694625/events/halloween-rouge/rrc3g3ibch47xbnmjzwy.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694625/events/halloween-rouge/wmlhc5svthobsnigu5r2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694625/events/halloween-rouge/wmlhc5svthobsnigu5r2.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694624/events/halloween-rouge/zt2drl3ca8frs6nmghhi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694624/events/halloween-rouge/zt2drl3ca8frs6nmghhi.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694623/events/halloween-rouge/c6nykhun8dhcyvdpmi1s.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694623/events/halloween-rouge/c6nykhun8dhcyvdpmi1s.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694622/events/halloween-rouge/zd0bmol75rlh1mu0ri2n.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694622/events/halloween-rouge/zd0bmol75rlh1mu0ri2n.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694621/events/halloween-rouge/ufdzxwjtkg5vooigx1we.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694621/events/halloween-rouge/ufdzxwjtkg5vooigx1we.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694620/events/halloween-rouge/hha8w6rzaq4eu8559m9o.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694620/events/halloween-rouge/hha8w6rzaq4eu8559m9o.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694619/events/halloween-rouge/x2geqwpimhuv5on4dgon.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694619/events/halloween-rouge/x2geqwpimhuv5on4dgon.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694619/events/halloween-rouge/tuts4uedvzwgkyfygdma.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694619/events/halloween-rouge/tuts4uedvzwgkyfygdma.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694619/events/halloween-rouge/bvhfiipzbr9afjjeeim9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694619/events/halloween-rouge/bvhfiipzbr9afjjeeim9.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694619/events/halloween-rouge/en9xijqb7xurrev1ml6k.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694619/events/halloween-rouge/en9xijqb7xurrev1ml6k.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694617/events/halloween-rouge/eqebggah1rsc9e2aygx3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694617/events/halloween-rouge/eqebggah1rsc9e2aygx3.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694616/events/halloween-rouge/plw5atpmnoqdnt1qssdx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694616/events/halloween-rouge/plw5atpmnoqdnt1qssdx.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694615/events/halloween-rouge/daevtwcl73c2nrzrcyc0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694615/events/halloween-rouge/daevtwcl73c2nrzrcyc0.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694615/events/halloween-rouge/aevcgu5gaeh6hpwxgl3y.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694615/events/halloween-rouge/aevcgu5gaeh6hpwxgl3y.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694614/events/halloween-rouge/jw5289ocnldvbyqkvdzj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694614/events/halloween-rouge/jw5289ocnldvbyqkvdzj.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694614/events/halloween-rouge/elbwqqunamlx3wctbaw1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694614/events/halloween-rouge/elbwqqunamlx3wctbaw1.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694614/events/halloween-rouge/ej1mqpyurzxkv9r6mut5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694614/events/halloween-rouge/ej1mqpyurzxkv9r6mut5.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694612/events/halloween-rouge/ythlc7ivmhzlyeninrf1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694612/events/halloween-rouge/ythlc7ivmhzlyeninrf1.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694611/events/halloween-rouge/kehvii3jkbshetabvap6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694611/events/halloween-rouge/kehvii3jkbshetabvap6.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694610/events/halloween-rouge/mcwyibpkk28z4yra9ytn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694610/events/halloween-rouge/mcwyibpkk28z4yra9ytn.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694610/events/halloween-rouge/cuzmfxfwxllt4thlpg6s.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694610/events/halloween-rouge/cuzmfxfwxllt4thlpg6s.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694609/events/halloween-rouge/scuqvsn8ileeiso5whpc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694609/events/halloween-rouge/scuqvsn8ileeiso5whpc.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694608/events/halloween-rouge/scgxuvrjdewic2lyke9p.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694608/events/halloween-rouge/scgxuvrjdewic2lyke9p.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694608/events/halloween-rouge/teuvz0rlq42qaz25tqen.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694608/events/halloween-rouge/teuvz0rlq42qaz25tqen.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694607/events/halloween-rouge/k5tpm2kbvo2s6oesj5fx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694607/events/halloween-rouge/k5tpm2kbvo2s6oesj5fx.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694606/events/halloween-rouge/ntvodk1voxt4ucsg3ngb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694606/events/halloween-rouge/ntvodk1voxt4ucsg3ngb.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694605/events/halloween-rouge/sgizuurqvzfxn0uvfei8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694605/events/halloween-rouge/sgizuurqvzfxn0uvfei8.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694605/events/halloween-rouge/cy5vsazj7v1jzdktxptn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694605/events/halloween-rouge/cy5vsazj7v1jzdktxptn.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694604/events/halloween-rouge/kobgh5e58mvqay9jvkq1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694604/events/halloween-rouge/kobgh5e58mvqay9jvkq1.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694604/events/halloween-rouge/qvsmyujlqqvedvy5imnj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694604/events/halloween-rouge/qvsmyujlqqvedvy5imnj.jpg",
            alt: "Halloween @ Rouge Bar",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694602/events/halloween-rouge/ciokc9ymm6t8dbhynhuh.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694602/events/halloween-rouge/ciokc9ymm6t8dbhynhuh.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694602/events/halloween-rouge/vmik8md9umorclnjzymx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694602/events/halloween-rouge/vmik8md9umorclnjzymx.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694602/events/halloween-rouge/mntigcw4baj8m6rexff8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694602/events/halloween-rouge/mntigcw4baj8m6rexff8.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694600/events/halloween-rouge/wk4svnrr1riu2iqjhpv6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694600/events/halloween-rouge/wk4svnrr1riu2iqjhpv6.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694600/events/halloween-rouge/de2vxhapl0uhrcfthpyl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694600/events/halloween-rouge/de2vxhapl0uhrcfthpyl.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694600/events/halloween-rouge/jmwdd02o6mjlzstuuyfq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694600/events/halloween-rouge/jmwdd02o6mjlzstuuyfq.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694598/events/halloween-rouge/afig6n80flfooojshrhb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694598/events/halloween-rouge/afig6n80flfooojshrhb.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694597/events/halloween-rouge/mksjrxxi7ezqrznz415u.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694597/events/halloween-rouge/mksjrxxi7ezqrznz415u.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694597/events/halloween-rouge/bmvn2lb3lkaucbtdiz1i.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694597/events/halloween-rouge/bmvn2lb3lkaucbtdiz1i.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694596/events/halloween-rouge/lqwt33cnqldz7hstdssv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694596/events/halloween-rouge/lqwt33cnqldz7hstdssv.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694595/events/halloween-rouge/jcdaukzg4xtle02ajpdp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694595/events/halloween-rouge/jcdaukzg4xtle02ajpdp.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694595/events/halloween-rouge/oogsjjih8x1lsijgcewc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694595/events/halloween-rouge/oogsjjih8x1lsijgcewc.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694593/events/halloween-rouge/bbpgxjige0uqgsgzuz1x.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694593/events/halloween-rouge/bbpgxjige0uqgsgzuz1x.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694593/events/halloween-rouge/e9105qo67pvd6bb7tgdj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694593/events/halloween-rouge/e9105qo67pvd6bb7tgdj.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694592/events/halloween-rouge/r0ablzmfjhybykqoz6so.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694592/events/halloween-rouge/r0ablzmfjhybykqoz6so.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694591/events/halloween-rouge/ibuygro13tlezj4qpwcw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694591/events/halloween-rouge/ibuygro13tlezj4qpwcw.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694589/events/halloween-rouge/kuzma4a0wo6le75ccyl7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694589/events/halloween-rouge/kuzma4a0wo6le75ccyl7.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694589/events/halloween-rouge/mjfnfeld3y3intwhw24e.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694589/events/halloween-rouge/mjfnfeld3y3intwhw24e.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694588/events/halloween-rouge/sisyh4nnz9sce55o4qk5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694588/events/halloween-rouge/sisyh4nnz9sce55o4qk5.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694587/events/halloween-rouge/x7valvonrfeswrjeaycw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694587/events/halloween-rouge/x7valvonrfeswrjeaycw.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694587/events/halloween-rouge/hr2zsv83aawcm5nlo9ql.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694587/events/halloween-rouge/hr2zsv83aawcm5nlo9ql.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694585/events/halloween-rouge/czdgbtskicfehldyw3iu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694585/events/halloween-rouge/czdgbtskicfehldyw3iu.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694584/events/halloween-rouge/pj3alcdgqek9m18rojyd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694584/events/halloween-rouge/pj3alcdgqek9m18rojyd.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694584/events/halloween-rouge/jntqvnew7dqqw2dfs0vg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694584/events/halloween-rouge/jntqvnew7dqqw2dfs0vg.jpg",
            alt: "halloween_yoko_2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694582/events/halloween-rouge/fu3tcbndd9yd0tpvmihv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730694582/events/halloween-rouge/fu3tcbndd9yd0tpvmihv.jpg",
            alt: "halloween_yoko_2024",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
