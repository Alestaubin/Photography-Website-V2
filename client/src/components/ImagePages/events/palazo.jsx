import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const coverImage = {
    src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445481/Palazo-250613-0149-2_dadaua.jpg",
    alt: "F1 Weekend at Palazo"
    }
    const albumTitle = "F1 Weekend at Palazo"
    const albumDate = "June 2025"
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445483/Palazo-250613-0150-2_udnvt2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445483/Palazo-250613-0150-2_udnvt2.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445481/Palazo-250613-0149-2_dadaua.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445481/Palazo-250613-0149-2_dadaua.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445478/Palazo-250613-0148-2_axzk6k.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445478/Palazo-250613-0148-2_axzk6k.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445476/Palazo-250613-0147-3810_ca7rww.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445476/Palazo-250613-0147-3810_ca7rww.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445474/Palazo-250613-0147-2_qfhrqa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445474/Palazo-250613-0147-2_qfhrqa.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445471/Palazo-250613-0146-2_bcz2d4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445471/Palazo-250613-0146-2_bcz2d4.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445470/Palazo-250613-0139-2_cpcncu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445470/Palazo-250613-0139-2_cpcncu.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445466/Palazo-250613-0138-2_bpjqp4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445466/Palazo-250613-0138-2_bpjqp4.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445465/Palazo-250613-0137-2_lvmjrg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445465/Palazo-250613-0137-2_lvmjrg.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445462/Palazo-250613-0134-2_vi6v2q.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445462/Palazo-250613-0134-2_vi6v2q.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445459/Palazo-250613-0134-2-2_gl0g05.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445459/Palazo-250613-0134-2-2_gl0g05.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445458/Palazo-250613-0129-3758_tumtco.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445458/Palazo-250613-0129-3758_tumtco.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445457/Palazo-250613-0121-2_wsk5if.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445457/Palazo-250613-0121-2_wsk5if.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445457/Palazo-250613-0128-2_q7ztpn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445457/Palazo-250613-0128-2_q7ztpn.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445451/Palazo-250613-0115-3712_hicmun.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445451/Palazo-250613-0115-3712_hicmun.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445450/Palazo-250613-0115-2130_lohsl3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445450/Palazo-250613-0115-2130_lohsl3.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445448/Palazo-250613-0112-2087_qvvzaa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445448/Palazo-250613-0112-2087_qvvzaa.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445445/Palazo-250613-0111-2066_fttjcz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445445/Palazo-250613-0111-2066_fttjcz.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445443/Palazo-250613-0110-2051_dqtlfp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445443/Palazo-250613-0110-2051_dqtlfp.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445441/Palazo-250613-0108-2010_qyyddr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445441/Palazo-250613-0108-2010_qyyddr.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445438/Palazo-250613-0106-1977_qtbila.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445438/Palazo-250613-0106-1977_qtbila.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445436/Palazo-250613-0106-1964_k0w5cm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445436/Palazo-250613-0106-1964_k0w5cm.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445434/Palazo-250613-0104-1904_f6t2bb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445434/Palazo-250613-0104-1904_f6t2bb.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445432/Palazo-250613-0102-1821_q9bg0x.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445432/Palazo-250613-0102-1821_q9bg0x.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445429/Palazo-250613-0100-1726_ys9vfc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445429/Palazo-250613-0100-1726_ys9vfc.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445428/Palazo-250613-0100-1721_vof7ns.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445428/Palazo-250613-0100-1721_vof7ns.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445426/Palazo-250613-0056-3652_vscdpi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445426/Palazo-250613-0056-3652_vscdpi.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445423/Palazo-250613-0056-3633_jiidfw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445423/Palazo-250613-0056-3633_jiidfw.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445422/Palazo-250613-0055-1698_hlxwir.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445422/Palazo-250613-0055-1698_hlxwir.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445420/Palazo-250613-0054-1663_m0wiwf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445420/Palazo-250613-0054-1663_m0wiwf.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445417/Palazo-250613-0051-3610_pd68jn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445417/Palazo-250613-0051-3610_pd68jn.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445415/Palazo-250613-0051-3603_avnmn4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445415/Palazo-250613-0051-3603_avnmn4.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445413/Palazo-250613-0048-1609_yocc7v.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445413/Palazo-250613-0048-1609_yocc7v.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445411/Palazo-250613-0048-1605_pjocbr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445411/Palazo-250613-0048-1605_pjocbr.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445409/Palazo-250613-0048-1598_o6coat.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445409/Palazo-250613-0048-1598_o6coat.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445407/Palazo-250613-0048-1593_mll8kw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445407/Palazo-250613-0048-1593_mll8kw.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445405/Palazo-250613-0047-1546_nt1e0t.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445405/Palazo-250613-0047-1546_nt1e0t.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445403/Palazo-250613-0045-3589_a2esiw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445403/Palazo-250613-0045-3589_a2esiw.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445401/Palazo-250613-0045-1519_zbua1s.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445401/Palazo-250613-0045-1519_zbua1s.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445400/Palazo-250613-0045-1510_ki6j7g.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445400/Palazo-250613-0045-1510_ki6j7g.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445397/Palazo-250613-0044-1490_p5tocj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445397/Palazo-250613-0044-1490_p5tocj.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445396/Palazo-250613-0044-1487_wz94rx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445396/Palazo-250613-0044-1487_wz94rx.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445394/Palazo-250613-0037-1455_monzzq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445394/Palazo-250613-0037-1455_monzzq.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445392/Palazo-250613-0036-1413_sk9llk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445392/Palazo-250613-0036-1413_sk9llk.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445390/Palazo-250613-0035-1365_oww7u8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445390/Palazo-250613-0035-1365_oww7u8.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445389/Palazo-250613-0021-1134_tnn23j.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445389/Palazo-250613-0021-1134_tnn23j.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445388/Palazo-250613-0030-1225_ce7nev.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445388/Palazo-250613-0030-1225_ce7nev.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445387/Palazo-250613-0030-1174_nx7p0k.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445387/Palazo-250613-0030-1174_nx7p0k.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445385/Palazo-250613-0019-3424_bz7xij.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445385/Palazo-250613-0019-3424_bz7xij.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445384/Palazo-250613-0019-1059_ltdigp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445384/Palazo-250613-0019-1059_ltdigp.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750445383/Palazo-250613-0017-3404_ev5yhf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750445383/Palazo-250613-0017-3404_ev5yhf.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443834/Palazo-250613-0012-1005_diniqs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443834/Palazo-250613-0012-1005_diniqs.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443834/Palazo-250613-0015-1039_gls9wt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443834/Palazo-250613-0015-1039_gls9wt.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443832/Palazo-250613-0012-0983_bisq3y.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443832/Palazo-250613-0012-0983_bisq3y.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443829/Palazo-250613-0011-0963_flwxhe.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443829/Palazo-250613-0011-0963_flwxhe.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443828/Palazo-250613-0010-3317_kpzyav.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443828/Palazo-250613-0010-3317_kpzyav.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443827/Palazo-250613-0009-0923_vd9eq7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443827/Palazo-250613-0009-0923_vd9eq7.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443825/Palazo-250613-0008-0904_plm22v.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443825/Palazo-250613-0008-0904_plm22v.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443823/Palazo-250613-0002-3201_sry7fg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443823/Palazo-250613-0002-3201_sry7fg.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443822/Palazo-250613-0002-3191_bjiif1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443822/Palazo-250613-0002-3191_bjiif1.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443821/Palazo-250612-2358-3151_ulsxfc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443821/Palazo-250612-2358-3151_ulsxfc.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443819/Palazo-250612-2357-3122_srrlfc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443819/Palazo-250612-2357-3122_srrlfc.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443818/Palazo-250612-2355-3081_k27jtw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443818/Palazo-250612-2355-3081_k27jtw.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443816/Palazo-250612-2353-3032_rappah.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443816/Palazo-250612-2353-3032_rappah.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443815/Palazo-250612-2352-3004_bcduht.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443815/Palazo-250612-2352-3004_bcduht.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1750443814/Palazo-250612-2351-2964_f0euzp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1750443814/Palazo-250612-2351-2964_f0euzp.jpg",
            alt: "F1_Weekend_at_Palazo",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
