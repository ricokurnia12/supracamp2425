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
import Hero from "@components/Hero";
import PromoCall from "@components/PromoCall";
import { Icon } from "@iconify/react";
import Timeline from "@components/Timline";

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
                                        Kenapa kamu harus ikut Supracamp Ganesha
                                        Operation ?
                                    </PageTitle>
                                    <Content
                                        className="text-center"
                                        alignment="center"
                                    >
                                        <p>
                                            Supracamp Ganesha Operation
                                            memberikan kamu pengalaman yang luar
                                            biasa dan belajar secara intensif
                                            selama 3 bulan di hotel bintang 5
                                            bandung.
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
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Timeline</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
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
