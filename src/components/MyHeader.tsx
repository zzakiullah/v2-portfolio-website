"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Flex, Link, Image, List, ListItem } from "@chakra-ui/react";

export default function MyHeader() {
    const pathname = usePathname();

    return (
        (pathname !== "/") &&
        <Flex
            as={"header"}
            direction={"row"}
            alignItems={"space-between"}
            justifyContent={"center"}
            position={"fixed"}
        >
            
        </Flex>
    );
}
