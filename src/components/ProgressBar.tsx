"use client";

import { ReactElement, useEffect, useState } from "react";
import { Box, Flex, Link, Image, List, ListItem } from "@chakra-ui/react";

import useScrollDirection from "@/hooks/useScrollDirection";

interface ProgressBarProps {
    color: string;
    circleColor: string;
    lineColor: string;
    icon?: ReactElement;
};

export default function ProgressBar({
    color,
    circleColor,
    lineColor,
    icon,
}: ProgressBarProps) {

    const { scrollDirection, scrollY } = useScrollDirection();

    return (
        <Flex
            flexDir={"column"}
        >
            {icon ? (
                <Box>

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
