import React from "react";
import AlbumGrid from "../AlbumGrid";

const eventsData = [
  {
    link: "/OAP",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926518/events/OAP/milnwloserqnzmpeshyg.jpg",
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