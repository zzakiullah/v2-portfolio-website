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
            className={"min-h-screen"}
            flexDir={"column"}
            alignItems={"center"}
            px={["6rem"]}
            py={["12rem"]}
            gap={16}
        >
            <Intro />
            <Bio />
        </Flex>
    );
}
