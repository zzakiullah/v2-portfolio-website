"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
    Flex,
    Heading,
    Skeleton,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";
import { TzDatabase, now, zone } from "timezonecomplete";
import tzData from "tzdata";

import useWeatherInfo from "@/hooks/useWeatherInfo";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function MyHeader() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentTime, setCurrentTime] = useState<string>("");

    const calculateCurrentTime = () => {
        TzDatabase.init(tzData);
        const dtNow = now(zone("America/Toronto"));
        return dtNow.format("HH:mm");
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTime(calculateCurrentTime());
        }, 1000);

        setCurrentTime(calculateCurrentTime());
        setIsLoading(false);

        return () => clearTimeout(timer);
    }, []);

    const pathname = usePathname();

    const { weatherEmoji, fetchingWeatherData } = useWeatherInfo();
    const { width } = useWindowDimensions();

    return (
        (pathname !== "/") &&
        <Flex
            as={"header"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            position={"fixed"}
            top={0}
            left={0}
            right={0}
            zIndex={5}
            gap={4}
        >
            <Breadcrumb
                color={"white"}
                separator={
                    <Flex
                        as={"span"}
                        color={"zz.textGray"}
                        fontFamily={"heading"}
                        fontSize={["xl"]}
                        fontWeight={["medium"]}
                    >
                        /
                    </Flex>}
            >
                <BreadcrumbItem
                    fontFamily={"heading"}
                    fontSize={["xl"]}
                    fontWeight={["medium"]}
                >
                    <BreadcrumbLink as={NextLink} href={"/"}>
                        {(width && width >= 640) ? "Zulaikha Zakiullah" : "Zulaikha"}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem
                    isCurrentPage
                    fontFamily={"heading"}
                    fontSize={["xl"]}
                    fontWeight={["medium"]}
                >
                    <BreadcrumbLink as={NextLink} href={"/"}>
                        {`${pathname.charAt(1).toUpperCase()}${pathname.slice(2)}`}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex
                color={"white"}
                fontFamily={"heading"}
                fontSize={["xl"]}
                fontWeight={["medium"]}
            >
                {weatherEmoji} {currentTime} EST
            </Flex>
        </Flex>
    );
}
