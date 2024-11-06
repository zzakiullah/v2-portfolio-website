"use client";

import { useEffect, useState } from "react";
import { Flex, Box, Heading, Text, Input, Select } from "@chakra-ui/react";
import { MdCategory, MdSwapVert, MdFormatListBulleted, MdApps } from "react-icons/md";

import { figtree } from "@/constants/fonts";
import ProjectItem from "./ProjectItem";
import projectData from "./projectData";

interface IProject {
    title: string;
    description: JSX.Element;
    srcUrl?: string;
    demoUrl?: string;
    tags: string[];
}

export default function ProjectLayout() {
    const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);

    useEffect(() => {

    }, []);

    return (
        <>
            <Flex
                flexDir={"column"}
                alignItems={"center"}
            >
                <Input
                    placeholder={"Search project..."}
                />
            </Flex>
            <Flex
                flexDir={"column"}
                alignItems={"center"}
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
        </>
    );
}
