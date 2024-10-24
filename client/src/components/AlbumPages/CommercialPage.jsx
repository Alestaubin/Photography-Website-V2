import React from "react";
import AlbumGrid from "../AlbumGrid";

const eventsData = [
  {
    link: "/MARIAGE_RAPH_FEL_24",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784407/commercial/mariage_fel_raph/it7xy3nuqdknjbkejwjc.jpg",
    alt: "Mariage de Félix et Raphaelle",
    label: "Mariage de Félix et Raphaelle",
  },
  {
    link: "/Hec24",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789872/commercial/Hec24/lmeupsexbbaudkf1rukd.jpg",
    alt: "Hec24",
    label: "HEC Montréal Groupe 24",
  },
  {
    link: "/Hec5",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789884/commercial/Hec5/nbsoztl8fdhavjsvwgbv.jpg",
    alt: "Hec5",
    label: "HEC Montréal Groupe 5",
  },
  // {
  //   link: "/SSMUhandbook",
  //   imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789897/commercial/SSMUhandbook23/mtddpfx4her6dm6zlwwa.jpg",
  //   alt: "SSMUhandbook",
  //   label: "SSMU Handbook 2023",
  // },
  {
    link: "/VitreEtudiant",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789911/commercial/VitresEtudiant23/by4wleaz0o4ejjfggbk0.jpg",
    alt: "VitreEtudiant",
    label: "Vitres Étudiant 2023",
  },
  // {
  //   link: "/GertsFood",
  //   imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789862/commercial/GertsFood/zqlb2uvlmq4a0xexfsls.jpg",
  //   alt: "GertsFood",
  //   label: "Gerts Café",
  // },
  // Add more items here
];

function EventsPage() {
  return <AlbumGrid items={eventsData} />;
}

export default EventsPage;