"use client";

import { Poppins, Figtree } from "next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const figtree = Figtree({ subsets: ["latin"] });

const theme = extendTheme({
    colors: {
        spaceBg: "#0c0717",
    },
    fonts: {
        heading: poppins.style.fontFamily,
        body: figtree.style.fontFamily,
    },
    fontSizes: {
        "2xs": "0.625rem",
        "4.5xl": "2.75rem",
        "7.5xl": "5rem",
        "8.5xl": "7rem",
    },
    breakpoints: {
        base: "0px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
    },
});

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
