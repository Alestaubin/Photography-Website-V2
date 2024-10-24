import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784404/commercial/mariage_fel_raph/aytkaa9qg9kldw7x3ls4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784404/commercial/mariage_fel_raph/aytkaa9qg9kldw7x3ls4.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784404/commercial/mariage_fel_raph/gcqfycdg2j8magqdjxgx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784404/commercial/mariage_fel_raph/gcqfycdg2j8magqdjxgx.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784404/commercial/mariage_fel_raph/rxuphntgoypz2newc2zj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784404/commercial/mariage_fel_raph/rxuphntgoypz2newc2zj.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784404/commercial/mariage_fel_raph/kycxgjqa6lh4b7hidw7d.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784404/commercial/mariage_fel_raph/kycxgjqa6lh4b7hidw7d.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784404/commercial/mariage_fel_raph/n7mw1r7wqieabrlhqmbo.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784404/commercial/mariage_fel_raph/n7mw1r7wqieabrlhqmbo.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784404/commercial/mariage_fel_raph/dtc4zuxjc2ahsxcmbkw7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784404/commercial/mariage_fel_raph/dtc4zuxjc2ahsxcmbkw7.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784405/commercial/mariage_fel_raph/gqmxxytwf9o6isimd6ij.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784405/commercial/mariage_fel_raph/gqmxxytwf9o6isimd6ij.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784405/commercial/mariage_fel_raph/dga4f1l44bzejs8ozext.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784405/commercial/mariage_fel_raph/dga4f1l44bzejs8ozext.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784405/commercial/mariage_fel_raph/a2rkvmsbhtjf5if6ksn1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784405/commercial/mariage_fel_raph/a2rkvmsbhtjf5if6ksn1.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784405/commercial/mariage_fel_raph/uvrzy9u1nkgey1sjdxrh.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784405/commercial/mariage_fel_raph/uvrzy9u1nkgey1sjdxrh.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784405/commercial/mariage_fel_raph/hjezgcwzgdctde30juty.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784405/commercial/mariage_fel_raph/hjezgcwzgdctde30juty.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784405/commercial/mariage_fel_raph/j5nsidbaylwtjpomfmn6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784405/commercial/mariage_fel_raph/j5nsidbaylwtjpomfmn6.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784405/commercial/mariage_fel_raph/mjn6juy7ny433l2aspxu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784405/commercial/mariage_fel_raph/mjn6juy7ny433l2aspxu.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784405/commercial/mariage_fel_raph/c9owoyz63g5lfbh71f8s.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784405/commercial/mariage_fel_raph/c9owoyz63g5lfbh71f8s.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784405/commercial/mariage_fel_raph/pcndwqgegk25skqb8smr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784405/commercial/mariage_fel_raph/pcndwqgegk25skqb8smr.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784405/commercial/mariage_fel_raph/rttt53xmi3hnta6g8bxg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784405/commercial/mariage_fel_raph/rttt53xmi3hnta6g8bxg.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784405/commercial/mariage_fel_raph/v3d5kgdvnakmnbt4whfh.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784405/commercial/mariage_fel_raph/v3d5kgdvnakmnbt4whfh.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784406/commercial/mariage_fel_raph/htceoqiavihejdceakvl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784406/commercial/mariage_fel_raph/htceoqiavihejdceakvl.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784406/commercial/mariage_fel_raph/jtyft5suomy7vozomain.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784406/commercial/mariage_fel_raph/jtyft5suomy7vozomain.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784406/commercial/mariage_fel_raph/mo5gtnzq9wnmfoeaqrwa.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784406/commercial/mariage_fel_raph/mo5gtnzq9wnmfoeaqrwa.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784406/commercial/mariage_fel_raph/j9mmii4pylxy1e1ciq0g.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784406/commercial/mariage_fel_raph/j9mmii4pylxy1e1ciq0g.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784406/commercial/mariage_fel_raph/fmctf8s3o8zldfltn1hu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784406/commercial/mariage_fel_raph/fmctf8s3o8zldfltn1hu.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784406/commercial/mariage_fel_raph/ilqqniyypxpmbdtuyfuc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784406/commercial/mariage_fel_raph/ilqqniyypxpmbdtuyfuc.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784407/commercial/mariage_fel_raph/lcbtkiumjfu4lrotp31y.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784407/commercial/mariage_fel_raph/lcbtkiumjfu4lrotp31y.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784407/commercial/mariage_fel_raph/mlmnli3kn4nzxd5j9csp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784407/commercial/mariage_fel_raph/mlmnli3kn4nzxd5j9csp.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784407/commercial/mariage_fel_raph/it7xy3nuqdknjbkejwjc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784407/commercial/mariage_fel_raph/it7xy3nuqdknjbkejwjc.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784407/commercial/mariage_fel_raph/nnff8lyci7hcvhpoccuk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784407/commercial/mariage_fel_raph/nnff8lyci7hcvhpoccuk.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784407/commercial/mariage_fel_raph/xuexozyjw49bpla1bauq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784407/commercial/mariage_fel_raph/xuexozyjw49bpla1bauq.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784407/commercial/mariage_fel_raph/c619q3sbxvbpacsouery.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784407/commercial/mariage_fel_raph/c619q3sbxvbpacsouery.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784407/commercial/mariage_fel_raph/d3s7hminid9x9ej6vcem.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784407/commercial/mariage_fel_raph/d3s7hminid9x9ej6vcem.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784407/commercial/mariage_fel_raph/jjdnrhawgqux75g3bggz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784407/commercial/mariage_fel_raph/jjdnrhawgqux75g3bggz.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784408/commercial/mariage_fel_raph/gwvatrdtacrmzbmtmgsk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784408/commercial/mariage_fel_raph/gwvatrdtacrmzbmtmgsk.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784408/commercial/mariage_fel_raph/p835idhyysfcei92tn1m.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784408/commercial/mariage_fel_raph/p835idhyysfcei92tn1m.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784408/commercial/mariage_fel_raph/fnzlk6rxxj0t0bx7oktu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784408/commercial/mariage_fel_raph/fnzlk6rxxj0t0bx7oktu.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784408/commercial/mariage_fel_raph/n12kfrzfqq5aopcpf39r.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784408/commercial/mariage_fel_raph/n12kfrzfqq5aopcpf39r.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784408/commercial/mariage_fel_raph/nzqrzruc33iyzay1xyba.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784408/commercial/mariage_fel_raph/nzqrzruc33iyzay1xyba.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784408/commercial/mariage_fel_raph/glxl9tkbmwmeyl0moxiz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784408/commercial/mariage_fel_raph/glxl9tkbmwmeyl0moxiz.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784408/commercial/mariage_fel_raph/hz6jtaxm0x81yebunq9h.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784408/commercial/mariage_fel_raph/hz6jtaxm0x81yebunq9h.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784408/commercial/mariage_fel_raph/jlhkkxwb1zegon9lxuei.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784408/commercial/mariage_fel_raph/jlhkkxwb1zegon9lxuei.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784408/commercial/mariage_fel_raph/xusd5zcvahueracsbsfv.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784408/commercial/mariage_fel_raph/xusd5zcvahueracsbsfv.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784408/commercial/mariage_fel_raph/rbyly1os25xebc5cabaq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784408/commercial/mariage_fel_raph/rbyly1os25xebc5cabaq.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784409/commercial/mariage_fel_raph/b83uamhnmeywyx4zme4p.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784409/commercial/mariage_fel_raph/b83uamhnmeywyx4zme4p.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784409/commercial/mariage_fel_raph/d06wkwvzhoguu6u8omtr.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784409/commercial/mariage_fel_raph/d06wkwvzhoguu6u8omtr.jpg",
            alt: "mariage_raph_fel_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1729784409/commercial/mariage_fel_raph/sxtafethxvnpp2yb2qpe.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1729784409/commercial/mariage_fel_raph/sxtafethxvnpp2yb2qpe.jpg",
            alt: "mariage_raph_fel_24",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
