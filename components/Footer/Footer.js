import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

const DATA = [
    {
        title: "Hubungi Kami",
        items: [
            {
                label: "(022)4218177"
            },
            {
                label: "officialgopusat@gmail.com"
            },
            {
                label: "+62 811-2468-988"
            }
        ]
    },
    {
        title: "Info Lebih Lanjut",
        items: [
            {
                label: "Twitter",
                href: "https://twitter.com/officialgopusat/",
                icon: "iconoir:x",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "https://www.instagram.com/officialganeshaoperation/",
                icon: "skill-icons:instagram",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "https://id-id.facebook.com/ganesha.operation.official/",
                icon: "logos:facebook",
                target: "_blank"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white-300">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-8">
                    <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-0 md:grid-cols-12 ">
                        <div className="col-span-4">
                            <div className="footer--logo grid gap-8">
                                <Link href="/">
                                    <Image
                                        src="/supracamp/logoGOcolor.svg"
                                        alt="logo"
                                        className="h-16 w-auto"
                                        height="25"
                                        width="100"
                                        priority
                                    />
                                    <p>
                                        Bimbel Terbaik dan Terbesar Se-Indonesia
                                    </p>
                                </Link>

                                {/* Get Template button; remove if not used */}
                                {/* <ButtonGroup alignment="left">
                                    <a
                                        role="button"
                                        href="https://github.com/christian-luntok/nutritrack"
                                        className="btn btn--secondary"
                                    >
                                        Download
                                        <Icon icon="material-symbols:arrow-forward-rounded" />
                                    </a>
                                </ButtonGroup> */}
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                                {DATA.map((footerLinks, i) => (
                                    <div
                                        key={i}
                                        className="footer-menu--container col-span-2 md:col-span-4"
                                    >
                                        <h3 className="font-bold text-base mb-2">
                                            {footerLinks.title}
                                        </h3>
                                        <ul className="footer-menu--list">
                                            {footerLinks.items.map(
                                                (footerItem) => (
                                                    <li
                                                        key={footerItem.label}
                                                        className="footer-menu--list-item gap-2"
                                                    >
                                                        <a
                                                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                            href={
                                                                footerItem.href
                                                            }
                                                            target={
                                                                footerItem.target
                                                            }
                                                        >
                                                            <Icon
                                                                className="inline"
                                                                icon={
                                                                    footerItem.icon
                                                                }
                                                            />{" "}
                                                            {footerItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Footer Credits */}
            {/* <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-1">
                    <p className="my-0">
                        © {year}, Ganesha Operation. All Rights Reserved
                    </p>
                </div>
            </SectionContainer> */}
            <div className="footer--background"></div>
        </footer>
    );
};
