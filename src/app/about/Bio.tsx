"use client";

import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { Flex, Heading, Text, Link, Image } from "@chakra-ui/react";
import { MdOutlineFace, MdOutlineWavingHand } from "react-icons/md";
import { useInViewport } from "react-in-viewport";

import ProgressBar from "@/components/ProgressBar";

export default function Bio() {
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
            <Flex w={["100px"]}>
                <ProgressBar
                    circleColor={""}
                    lineStartColor={""}
                    lineEndColor={""}
                    icon={<MdOutlineFace />}
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
                    More about me
                </Heading>
                <Text
                    color={"zz.textGray"}
                    fontSize={["2xl"]}
                >
                    I ...
                </Text>
                <Text
                    color={"zz.textGray"}
                    fontSize={["2xl"]}
                >
                    Aside from that, I ...
                </Text>
            </Flex>
        </Flex>
    );
}
