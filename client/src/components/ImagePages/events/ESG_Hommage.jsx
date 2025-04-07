import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const coverImage = {
    src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066465/events/AEESG-hommage/z1wow5tpuonqvqjv4hym.jpg",
    alt: "UQAM AÉESG - Gala Hommage"
    }
    const albumTitle = "UQAM AÉESG - Gala Hommage"
    const albumDate = "April 2025"
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066469/events/AEESG-hommage/gjqsbjwlnfmlygjsmt4q.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066469/events/AEESG-hommage/gjqsbjwlnfmlygjsmt4q.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066469/events/AEESG-hommage/om1f5t2lvegag7i35py7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066469/events/AEESG-hommage/om1f5t2lvegag7i35py7.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066469/events/AEESG-hommage/ahzoad27nhisbbaa9f8o.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066469/events/AEESG-hommage/ahzoad27nhisbbaa9f8o.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066467/events/AEESG-hommage/xs2vpukzn2javslij9ec.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066467/events/AEESG-hommage/xs2vpukzn2javslij9ec.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066466/events/AEESG-hommage/mkmizmetvoqiidpucyfz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066466/events/AEESG-hommage/mkmizmetvoqiidpucyfz.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066465/events/AEESG-hommage/gaci4nrxo18fvo7guuor.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066465/events/AEESG-hommage/gaci4nrxo18fvo7guuor.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066465/events/AEESG-hommage/z1wow5tpuonqvqjv4hym.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066465/events/AEESG-hommage/z1wow5tpuonqvqjv4hym.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066464/events/AEESG-hommage/f2l5iqtwdr7npattihaf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066464/events/AEESG-hommage/f2l5iqtwdr7npattihaf.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066462/events/AEESG-hommage/t7zsaucikzo7wgxcu4vd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066462/events/AEESG-hommage/t7zsaucikzo7wgxcu4vd.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066462/events/AEESG-hommage/k8ztbkjscmbhacul19tt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066462/events/AEESG-hommage/k8ztbkjscmbhacul19tt.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066461/events/AEESG-hommage/yr1tkufhkoj5meye2hlp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066461/events/AEESG-hommage/yr1tkufhkoj5meye2hlp.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066458/events/AEESG-hommage/yq1rdpvm0oogxtjbwwet.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066458/events/AEESG-hommage/yq1rdpvm0oogxtjbwwet.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066458/events/AEESG-hommage/mtpwkahqngw7wgan4xeb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066458/events/AEESG-hommage/mtpwkahqngw7wgan4xeb.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066454/events/AEESG-hommage/ajynekrprjzop6mufkqp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066454/events/AEESG-hommage/ajynekrprjzop6mufkqp.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066452/events/AEESG-hommage/b1g93woezrnuwrdrhjhl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066452/events/AEESG-hommage/b1g93woezrnuwrdrhjhl.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066452/events/AEESG-hommage/wscyk3td75pzha8ladz7.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066452/events/AEESG-hommage/wscyk3td75pzha8ladz7.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066452/events/AEESG-hommage/kyjjfos7ufhzuvosrwpc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066452/events/AEESG-hommage/kyjjfos7ufhzuvosrwpc.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066451/events/AEESG-hommage/sjwvlajm4qxgtltraogc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066451/events/AEESG-hommage/sjwvlajm4qxgtltraogc.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066450/events/AEESG-hommage/ckrx3ttyo2a2keqtdivq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066450/events/AEESG-hommage/ckrx3ttyo2a2keqtdivq.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066448/events/AEESG-hommage/h2tsvapahoblshjqtq2k.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066448/events/AEESG-hommage/h2tsvapahoblshjqtq2k.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066448/events/AEESG-hommage/zjtgcgyxuydo9e96mbcy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066448/events/AEESG-hommage/zjtgcgyxuydo9e96mbcy.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066446/events/AEESG-hommage/x4iyc8ypq5uq9cezh3qe.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066446/events/AEESG-hommage/x4iyc8ypq5uq9cezh3qe.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066445/events/AEESG-hommage/s2ldpq57mc66sqminqzt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066445/events/AEESG-hommage/s2ldpq57mc66sqminqzt.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066444/events/AEESG-hommage/uvcnbfhbhl3fnpq77is4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066444/events/AEESG-hommage/uvcnbfhbhl3fnpq77is4.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066444/events/AEESG-hommage/pljcqdhdr1rcgvzvs5vy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066444/events/AEESG-hommage/pljcqdhdr1rcgvzvs5vy.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066442/events/AEESG-hommage/zapyezutrpw9hxnl4i1w.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066442/events/AEESG-hommage/zapyezutrpw9hxnl4i1w.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066441/events/AEESG-hommage/k1qitklgykxpfgcrbssw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066441/events/AEESG-hommage/k1qitklgykxpfgcrbssw.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066440/events/AEESG-hommage/opxecjasyshjnknsm5em.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066440/events/AEESG-hommage/opxecjasyshjnknsm5em.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066438/events/AEESG-hommage/ugldlvrkzqpqhjrzynkj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066438/events/AEESG-hommage/ugldlvrkzqpqhjrzynkj.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066438/events/AEESG-hommage/mnosrvcnswcoaj7d0qhq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066438/events/AEESG-hommage/mnosrvcnswcoaj7d0qhq.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066438/events/AEESG-hommage/wizgf8zxzc5igug5swy6.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066438/events/AEESG-hommage/wizgf8zxzc5igug5swy6.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066438/events/AEESG-hommage/rqrllmmhoumdasjeaqu1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066438/events/AEESG-hommage/rqrllmmhoumdasjeaqu1.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066437/events/AEESG-hommage/r3jyrlbnjnpnckhggjfw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066437/events/AEESG-hommage/r3jyrlbnjnpnckhggjfw.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066437/events/AEESG-hommage/ut6lnhyow2glsxli83u1.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066437/events/AEESG-hommage/ut6lnhyow2glsxli83u1.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1744066436/events/AEESG-hommage/qbnmojfbx5aiwzswzrbl.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1744066436/events/AEESG-hommage/qbnmojfbx5aiwzswzrbl.jpg",
            alt: "UQAM_AÉESG_-_Gala_Hommage",
        },
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
