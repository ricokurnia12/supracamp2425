import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
            <Head />
            <Script
                strategy="lazyOnload"
                id="gtm-script"
                src="https://www.googletagmanager.com/gtag/js?id=G-GFBCTCXQD2"
            />
            <Script
                strategy="lazyOnload"
                id="gtm-config"
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag("js", new Date());

                gtag("config", "G-GFBCTCXQD2" ,{page_path: window.location.pathname,});
              `
                }}
            ></Script>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
