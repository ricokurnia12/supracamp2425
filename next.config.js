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
    basePath: "/tessupracamp",
    images: {
        // Disable image optimization
        unoptimized: true
        // You can add more image configuration here if needed
        // formats: ["image/avif", "image/webp"],
        // domains: ["s.gravatar.com"]
    },
    env: {
        siteTitle: "Ganesha Operation",
        siteDescription: "Tes",
        siteKeywords: "Tes",
        siteUrl: "Ganesha Operation"
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
