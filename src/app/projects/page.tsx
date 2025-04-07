import type { Metadata } from "next";
import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";

import ProjectItem from "./ProjectItem";
import projectData from "./projectData";

export const metadata: Metadata = {
    title: "Projects",
};

export default function Projects() {
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
            {projectData.map((data, index) => {
                return (
                    <ProjectItem
                        key={index}
                        title={data.title}
                        description={data.description}
                        srcUrl={data.srcUrl}
                        demoUrl={data.demoUrl}
                        tags={data.tags}
                    />
                );
            })}
        </Flex>
    );
}
