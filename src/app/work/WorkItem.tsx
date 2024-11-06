"use client";

import NextLink from "next/link";
import { useRef } from "react";
import { Flex, Heading, Text, Link, Tag, Wrap, WrapItem } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { useInViewport } from "react-in-viewport";

// import { tags, Tag } from "@/constants/tags";
import ProgressBar from "@/components/ProgressBar";

interface IPosition {
    name: string;
    duration: string;
}

interface WorkItemProps {
    company: string;
    positions: IPosition[];
    description: JSX.Element;
    url: string;
    tags: string[];
}

export default function WorkItem({ company, positions, description, url, tags }: WorkItemProps) {
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
                <Heading
                    as={"h2"}
                    color={"white"}
                    fontWeight={"semibold"}
                    fontSize={["2xl", "3xl"]}
                    position={"relative"}
                >
                    {company}
                </Heading>
                {positions.map((position, index) => {
                    return (
                        <Heading
                            key={index}
                            as={"h3"}
                            color={`purple.${400 + 200 * index}`}
                            fontWeight={"medium"}
                            fontSize={["lg", "xl"]}
                        >
                            {position.name} &bull; {position.duration}
                        </Heading>
                    );
                })}
                <Text color={"zz.textGray"} fontSize={["xl"]}>
                    {description}
                </Text>
                <Wrap spacing={0} mx={-1}>
                    {tags.map((tag, index) => {
                        return (
                            <WrapItem
                                className={"skill-tag-wrapper custom-transition-default"}
                                key={index}
                                p={1}
                            >
                                <Tag
                                    // as={NextLink}
                                    // as={"button"}
                                    // onClick={() => console.log(`Clicked ${tag}`)}
                                    className={"skill-tag custom-transition-default"}
                                    // cursor={"pointer"}
                                    borderRadius={"full"}
                                    px={3}
                                    py={1.5}
                                    bgColor={"purple.900"}
                                    color={"purple.100"}
                                    size={"md"}
                                >
                                    {tag}
                                </Tag>
                            </WrapItem>
                        );
                    })}
                </Wrap>
                <Flex mt={2}>
                    <Link
                        className={"work-link custom-transition-fast"}
                        href={url}
                        isExternal
                        position={"relative"}
                        color={"white"}
                        fontSize={["xl"]}
                        // textDecoration={"underline"}
                        _hover={{ color: "purple.200" }}
                    >
                        Company Website
                        <GoArrowUpRight className={"work-link-icon custom-transition-fast ml-1"} />
                    </Link>
                </Flex>
                {/* <Wrap spacing={0} mx={-1} mt={2}>
                    {tagNums.map((tagNum, index) => {
                        const tag = tags[tagNum];
                        return (
                            <WrapItem
                                className={"skill-badge-wrapper custom-transition-default"}
                                key={index}
                                p={1}
                            >
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
                </Wrap> */}
            </Flex>
        </Flex>
    );
}
