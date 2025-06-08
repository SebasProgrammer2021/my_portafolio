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
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-neutral-900 container`}>
        <Header />
        <main className="flex flex-col min-h-screen pt-28">
          {children}
        </main>
        <footer className=" h-20 bg-gray-200 dark:bg-neutral-800 text-black dark:text-white text-center flex items-center justify-center shadow-md">
          <p className="text-sm">© 2025 Sebastián Londoño Valencia. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
