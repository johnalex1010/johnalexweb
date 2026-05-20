import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "JohnAlexWeb | Desarrollo web, SEO y consultoria digital",
  description:
    "Desarrollo sitios web modernos, rapidos y optimizados para convertir visitantes en clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${metropolis.variable} ${metropolis.className}`}>{children}</body>
    </html>
  );
}
