import { Poppins, Figtree, Scheherazade_New } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const figtree = Figtree({ subsets: ["latin"] });

export const scheherazade_new = Scheherazade_New({
    weight: ["400", "500", "600", "700"],
    subsets: ["arabic"],
});
