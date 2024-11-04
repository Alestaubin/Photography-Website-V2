import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693393/events/halloween-yoko/pb5t4xzwknovcsredvzp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693393/events/halloween-yoko/pb5t4xzwknovcsredvzp.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693363/events/halloween-yoko/e22gqhrrg9njz9mqyvwq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693363/events/halloween-yoko/e22gqhrrg9njz9mqyvwq.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693362/events/halloween-yoko/lvnwjmmvrw5n7lr1fzsj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693362/events/halloween-yoko/lvnwjmmvrw5n7lr1fzsj.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693362/events/halloween-yoko/jywvknzzwinmh4vfrpys.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693362/events/halloween-yoko/jywvknzzwinmh4vfrpys.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693356/events/halloween-yoko/yh2kqlsidlfupxab89sq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693356/events/halloween-yoko/yh2kqlsidlfupxab89sq.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693344/events/halloween-yoko/unvnc7x10da3dxacchb7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693344/events/halloween-yoko/unvnc7x10da3dxacchb7.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693332/events/halloween-yoko/zikgrhgpq1odj3eihmen.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693332/events/halloween-yoko/zikgrhgpq1odj3eihmen.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693320/events/halloween-yoko/rdg52ihqrpdyyfxxm9sq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693320/events/halloween-yoko/rdg52ihqrpdyyfxxm9sq.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693311/events/halloween-yoko/yqpzzuz7jbuu24t8zazz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693311/events/halloween-yoko/yqpzzuz7jbuu24t8zazz.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693310/events/halloween-yoko/nevzlhk6v13nu3q0sl6t.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693310/events/halloween-yoko/nevzlhk6v13nu3q0sl6t.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693310/events/halloween-yoko/voqvkxjvgh8pchn6atzt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693310/events/halloween-yoko/voqvkxjvgh8pchn6atzt.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693309/events/halloween-yoko/s1w3luv3uynx1fgpwocx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693309/events/halloween-yoko/s1w3luv3uynx1fgpwocx.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693308/events/halloween-yoko/lafmjjutnhrrg9jfyek9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693308/events/halloween-yoko/lafmjjutnhrrg9jfyek9.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693308/events/halloween-yoko/qgmfimdddhbz3xvdkk1r.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693308/events/halloween-yoko/qgmfimdddhbz3xvdkk1r.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693308/events/halloween-yoko/zc5ns3rxtn9jlryi7zyr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693308/events/halloween-yoko/zc5ns3rxtn9jlryi7zyr.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693306/events/halloween-yoko/zf7dm8mc7mrcm06swxwy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693306/events/halloween-yoko/zf7dm8mc7mrcm06swxwy.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693306/events/halloween-yoko/ho5q5tb4oei6xcmjte1b.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693306/events/halloween-yoko/ho5q5tb4oei6xcmjte1b.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693304/events/halloween-yoko/nroq7ge0pndkgx0am8nq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693304/events/halloween-yoko/nroq7ge0pndkgx0am8nq.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693303/events/halloween-yoko/rih75z9gmfels3lakemq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693303/events/halloween-yoko/rih75z9gmfels3lakemq.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693303/events/halloween-yoko/fpduquylg4jpszj7dqt9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693303/events/halloween-yoko/fpduquylg4jpszj7dqt9.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693301/events/halloween-yoko/qnsz5vk9n0ua6fcvd6sd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693301/events/halloween-yoko/qnsz5vk9n0ua6fcvd6sd.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693300/events/halloween-yoko/e9l8ergl7ygwg2mefoye.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693300/events/halloween-yoko/e9l8ergl7ygwg2mefoye.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693300/events/halloween-yoko/tddigfhdaiyy4erjapt9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693300/events/halloween-yoko/tddigfhdaiyy4erjapt9.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693299/events/halloween-yoko/notyiulzso7tluzqetqo.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693299/events/halloween-yoko/notyiulzso7tluzqetqo.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693298/events/halloween-yoko/hgizmcenp7kpbhy3slcv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693298/events/halloween-yoko/hgizmcenp7kpbhy3slcv.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693297/events/halloween-yoko/igx4udsvhw4eshwrebtz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693297/events/halloween-yoko/igx4udsvhw4eshwrebtz.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693297/events/halloween-yoko/oepsmhbxx3mus8yqectc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693297/events/halloween-yoko/oepsmhbxx3mus8yqectc.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693297/events/halloween-yoko/d9mki99u0ymcfj5ibgjv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693297/events/halloween-yoko/d9mki99u0ymcfj5ibgjv.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693296/events/halloween-yoko/qvomeeaffyuvdd0ocwa9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693296/events/halloween-yoko/qvomeeaffyuvdd0ocwa9.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693295/events/halloween-yoko/xxmvf1nxhq2shun9x17a.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693295/events/halloween-yoko/xxmvf1nxhq2shun9x17a.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693292/events/halloween-yoko/dmf4yrv8fo2p2bdhka7o.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693292/events/halloween-yoko/dmf4yrv8fo2p2bdhka7o.jpg",
            alt: "halloween-yoko-2024",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
