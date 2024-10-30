import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308072/events/diner-olo-24/rp99ws7jt6bsnjfp6lvy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308072/events/diner-olo-24/rp99ws7jt6bsnjfp6lvy.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308071/events/diner-olo-24/zlqxcptkghsf0xec66ed.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308071/events/diner-olo-24/zlqxcptkghsf0xec66ed.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308071/events/diner-olo-24/b5eoxh7qlnekilbka5y9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308071/events/diner-olo-24/b5eoxh7qlnekilbka5y9.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308070/events/diner-olo-24/iszjzhizk3fc6y83udjj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308070/events/diner-olo-24/iszjzhizk3fc6y83udjj.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308069/events/diner-olo-24/qtpgmqaox6b3f0yirriw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308069/events/diner-olo-24/qtpgmqaox6b3f0yirriw.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308067/events/diner-olo-24/vufqg7xlrvifuji2dq6b.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308067/events/diner-olo-24/vufqg7xlrvifuji2dq6b.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308067/events/diner-olo-24/vqn7mul7p2rxktg1hwcz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308067/events/diner-olo-24/vqn7mul7p2rxktg1hwcz.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308066/events/diner-olo-24/yq93dvucr9a70omqaozg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308066/events/diner-olo-24/yq93dvucr9a70omqaozg.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308066/events/diner-olo-24/zaevremi6itnr7ckdp2r.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308066/events/diner-olo-24/zaevremi6itnr7ckdp2r.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308065/events/diner-olo-24/hybhluugyhx5g2u9xkrg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308065/events/diner-olo-24/hybhluugyhx5g2u9xkrg.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308063/events/diner-olo-24/xthv0izyreg5aute58ty.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308063/events/diner-olo-24/xthv0izyreg5aute58ty.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308063/events/diner-olo-24/e1lyfwegyu8n7hwewd4y.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308063/events/diner-olo-24/e1lyfwegyu8n7hwewd4y.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308063/events/diner-olo-24/qidpyo6ynuqs1updhz9x.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308063/events/diner-olo-24/qidpyo6ynuqs1updhz9x.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308060/events/diner-olo-24/zhf2nlfcbr5o3f2ibjb0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308060/events/diner-olo-24/zhf2nlfcbr5o3f2ibjb0.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308058/events/diner-olo-24/ofjjdf7duv1neu6rosg8.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308058/events/diner-olo-24/ofjjdf7duv1neu6rosg8.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308058/events/diner-olo-24/oj6zxnawalfwevz5jy0x.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308058/events/diner-olo-24/oj6zxnawalfwevz5jy0x.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308058/events/diner-olo-24/tnrq37rytu5w0wdnxucq.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308058/events/diner-olo-24/tnrq37rytu5w0wdnxucq.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308054/events/diner-olo-24/f1lpeukamnantoxjfgos.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308054/events/diner-olo-24/f1lpeukamnantoxjfgos.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308053/events/diner-olo-24/gdhyl0ixgdzw9ium1kzs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308053/events/diner-olo-24/gdhyl0ixgdzw9ium1kzs.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308053/events/diner-olo-24/jd5vo3gt34rgvvwvqfwd.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308053/events/diner-olo-24/jd5vo3gt34rgvvwvqfwd.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308053/events/diner-olo-24/f4bz5nnbhemwae4u8vzh.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308053/events/diner-olo-24/f4bz5nnbhemwae4u8vzh.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308051/events/diner-olo-24/anhabkfslbhpashlpiwt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308051/events/diner-olo-24/anhabkfslbhpashlpiwt.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308050/events/diner-olo-24/hb6juo4zo1fb9612safx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308050/events/diner-olo-24/hb6juo4zo1fb9612safx.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308046/events/diner-olo-24/vhc93p18diq5iu4cy3ue.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308046/events/diner-olo-24/vhc93p18diq5iu4cy3ue.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308045/events/diner-olo-24/kvvgi4obkr7ynwwnit27.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308045/events/diner-olo-24/kvvgi4obkr7ynwwnit27.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308044/events/diner-olo-24/sc7zts1itjy98ai5xatk.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308044/events/diner-olo-24/sc7zts1itjy98ai5xatk.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308043/events/diner-olo-24/cvowyrdyu71zxhd2t1c0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308043/events/diner-olo-24/cvowyrdyu71zxhd2t1c0.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308043/events/diner-olo-24/mg5jjliyltzaxee8fhaj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308043/events/diner-olo-24/mg5jjliyltzaxee8fhaj.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308042/events/diner-olo-24/pdk5ethdjvrpfsi6wjib.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308042/events/diner-olo-24/pdk5ethdjvrpfsi6wjib.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308041/events/diner-olo-24/qcpu7fimrpzxygr7oul4.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308041/events/diner-olo-24/qcpu7fimrpzxygr7oul4.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308040/events/diner-olo-24/zvnvghz8y4uwm4brdtyn.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308040/events/diner-olo-24/zvnvghz8y4uwm4brdtyn.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308040/events/diner-olo-24/px52ertqpne1ajnzytaz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308040/events/diner-olo-24/px52ertqpne1ajnzytaz.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308039/events/diner-olo-24/yjb51vusk7vvcckybvc0.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308039/events/diner-olo-24/yjb51vusk7vvcckybvc0.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308039/events/diner-olo-24/lwaq8yf1tatbjppc7yhs.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308039/events/diner-olo-24/lwaq8yf1tatbjppc7yhs.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308039/events/diner-olo-24/bbsy6ip44e3rjsjwwjad.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308039/events/diner-olo-24/bbsy6ip44e3rjsjwwjad.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308038/events/diner-olo-24/xdocemhqrz8h1iobyc3r.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308038/events/diner-olo-24/xdocemhqrz8h1iobyc3r.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308037/events/diner-olo-24/lsl66vgplf7spcwb6lgu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308037/events/diner-olo-24/lsl66vgplf7spcwb6lgu.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308036/events/diner-olo-24/fva4i70heqcrzhuncqcu.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308036/events/diner-olo-24/fva4i70heqcrzhuncqcu.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308036/events/diner-olo-24/xb31qclvf3uoaseksyqj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308036/events/diner-olo-24/xb31qclvf3uoaseksyqj.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308036/events/diner-olo-24/qpcvbeevlfqdnns9arbh.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308036/events/diner-olo-24/qpcvbeevlfqdnns9arbh.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308034/events/diner-olo-24/grkdjd7kjfkz5iztamhj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308034/events/diner-olo-24/grkdjd7kjfkz5iztamhj.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308033/events/diner-olo-24/czay7p8xputllsqj72wf.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308033/events/diner-olo-24/czay7p8xputllsqj72wf.jpg",
            alt: "diner_olo_24",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730308032/events/diner-olo-24/mtnhy7fusdpi5k06ncba.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730308032/events/diner-olo-24/mtnhy7fusdpi5k06ncba.jpg",
            alt: "diner_olo_24",
        },
    ];
  
    return (
        <ImageGrid items={images} />
    );
  };
  
  export default App;
