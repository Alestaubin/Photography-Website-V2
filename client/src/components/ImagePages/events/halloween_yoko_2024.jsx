import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const albumTitle = "Halloween @ Yoko Luna"
    const albumDate = "October 2024"
    const coverImage = {
        src: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693300/events/halloween-yoko/tddigfhdaiyy4erjapt9.jpg",
        alt: "Halloween @ Yoko Luna"}
    const images = [
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693500/events/halloween-yoko/fqkkoa0yfmncdd4ji203.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693500/events/halloween-yoko/fqkkoa0yfmncdd4ji203.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693500/events/halloween-yoko/gz3opxbstbxqitn1ug8k.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693500/events/halloween-yoko/gz3opxbstbxqitn1ug8k.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693499/events/halloween-yoko/y2tnelvntposj7ceynfb.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693499/events/halloween-yoko/y2tnelvntposj7ceynfb.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693499/events/halloween-yoko/kkkgriwyfgzewntvzhlc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693499/events/halloween-yoko/kkkgriwyfgzewntvzhlc.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693499/events/halloween-yoko/dlh9vwoq7jbv3qnhog4b.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693499/events/halloween-yoko/dlh9vwoq7jbv3qnhog4b.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693497/events/halloween-yoko/cbxh2llaiqiypw1hmdmz.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693497/events/halloween-yoko/cbxh2llaiqiypw1hmdmz.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693496/events/halloween-yoko/oyaclxjzvmx2ibu3bmjg.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693496/events/halloween-yoko/oyaclxjzvmx2ibu3bmjg.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693496/events/halloween-yoko/io5a15nuifuie0rywqek.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693496/events/halloween-yoko/io5a15nuifuie0rywqek.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693494/events/halloween-yoko/j0sw6x0almzwhpkrrpgy.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693494/events/halloween-yoko/j0sw6x0almzwhpkrrpgy.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693492/events/halloween-yoko/v6k0a28efrvjvsdifg6l.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693492/events/halloween-yoko/v6k0a28efrvjvsdifg6l.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693491/events/halloween-yoko/e8hfqpmguju42yq7qs6w.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693491/events/halloween-yoko/e8hfqpmguju42yq7qs6w.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693491/events/halloween-yoko/wrtzwhamv8bgeinhgusp.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693491/events/halloween-yoko/wrtzwhamv8bgeinhgusp.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693491/events/halloween-yoko/xh3ontuo0fgkgcgsl454.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693491/events/halloween-yoko/xh3ontuo0fgkgcgsl454.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693490/events/halloween-yoko/elk4lymvzviubap2y2mw.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693490/events/halloween-yoko/elk4lymvzviubap2y2mw.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693489/events/halloween-yoko/qf0oznl3ymucdoo62uas.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693489/events/halloween-yoko/qf0oznl3ymucdoo62uas.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693487/events/halloween-yoko/tysq7l2wjk5c55wohbhc.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693487/events/halloween-yoko/tysq7l2wjk5c55wohbhc.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693487/events/halloween-yoko/i6gdzz5glbrkklfdflwx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693487/events/halloween-yoko/i6gdzz5glbrkklfdflwx.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693485/events/halloween-yoko/v6pcdkbvobbksvg0snxx.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693485/events/halloween-yoko/v6pcdkbvobbksvg0snxx.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693482/events/halloween-yoko/w79eickv0yn8u1xsecg9.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693482/events/halloween-yoko/w79eickv0yn8u1xsecg9.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693482/events/halloween-yoko/u6ozttyzb5tcmlxgmjoj.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693482/events/halloween-yoko/u6ozttyzb5tcmlxgmjoj.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693480/events/halloween-yoko/bfwjokfpulu9dw2s7iog.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693480/events/halloween-yoko/bfwjokfpulu9dw2s7iog.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693478/events/halloween-yoko/ufn4es8irimldy99ua0q.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693478/events/halloween-yoko/ufn4es8irimldy99ua0q.jpg",
            alt: "halloween-yoko-2024",
        },
        {
            imgSrcSmll: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1730693478/events/halloween-yoko/veshcyjzsunc3hr5udtt.jpg",
            imgSrcLrg: "https://res.cloudinary.com/dkbw0dpyp/image/upload/v1730693478/events/halloween-yoko/veshcyjzsunc3hr5udtt.jpg",
            alt: "halloween-yoko-2024",
        },
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
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
