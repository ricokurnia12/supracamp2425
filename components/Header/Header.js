import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";
import Logogo from "@components/assets/logoGO.svg";
export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src={Logogo}
                                alt="logo"
                                className="h-8 w-auto"
                                height="44"
                                width="200"
                                loading="lazy"
                            />
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex md:flex-row-reverse items-center ml-auto">
                    <ButtonGroup className="">
                        <a
                            href="https://wa.me/628112468988?text=Hallo,%20saya%20mau%20daftar%20surpacamp"
                            role="button"
                            className="btn btn--secondary text-xs  md:ml-4 text-white"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Daftar Sekarang
                        </a>
                    </ButtonGroup>
                    <Nav />
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
