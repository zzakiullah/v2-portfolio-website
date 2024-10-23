import type { Metadata } from "next";
import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";

import WorkItem from "./WorkItem";
import { workData } from "./workData";

export const metadata: Metadata = {
    title: "Work",
};

export default function Work() {
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
            {workData.map((data, index) => {
                return <WorkItem key={index} />;
            })}
        </Flex>
    );
}
