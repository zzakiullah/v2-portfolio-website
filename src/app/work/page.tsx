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
            className={"min-h-screen"}
            bgColor={"zz.spaceBg"}
            flexDir={"column"}
            alignItems={"center"}
            px={["6rem"]}
            py={["12rem"]}
            gap={12}
        >
            {workData.map((data, index) => {
                return (
                    <WorkItem
                        key={index}
                        company={data.company}
                        positions={data.positions}
                        description={data.description}
                        url={data.url}
                        tagNums={data.tags}
                    />
                );
            })}
        </Flex>
    );
}
