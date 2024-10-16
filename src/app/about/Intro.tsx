"use client";

import { useRef } from "react";
import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import { MdVolumeUp } from "react-icons/md";
import { useInViewport } from "react-in-viewport";

import useScrollDirection from "@/hooks/useScrollDirection";
import ProgressBar from "@/components/ProgressBar";

export default function Intro() {
    const ref = useRef(null);

    const { enterCount } = useInViewport(
        ref,
        { rootMargin: "-40% 0% -40% 0%" },
        { disconnectOnLeave: false },
        {},
    );

    const { scrollDirection, scrollY } = useScrollDirection();

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
                w={["160px"]}
            >
                <ProgressBar
                    circleColor={""}
                    lineStartColor={""}
                    lineEndColor={""}
                />
            </Flex>
            <Flex
                className={"custom-transition-default"}
                flexDir={"column"}
                alignItems={"start"}
                justifyContent={"center"}
                gap={2}
                my={[2]}
                opacity={(enterCount > 0) ? 1 : 0.2}
                // w={["1000px"]}
                // border="1px solid blue"
            >
                <Heading
                    as={"h2"}
                    fontSize={["7xl"]}
                    fontWeight={"medium"}
                    color={"white"}
                >
                    Now, before you ask...
                </Heading>
                <Text
                    fontSize={["3xl"]}
                    color={"zz.textGray"}
                >
                    It&apos;s pronounced&nbsp;
                    <Box
                        as={"button"}
                        className={"custom-transition-default"}
                        fontFamily={"arabic"}
                        textDecoration={"underline"}
                        textDecorationStyle={"dotted"}
                        color={"white"}
                        _hover={{ color: "purple.200" }}
                        _focus={{ color: "purple.200" }}
                    >
                        <Flex
                            as={"span"}
                            flexDir={"row"}
                            alignItems={"center"}
                            gap={2}
                        >
                            زُلَيْخَة
                            <MdVolumeUp />
                        </Flex>
                    </Box>
                    &nbsp;but you can just call me&nbsp;
                    <Flex
                        as={"span"}
                        display={"inline"}
                        color={"white"}
                    >
                        &quot;Zoo-lay-ka&quot;
                    </Flex>
                    &nbsp;if that&apos;s easier. 🙂
                </Text>
            </Flex>
        </Flex>
    );
}
