import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { BaseUrl } from "@components/Baseurl";
const navigation = [
    {
        name: "Fasilitas",
        to: `#fasilitas`,
        href: `#fasilitas`
    },
    { name: "Testimoni", to: "#testimonials", href: `#testimonials` },
    { name: "Diskon", to: "#diskon", href: "#diskon" }
];

export const Nav = () => {
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const closeNav = () => {
        setIsNavOpen(false);
    };
    const scrollToSection = (e, id) => {
        e.preventDefault(); // Menghentikan perilaku default dari link
        const section = document.querySelector(id); // Mendapatkan elemen yang diinginkan
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth" // Animasi scroll ke bagian tersebut
            });
        }
    };
    return (
        <nav className="header-nav">
            <div className="header-nav--container">
                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="mobile-menu"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <Icon
                        icon="material-symbols:menu-rounded"
                        className="h-6 w-auto text-black"
                    />
                </button>
                <div
                    className={`header-nav--menu-container z-20 ${
                        isNavOpen ? "show" : "hide"
                    }`}
                    id="navbar-default"
                >
                    <ul className="header-nav--menu">
                        {navigation.map((item) => (
                            <li
                                key={item.name}
                                className="header-nav--menu-item"
                            >
                                <a
                                    key={item.name}
                                    to={item.to}
                                    href={item.href}
                                    className={`menu-item--link flex items-center
                    ${router.pathname === item.href ? "active" : ""}
                  `}
                                    onClick={(e) => {
                                        closeNav();
                                        scrollToSection(e, item.href); // Memanggil fungsi scrollToSection saat link diklik
                                    }}
                                    target={item.target ? item.target : "_self"}
                                >
                                    {item.name}
                                    {item.isArrow && (
                                        <span className="ml-2 inline-block text-sm font-medium text-inherit">
                                            <Icon
                                                icon="material-symbols:arrow-outward"
                                                className="h-6 w-auto"
                                            />
                                        </span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
