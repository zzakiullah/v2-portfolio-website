"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Box, Flex, Link, Image, List, ListItem } from "@chakra-ui/react";
import { Twirl as Hamburger } from "hamburger-react";

import useScrollDirection from "@/hooks/useScrollDirection";

export default function MyNav() {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const { scrollDirection, scrollY } = useScrollDirection();

    return (
        <Flex
            as={"nav"}
            position={"sticky"}
        >
            
        </Flex>
    );
}
