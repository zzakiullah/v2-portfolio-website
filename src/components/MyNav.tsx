"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Flex, Link, List, ListItem, Tooltip } from "@chakra-ui/react";
import {
    MdAccountCircle,
    MdBusinessCenter,
    MdFolder,
    MdSchool,
    MdChat,
    MdOutlineAccountCircle,
    MdOutlineBusinessCenter,
    MdOutlineFolderOpen,
    MdOutlineSchool,
    MdOutlineChat,
} from "react-icons/md";

import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function MyNav() {
    const pathname = usePathname();

    const { width, height } = useWindowDimensions();

    return (
        pathname !== "/" && (
            <Flex
                as={"nav"}
                position={"fixed"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                bgColor={"zz.spaceBg"}
                zIndex={1}
                left={0}
                right={{ base: 0, md: "auto" }}
                top={{ base: "auto", md: 0 }}
                bottom={0}
            >
                <List
                    width={{ base: "95%", md: "auto" }}
                    display={"flex"}
                    flexDirection={["row", "column"]}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={6}
                    px={4}
                    py={4}
                    position={"relative"}
                >
                    {navItems.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                color={"zz.purpleGray.200"}
                                fontSize={["2xl", "3xl"]}
                                position={"relative"}
                                transition={"all 0.2s ease-in-out"}
                                role={"group"}
                            >
                                <Tooltip
                                    label={item.label}
                                    isDisabled={width !== undefined && width < 768}
                                    placement={"right"}
                                    hasArrow
                                    bgColor={"purple.1000"}
                                    color={"white"}
                                    fontSize={["xl"]}
                                    position={"relative"}
                                    openDelay={100}
                                    transition={"left 0.1s ease-in-out"}
                                    left={"0px"}
                                    gutter={10}
                                    _groupHover={{ left: "4px" }}
                                >
                                    <Link
                                        as={NextLink}
                                        href={item.href}
                                        position={"relative"}
                                        transition={"all 0.2s ease-in-out"}
                                        left={"0px"}
                                        _groupHover={{ color: "white", left: "4px" }}
                                    >
                                        {pathname === item.href
                                            ? item.iconSelected
                                            : item.iconUnselected}
                                    </Link>
                                </Tooltip>
                            </ListItem>
                        );
                    })}
                </List>
            </Flex>
        )
    );
}

const navItems = [
    {
        label: "About",
        href: "/about",
        iconSelected: <MdAccountCircle className={"nav-selected"} />,
        iconUnselected: <MdOutlineAccountCircle />,
    },
    {
        label: "Work",
        href: "/work",
        iconSelected: <MdBusinessCenter className={"nav-selected"} />,
        iconUnselected: <MdOutlineBusinessCenter />,
    },
    {
        label: "Projects",
        href: "/projects",
        iconSelected: <MdFolder className={"nav-selected"} />,
        iconUnselected: <MdOutlineFolderOpen />,
    },
    {
        label: "Study",
        href: "/study",
        iconSelected: <MdSchool className={"nav-selected"} />,
        iconUnselected: <MdOutlineSchool />,
    },
    {
        label: "Contact",
        href: "/contact",
        iconSelected: <MdChat className={"nav-selected"} />,
        iconUnselected: <MdOutlineChat />,
    },
];
