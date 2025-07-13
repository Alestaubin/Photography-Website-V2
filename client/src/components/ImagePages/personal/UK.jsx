import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const coverImage = {
    src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430910/UK-250515-0710-00122_a27iu0.jpg",
    alt: "United Kingdom"
    }
    const albumTitle = "United Kingdom"
    const albumDate = "May 2025"
    const images = [
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431075/UK-250529-0736-01849_snlgaz.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431075/UK-250529-0736-01849_snlgaz.jpg",
                alt: "United_Kingdom",
                description: "Ballinskelligs Castle, Ireland constructed by the MacCarthy Mórs in the 16th century to protect the bay from pirates."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431071/UK-250529-0735-01844_hkt2fq.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431071/UK-250529-0735-01844_hkt2fq.jpg",
                alt: "United_Kingdom",
                description: "Abandoned pier near Ballinskelligs Castle."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431067/UK-250529-0731-01814_fvdgmq.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431067/UK-250529-0731-01814_fvdgmq.jpg",
                alt: "United_Kingdom",
                description: "Abandoned pier near Ballinskelligs Castle."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431064/UK-250529-0635-01796_j4dzo8.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431064/UK-250529-0635-01796_j4dzo8.jpg",
                alt: "United_Kingdom",
                description: "Fishing boats in Portmagee, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431060/UK-250529-0635-01792_ywess5.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431060/UK-250529-0635-01792_ywess5.jpg",
                alt: "United_Kingdom",
                description: "Portmagee pier, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431054/UK-250529-0554-01777_qac5or.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431054/UK-250529-0554-01777_qac5or.jpg",
                alt: "United_Kingdom",
                description: "Cahergal Stone Fort, County Kerry, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431051/UK-250529-0459-01739_skczjw.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431051/UK-250529-0459-01739_skczjw.jpg",
                alt: "United_Kingdom",
                description: "Rossbeigh beach, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431047/UK-250529-0445-01705_ost8om.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431047/UK-250529-0445-01705_ost8om.jpg",
                alt: "United_Kingdom",
                description: "Rossbeigh beach, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431045/UK-250528-1011-01673_fvnwxs.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431045/UK-250528-1011-01673_fvnwxs.jpg",
                alt: "United_Kingdom",
                description: "Doolin pier, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431042/UK-250528-1002-01669_d5vka3.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431042/UK-250528-1002-01669_d5vka3.jpg",
                alt: "United_Kingdom"
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431041/UK-250528-0957-01642_rxvevw.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431041/UK-250528-0957-01642_rxvevw.jpg",
                alt: "United_Kingdom",
                description: "Cliffs of Moher, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431038/UK-250528-0956-01637_hk0kdw.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431038/UK-250528-0956-01637_hk0kdw.jpg",
                alt: "United_Kingdom",
                description: "Cliffs of Moher, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431037/UK-250528-0949-01593_l9cro0.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431037/UK-250528-0949-01593_l9cro0.jpg",
                alt: "United_Kingdom",
                description: "Cliffs of Moher, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431034/UK-250528-0943-01570_jdmarh.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431034/UK-250528-0943-01570_jdmarh.jpg",
                alt: "United_Kingdom",
                description: "Cliffs of Moher, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431032/UK-250528-0844-01526_zfqoos.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431032/UK-250528-0844-01526_zfqoos.jpg",
                alt: "United_Kingdom",
                description: "Doolin pier, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431028/UK-250528-0738-01480_eq5xmy.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431028/UK-250528-0738-01480_eq5xmy.jpg",
                alt: "United_Kingdom",
                description: "Atop the Cliffs of Moher, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431024/UK-250528-0710-01451_rez2ak.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431024/UK-250528-0710-01451_rez2ak.jpg",
                alt: "United_Kingdom",
                description: "Atop the Cliffs of Moher, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431021/UK-250527-0732-01446_evihce.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431021/UK-250527-0732-01446_evihce.jpg",
                alt: "United_Kingdom",
                description: "Clonmacnoise Monastic Site, Ireland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431020/UK-250524-1053-01372_o1p2gq.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431020/UK-250524-1053-01372_o1p2gq.jpg",
                alt: "United_Kingdom",
                description: "Ardvreck Castle, Scottish Highlands."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431017/UK-250524-0949-01347_zquu8r.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431017/UK-250524-0949-01347_zquu8r.jpg",
                alt: "United_Kingdom",
                description: "Somewhere in the Scottish Highlands."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431015/UK-250524-0948-01344_rjoy9k.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431015/UK-250524-0948-01344_rjoy9k.jpg",
                alt: "United_Kingdom",
                description: "A tire used as a road sign in the Scottish Highlands."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431013/UK-250524-0948-01339_zwun7r.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431013/UK-250524-0948-01339_zwun7r.jpg",
                alt: "United_Kingdom",
                description: "Somewhere in the Scottish Highlands."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431010/UK-250524-0919-01323_qiwfph.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431010/UK-250524-0919-01323_qiwfph.jpg",
                alt: "United_Kingdom",
                description: "Balnakeil Beach, Durness, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431009/UK-250524-0918-01318_d3l6kl.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431009/UK-250524-0918-01318_d3l6kl.jpg",
                alt: "United_Kingdom",
                description: "A rock wall at Balnakeil Beach, Durness, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431006/UK-250524-0914-01305_yeesib.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431006/UK-250524-0914-01305_yeesib.jpg",
                alt: "United_Kingdom",
                description: "Road to Durness Golf Club."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431005/UK-250524-0849-01297_oc6ymz.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431005/UK-250524-0849-01297_oc6ymz.jpg",
                alt: "United_Kingdom",
                description: "Weird bus."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752431000/UK-250524-0846-01288_z6xvkk.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752431000/UK-250524-0846-01288_z6xvkk.jpg",
                alt: "United_Kingdom",
                description: "Smoo Cave, Durness, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438283/UK-250524-0817-01235_ymsupx.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438283/UK-250524-0817-01235_ymsupx.jpg",
                alt: "United_Kingdom",
                description: "Smoo Cave, Durness, Scotland."
            },

            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430998/UK-250524-0844-01283_cwukpn.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430998/UK-250524-0844-01283_cwukpn.jpg",
                alt: "United_Kingdom",
                description: "Geodha Smoo, Durness, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430996/UK-250524-0842-01273_nikhqb.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430996/UK-250524-0842-01273_nikhqb.jpg",
                alt: "United_Kingdom",
                description: "A sheep at Geodha Smoo, Durness, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430993/UK-250524-0824-01244_nxrw68.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430993/UK-250524-0824-01244_nxrw68.jpg",
                alt: "United_Kingdom",
                description: "Geodha Smoo, Durness, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430992/UK-250524-0824-01241_enwoft.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430992/UK-250524-0824-01241_enwoft.jpg",
                alt: "United_Kingdom",
                description: "Geodha Smoo, Durness, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430987/UK-250524-0823-01237_axfxnv.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430987/UK-250524-0823-01237_axfxnv.jpg",
                alt: "United_Kingdom",
                description: "Geodha Smoo, Durness, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430983/UK-250524-0811-01219_pimccb.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430983/UK-250524-0811-01219_pimccb.jpg",
                alt: "United_Kingdom",
                description: "Geodha Smoo, Durness, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430981/UK-250524-0809-01218_cl0vrd.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430981/UK-250524-0809-01218_cl0vrd.jpg",
                alt: "United_Kingdom",
                description: "Geodha Smoo, Durness, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430977/UK-250524-0741-01210_ggchqh.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430977/UK-250524-0741-01210_ggchqh.jpg",
                alt: "United_Kingdom",
                description: "The sheep of Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430972/UK-250524-0606-01167_mjbhek.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430972/UK-250524-0606-01167_mjbhek.jpg",
                alt: "United_Kingdom",
                description: "Old house in the middle of nowhere in the Scottish Highlands."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430970/UK-250523-1107-01101_b7alvh.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430970/UK-250523-1107-01101_b7alvh.jpg",
                alt: "United_Kingdom",
                description: "Trotternish Ridge, Isle of Skye, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430966/UK-250523-1104-01077_jrij6h.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430966/UK-250523-1104-01077_jrij6h.jpg",
                alt: "United_Kingdom",
                description: "The isosceles sheep."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430964/UK-250523-1101-01062_xna3ih.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430964/UK-250523-1101-01062_xna3ih.jpg",
                alt: "United_Kingdom",
                description: "Trotternish Ridge, Isle of Skye, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430960/UK-250523-0909-00970_bjw55x.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430960/UK-250523-0909-00970_bjw55x.jpg",
                alt: "United_Kingdom",
                description: "Old Man of Storr, Isle of Skye, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430955/UK-250523-0848-00940_rs202w.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430955/UK-250523-0848-00940_rs202w.jpg",
                alt: "United_Kingdom",
                description: "Old Man of Storr, Isle of Skye, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430954/UK-250523-0839-00937_hm2cm8.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430954/UK-250523-0839-00937_hm2cm8.jpg",
                alt: "United_Kingdom",
                description: "Old Man of Storr, Isle of Skye, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430945/UK-250523-0821-00907_lshxar.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430945/UK-250523-0821-00907_lshxar.jpg",
                alt: "United_Kingdom",
                description: "Loch Leathan, Isle of Skye, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430942/UK-250523-0819-00902_jew9mr.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430942/UK-250523-0819-00902_jew9mr.jpg",
                alt: "United_Kingdom",
                description: "A house by Loch Leathan, Isle of Skye, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430941/UK-250523-0727-00859_pyzjpr.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430941/UK-250523-0727-00859_pyzjpr.jpg",
                alt: "United_Kingdom",
                description: "By the Sligachan river, Isle of Skye, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430939/UK-250523-0607-00837_v7mb3w.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430939/UK-250523-0607-00837_v7mb3w.jpg",
                alt: "United_Kingdom",
                description: "My shot at Eilean Donan Castle, the most photographed castle in Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438262/UK-250522-0554-00618_g65msf.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438262/UK-250522-0554-00618_g65msf.jpg",
                alt: "United_Kingdom",
                description: "Scottish dog."
            },

            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430935/UK-250522-0642-00642_nglhgc.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430935/UK-250522-0642-00642_nglhgc.jpg",
                alt: "United_Kingdom",
                description: "Perfect trees, Meall a bhuachaille, Cairngorms National Park, Scotland."
            },
                        {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438278/UK-250522-1015-00798_bxobe5.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438278/UK-250522-1015-00798_bxobe5.jpg",
                alt: "United_Kingdom",
                description: "Cairngorm mountain, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438272/UK-250522-1012-00791_eyki0t.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438272/UK-250522-1012-00791_eyki0t.jpg",
                alt: "United_Kingdom",
                description: "A ski lift at Cairngorm mountain, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438267/UK-250522-0854-00673_hwayho.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438267/UK-250522-0854-00673_hwayho.jpg",
                alt: "United_Kingdom",
                description: "Reindeers atop Cairngorm mountain, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752437385/UK-250519-0439-00295_jjccmf.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752437385/UK-250519-0439-00295_jjccmf.jpg",
                alt: "United_Kingdom",
                description: "Arthur's Seat, Edinburgh, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438257/UK-250519-0750-00348_flms07.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438257/UK-250519-0750-00348_flms07.jpg",
                alt: "United_Kingdom",
                description: "National Museum of Scotland, Edinburgh, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438251/UK-250518-1630-00277_gqeuhj.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438251/UK-250518-1630-00277_gqeuhj.jpg",
                alt: "United_Kingdom",
                description: "Balmoral Hotel clock tower, Edinburgh, Scotland."
            },

            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430932/UK-250520-1023-00550_tgkhbl.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430932/UK-250520-1023-00550_tgkhbl.jpg",
                alt: "United_Kingdom",
                description: "Edinburgh Castle."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430931/UK-250520-0833-00486_b97mkg.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430931/UK-250520-0833-00486_b97mkg.jpg",
                alt: "United_Kingdom",
                description: "Two ladies reading a book, Edinburgh, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430928/UK-250520-0827-00456_kb7he3.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430928/UK-250520-0827-00456_kb7he3.jpg",
                alt: "United_Kingdom",
                description: "A lonely bench by the Portobello beach, Edinburgh, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430926/UK-250520-0822-00451_o5cjh3.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430926/UK-250520-0822-00451_o5cjh3.jpg",
                alt: "United_Kingdom",
                description: "A band playing by Portobello beach, Edinburgh, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430924/UK-250520-0731-00415_hu0vhi.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430924/UK-250520-0731-00415_hu0vhi.jpg",
                alt: "United_Kingdom",
                description: "A dog playing at Portobello beach, Edinburgh, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430923/UK-250520-0727-00390_hj8qj0.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430923/UK-250520-0727-00390_hj8qj0.jpg",
                alt: "United_Kingdom",
                description: "There's just so many dogs in Edinburgh."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430920/UK-250520-0725-00383_gh9zag.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430920/UK-250520-0725-00383_gh9zag.jpg",
                alt: "United_Kingdom",
                description: "Workers taking a lunch break at Portobello beach, Edinburgh, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430919/UK-250519-0849-00358_smy2uw.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430919/UK-250519-0849-00358_smy2uw.jpg",
                alt: "United_Kingdom",
                description: "Victoria street, Edinburgh, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430917/UK-250519-0531-00334_nbbjj5.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430917/UK-250519-0531-00334_nbbjj5.jpg",
                alt: "United_Kingdom",
                description: "Arthur's Seat, Edinburgh, Scotland."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430915/UK-250517-1142-00211_pp4j13.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430915/UK-250517-1142-00211_pp4j13.jpg",
                alt: "United_Kingdom",
                description: "Probably a bachelor party in York, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430913/UK-250517-1112-00190_oiuoez.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430913/UK-250517-1112-00190_oiuoez.jpg",
                alt: "United_Kingdom",
                description: "York Minster, York, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430912/UK-250516-0826-00180_xiwz8r.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430912/UK-250516-0826-00180_xiwz8r.jpg",
                alt: "United_Kingdom",
                description: "Jenny's Fish & Chips, York, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430910/UK-250515-0710-00122_a27iu0.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430910/UK-250515-0710-00122_a27iu0.jpg",
                alt: "United_Kingdom",
                description: "Buckingham Palace, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430908/UK-250515-0642-00028_tvcl3i.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430908/UK-250515-0642-00028_tvcl3i.jpg",
                alt: "United_Kingdom",
                description: "A parade, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430906/UK-250515-0636-09909_lmutla.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430906/UK-250515-0636-09909_lmutla.jpg",
                alt: "United_Kingdom",
                description: "A parade, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430905/UK-250515-0634-09840_lkwdii.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430905/UK-250515-0634-09840_lkwdii.jpg",
                alt: "United_Kingdom",
                description: "That guy looks bored."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430903/UK-250514-1250-09777_xq91mg.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430903/UK-250514-1250-09777_xq91mg.jpg",
                alt: "United_Kingdom",
                description: "They love their flag."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430901/UK-250514-1234-09769_mlxcp3.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430901/UK-250514-1234-09769_mlxcp3.jpg",
                alt: "United_Kingdom",
                description: "Everything is just so round in this photo."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430725/UK-250514-1214-09725_rg2di8.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430725/UK-250514-1214-09725_rg2di8.jpg",
                alt: "United_Kingdom",
                description: "Skating the streets of London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430677/UK-250514-1211-09708_efs9rw.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430677/UK-250514-1211-09708_efs9rw.jpg",
                alt: "United_Kingdom",
                description: "The sidewalk in front of the pub across the street was full."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430629/UK-250514-1118-09675_fs4b8x.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430629/UK-250514-1118-09675_fs4b8x.jpg",
                alt: "United_Kingdom",
                description: "The British Museum, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430627/UK-250514-1049-09638_mveg5g.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430627/UK-250514-1049-09638_mveg5g.jpg",
                alt: "United_Kingdom",
                description: "The British Museum, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430624/UK-250513-1516-09467_xnuctx.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430624/UK-250513-1516-09467_xnuctx.jpg",
                alt: "United_Kingdom",
                description: "Red things, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430622/UK-250513-1511-09458_xmd9te.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430622/UK-250513-1511-09458_xmd9te.jpg",
                alt: "United_Kingdom",
                description: "White houses, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430621/UK-250513-1510-09447_d7ekmb.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430621/UK-250513-1510-09447_d7ekmb.jpg",
                alt: "United_Kingdom",
                description: "Alley, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430619/UK-250513-1040-09377_jrairq.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430619/UK-250513-1040-09377_jrairq.jpg",
                alt: "United_Kingdom",
                description: "London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752430618/UK-250513-1029-09365_rmuttv.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752430618/UK-250513-1029-09365_rmuttv.jpg",
                alt: "United_Kingdom",
                description: "Married couple, London, England."
            },
                        {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438246/UK-250514-1242-09775_jxri4e.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438246/UK-250514-1242-09775_jxri4e.jpg",
                alt: "United_Kingdom",
                description: "London isn't the same without you."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438241/UK-250514-1230-09763_pmmac4.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438241/UK-250514-1230-09763_pmmac4.jpg",
                alt: "United_Kingdom",
                description: "The best Guinness in London is poured here, I was told by a stranger."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438235/UK-250514-1220-09745_uvsfqa.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438235/UK-250514-1220-09745_uvsfqa.jpg",
                alt: "United_Kingdom",
                description: "Overdressed old man in Chinatown, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438230/UK-250514-1217-09734_fwgw5w.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438230/UK-250514-1217-09734_fwgw5w.jpg",
                alt: "United_Kingdom",
                description: "Chinatown, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438225/UK-250514-1217-09731_w681ka.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438225/UK-250514-1217-09731_w681ka.jpg",
                alt: "United_Kingdom",
                description: "Chinatown, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438219/UK-250514-1217-09729_c25ibg.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438219/UK-250514-1217-09729_c25ibg.jpg",
                alt: "United_Kingdom",
                description: "Sketchy alley, Chinatown, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438214/UK-250514-0809-09568_aog35q.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438214/UK-250514-0809-09568_aog35q.jpg",
                alt: "United_Kingdom",
                description: "Borough Market, London, England."
            },
            {
                imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1752438207/UK-250513-1142-09409_lqby3y.jpg",
                imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1752438207/UK-250513-1142-09409_lqby3y.jpg",
                alt: "United_Kingdom",
                description: "A tree with a fresh cut, London, England."
            },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
