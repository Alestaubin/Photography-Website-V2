import React from "react";
import AlbumGrid from "../AlbumGrid";

const eventsData = [
  {
    link: "/demiLachine24",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657691/sports/demiLachine2024/biudyberdonphkfzygkx.jpg",
    alt: "demiLachine24",
    label: "Demi-Marathon Bonneville de Lachine 2024",
  },
  {
    link: "/GPVEL24",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926431/sports/GPVEL2024/bhx27q7qpufzq4aprhj0.jpg",
    alt: "GPVEL24",
    label: "Grand Prix Vélocité 2024",
  },
  {
    link: "/MardiCycle24",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750648/sports/MardiCycliste2023/fninkgmy5ojl5dmzkxhw.jpg",
    alt: "MardiCycle24",
    label: "Les Mardis Cyclistes de Lachine 2024",
  },
  {
    link: "/CritPavMil23",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750572/sports/CritPavMil2023/z9skyk62kapsg5ablz69.jpg",
    alt: "CritPavMil24",
    label: "Critérium Campus MIL 2023",
  },
  {
    link: "/CoupeLaurentides23",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750692/sports/CoupeLaurentides2023/icqf2vyhqzs45q2vp5pp.jpg",
    alt: "CoupeLaurentides24",
    label: "Coupe des Laurentides 2023",
  },
  {
    link: "/CamoNat24",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750614/sports/Camo2023/my5xuhrwdhveo5wsftle.jpg",
    alt: "CamoNat24",
    label: "Camo Natation 2024",
  },
  // Add more items here
];

function EventsPage() {
  return <AlbumGrid items={eventsData} />;
}

export default EventsPage;