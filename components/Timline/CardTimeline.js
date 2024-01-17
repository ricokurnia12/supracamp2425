import React from "react";

import Image from "next/image";
const CardTimeline = ({ image, content }) => {
    return (
        <div class="card--timeline relative flex flex-col mt-6 text-gray-700 ] shadow-md bg-clip-border border border-gray-400 rounded-xl  w-full md:w-96 p-2">
            <div class="relative h-fit   overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <Image src={image} className="" alt="card-image" />
            </div>
            <div class="mt-2">
                <h5 class="block text-center mb-2 font-sans text-base lg:text-xl antialiased font-semibold leading-snug tracking-normal text-gray-900">
                    {content}
                </h5>
            </div>
        </div>
    );
};

export default CardTimeline;
