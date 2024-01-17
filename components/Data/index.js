import { Icon } from "@iconify/react";
import Theking from "@components/assets/theking.png";
import EPB from "@components/assets/epb.png";
import TST from "@components/assets/tst.png";
import Race from "@components/assets/racingandbattle.png";
import Duempat from "@components/assets/24.png";
import Muscle from "@components/assets/brain.png";
import PersonalTrain from "@components/assets/personaltrain.png";
import Konsultasi from "@components/assets/consultation.png";
export const dataFasilitas = [
    {
        title: `Pengajar Terbaik dan Akrab`,
        content: `
                Kamu akan belajar langsung dengan pengajar GO tentang teori,
                contoh soal, dan latihan soal yang relevan dengan UTBK-SNBT 2024
                (Tes Potensi Skolastik (TPS), Penalaran Matematika, dan Literasi
                dalam Bahasa Indonesia dan Bahasa Inggris). Kamu akan diajari
                konsep dasar menggunakan metode Revolusi Belajar Ganesha
                Operation.
            `,
        isImg: false,
        image: `fluent-emoji:man-teacher`
    },
    {
        title: `Konsep The King`,
        content: `
                Kamu bisa mendapatkan cara penyelesaian soal dengan konsep The
                King oleh pengajar GO terbaik dan akrab. Konsep The King dapat
                membuatmu berpikir kreatif sebagai strategi untuk manjawab soal
                dengan mudah, cepat, dan akurat. Konsep The King ini sangat
                dibutuhkan lho, karena waktu rata-rata mengerjakan soal Tes
                Potensi Skolastik (TPS) dan Tes Literasi sangat singkat.
            `,
        isImg: true,
        image: Theking
    },
    {
        title: `Buku Sakti`,
        content: `
                Terdapat puluhan ribu soal yang bisa kamu kerjakan dengan
                tingkat kesulitan yang bervariasi pada Buku Sakti yang dapat
                menjadi sarana buat kamu berlatih dalam persiapan UTBK-SNBT.
                Sehingga SobatGO akan terbiasa menghadapi berbagai variasi soal
                Tes Potensi Skolastik (TPS), Penalaran Matematika, dan Literasi
                dalam Bahasa Indonesia dan Bahasa Inggris.
            `,
        isImg: false,
        image: "twemoji:closed-book"
    },
    {
        title: <>TOBK dengan sistem sesuai UTBK-SNBT sesungguhnya</>,
        content: (
            <>
                Kamu mendapatkan fasilitas Try Out Berbasis Komputer (TOBK)
                dengan menggunakan sistem <i>blocking time</i> dan penilaiaan{" "}
                <i>Item Response Theory (IRT)</i> sama seperti sistem UTBK-SNBT
                sesungguhnya.
            </>
        ),
        isImg: false,
        image: "fluent-emoji:desktop-computer"
    },
    {
        title: `Evaluasi Prestasi Belajar (EPB)`,
        content: `
                Kamu akan mendapatkan hasil TOBK berupa Evaluasi Prestasi
                Belajar (EPB) hingga per butir soal dan per bidang studi agar
                kamu dapat menyusun strategi pada TOBK selanjutnya dan meraih
                peluang lulus pada prodi PTN yang diinginkan. Keren kan?!"
            `,
        isImg: true,
        image: EPB
    },
    {
        title: <i>Tutorial Service Time (TST)</i>,
        content: (
            <>
                <i>Tutorial Service Time</i> atau yang kamu lebih sering denger
                dengan istilah TST merupakan layanan yang disiapkan dan
                terjadwal untuk memberi pendampingan bagi kamu yang ingin
                memaksimalkan pemahaman baik dari materi maupun pengerjaan soal.
            </>
        ),
        isImg: true,
        image: TST
    },
    {
        title: (
            <p>
                <i>Racing</i> dan <i>Battle</i>
            </p>
        ),
        content: `
                Nah, kalau ini sarana buatmu untuk bertanding. Di mana kamu
                akan Bertanding setiap harinya bersama teman-teman dalam mengerjakan soal dengan waktu terbatas sehingga kamu terbiasa dengan persaingan dan ketatnya waktu pengerjaan UTBK-SNBT. Menu ini bisa banget jadi cara kamu untuk drill kemampuan kamu dalam mengerjakan soal-soal UTBK-SNBT, pastinya dengan cara yang lebih seru! 
            `,
        isImg: true,
        image: Race
    },
    {
        title: `Pengawasan 24 Jam`,
        content: `
                Jadwal kegiatanmu diatur dengan baik agar kamu dapat fokus dalam
                mempersiapkan UTBK-SNBT tentunya dengan pendampingan dan pengawasan 24 jam  berupa: jadwal belajar (KBM, bedah
                topik, belajar mandiri, TST, TOBK, konsultasi EPB), makanan
                bergizi, olahraga, waktu istirahat, dan rekreasi secara
                berimbang. Keseharianmu bakalan lebih teratur lho di Supracamp
                ini!
            `,
        isImg: true,
        image: Duempat
    },
    {
        title: (
            <>
                Penguatan <i>Muscle Memory</i>
            </>
        ),
        content: `
                Jadwal kegiatanmu diatur dengan baik agar kamu dapat fokus dalam
                mempersiapkan UTBK-SNBT berupa: jadwal belajar (KBM, bedah
                topik, belajar mandiri, TST, TOBK, konsultasi EPB), makanan
                bergizi, olahraga, waktu istirahat, dan rekreasi secara
                berimbang. Keseharianmu bakalan lebih teratur lho di Supracamp
                ini!
            `,
        isImg: true,
        image: Muscle
    },
    {
        title: (
            <>
                <i>Personal Training with Trainer</i>
            </>
        ),
        content: (
            <>
                Dengan sesi<i> personal training</i>, kamu akan didampingi oleh
                pengajar terbaik GO yang akan memberikan arahan mulai dari hasil
                belajar, latihan maupun <i>racing</i> dan kamu juga dapat
                berkonsultasi langsung mengenai materi yang belum dipahami.
            </>
        ),
        isImg: true,
        image: PersonalTrain
    },
    {
        title: <>Konsultasi Jurusan PTN</>,
        content: (
            <>
                Selain pendampingan selama belajar, kamu juga dapat
                berkonsultasi dan mendapatkan arahan untuk memilih jurusan PTN
                sesuai minat, bakat, dan kemampuanmu.
            </>
        ),
        isImg: true,
        image: Konsultasi
    }
];
