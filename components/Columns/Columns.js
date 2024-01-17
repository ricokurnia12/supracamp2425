import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";
import Gusion from "@components/assets/gusion.png";
import Nawaf from "@components/assets/nawaf.png";
import Nabila from "@components/assets/Nabila.png";
import Image from "next/image";
const ColumnData = [
    {
        id: uuid(),
        title: "Rachenda Gosyen Nadindra M.",
        icon: Gusion,
        diterima:
            "Diterima di 3 PTN: Pendidikan Dokter – Undip, Tek. Elektro – ITS, dan Teknik Informatika - UB",
        content:
            "Sungguh senang saya bisa diterima di 3 jurusan yang luar biasa dan berpeluang kerja besar di Indonesia, namun semua hasil itu tidak dapat saya raih sendirian. Saya sangat senang dengan program pembelajaran GO SupraCamp. Tertarik ikut SupraCamp karena lingkungannya mendukung, fasilitasnya mendukung, dan setiap hari isinya belajar. Kesannya ikut SupraCamp itu luar biasa, banyak pengalaman yang saya dapatkan dari SupraCamp ini, mulai dari pengalaman belajar, dan bertemu teman baru."
    },
    {
        id: uuid(),
        title: "Nawaf Dhia Alwafa Dipatama",
        icon: Nawaf,
        diterima: "Diterima di Teknik Elektro - UI",
        content:
            "SupraCamp Seru banget! teman-temennya juga baik-baik banget, kita di sana sama-sama belajar, dan saling memotivasi untuk bisa lolos UTBK-SNBT."
    },
    {
        id: uuid(),
        title: "Nabila Azzahra",
        icon: Nabila,
        diterima:
            "Diterima di 2 PTN: Pendidikan Dokter – UNSRI dan Kedokteran UBB",
        content:
            "SupraCamp Seru banget..! Bisa ketemu teman-teman baru sama lucu-lucu juga pas saat belajar, jadi tidak melulu serius tapi juga banyak ketawa."
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-4 gap-y-4 grid-cols-1 lg:grid-cols-3  mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left border border-gray-200 p-2 rounded-md shadow-md h-fit"
                >
                    <div className="flex items-center">
                        <Image
                            alt="supracamp ganesha operation"
                            className="w-28"
                            src={item.icon}
                        />
                        <div className="">
                            <h3 className="text-lg mb-0 font-medium text-gray-900">
                                {item.title}
                            </h3>
                            <p className="text-sm font-semibold text-gray-800">
                                {item.diterima}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm">{item.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
