import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { personSchema, professionalServiceSchema, websiteSchema } from "@/lib/seo";
import {
  absoluteUrl,
  defaultDescription,
  openGraphImage,
  siteKeywords,
  siteName,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

const metropolis = localFont({
  src: [
    {
      path: "./fonts/metropolis/Metropolis-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/metropolis/Metropolis-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/metropolis/Metropolis-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-metropolis",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JohnAlex | Desarrollo web, SEO y consultoría digital",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: siteKeywords,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "JohnAlex | Desarrollo web, SEO y consultoría digital",
    description: defaultDescription,
    url: absoluteUrl("/"),
    siteName,
    images: [openGraphImage],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JohnAlex| Desarrollo web, SEO y consultoría digital",
    description: defaultDescription,
    images: [openGraphImage.url],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${metropolis.variable} ${metropolis.className}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDMTRB6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LCS0PLZTJG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LCS0PLZTJG');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MDMTRB6');
          `}
        </Script>
        <JsonLd data={[websiteSchema, personSchema, professionalServiceSchema]} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
