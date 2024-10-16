"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Flex, Link, Image, List, ListItem } from "@chakra-ui/react";
import { Twirl as Hamburger } from "hamburger-react";
import {
    // MdHome,
    MdFace,
    MdBusinessCenter,
    MdFolderOpen,
    MdChat,
    // MdOutlineHome,
    MdOutlineFace,
    MdOutlineBusinessCenter,
    MdOutlineFolderOpen,
    MdOutlineChat,
} from "react-icons/md";

export default function MyNav() {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const pathname = usePathname();

    return (
        (pathname !== "/") &&
        <Flex
            as={"nav"}
            position={"fixed"}
        >
            <List>
                <ListItem>
                    <Link
                        as={NextLink}
                        href={"/"}
                    >
                        Home
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        as={NextLink}
                        href={"/about"}
                    >
                        About
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        as={NextLink}
                        href={"/experience"}
                    >
                        Experience
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        as={NextLink}
                        href={"/projects"}
                    >
                        Projects
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        as={NextLink}
                        href={"/contact"}
                    >
                        Contact
                    </Link>
                </ListItem>
            </List>
        </Flex>
    );
}
