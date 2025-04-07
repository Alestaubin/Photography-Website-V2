import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const coverImage = {
    src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055105/events/Festiver/a8hssh34id1rd6eohj4t.jpg",
    alt: "UQAM AÉESG - Festiver"
    }
    const albumTitle = "UQAM AÉESG - Festiver"
    const albumDate = "January 2025"
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055140/events/Festiver/muxsvvriv0i2qj5lspsn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055140/events/Festiver/muxsvvriv0i2qj5lspsn.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055140/events/Festiver/ze29ueemzbeblsflrgu4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055140/events/Festiver/ze29ueemzbeblsflrgu4.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055140/events/Festiver/aciccull95rrewuxuiqs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055140/events/Festiver/aciccull95rrewuxuiqs.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055139/events/Festiver/hnumihc0w31qbq3jtftr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055139/events/Festiver/hnumihc0w31qbq3jtftr.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055139/events/Festiver/r0gwj4syixezihqpttuw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055139/events/Festiver/r0gwj4syixezihqpttuw.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055138/events/Festiver/u4hoh8ilk3vwlypxbqv2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055138/events/Festiver/u4hoh8ilk3vwlypxbqv2.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055138/events/Festiver/zmu1ip1t9zmbttrxsfzn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055138/events/Festiver/zmu1ip1t9zmbttrxsfzn.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055136/events/Festiver/sblj2rnvvznosvg6jw6s.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055136/events/Festiver/sblj2rnvvznosvg6jw6s.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055134/events/Festiver/c6cui2kmannphpi1pmuh.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055134/events/Festiver/c6cui2kmannphpi1pmuh.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055134/events/Festiver/e3h4zzo2x2zkabareinu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055134/events/Festiver/e3h4zzo2x2zkabareinu.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055132/events/Festiver/l3tgtn8nquco65g0oqgj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055132/events/Festiver/l3tgtn8nquco65g0oqgj.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055131/events/Festiver/jp4des5mer9vpep7awrd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055131/events/Festiver/jp4des5mer9vpep7awrd.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055131/events/Festiver/gkuvnwczimdkvxcymtiz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055131/events/Festiver/gkuvnwczimdkvxcymtiz.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055131/events/Festiver/jrvu8zwyyxav4ccd8cco.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055131/events/Festiver/jrvu8zwyyxav4ccd8cco.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055129/events/Festiver/rv3x2d8u42jnokfrrpca.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055129/events/Festiver/rv3x2d8u42jnokfrrpca.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055128/events/Festiver/uc28gfymgjkwbuoqdr3m.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055128/events/Festiver/uc28gfymgjkwbuoqdr3m.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055128/events/Festiver/g6xb66jdives7m0mx7fy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055128/events/Festiver/g6xb66jdives7m0mx7fy.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055125/events/Festiver/aplnwglsgd018yeeg6y8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055125/events/Festiver/aplnwglsgd018yeeg6y8.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055123/events/Festiver/b7ukkbfkgnwpngbqnktk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055123/events/Festiver/b7ukkbfkgnwpngbqnktk.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055123/events/Festiver/o1nafplqw6jv0kgzeemv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055123/events/Festiver/o1nafplqw6jv0kgzeemv.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055123/events/Festiver/nxszoimhluvpvgybionz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055123/events/Festiver/nxszoimhluvpvgybionz.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055123/events/Festiver/ypplympmis3httsmvgwp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055123/events/Festiver/ypplympmis3httsmvgwp.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055123/events/Festiver/udqeqwf3ptnybgrjqphf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055123/events/Festiver/udqeqwf3ptnybgrjqphf.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055123/events/Festiver/oeo9xm1nvhfjtpokjj2z.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055123/events/Festiver/oeo9xm1nvhfjtpokjj2z.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055121/events/Festiver/kp8im5fvpmlnptrm1n3d.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055121/events/Festiver/kp8im5fvpmlnptrm1n3d.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055120/events/Festiver/upvzfwuww4o7po7mfgcy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055120/events/Festiver/upvzfwuww4o7po7mfgcy.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055119/events/Festiver/swo2pihoiamjgnlnapra.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055119/events/Festiver/swo2pihoiamjgnlnapra.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055118/events/Festiver/pq4shfjogtmyh0ajzukd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055118/events/Festiver/pq4shfjogtmyh0ajzukd.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055117/events/Festiver/m8tvhwzsokq1zqd4n5fa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055117/events/Festiver/m8tvhwzsokq1zqd4n5fa.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055116/events/Festiver/flhhbc6f0avbzwh6fjec.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055116/events/Festiver/flhhbc6f0avbzwh6fjec.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055115/events/Festiver/rz5tktg6pfqauay8lqfh.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055115/events/Festiver/rz5tktg6pfqauay8lqfh.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055115/events/Festiver/adgyxzlqmk2bfitbcen9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055115/events/Festiver/adgyxzlqmk2bfitbcen9.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055114/events/Festiver/f9wahrr7eknrrfy8kgay.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055114/events/Festiver/f9wahrr7eknrrfy8kgay.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055114/events/Festiver/cqkawonknpxbelzewmxl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055114/events/Festiver/cqkawonknpxbelzewmxl.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055113/events/Festiver/jxxuuksxirtqyei151sa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055113/events/Festiver/jxxuuksxirtqyei151sa.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055112/events/Festiver/uyonctunjcjhmdlrkabt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055112/events/Festiver/uyonctunjcjhmdlrkabt.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055112/events/Festiver/jdugul7y73szexj6klfp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055112/events/Festiver/jdugul7y73szexj6klfp.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055111/events/Festiver/fesjxngpemjsrw30duom.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055111/events/Festiver/fesjxngpemjsrw30duom.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055110/events/Festiver/iuvzymbhgokajimxtaqf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055110/events/Festiver/iuvzymbhgokajimxtaqf.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055110/events/Festiver/rkwhyoq0altswulrftsr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055110/events/Festiver/rkwhyoq0altswulrftsr.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055108/events/Festiver/vtgwn9anikayhfsdqe0m.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055108/events/Festiver/vtgwn9anikayhfsdqe0m.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055108/events/Festiver/wndgjcwqoh4dyjmfpco5.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055108/events/Festiver/wndgjcwqoh4dyjmfpco5.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055107/events/Festiver/miw0tbauwmvzejdz5hql.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055107/events/Festiver/miw0tbauwmvzejdz5hql.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055105/events/Festiver/huambaddxwptfflzgkgo.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055105/events/Festiver/huambaddxwptfflzgkgo.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055105/events/Festiver/a8hssh34id1rd6eohj4t.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055105/events/Festiver/a8hssh34id1rd6eohj4t.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055104/events/Festiver/pv8y19qukplp0qthil70.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055104/events/Festiver/pv8y19qukplp0qthil70.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055104/events/Festiver/euw2xehlqbmdygjegaea.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055104/events/Festiver/euw2xehlqbmdygjegaea.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055104/events/Festiver/ymqi0ll2ulaogebzaung.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055104/events/Festiver/ymqi0ll2ulaogebzaung.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055103/events/Festiver/i6hmv36wm3py69fk4jxm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055103/events/Festiver/i6hmv36wm3py69fk4jxm.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055102/events/Festiver/a9ilbhlqjoz73zzoubh1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055102/events/Festiver/a9ilbhlqjoz73zzoubh1.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055101/events/Festiver/npkfyer7zjpd5cc2ff6v.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055101/events/Festiver/npkfyer7zjpd5cc2ff6v.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055101/events/Festiver/pe9rbylkufwinaivedh0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055101/events/Festiver/pe9rbylkufwinaivedh0.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055100/events/Festiver/rishnh8yi8sgtmkc3tfs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055100/events/Festiver/rishnh8yi8sgtmkc3tfs.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055100/events/Festiver/ywgc7t3eh5fuq2hf6zss.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055100/events/Festiver/ywgc7t3eh5fuq2hf6zss.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055098/events/Festiver/hrynv20outiu8stmrjyd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055098/events/Festiver/hrynv20outiu8stmrjyd.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055097/events/Festiver/lqkz8odvwuwgazlyjnyd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055097/events/Festiver/lqkz8odvwuwgazlyjnyd.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055097/events/Festiver/suqk6diclmlfpcjezhhy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055097/events/Festiver/suqk6diclmlfpcjezhhy.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055096/events/Festiver/mst8gtp0vcvv184nbbai.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055096/events/Festiver/mst8gtp0vcvv184nbbai.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055094/events/Festiver/x8jl8ajk5jwmnlo4cura.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055094/events/Festiver/x8jl8ajk5jwmnlo4cura.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055094/events/Festiver/dusdaqshu8xyxt3clbaw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055094/events/Festiver/dusdaqshu8xyxt3clbaw.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744055092/events/Festiver/tjdcm1qxekknbixo1bdy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055092/events/Festiver/tjdcm1qxekknbixo1bdy.jpg",
            alt: "UQAM_AÉESG_-_Festiver",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
