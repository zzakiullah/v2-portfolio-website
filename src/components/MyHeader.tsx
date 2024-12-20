"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Flex, Skeleton, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { TzDatabase, now, zone } from "timezonecomplete";
import tzData from "tzdata";

import useWeatherInfo from "@/hooks/useWeatherInfo";
// import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function MyHeader() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentTime, setCurrentTime] = useState<string>("--:--");

    const calculateCurrentTime = () => {
        const dtNow = now(zone("America/Toronto"));
        return dtNow.format("HH:mm");
    };

    useEffect(() => {
        TzDatabase.init(tzData);

        const intervalId = setInterval(() => {
            setCurrentTime(calculateCurrentTime());
        }, 1000);

        setCurrentTime(calculateCurrentTime());

        return () => clearInterval(intervalId);
    }, []);

    const pathname = usePathname();

    const { weatherEmoji, fetchingWeatherData } = useWeatherInfo();

    useEffect(() => {
        if (!fetchingWeatherData) {
            setIsLoading(false);
        }
    }, [fetchingWeatherData]);

    return (
        pathname !== "/" && (
            <Flex
                as={"header"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                position={"fixed"}
                bgColor={"zz.spaceBg"}
                zIndex={5}
                top={0}
                left={0}
                right={0}
            >
                <Flex
                    width={["95%", "95%", "90%", "85%", "80%", "1280px"]}
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={4}
                    px={4}
                    py={4}
                    borderBottomColor={"zz.purpleGray.50"}
                    borderBottomWidth={"1px"}
                >
                    <Breadcrumb
                        color={styles.header.color}
                        fontFamily={styles.header.fontFamily}
                        fontSize={styles.header.fontSize}
                        fontWeight={styles.header.fontWeight}
                        separator={
                            <Flex as={"span"} color={"zz.textGray"}>
                                /
                            </Flex>
                        }
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink as={NextLink} href={"/"}>
                                <Box as={"span"} className={"flex sm:hidden"}>
                                    Zulaikha
                                </Box>
                                <Box as={"span"} className={"hidden sm:flex"}>
                                    Zulaikha Zakiullah
                                </Box>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>
                                {`${pathname.charAt(1).toUpperCase()}${pathname.slice(2)}`}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Skeleton
                        isLoaded={!isLoading}
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"end"}
                        width={["140px"]}
                    >
                        <Flex
                            color={styles.header.color}
                            fontFamily={styles.header.fontFamily}
                            fontSize={styles.header.fontSize}
                            fontWeight={styles.header.fontWeight}
                        >
                            {weatherEmoji}&ensp;{currentTime}&ensp;EST
                        </Flex>
                    </Skeleton>
                </Flex>
            </Flex>
        )
    );
}

const styles = {
    header: {
        color: "white",
        fontFamily: "heading",
        fontSize: ["md", "lg", "xl"],
        fontWeight: "medium",
    },
};
