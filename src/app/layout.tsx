// "use client";

import type { Metadata } from "next";
import { Denk_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Menubar/Navbar/Navbar";
import Footer from "@/components/Footer/footer";
import { Toaster } from "react-hot-toast";
const denkOne = Denk_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "K-Prep",
  description: "Notes and resources for the KIITIANS, by the KIITIANS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={denkOne.className}>
      <body className="h-screen-minus-30 sm:h-auto sm:p-5 body-shadow sm:m-5 m-2 p-3 rounded-md sm:rounded-xl">
        <div className=""></div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
