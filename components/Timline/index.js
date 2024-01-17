import React from "react";
import { Icon } from "@iconify/react";
import CardTimeline from "./CardTimeline";
import KbmZoom from "@components/assets/kbmzoom.png";
import Kbm from "@components/assets/kbm.png";
const Timeline = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center mb-8">
                <div className="max-w-sm w-full md:w-96  lg:max-w-full lg:flex shadow-lg mx-auto">
                    <div className="mx-auto border border-gray-400  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col  justify-between leading-normal">
                        <div className="">
                            <div className="flex items-center justify-center gap-4 mb-2   w-fit mx-auto">
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
                                <p className="text-md font-bold text-gray-800 flex items-center">
                                    Fase Pertama <br />
                                    18 Maret s.d. 06 April 2024
                                </p>
                            </div>
                            <div className="flex p-4 gap-4 items-center  justify-center border mb-2">
                                <img
                                    loading="lazy"
                                    alt="Zoom"
                                    className="w-8 h-auto"
                                    src="/supracamp/zoomicon.png"
                                />
                                <div className="text-gray-900 font-bold text-sm mb-2">
                                    KBM SupraCamp Live Interaktif via Zoom
                                    dengan pengajar terbaik GO
                                </div>
                            </div>

                            <p className="text-gray-800 text-base text-center">
                                Belajar dengan materi UTBK, persiapan US, TOBK
                                dilengkapi sistem seperti UTBK sebenarnya, dan
                                konsultasi strategi pemilihan jurusan PTN.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto h-1 flex-grow bg-gray-800"></div>

                <div className="max-w-sm w-full md:w-96  lg:max-w-full lg:flex shadow-lg mx-auto">
                    <div className="mx-auto border border-gray-400  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col  justify-between leading-normal">
                        <div className="">
                            <div className="flex items-center justify-center gap-4 mb-2   w-fit mx-auto">
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
                                <p className="text-md font-bold text-gray-800 flex items-center">
                                    Fase Kedua <br />
                                    15 April s.d. 21 Mei 2024
                                </p>
                            </div>
                            <div className="flex p-4 gap-4 items-center  justify-center border mb-2">
                                <Icon width={28} icon={"fluent-emoji:hotel"} />
                                <div className="text-gray-900 font-bold text-sm mb-2">
                                    Belajar di éL Hotel Bandung
                                </div>
                            </div>

                            <p className="text-gray-800 text-base text-center">
                                Dengan fasilitas lengkap dan eksklusif,
                                dipastikan siswa dapat fokus mempersiapkan diri
                                untuk menghadapi persaingan UTBK-SNBT dengan
                                nyaman dan maksimal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto gap-2 lg:gap-8 flex-wrap justify-center">
                <CardTimeline
                    image={KbmZoom}
                    content={"KBM SupraCamp live interaktif via Zoom"}
                />
                <CardTimeline
                    image={Kbm}
                    content={"KBM tatap muka SupraCamp di hotel"}
                />
            </div>
        </div>
    );
};

export default Timeline;
