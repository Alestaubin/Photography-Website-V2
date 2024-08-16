import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790003/personal/McgillSum/jhbw3yvtw9lsylvyvzpe.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790003/personal/McgillSum/jhbw3yvtw9lsylvyvzpe.jpg",
            alt: "personal/McGillSum",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790003/personal/McgillSum/ukfzkmopo0urumecskgw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790003/personal/McgillSum/ukfzkmopo0urumecskgw.jpg",
            alt: "personal/McGillSum",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790004/personal/McgillSum/jeynw0fxu5ohe5epiztd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790004/personal/McgillSum/jeynw0fxu5ohe5epiztd.jpg",
            alt: "personal/McGillSum",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790004/personal/McgillSum/f5ewfu7zb5pjhae3ruoo.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790004/personal/McgillSum/f5ewfu7zb5pjhae3ruoo.jpg",
            alt: "personal/McGillSum",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790004/personal/McgillSum/lvwlljhynldd4maq5iry.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790004/personal/McgillSum/lvwlljhynldd4maq5iry.jpg",
            alt: "personal/McGillSum",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790004/personal/McgillSum/xc4llkybd0wrvzv3iiyv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790004/personal/McgillSum/xc4llkybd0wrvzv3iiyv.jpg",
            alt: "personal/McGillSum",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790004/personal/McgillSum/pwfxadxwojvx4mi3asjz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790004/personal/McgillSum/pwfxadxwojvx4mi3asjz.jpg",
            alt: "personal/McGillSum",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790004/personal/McgillSum/kmew8whlnhpuezldu7u1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790004/personal/McgillSum/kmew8whlnhpuezldu7u1.jpg",
            alt: "personal/McGillSum",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790005/personal/McgillSum/mjwl3zx0lhwkthpbz1qd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790005/personal/McgillSum/mjwl3zx0lhwkthpbz1qd.jpg",
            alt: "personal/McGillSum",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790005/personal/McgillSum/xtkj0bptnvj9dnrosaqm.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790005/personal/McgillSum/xtkj0bptnvj9dnrosaqm.jpg",
            alt: "personal/McGillSum",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790005/personal/McgillSum/x3gqn1pgorrvqyhnnspr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790005/personal/McgillSum/x3gqn1pgorrvqyhnnspr.jpg",
            alt: "personal/McGillSum",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790005/personal/McgillSum/yafmwhjioryddfclv9qj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790005/personal/McgillSum/yafmwhjioryddfclv9qj.jpg",
            alt: "personal/McGillSum",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790005/personal/McgillSum/segvqtg7mwlgnij4sbed.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1723790005/personal/McgillSum/segvqtg7mwlgnij4sbed.jpg",
            alt: "personal/McGillSum",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
