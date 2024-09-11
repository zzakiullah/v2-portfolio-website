"use client";

import { Poppins, Figtree, Scheherazade_New } from "next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const figtree = Figtree({ subsets: ["latin"] });
const scheherazade_new = Scheherazade_New({
    weight: ["400", "500", "600", "700"],
    subsets: ["arabic"],
});

const theme = extendTheme({
    colors: {
        zz: {
            purpleGray: {
                100: "#7A687F",
                200: "#88778D",
                300: "#97869B",
                400: "#A595A9",
                500: "#B4A5B8",
                600: "#C2B6C6",
                700: "#D1C7D4",
                800: "#E0D9E2",
                900: "#EFECF0",
            },
            spaceBg: "#0c0717",
            textGray: "#c2b6c6",
        },
    },
    fonts: {
        heading: poppins.style.fontFamily,
        body: figtree.style.fontFamily,
        arabic: scheherazade_new.style.fontFamily,
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
