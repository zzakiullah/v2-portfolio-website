"use client";

import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import {
    Flex,
    Heading,
    Text,
    UnorderedList,
    ListItem,
    Link,
    Image,
} from "@chakra-ui/react";
// import { MdOutlineFace, MdOutlineWavingHand } from "react-icons/md";
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
                    More about me
                </Heading>
                <Text
                    color={"zz.textGray"}
                    fontSize={["2xl"]}
                >
                    I&apos;m a recent graduate of the University of Waterloo with a BASc in
                    Electrical Engineering. I have experience in PCB and RTL design, and a
                    strong background in software development, including full-stack, mobile app,
                    and firmware development. I&apos;m currently interested in:
                </Text>
                <UnorderedList
                    color={"zz.textGray"}
                    fontSize={["2xl"]}
                    ml={[16]}
                >
                    <ListItem>
                        ⚡ SoC design for biomedical applications
                    </ListItem>
                    <ListItem>
                        🧠 Cost-effective and open-source EEG hardware
                    </ListItem>
                    <ListItem>
                        ✨ Deep learning algorithms for BCIs
                    </ListItem>
                </UnorderedList>
                <Text
                    color={"zz.textGray"}
                    fontSize={["2xl"]}
                >
                    Aside from that, I enjoy casual chess, crocheting, and playing video games.
                    Due to my background, I also grew up learning a variety of languages, including
                    Arabic, Bengali, and Bahasa Melayu, among others. For more on this, you can
                    visit my&nbsp;
                    <Link
                        as={NextLink}
                        href={"/study"}
                        color={"white"}
                        textDecoration={"underline"}
                        textDecorationStyle={"dotted"}
                    >
                        study
                    </Link>
                    .
                </Text>
            </Flex>
        </Flex>
    );
}
