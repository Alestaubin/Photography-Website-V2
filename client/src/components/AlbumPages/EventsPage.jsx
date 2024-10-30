import React from "react";
import AlbumGrid from "../AlbumGrid";

const eventsData = [
  {
    link: "/diner_olo_24",
    imgSrc: "  https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308043/events/diner-olo-24/cvowyrdyu71zxhd2t1c0.jpg",
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
  return <AlbumGrid items={eventsData} />;
}

export default EventsPage;