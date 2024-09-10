"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Flex, Heading, Text, Link, Image } from "@chakra-ui/react";
import { MdOutlineFace, MdOutlineWavingHand } from "react-icons/md";

import ProgressBar from "@/components/ProgressBar";

export default function About() {

    return (
        <Flex
            className={"w-full"}
            flexDir={"row"}
        >
            <ProgressBar
                color={""}
                icon={<MdOutlineFace />}
            />
            <Flex
                flexDir={"column"}
                flexGrow={1}
                alignItems={"start"}
                justifyContent={"center"}
            >
                <Heading
                    as="h2"
                    color={"white"}
                    fontWeight={"medium"}
                >
                    About me
                </Heading>
                <Text>
                    I ...
                </Text>
            </Flex>
        </Flex>
    );
}
