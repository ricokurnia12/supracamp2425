import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import Slider from "react-slick";
import Belajar1 from "@components/assets/belajar.png";
import Belajar2 from "@components/assets/belajar2.png";
import Bermain from "@components/assets/bermain.png";
import Bermain2 from "@components/assets/bermain2.png";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const ContentImageData = [
    {
        id: uuid(),
        title: "Rasakan Serunya Belajar di Hotel Bintang 4!",
        content:
            "eL Hotel Royale Bandung merupakan salah satu hotel Bintang 4 terbaik di Kota Bandung. Fasilitasnya yang lengkap nggak hanya bikin kamu nyaman saat tinggal selama program, tetapi juga lingkungan yang ideal untuk belajar. Fasilitas lengkap yang ditawarkan tidak hanya menciptakan suasana belajar yang tenang dan fokus, tetapi juga memberikanmu kenyamanan ekstra selama proses pembelajaran",
        align: "right",
        image: [Belajar1, Belajar2]
    },
    {
        id: uuid(),
        title: "Bertemu dengan Teman-Teman yang Asyik",
        content:
            "Di sini kamu akan bertemu dengan teman-teman yang asyik dan akan menjadi kenangan seru yang enggak akan terlupakan! Mulai dari kegiatan belajar yang penuh semangat hingga kegiatan sosial yang seru, akan menambah setiap momen bersama teman-teman di SupraCamp menjadi petualangan yang penuh kebahagiaan. Jadi, rasakan “nge-ambis” bareng dengan cara yang menyenangkan di SupraCamp Ganesha Operation.",
        align: "left",
        image: [Bermain, Bermain2]
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid grid-cols-1 md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Slider {...settings}>
                            {item.image.map((pict, i) => {
                                return (
                                    <Image
                                        key={i}
                                        src={pict}
                                        width={412}
                                        height={412}
                                        objectFit="cover"
                                        alt="Process Banner 1"
                                        className="drop-shadow-xl w-32 offset-y-0 offset-x-8 blur-16"
                                    />
                                );
                            })}
                        </Slider>
                    </div>

                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black-400`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                    
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
