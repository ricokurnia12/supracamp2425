import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";

import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";

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
import Hero from "@components/Hero";

import Timeline from "@components/Timline";
import Najwa from "@components/assets/najwa.png";
import Image from "next/image";
import Script from "next/script";
import SkemaSc from "@components/assets/skemaSc.png";
import { Icon } from "@iconify/react";

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
            <SEO
                title="Ganesha Operation | SupraCamp"
                description="SupraCamp adalah program unggulan Ganesha Operation dengan fasilitas all in, di mana kamu akan belajar dan tinggal di éL Hotel, hotel Bintang 4 terbaik di Kota Bandung."
            />
            <Script
                strategy="lazyOnload"
                id="gtm-script"
                src="https://www.googletagmanager.com/gtag/js?id=G-GFBCTCXQD2"
            />
            <Script
                strategy="lazyOnload"
                id="gtm-config"
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag("js", new Date());

                gtag("config", "G-GFBCTCXQD2" ,{page_path: window.location.pathname,});
              `
                }}
            ></Script>

            <div className="main-wrapper bg-[#fdfeff] relative z-10 pb-20 pt-10">
                {/* { Page Banner } */}
                <Hero />
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="mt-8">
                            {/* Card Container Tabs */}
                            <MotionBTTContainer
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <SectionContainer
                                    id={`fasilitas`}
                                    className="feature-tabs"
                                >
                                    <PageTitle
                                        className="text-center mx-auto"
                                        type="default"
                                    >
                                        Kenapa kamu harus ikut SupraCamp Ganesha
                                        Operation ?
                                    </PageTitle>
                                    <Content
                                        className="text-center"
                                        alignment="center"
                                    >
                                        <p>
                                            Melalui SupraCamp kamu akan
                                            mendapatkan pengalaman luar biasa
                                            dimana detik demi detik waktu kamu
                                            akan kami atur dengan seimbang dalam
                                            persiapan menghadapi UTBK-SNBT di
                                            lingkungan yang kondusif disertai
                                            fasilitas lengkap dan pengawasan 24
                                            jam.
                                        </p>
                                        <div className="flex flex-col md:flex-row items-center justify-center mt-8">
                                            <div className="flex flex-col gap-4">
                                                {" "}
                                                <div className="text-center border rounded-md shadow-md p-1 bg-[#FFF212] relative flex items-center px-8 md:ps-12 md:pe-4">
                                                    <Icon
                                                        className="text-red-500 w-16 h-16 absolute -left-6 rounded-full mr-2 flex items-center justify-center"
                                                        icon={
                                                            "lets-icons:check-fill"
                                                        }
                                                    />

                                                    <div>
                                                        Semua keperluan
                                                        disiapkan GO
                                                    </div>
                                                </div>
                                                <div className="text-center border rounded-md text-white shadow-md p-1 bg-[#E84559] relative flex items-center justify-center  px-8 md:ps-12 md:pe-4">
                                                    <Icon
                                                        className="text-yellow-300 w-16 h-16 absolute -left-6 rounded-full mr-2 flex items-center justify-center"
                                                        icon={
                                                            "lets-icons:check-fill"
                                                        }
                                                    />
                                                    Siswa fokus belajar
                                                </div>
                                                <div className=" border rounded-md text-white shadow-md p-1 bg-[#E12728] relative flex items-center  justify-center px-8 md:ps-12 md:pe-4">
                                                    <Icon
                                                        className="text-yellow-400 w-16 h-16 absolute -left-6 rounded-full mr-2 flex items-center justify-center"
                                                        icon={
                                                            "lets-icons:check-fill"
                                                        }
                                                    />
                                                    Orang tua tenang
                                                </div>
                                            </div>

                                            <Image
                                                className="w-80 "
                                                src={SkemaSc}
                                            />
                                        </div>
                                    </Content>
                                    <CardGroup className=" grid scroll-m-24 gap-4 grid-cols-1 max-w-full  mx-auto mt-16 md:grid-cols-2 xl:grid-cols-3  transition-all duration-300 h-auto">
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
                                                            isImage={
                                                                fasilitas.isImg
                                                            }
                                                            src={
                                                                fasilitas.image
                                                            }
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
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
                <ContentImage />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Timeline */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="benefits mt-8">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Timeline</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="standart"
                            >
                                Catat Timelinenya ya!
                            </PageTitle>
                            <Timeline />
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
                            <PageTitle className="" type="standart">
                                Apa kata mereka yang sudah mengikuti SupraCamp ?
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>

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
                                    potongan harga hingga 15% dengan mendaftar
                                    lebih cepat.
                                </p>
                            </Content>
                            <div className="w-full flex mx-auto justify-center">
                                <div className="hidden lg:block">
                                    <Image
                                        alt="nawja ganesha opeartion supracamp"
                                        className="w-48"
                                        src={Najwa}
                                    />
                                </div>
                                <div className=" text-center lg:text-start">
                                    <PageTitle type="small">
                                        DAFTAR LEBIH CEPAT, HARGA LEBIH MURAH!
                                    </PageTitle>
                                    <Content
                                        className="text-center -mt-4 mb-8 lg:text-start"
                                        alignment="center"
                                    >
                                        <p>
                                            Dapatkan kesempatan istimewa dengan
                                            daftar lebih cepat dan nikmati
                                            program eksklusif dengan harga yang
                                            lebih terjangkau! Kamu bisa
                                            menikmati harga lebih hemat yang
                                            nggak akan kamu temukan di lain
                                            waktu. Penawarannya terbatas, lho,
                                            jangan sampai kelewatan. Yuk, daftar
                                            sekarang!
                                        </p>
                                    </Content>
                                </div>
                            </div>
                            <Table />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
