import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Peoplehead from "@components/assets/peoplehead.png";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16  color-white">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear First */}
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <BadgeGroup alignment="center">
                        <BadgeMessage>
                            Program Unggulan Ganesha Operation
                        </BadgeMessage>
                        <BadgeIcon icon="game-icons:open-book" />
                    </BadgeGroup>
                </MotionBTTContainer>
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        Supracamp Ganesha Operation
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>Cara Jitu Lulus UTBK-SNBT 2024</p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <a className="btn btn--outline" href="#supracamp">
                                Apa itu Supracamp ?
                            </a>
                            <a
                                role="button"
                                href="https://wa.me/628112468988?text=Hallo,%20saya%20mau%20daftar%20surpacamp"
                                className="btn btn--secondary text-white"
                            >
                                Daftar Sekarang
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                {/* <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}> */}
                <div className="page-banner--image">
                    <Image
                        src={Peoplehead}
                        alt="Page Banner"
                        objectFit="cover"
                        className="mx-auto w-60 h-auto "
                        loading="lazy"
                        placeholder="blur"
                        // layout="responsive"
                    />
                </div>
                {/* </MotionBTTContainer> */}
            </SectionContainer>
        </SectionContainer>
    );
};
