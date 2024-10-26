"use client";

import NextLink from "next/link";
import { useRef } from "react";
import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";

import { Tag } from "@/constants/tags";
import ProgressBar from "@/components/ProgressBar";

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
    const ref = useRef(null);

    const { enterCount } = useInViewport(
        ref,
        { rootMargin: "-40% 0% -40% 0%" },
        { disconnectOnLeave: false },
        {},
    );

    return (
        <Flex ref={ref} width={"100%"} flexDir={"row"} gap={12}>
            <Flex
                flexDir={"column"}
                alignItems={"end"}
                flexBasis={["100px"]}
                flexGrow={0}
                flexShrink={0}
            >
                <ProgressBar
                    circleColor={""}
                    lineStartColor={""}
                    lineEndColor={""}
                    // icon={<MdOutlineFace />}
                />
            </Flex>
            <Flex
                className={"custom-transition-default"}
                flexDir={"column"}
                alignItems={"start"}
                justifyContent={"center"}
                gap={2}
                my={[2]}
                opacity={enterCount > 0 ? 1 : 0.2}
                // w={["1000px"]}
            ></Flex>
        </Flex>
    );
}
