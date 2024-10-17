"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Flex, Link, List, ListItem, Tooltip } from "@chakra-ui/react";
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

    function getMarkerNum(): number {
        switch (pathname) {
            case "/about":
                return 1;
            case "/work":
                return 2;
            case "/projects":
                return 3;
            case "/study":
                return 4;
            case "/contact":
                return 5;
            default:
                return 0;
        }
    }

    const [markerNum, setMarkerNum] = useState<number>(getMarkerNum());

    useEffect(() => {
        setMarkerNum(getMarkerNum());
    }, [pathname]);

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
                <Box position={"relative"} mx={4} my={4}>
                    <Box className={`nav-marker nav-marker-${markerNum}`}></Box>
                    <List
                        display={"flex"}
                        flexDirection={{ base: "row", md: "column" }}
                        alignItems={"center"}
                        justifyContent={"center"}
                        position={"relative"}
                    >
                        {navItems.map((item, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    color={"zz.purpleGray.200"}
                                    fontSize={["2xl", "3xl"]}
                                    position={"relative"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    width={{ base: "50px", md: "auto" }}
                                    height={{ base: "auto", md: "50px" }}
                                >
                                    <Box position={"relative"} role={"group"}>
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
                                            gutter={10}
                                        >
                                            <Link
                                                as={NextLink}
                                                href={item.href}
                                                position={"relative"}
                                                transition={"all 0.1s ease-in-out"}
                                                left={"0px"}
                                                bottom={"0px"}
                                                _groupHover={{
                                                    color: "white",
                                                    left: { base: "0px", md: "4px" },
                                                    bottom: { base: "4px", md: "0px" },
                                                }}
                                            >
                                                {pathname === item.href
                                                    ? item.iconSelected
                                                    : item.iconUnselected}
                                            </Link>
                                        </Tooltip>
                                    </Box>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
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
