"use client";

import { useState } from "react";
import { Flex, Heading, Text, Link, Tag, Wrap, WrapItem } from "@chakra-ui/react";
// import { GoArrowUpRight } from "react-icons/go";

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

    return (
        <Flex>
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
