"use client";

import { useEffect, useRef, useState } from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { MdVolumeUp } from "react-icons/md";
import { useInViewport } from "react-in-viewport";

// import useScrollDirection from "@/hooks/useScrollDirection";
// import ProgressBar from "@/components/ProgressBar";

export default function Intro() {
    const ref = useRef(null);

    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    const { enterCount } = useInViewport(
        ref,
        { rootMargin: "-40% 0% -40% 0%" },
        { disconnectOnLeave: false },
        {},
    );

    useEffect(() => {
        setAudio(new Audio("/assets/zulaikha.mp3"));
    }, []);

    const playAudio = () => {
        audio?.play();
    };

    // const { scrollDirection, scrollY } = useScrollDirection();

    return (
        <Flex ref={ref} width={"100%"} flexDir={"row"} justifyContent={"center"} gap={12}>
            {/* <Flex
                flexDir={"column"}
                alignItems={"end"}
                flexBasis={["100px"]}
                flexGrow={0}
                flexShrink={0}
            >
                <ProgressBar circleColor={""} lineStartColor={""} lineEndColor={""} />
            </Flex> */}
            <Flex
                className={"custom-transition-default"}
                flexDir={"column"}
                alignItems={"start"}
                justifyContent={"center"}
                gap={2}
                // my={[2]}
                // mx={[2, 10]}
                px={4}
                opacity={enterCount > 0 ? 1 : 0.2}
                width={["95%", "95%", "90%", "85%", "80%", "1280px"]}
                // w={["1000px"]}
            >
                <Heading as={"h2"} fontSize={["5xl"]} fontWeight={"medium"} color={"white"}>
                    In case you&apos;re wondering...
                </Heading>
                <Text fontSize={["3xl"]} color={"zz.textGray"}>
                    It&apos;s pronounced&nbsp;
                    <Box
                        as={"button"}
                        onClick={playAudio}
                        className={"custom-transition-default"}
                        fontFamily={"arabic"}
                        textDecoration={"underline"}
                        textDecorationStyle={"dotted"}
                        color={"white"}
                        _hover={{ color: "purple.200" }}
                        _focus={{ color: "purple.200" }}
                    >
                        <Flex as={"span"} flexDir={"row"} alignItems={"center"} gap={2}>
                            زُلَيْخَة
                            <MdVolumeUp />
                        </Flex>
                    </Box>
                    &nbsp;but you can just call me&nbsp;
                    <Flex as={"span"} display={"inline"} color={"white"} whiteSpace={"nowrap"}>
                        &quot;Zoo-lay-ka&quot;
                    </Flex>
                    &nbsp;if that&apos;s easier. 🙂
                </Text>
            </Flex>
        </Flex>
    );
}
