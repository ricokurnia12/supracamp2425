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
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com"]
    },
    env: {
        siteTitle: "Ganesha Operation",
        siteDescription: "Your company description.",
        siteKeywords: "your company keywords",
        siteUrl: "You site url"
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
