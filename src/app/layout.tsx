import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebastián Londoño Valencia Portfolio",
  description:
    "Portafolio de Sebastián Londoño Valencia, desarrollador frontend con experiencia en React, Next.js, TypeScript, Tailwind CSS, Vtex, GraphQL, Git, y más. Conoce mis proyectos y habilidades en este portafolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} p-5 md:px-16 md:pt-20 lg:pt-10`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
