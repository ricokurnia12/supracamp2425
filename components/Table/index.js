import React from "react";
import { diskonBulan, diskonSiswaGo } from "@components/Data/Tablediskon";

const Table = () => {
    return (
        <>
            {/* Diskon 1 */}
            <p className="font-bold">
                Ketentuan Diskon Program SupraCamp Ganesha Operation
            </p>
            <p className="-mt-8"> 
                A. Berlaku diskon spesial dengan ketentuan: <br />
                Jika membayar biaya pesan tempat minimal <b> Rp10.000.000 </b>
                pada bulan tertentu berhak mendapatkan diskon (lihat tabel di
                bawah):
            </p>

            <table className="table-auto w-full">
                <thead className="bg-red-600 text-white text-center">
                    <tr className="text-xs md:text-base px-2">
                        <th className="border">Bulan Daftar</th>
                        <th className="border">Jenis Diskon</th>
                        <th className="border">Besaran Diskon</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {diskonBulan.map((e, i) => {
                        const genap = i % 2 === 0;
                        return (
                            <tr
                                className={`${
                                    genap ? "bg-gray-100" : "bg-gray-200"
                                } text-sm md:text-base`}
                            >
                                <td className="p-1">{e.expDate}</td>
                                <td className="p-1">{e.jenis}</td>
                                <td className="p-1">{e.diskon}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* Diskon2 */}
            <p>B. Diskon bagi siswa GO yang akan mengikuti produk SupraCamp:</p>

            <table className="table-auto w-full">
                <thead className="bg-red-600 text-white text-center">
                    <tr className="text-xs md:text-base px-2">
                        <th className="border">Kelas</th>
                        <th className="border">Produk</th>
                        <th className="border">Besaran Diskon</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {diskonSiswaGo.map((e, i) => {
                        const genap = i % 2 === 0;
                        return (
                            <tr
                                className={`${
                                    genap ? "bg-gray-100" : "bg-gray-200"
                                } text-sm md:text-base`}
                            >
                                <td className="p-1">{e.kelas}</td>
                                <td className="p-1">{e.produk}</td>
                                <td className="p-1">{e.diskon}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <p className="font-bold">Keterangan Diskon:</p>
            <ul className="list-disc -mt-8">
                <li>
                    Biaya di atas{" "}
                    <b> harus dibayar lunas maksimal tanggal 18 Maret 2024 </b>
                    (saat start belajar SupraCamp).
                </li>
                <li>
                    Sisa pembayaran setelah membayar pesan tempat bisa dicicil
                    sampai dengan <b>18 Maret 2024</b> (saat start belajar
                    SupraCamp).
                </li>
                <li>
                    Biaya pesan tempat yang telah dibayarkan{" "}
                    <b> tidak dapat </b>
                    dikembalikan dengan alasan apapun.
                </li>
            </ul>
        </>
    );
};

export default Table;
