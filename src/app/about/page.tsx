import type { Metadata } from "next";
import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";

import Intro from "./Intro";
import Bio from "./Bio";

export const metadata: Metadata = {
    title: "About",
};

export default function About() {
    return (
        <Flex
            as={"main"}
            className={"min-h-screen px-8 py-48"}
            bgColor={"zz.spaceBg"}
            flexDir={"column"}
            alignItems={"center"}
            px={["2rem"]}
            py={["12rem"]}
        >
            <Intro />
            <Bio />
        </Flex>
    );
}
