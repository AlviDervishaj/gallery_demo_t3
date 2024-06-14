import {ClerkProvider} from '@clerk/nextjs'
import {dark } from "@clerk/themes";
import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ourFileRouter } from './api/uploadthing/core';
import { extractRouterConfig } from 'uploadthing/server';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { Navigation } from './_components/Navigation';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Galvery",
  description: "Galvery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      <NextSSRPlugin
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <div className="h-screen grid grid-rows-[auto,1fr]">
            <Navigation />
            <main className="overflow-y-scroll">
              {children}
            </main>
          </div>
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
