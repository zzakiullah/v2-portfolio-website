"use client";

import NextLink from "next/link";
import { useRef } from "react";
import { Flex, Box, Heading, Text, Button, Link, Badge, Wrap, WrapItem } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { useInViewport } from "react-in-viewport";

import { tags, Tag } from "@/constants/tags";
import ProgressBar from "@/components/ProgressBar";

interface WorkItemProps {
    company: string;
    position: string;
    duration: string;
    description: JSX.Element;
    img: string;
    blurImg: string;
    url: string;
    tagNums: Tag[];
}

export default function WorkItem({
    company,
    position,
    duration,
    description,
    img,
    blurImg,
    url,
    tagNums,
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
                    // icon={}
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
            >
                <Heading as={"h6"} color={"white"} fontWeight={"medium"} fontSize={["xl"]}>
                    {duration}
                </Heading>
                <Heading as={"h2"} color={"white"} fontWeight={"medium"} fontSize={["4xl"]}>
                    <Link
                        className={"work-link"}
                        href={url}
                        isExternal
                        position={"relative"}
                        _hover={{  }}
                    >
                        {position} &bull; {company}
                        <GoArrowUpRight className={"work-link-icon"} />
                    </Link>
                </Heading>
                <Text color={"zz.textGray"} fontSize={["2xl"]}>
                    {description}
                </Text>
                <Wrap>
                    {tagNums.map((tagNum, index) => {
                        const tag = tags[tagNum];
                        return (
                            <WrapItem key={index} p={1}>
                                <Badge
                                    // as={NextLink}
                                    as={"button"}
                                    onClick={() => console.log(`Clicked ${tag.text}`)}
                                    className={"skill-badge custom-transition-default"}
                                    cursor={"pointer"}
                                    display={"flex"}
                                    flexDirection={"row"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    bgColor={tag.bgColor}
                                    color={tag.color}
                                    fontSize={"lg"}
                                    fontWeight={"semibold"}
                                    px={2}
                                    gap={1}
                                    whiteSpace={"nowrap"}
                                    textTransform={"none"}
                                >
                                    {tag.icon}
                                    {tag.text}
                                </Badge>
                            </WrapItem>
                        );
                    })}
                </Wrap>
            </Flex>
        </Flex>
    );
}
