"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Flex, Link, Image, List, ListItem } from "@chakra-ui/react";
// import { Twirl as Hamburger } from "hamburger-react";
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

export default function MyNav() {
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
                right={[0, "auto"]}
                top={["auto", 0]}
                bottom={0}
            >
                <List
                    width={["95%", "95%", "90%", "85%", "80%", "1280px"]}
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
        iconSelected: <MdAccountCircle />,
        iconUnselected: <MdOutlineAccountCircle />,
    },
    {
        label: "Work",
        href: "/work",
        iconSelected: <MdBusinessCenter />,
        iconUnselected: <MdOutlineBusinessCenter />,
    },
    {
        label: "Projects",
        href: "/projects",
        iconSelected: <MdFolder />,
        iconUnselected: <MdOutlineFolderOpen />,
    },
    {
        label: "Study",
        href: "/study",
        iconSelected: <MdSchool />,
        iconUnselected: <MdOutlineSchool />,
    },
    {
        label: "Contact",
        href: "/contact",
        iconSelected: <MdChat />,
        iconUnselected: <MdOutlineChat />,
    },
];

const styles = {
    listItem: {
        color: "white",
        fontSize: ["3xl"],
    },
};
