import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { professionalServiceSchema, websiteSchema } from "@/lib/seo";
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
    default: "JohnAlexWeb | Desarrollo web, SEO y consultoría digital",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: siteKeywords,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "JohnAlexWeb | Desarrollo web, SEO y consultoría digital",
    description: defaultDescription,
    url: absoluteUrl("/"),
    siteName,
    images: [openGraphImage],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JohnAlexWeb | Desarrollo web, SEO y consultoría digital",
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
        <JsonLd data={[websiteSchema, professionalServiceSchema]} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
