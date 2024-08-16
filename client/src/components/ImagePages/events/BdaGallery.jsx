import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926601/events/BDA/rwqn1eqe2pzdke0b3hc2.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926601/events/BDA/rwqn1eqe2pzdke0b3hc2.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926601/events/BDA/e9d1gypwcaswsi7gp2gp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926601/events/BDA/e9d1gypwcaswsi7gp2gp.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926600/events/BDA/wt2hlejmyanf7m7jy8m3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926600/events/BDA/wt2hlejmyanf7m7jy8m3.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926599/events/BDA/epneo3b7sawobpitwbqm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926599/events/BDA/epneo3b7sawobpitwbqm.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926599/events/BDA/crc6q0swdetbhaxeawbj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926599/events/BDA/crc6q0swdetbhaxeawbj.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926596/events/BDA/cnooxqz89xtqhr9o3d95.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926596/events/BDA/cnooxqz89xtqhr9o3d95.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926596/events/BDA/zgddmutvnos48yxq3jxz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926596/events/BDA/zgddmutvnos48yxq3jxz.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926596/events/BDA/vfpm6jdtiw1nvunptvaj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926596/events/BDA/vfpm6jdtiw1nvunptvaj.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926591/events/BDA/qn3er7ogvd6vniqdq5wq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926591/events/BDA/qn3er7ogvd6vniqdq5wq.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926591/events/BDA/x8zkwocrnoxxw3xygw2t.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926591/events/BDA/x8zkwocrnoxxw3xygw2t.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926590/events/BDA/otr3bs5cp8tlzhtub7ug.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926590/events/BDA/otr3bs5cp8tlzhtub7ug.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926588/events/BDA/tc4dkyjb84vc7ovyrdu6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926588/events/BDA/tc4dkyjb84vc7ovyrdu6.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926587/events/BDA/kh29xcs1juszotw2eqw3.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926587/events/BDA/kh29xcs1juszotw2eqw3.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926587/events/BDA/o6d6aw7tobqpduhnwuxm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926587/events/BDA/o6d6aw7tobqpduhnwuxm.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926587/events/BDA/g0p4hiq9kjquprdk2tat.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926587/events/BDA/g0p4hiq9kjquprdk2tat.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926584/events/BDA/kn4vxudyn6gzmy35mwsg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926584/events/BDA/kn4vxudyn6gzmy35mwsg.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926584/events/BDA/m50einriyfmztdcrg9rx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926584/events/BDA/m50einriyfmztdcrg9rx.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926582/events/BDA/ee2a2x5sgnyjnyzkfm6o.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926582/events/BDA/ee2a2x5sgnyjnyzkfm6o.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926582/events/BDA/uwtjxeqrdan6vz9azvmp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926582/events/BDA/uwtjxeqrdan6vz9azvmp.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926582/events/BDA/wfthvz0uaous0avjva0d.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926582/events/BDA/wfthvz0uaous0avjva0d.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926581/events/BDA/owvjzycokwfrcolsr2cn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926581/events/BDA/owvjzycokwfrcolsr2cn.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926577/events/BDA/udqlxlt8o1tlhxtxzczi.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926577/events/BDA/udqlxlt8o1tlhxtxzczi.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926575/events/BDA/ant8jys3uryz6umw11wz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926575/events/BDA/ant8jys3uryz6umw11wz.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926575/events/BDA/rygxjujxhvchfw4exfzj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926575/events/BDA/rygxjujxhvchfw4exfzj.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926573/events/BDA/gxb8e98aspfr6ecmsnhy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926573/events/BDA/gxb8e98aspfr6ecmsnhy.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926572/events/BDA/hd0bvfepk7g29gowfayf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926572/events/BDA/hd0bvfepk7g29gowfayf.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/txdavkxopcg2v1gmmgni.jpg",
            alt: "events/BDA",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/d9utag9s8zomyjh8zsv9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1721926568/events/BDA/d9utag9s8zomyjh8zsv9.jpg",
            alt: "events/BDA",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
