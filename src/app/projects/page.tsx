import type { Metadata } from "next";
import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";

export const metadata: Metadata = {
    title: "Projects",
};

export default function Projects() {

    return (
        <Flex
            as={"main"}
            className={"min-h-screen px-8 py-48"}
            bgColor={"zz.spaceBg"}
            flexDir={"column"}
            alignItems={"center"}
            zIndex={10}
            px={["2rem"]}
            py={["12rem"]}
        >
            
        </Flex>
    );
}
