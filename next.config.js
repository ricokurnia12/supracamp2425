/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const path = require("path");
const fs = require("fs");

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    basePath: "/supracamp",
    images: {
        // Disable image optimization
        unoptimized: true
        // You can add more image configuration here if needed
        // formats: ["image/avif", "image/webp"],
        // domains: ["s.gravatar.com"]
    },
    env: {
        siteTitle: "Ganesha Operation",
        siteDescription:
            "SupraCamp adalah program unggulan Ganesha Operation dengan fasilitas all in, di mana kamu akan belajar dan tinggal di éL Hotel Royale, hotel Bintang 4 terbaik di Kota Bandung.",
        siteKeywords: "Supracamp Ganesha Operation, Bimbel,ITB",
        siteUrl: "https://ganeshaoperation.com/supracamp/"
    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    ...createSecureHeaders(),
                    // HSTS Preload: https://hstspreload.org/
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
