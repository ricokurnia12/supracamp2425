import React from "react";
import { PageTitle } from "@components/Title";
import { Content } from "@components/Content";

const PromoCall = () => {
    return (
        <div className="grid lg:grid-cols-12">
            <img
                className="w-full hidden lg:block col-span-3"
                src="https://ganeshaoperation.com/images/faq2.png"
            />
            <div className="col-span-8 flex flex-col justify-center">
                <p
                    className="font-bold text-start text-2xl"
                    type="default"
                >
                    DAFTAR LEBIH CEPAT, HARGA LEBIH MURAH
                </p>
                <Content>
                    Dapatkan kesempatan istimewa dengan daftar lebih cepat dan
                    nikmati program eksklusif dengan harga yang lebih
                    terjangkau! Kamu bisa menikmati harga lebih hemat yang nggak
                    akan kamu temukan di lain waktu. Penawarannya terbatas, lho,
                    jangan sampai kelewatan. Yuk, daftar sekarang!
                </Content>
            </div>
        </div>
    );
};

export default PromoCall;
