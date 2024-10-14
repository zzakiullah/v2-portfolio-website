"use client";

import { ReactElement, useRef, useEffect, useState } from "react";
import { Box, Flex, Link, Image, List, ListItem } from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";

import useScrollDirection from "@/hooks/useScrollDirection";

interface ProgressBarProps {
    circleColor: string;
    lineStartColor: string;
    lineEndColor: string;
    icon?: ReactElement;
};

export default function ProgressBar({
    circleColor,
    lineStartColor,
    lineEndColor,
    icon,
}: ProgressBarProps) {
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
            flexDir={"column"}
        >
            {icon ? (
                <Box>
                    {icon}
                </Box>
            ) : (
                <Box
                    bgColor={"transparent"}
                    borderRadius={"50%"}
                    borderColor={"zz.purpleGray.300"}
                    borderWidth={"2px"}
                    w={"12px"}
                    h={"12px"}
                ></Box>
            )}
        </Flex>
    );
}
