import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";

import GoogleAnalytics from "@/components/GoogleAnalytics";
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
    const token = process.env.NEXT_PUBLIC_BEAM_ANALYTICS_TOKEN ?? "";
    return (
        <html lang="en" suppressHydrationWarning>
            <GoogleAnalytics />
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
