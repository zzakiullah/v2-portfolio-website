"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Flex, Link, Image, List, ListItem } from "@chakra-ui/react";
// import { Twirl as Hamburger } from "hamburger-react";
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
    // const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const pathname = usePathname();

    return (
        pathname !== "/" && (
            <Flex
                as={"nav"}
                position={"fixed"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                bgColor={"zz.spaceBg"}
                left={0}
                right={0}
                bottom={0}
            >
                <List
                    width={["95%", "95%", "90%", "85%", "80%", "1280px"]}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={4}
                    px={4}
                    py={4}
                    // borderTopColor={"zz.textGray"}
                    // borderTopWidth={"1px"}
                >
                    {/* <ListItem>
                    <Link
                        as={NextLink}
                        href={"/"}
                    >
                        Home
                    </Link>
                </ListItem> */}
                    <ListItem>
                        <Link as={NextLink} href={"/about"}>
                            {/* About */}
                            {pathname === "/about" ? <MdFace /> : <MdOutlineFace />}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link as={NextLink} href={"/work"}>
                            {/* Work */}
                            {pathname === "/work" ? (
                                <MdBusinessCenter />
                            ) : (
                                <MdOutlineBusinessCenter />
                            )}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link as={NextLink} href={"/projects"}>
                            {/* Projects */}
                            {pathname === "/projects" ? <MdFolderOpen /> : <MdOutlineFolderOpen />}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link as={NextLink} href={"/contact"}>
                            {/* Contact */}
                            {pathname === "/contact" ? <MdChat /> : <MdOutlineChat />}
                        </Link>
                    </ListItem>
                </List>
            </Flex>
        )
    );
}
