"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Flex, Link, Image, List, ListItem } from "@chakra-ui/react";
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
                right={[0, "auto"]}
                top={["auto", 0]}
                bottom={0}
            >
                <List
                    width={["95%", "auto"]}
                    display={"flex"}
                    flexDirection={["row", "column"]}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={4}
                    px={4}
                    py={4}
                >
                    {navItems.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                color={styles.listItem.color}
                                fontSize={styles.listItem.fontSize}
                            >
                                <Link as={NextLink} href={item.href}>
                                    {pathname === item.href
                                        ? item.iconSelected
                                        : item.iconUnselected}
                                </Link>
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

const styles = {
    listItem: {
        color: "zz.purpleGray.200",
        fontSize: ["2xl", "3xl"],
    },
};
