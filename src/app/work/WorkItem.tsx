"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { useRef } from "react";
import { Flex, Box, Heading, Text, Button, Link, Badge, Wrap, WrapItem } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { useInViewport } from "react-in-viewport";

import { tags, Tag } from "@/constants/tags";
import ProgressBar from "@/components/ProgressBar";

interface IPosition {
    name: string;
    duration: string;
}

interface WorkItemProps {
    company: string;
    positions: IPosition[];
    description: JSX.Element;
    img: string;
    blurImg: string;
    url: string;
    tagNums: Tag[];
}

export default function WorkItem({
    company,
    positions,
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
            >
                <NextImage
                    className="w-full h-full object-cover"
                    alt={`${company} logo`}
                    src={`/work/${img}`}
                    blurDataURL={`/work}/${blurImg}`}
                    placeholder="blur"
                    width={1000}
                    height={1000}
                />
                <Heading as={"h2"} color={"white"} fontWeight={"medium"} fontSize={["4xl"]}>
                    {company}
                </Heading>
                {positions.map((position, index) => {
                    return (
                        <Flex key={index}>
                            <Heading as={"h3"} color={"white"} fontWeight={"medium"} fontSize={["3xl"]}>
                                {position.name}
                            </Heading>
                            <Heading as={"h3"} color={"white"} fontWeight={"medium"} fontSize={["3xl"]}>
                                {position.duration}
                            </Heading>
                        </Flex>
                    );
                })}
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
                <Link href={url} isExternal>
                    Company website
                    <FiExternalLink />
                </Link>
            </Flex>
        </Flex>
    );
}
