"use client";

import { useEffect, useRef, useState } from "react";
import { Flex, Heading, Text, Wrap, WrapItem, Badge, Select } from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";

import ProgressBar from "@/components/ProgressBar";
import { tags, ITag, tagTypeNames } from "@/constants/tags";

export default function Skills() {
    const ref = useRef(null);

    const { enterCount } = useInViewport(
        ref,
        { rootMargin: "-40% 0% -40% 0%" },
        { disconnectOnLeave: false },
        {},
    );

    const [selectValue, setSelectValue] = useState<string>("0");
    const [filteredTags, setFilteredTags] = useState<ITag[]>(tags);

    useEffect(() => {
        setFilteredTags(
            selectValue === "0" ? tags : tags.filter((tag) => tag.filters.includes(selectValue)),
        );
    }, [selectValue]);

    return (
        <Flex ref={ref} className={"w-full"} flexDir={"row"} gap={12}>
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
                    there&apos;s a certain subset of skills you&apos;re interested in checking out,
                    use the filter below.
                </Text>
                <Select
                    onChange={(event) => {
                        setSelectValue(event.target.value);
                    }}
                    value={selectValue}
                    size={"md"}
                >
                    {tagTypeNames.map((tagType, index) => {
                        return (
                            <option key={index} value={tagType.value}>
                                {tagType.label}
                            </option>
                        );
                    })}
                </Select>
                <Text color={"zz.textGray"} fontSize={["2xl"]}>
                    Displaying {filteredTags.length} of {tags.length} skills
                </Text>
                <Wrap>
                    {tags.map((tag, index) => {
                        return (
                            <WrapItem key={index}>
                                <Badge
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
