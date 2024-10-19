"use client";

import { useEffect, useRef, useState } from "react";
import {
    Flex,
    Heading,
    Text,
    Link,
    Image,
} from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";

import ProgressBar from "@/components/ProgressBar";
import SkillBadge from "@/components/SkillBadge";

export default function Skills() {
    const ref = useRef(null);

    const { enterCount } = useInViewport(
        ref,
        { rootMargin: "-40% 0% -40% 0%" },
        { disconnectOnLeave: false },
        {},
    );

    return (
        <Flex
            ref={ref}
            className={"w-full"}
            flexDir={"row"}
            gap={12}
            // border="1px solid red"
        >
            <Flex
                flexDir={"column"}
                alignItems={"end"}
                flexBasis={["100px"]}
                flexGrow={0}
                flexShrink={0}
                // border="1px solid red"
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
                <Heading
                    as={"h2"}
                    color={"white"}
                    fontWeight={"medium"}
                    fontSize={["4xl"]}
                >
                    Skills
                </Heading>
                <Text
                    color={"zz.textGray"}
                    fontSize={["2xl"]}
                >
                    Hello ...
                </Text>
            </Flex>
        </Flex>
    );
}
