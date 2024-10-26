"use client";

import NextLink from "next/link";
import { useRef } from "react";
import { Flex, Heading, Text, Wrap, WrapItem, Badge } from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";

import ProgressBar from "@/components/ProgressBar";
import { tags } from "@/constants/tags";

export default function Skills() {
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
                opacity={enterCount > 0 ? 1 : 0.2}
            >
                <Heading as={"h2"} color={"white"} fontWeight={"medium"} fontSize={["4xl"]}>
                    Skills &amp; Technologies
                </Heading>
                <Text color={"zz.textGray"} fontSize={["2xl"]}>
                    I&apos;ve built up a diverse skillset over the years, spanning multiple
                    technical disciplines, and am in constant pursuit of learning more. If
                    you&apos;re interested in seeing how a particular skill was used, click on it to
                    see my relevant experience and projects relating to it.
                </Text>
                <Wrap mt={4} spacing={0}>
                    {tags.map((tag, index) => {
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
                </Wrap>
            </Flex>
        </Flex>
    );
}
