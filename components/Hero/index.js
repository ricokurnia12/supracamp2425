import { PageTitle } from "@components/Title";
import PeopleBanner from "@components/assets/peoplesc2.png";
import { BadgeGroup, BadgeMessage } from "@components/Badge";
import { Content } from "@components/Content";
import Image from "next/image";
import { MotionBTTContainer } from "@components/Motion";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

const Hero = () => {
    return (
        <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <section id="hero">
                {/* Flex Container */}
                <div id="hero2">
                    <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row py-10 ">
                        {/* Left Item */}

                        <div className="flex   flex-col space-y-12 md:w-1/2">
                            <PageTitle
                                className="text-white text-center md:text-left"
                                type="heavy"
                            >
                                Supracamp Ganesha Operation
                            </PageTitle>

                            <BadgeGroup className={`-mt-14 mx-auto md:mx-0`}>
                                <BadgeMessage>
                                    <p>Cara Jitu Lulus UTBK-SNBT 2024</p>
                                </BadgeMessage>
                            </BadgeGroup>

                            <p className="!-mt-2 text-center text-darkGrayishBlue md:text-left text-white">
                                SupraCamp adalah program unggulan Ganesha
                                Operation dengan fasilitas <i>all in</i>, di
                                mana kamu akan belajar dan tinggal di eL Hotel
                                Royale, hotel Bintang 4 terbaik di Kota Bandung.
                                Semua keperluanmu sudah disiapkan, jadi kamu
                                hanya tinggal fokus untuk belajar. SupraCamp
                                dirancang agar kamu memiliki mental sang juara,
                                dengan menerapkan Formula 3B: Belajar, Berlatih,
                                dan Bertanding selama proses pembelajaran.
                                Fasilitasnya yang lengkap dengan pendampingan
                                belajar dan pengawasan 24 jam akan memastikan
                                kamu untuk mampu menghadapi dan memenangkan
                                ketatnya persaingan masuk PTN. Sudah siap masuk
                                PTN Impianmu?
                            </p>
                            <ButtonGroup alignment={"left"} className="mx-0">
                                <a
                                    role="button"
                                    href="https://wa.me/628112468988?text=Hallo,%20saya%20mau%20daftar%20surpacamp"
                                    className="btn btn--primary "
                                >
                                    Daftar Sekarang
                                    <Icon icon="material-symbols:arrow-forward-rounded" />
                                </a>
                            </ButtonGroup>
                        </div>

                        {/* Image */}

                        <div className="md:w-1/2">
                            <Image src={PeopleBanner} />
                        </div>
                    </div>
                </div>
            </section>
        </MotionBTTContainer>
    );
};

export default Hero;
