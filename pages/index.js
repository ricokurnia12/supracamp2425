import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import "slick-carousel/slick/slick.css";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import { dataFasilitas } from "@components/Data";
import { Button } from "@components/Button";
import Table from "@components/Table";
import PromoCall from "@components/PromoCall";

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [sliceFas, setSliceFas] = useState();
    const [isExpand, setIsExpand] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        setIsMobile(window.innerWidth < 768);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            setSliceFas(dataFasilitas.slice(0, 3));
        } else {
            setSliceFas(dataFasilitas);
        }
    }, [isMobile, dataFasilitas]);

    const handleFasilitasMob = (e) => {
        e.preventDefault();
        setIsExpand((prevIsExpand) => {
            if (prevIsExpand) {
                setSliceFas(dataFasilitas.slice(0, 3));
            } else {
                setSliceFas(dataFasilitas);
            }
            return !prevIsExpand;
        });
    };

    return (
        <Layout className="">
            <SEO title="Ganesha Operation | Supracamp" description="Testing" />
            <div className="main-wrapper bg-[#fdfeff] relative z-10 pb-20 pt-20">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id={`supracamp`} className="features">
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Apa itu Supracamp Ganesha Operation
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    SupraCamp adalah program unggulan Ganesha
                                    Operation dengan fasilitas <i>all in</i>, di
                                    mana kamu akan belajar dan tinggal di eL
                                    Hotel Royale, hotel Bintang 4 terbaik di
                                    Kota Bandung. Semua keperluanmu sudah
                                    disiapkan, jadi kamu hanya tinggal fokus
                                    untuk belajar. SupraCamp dirancang agar kamu
                                    memiliki mental sang juara, dengan
                                    menerapkan Formula 3B: Belajar, Berlatih,
                                    dan Bertanding selama proses pembelajaran.
                                    Fasilitasnya yang lengkap dengan
                                    pendampingan belajar dan pengawasan 24 jam
                                    akan memastikan kamu untuk mampu menghadapi
                                    dan memenangkan ketatnya persaingan masuk
                                    PTN. Sudah siap masuk PTN Impianmu?
                                </p>
                            </Content>
                        </SectionContainer>

                        <SectionContainer className="mt-8">
                            <PageTitle
                                className="text-center mx-auto"
                                type="standart"
                            >
                                Intip keseruan prorgram Supracamp
                            </PageTitle>
                            <iframe
                                className="w-full max-w-3xl mx-auto aspect-video rounded-md border-gray-300 shadow-lg"
                                src="https://www.youtube.com/embed/2WzTDQ7jd88"
                                title="Nge-Game Bareng SupraCamp"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                                loading="lazy"
                            ></iframe>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id={`fasilitas`}
                            className="feature-tabs"
                        >
                            <BadgeGroup alignment="center">
                                <BadgeMessage>More Features</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Kenapa kamu harus ikut Supracamp Ganesha
                                Operation ?
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Supracamp Ganesha Operation memberikan kamu
                                    pengalaman yang luar biasa dan belajar
                                    secara intensif selama 3 bulan di hotel
                                    bintang 5 bandung.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-4 grid-cols-1 max-w-full  mx-auto mt-24 md:grid-cols-2 xl:grid-cols-3  transition-all duration-300 h-auto">
                                {sliceFas?.map((fasilitas, i) => {
                                    return (
                                        <Card
                                            key={i}
                                            className="col-span-1 text-primary-900"
                                        >
                                            <CardBody className="w-full flex flex-col items-center bg-white-600/20 p-6 text-center">
                                                <CardImage
                                                    className={
                                                        "justify-self-center"
                                                    }
                                                    isImage={fasilitas.isImg}
                                                    src={fasilitas.image}
                                                    alt="Customizable Layouts image used."
                                                />
                                                <CardHeader className="!text-black !text-lg  !font-bold -mt-4 !text-center ">
                                                    {fasilitas.title}
                                                </CardHeader>
                                                <p className="text-sm md:text-base">
                                                    {fasilitas.content}
                                                </p>
                                            </CardBody>
                                        </Card>
                                    );
                                })}
                                <Button
                                    click={handleFasilitasMob}
                                    className=" sm:hidden"
                                >
                                    {isExpand
                                        ? "Lihat Lebih Sedikit"
                                        : "Lihat Selengkapnya"}
                                </Button>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Timeline */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Timeline</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <ol className="grid grid-cols-1 md:grid-cols-2">
                                <li className="relative mb-6 sm:mb-0">
                                    <div className="flex items-center">
                                        <div className="z-10 flex items-center justify-center w-6 h-6  rounded-full bg-red-500 ring-8 ring-gray-900 shrink-0">
                                            <svg
                                                className="w-2.5 h-2.5 text-white "
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </div>
                                        <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
                                    </div>
                                    <div className="mt-3 sm:pe-8">
                                        <span className="text-lg font-semibold text-gray-900 ">
                                            Fase Pertama
                                        </span>
                                        <time className="block mb-2 text-md font-semibold leading-none text-black-400">
                                            18 Maret s.d. 06 April 2024
                                        </time>
                                        <div className="text-base font-normal text-black-400">
                                            <div className="flex items-center gap-2 p-2 border b w-fit">
                                                <img
                                                    loading="lazy"
                                                    alt="Zoom"
                                                    className="w-8 h-auto"
                                                    src="/tessupracamp/zoomicon.png"
                                                />
                                                <span className="text-sm">
                                                    KBM SupraCamp Live
                                                    Interaktif via Zoom dengan
                                                    pengajar terbaik GO
                                                </span>
                                            </div>
                                            Belajar dengan materi UTBK,
                                            persiapan US, TOBK dilengkapi sistem
                                            seperti UTBK sebenarnya, dan
                                            konsultasi strategi pemilihan
                                            jurusan PTN.
                                        </div>
                                    </div>
                                </li>
                                <li className="relative mb-6 sm:mb-0">
                                    <div className="flex items-center">
                                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 dark:bg-red-500 ring-8 ring-gray-900 shrink-0">
                                            <svg
                                                className="w-2.5 h-2.5 text-white "
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </div>
                                        <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
                                    </div>
                                    <div className="mt-3 sm:pe-8">
                                        <span className="text-lg font-semibold text-gray-900 ">
                                            Fase ke Dua
                                        </span>
                                        <time className="block mb-2 text-md font-semibold leading-none text-black-400">
                                            15 April s.d. 21 Mei 2024
                                        </time>
                                        <p className="text-base font-normal text-black-400">
                                            Program karantina 24 jam selama 37
                                            hari di éL Hotel Bandung dengan
                                            fasilitas lengkap dan eksklusif.
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Timeline */}
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                Apa kata mereka yang sudah mengikuti Supracamp ?
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    {/* <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some burning questions about NutriTrack?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer> */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="diskon" className="benefits">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Diskon</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>

                            <PageTitle
                                className="text-center mx-auto"
                                type="standart"
                            >
                                Yuk Daftar Program SupraCamp Ganesha Operation
                                Segera
                            </PageTitle>
                            <Content
                                className="text-center mb-8"
                                alignment="center"
                            >
                                <p>
                                    Khusus untukmu, jangan lewatkan kesempatan
                                    Istimewa! Dapatkan penawaran spesial dengan
                                    potongan harga hingga15% dengan mendaftar
                                    lebih cepat.
                                </p>
                            </Content>
                            <Table />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
