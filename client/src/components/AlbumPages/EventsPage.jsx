import React from "react";
import AlbumGrid from "../AlbumGrid";

const albumsData = [

  {
    link: "/ESG_HOMMAGE",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066465/events/AEESG-hommage/z1wow5tpuonqvqjv4hym.jpg",
    alt: "UQAM_AÉESG_-_Gala_Hommage",
    label: "UQAM AÉESG - Gala Hommage",
  },
{
    link: "/ESG_HOMMAGE",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066464/events/AEESG-hommage/f2l5iqtwdr7npattihaf.jpg",
    alt: "UQAM_AÉESG_-_Gala_Hommage",
    label: "UQAM AÉESG - Gala Hommage",
  },
{
    link: "/FESTIVER",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744055105/events/Festiver/a8hssh34id1rd6eohj4t.jpg",
    alt: "UQAM_AÉESG_-_Festiver",
    label: "UQAM AÉESG - Festiver",
  },
{
    link: "/PERT2025",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744054764/events/PERT-2025/fmgo0poekng4odoubfbi.jpg",
    alt: "PERT_Corporate_Event",
    label: "PERT Corporate Event",
  },
{
    link: "/SSMU_GGG",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734397789/events/SSMU-GGG/lfetdm9riefsd9wg8fxa.jpg",
    alt: "SSMU_Great_Gatsby_Gala",
    label: "SSMU Great Gatsby Gala",
  },
{
    link: "/UDES_MED_24",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734030134/events/UDES-med/xkcljoiguxjil1uv7zqu.jpg",
    alt: "UDES_Med_-_Cérémonie_de_Consécration",
    label: "UDES Med - Cérémonie de Consécration",
  },
{
    link: "/PERTMENTLAUNCH",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1734023485/events/PERT-Mentorship/vswvlhmpwkuk0x6t3xf5.jpg",
    alt: "PERT_Mentorship_Launch",
    label: "PERT Mentorship Launch",
  },
{
    link: "/Halloween_rouge_2024",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730694589/events/halloween-rouge/kuzma4a0wo6le75ccyl7.jpg",
    alt: "Halloween_rouge_2024",
    label: "Halloween 2024 @ Rouge Bar",
  },
  {
    link: "/Halloween_yoko_2024",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693303/events/halloween-yoko/fpduquylg4jpszj7dqt9.jpg",
    alt: "Halloween_yoko_2024",
    label: "Halloween 2024 @ Yoko Luna",
  },
  {
    link: "/PERT_board_2024",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730692917/events/PERT-board/hhbwtqzhxc3eeizague0.jpg",
    alt: "PERT_board_2024",
    label: "PERT Board Meeting 2024",
  },
  {
    link: "/diner_olo_24",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308043/events/diner-olo-24/cvowyrdyu71zxhd2t1c0.jpg",
    alt: "diner_olo_24",
    label: "Dîner Fondation Olo 2024",
  },
  {
    link: "/Integ_uqam_24",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730245846/events/integ_uqam/gtkhjoisrc5ewvcsfjpq.jpg",
    alt: "Integ_uqam_24",
    label: "Intégration AÉESG UQAM",
  },
  {
    link: "/OAP",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723992364/events/OAP/saq6x9d2a7s5ixq6pzte.jpg",
    alt: "OAP",
    label: "Open Air Pub (McGill)",
  },
  {
    link: "/BdaGallery",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg",
    alt: "BDA",
    label: "Bar des Arts (McGill)",
  }

  // Add more items here
];

function EventsPage() {
  return <AlbumGrid items={albumsData} />;
}

export default EventsPage;