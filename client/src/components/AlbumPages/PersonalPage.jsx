import React from "react";
import AlbumGrid from "../AlbumGrid";

const albumsData = [
    {
        link: "/Norge",
        imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723808744/personal/Norge/vqzt5f9dcj9us4jvyeur.jpg",
        alt: "Norway",
        label: "Norway 2024",
      },
    {
        link: "/Toronto",
        imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926465/personal/toronto/sggusqhtienw92pltkop.jpg",
        alt: "Toronto",
        label: "Toronto 2024",
      },
  {
    link: "/Dogs",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789952/personal/Dogs/ddtsrqvkapyaqyeosyqg.jpg",
    alt: "Dogs",
    label: "Dogs",
  },
  {
    link: "/Golf",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723789974/personal/Golf/k2k3yzbqadkyf3zz7g1b.jpg",
    alt: "Golf",
    label: "Golf Des Iles 2024",
  },
  {
    link: "/FallMcGill",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790037/personal/McGillFall/ynu3zmxa35eg4rinpumb.jpg",
    alt: "FallMcGill",
    label: "Fall at McGill",
  },
  {
    link: "/SummerMcGill",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790003/personal/McgillSum/jhbw3yvtw9lsylvyvzpe.jpg",
    alt: "SummerMcGill",
    label: "Summer at McGill",
  },
  {
    link: "/WinterMcGill",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790060/personal/McGillWin/r4gyatnb7aenpqyi0mss.jpg",
    alt: "WinterMcGill",
    label: "Winter at McGill",
  },
  
  // Add more items here
];

function EventsPage() {
  return <AlbumGrid items={albumsData} />;
}

export default EventsPage;