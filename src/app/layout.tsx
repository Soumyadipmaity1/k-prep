// "use client";

import type { Metadata } from "next";
import { Denk_One } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import QueryProvider from "./context/QueryProvider";
import { SessionProvider } from "next-auth/react";
import RootSessionProvider from "./context/RootSessionProvider";

const denkOne = Denk_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "K-Prep",
  description: "Notes and resources for the KIITIANS, by the KIITIANS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={denkOne.className}>
      <body className="h-screen-minus-30 sm:h-auto sm:p-5 body-shadow sm:m-5 m-2 p-3 rounded-md sm:rounded-xl">
        <QueryProvider>
          <NextTopLoader color="#C62E2E"  />
          <RootSessionProvider>{children}</RootSessionProvider>
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
