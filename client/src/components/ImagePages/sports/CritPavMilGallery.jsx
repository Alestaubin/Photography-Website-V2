import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750568/sports/CritPavMil2023/tdw5b05kcmoacwltayho.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750568/sports/CritPavMil2023/tdw5b05kcmoacwltayho.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750570/sports/CritPavMil2023/batonnkjwyqk9dxoiksy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750570/sports/CritPavMil2023/batonnkjwyqk9dxoiksy.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750571/sports/CritPavMil2023/m8wgtrhkkmvjl9vn7wic.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750571/sports/CritPavMil2023/m8wgtrhkkmvjl9vn7wic.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750571/sports/CritPavMil2023/b6juvcdsysfep7mo3vtp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750571/sports/CritPavMil2023/b6juvcdsysfep7mo3vtp.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750572/sports/CritPavMil2023/ijbsajgxvheh0iagp9ng.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750572/sports/CritPavMil2023/ijbsajgxvheh0iagp9ng.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750572/sports/CritPavMil2023/d7esl8kxqjjtxvnhfvui.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750572/sports/CritPavMil2023/d7esl8kxqjjtxvnhfvui.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750572/sports/CritPavMil2023/t09udy0p2hbg7giz4ept.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750572/sports/CritPavMil2023/t09udy0p2hbg7giz4ept.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750572/sports/CritPavMil2023/z9skyk62kapsg5ablz69.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750572/sports/CritPavMil2023/z9skyk62kapsg5ablz69.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750573/sports/CritPavMil2023/x0isffv7syunb6wjvyaa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750573/sports/CritPavMil2023/x0isffv7syunb6wjvyaa.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750573/sports/CritPavMil2023/oj04gv0j8yoafase6sb6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750573/sports/CritPavMil2023/oj04gv0j8yoafase6sb6.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750573/sports/CritPavMil2023/c4tfvqsorkoib2zu1zg8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750573/sports/CritPavMil2023/c4tfvqsorkoib2zu1zg8.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750573/sports/CritPavMil2023/ofvtxwyd7vjx4zed6r7r.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750573/sports/CritPavMil2023/ofvtxwyd7vjx4zed6r7r.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750574/sports/CritPavMil2023/j34ovgolqfa7ut7ygqfq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750574/sports/CritPavMil2023/j34ovgolqfa7ut7ygqfq.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750574/sports/CritPavMil2023/ok8tbzlbqpoiodwj9i6c.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750574/sports/CritPavMil2023/ok8tbzlbqpoiodwj9i6c.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750574/sports/CritPavMil2023/zi0wzycbzvvuurn8jvze.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750574/sports/CritPavMil2023/zi0wzycbzvvuurn8jvze.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750574/sports/CritPavMil2023/lda26x7nsjvor3ycwaev.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750574/sports/CritPavMil2023/lda26x7nsjvor3ycwaev.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750574/sports/CritPavMil2023/vhkliozlixsi2bvw2k6u.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750574/sports/CritPavMil2023/vhkliozlixsi2bvw2k6u.jpg",
            alt: "sports/CritPavMil2023",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750574/sports/CritPavMil2023/ns0annvexkvrpli3mn5g.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723750574/sports/CritPavMil2023/ns0annvexkvrpli3mn5g.jpg",
            alt: "sports/CritPavMil2023",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
