import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "./providers";
import MyNav from "@/components/MyNav";

export const metadata: Metadata = {
  title: "Zulaikha Zakiullah",
  description: "Personal website of Zulaikha Zakiullah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MyNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
