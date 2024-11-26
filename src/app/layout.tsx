import type { Metadata } from "next";
import Head from "next/head";

import "./globals.css";
import { Providers } from "./providers";

import BeamAnalytics from "@/components/BeamAnalytics";
import MyHeader from "@/components/MyHeader";
import MyNav from "@/components/MyNav";

export const metadata: Metadata = {
    title: {
        template: "%s | Zulaikha Zakiullah",
        default: "Zulaikha Zakiullah",
    },
    description: "Personal website of Zulaikha Zakiullah",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <BeamAnalytics />
            </Head>
            <body>
                <Providers>
                    <MyHeader />
                    <MyNav />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
