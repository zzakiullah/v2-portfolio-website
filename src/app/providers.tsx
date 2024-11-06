"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

import { poppins, figtree, scheherazade_new } from "@/constants/fonts";

const theme = extendTheme({
    colors: {
        purple: {
            1000: "#2d2250",
            1200: "#120e20",
        },
        zz: {
            purpleGray: {
                50: "#625366",
                100: "#7a687f",
                200: "#88778d",
                300: "#97869b",
                400: "#a595a9",
                500: "#b4a5b8",
                600: "#c2b6c6",
                700: "#d1c7d4",
                800: "#e0d9e2",
                900: "#efecf0",
            },
            spaceBg: "#0c0717",
            inputBg: "#302c3a",
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
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                color: "ffffff",
                bg: "#0c0717", // zz.spaceBg
            },
        }),
    },
});

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
