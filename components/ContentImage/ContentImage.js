import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import Slider from "react-slick";
import Belajar1 from "@components/assets/belajar.png";
import Belajar2 from "@components/assets/belajar2.png";
import Bermain from "@components/assets/bermain.png";
import Bermain2 from "@components/assets/bermain2.png";
import { PageTitle } from "@components/Title";

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    initialSlideHeight: 400
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
        <SectionContainer className="content--image process-items mt-16 space-y-16 mx-auto py-8">
            <PageTitle
                className="text-center mx-auto text-white"
                type="standart"
            >
                Intip keseruan prorgram Supracamp
            </PageTitle>
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto"
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
                                        className="drop-shadow-2xl w-32 offset-y-0 offset-x-8 blur-16 rounded-md  border-4  border-white-50"
                                    />
                                );
                            })}
                        </Slider>
                    </div>

                    <div
                        className={`bg-white  p-4 process-item--content shadow-lg ${
                            item.align === "left"
                                ? "rounded-l-lg md:pr-16 lg:pr-16 xl:pr-20 ml-auto"
                                : "rounded-r-lg md:pl-16 lg:pl-16 xl:pl-20  mr-auto"
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
            <iframe
                className="w-full max-w-3xl mx-auto aspect-video rounded-md border-gray-300 shadow-lg"
                src="https://www.youtube.com/embed/2WzTDQ7jd88"
                title="Nge-Game Bareng SupraCamp"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                loading="lazy"
            ></iframe>
        </SectionContainer>
    );
};
