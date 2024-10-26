"use client";

import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";

import { Tag } from "@/constants/tags";

interface IPosition {
    name: string;
    duration: string;
}

interface WorkItemProps {
    company: string;
    positions: IPosition[];
    description: JSX.Element;
    logo: string;
    blurLogo: string;
    url: string;
    tags: Tag[];
}

export default function WorkItem({
    company,
    positions,
    description,
    logo,
    blurLogo,
    url,
    tags,
}: WorkItemProps) {
    return <Flex></Flex>;
}
