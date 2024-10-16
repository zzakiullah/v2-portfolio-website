"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Flex, Heading, Link, Image, Skeleton } from "@chakra-ui/react";
import { now, zone } from "timezonecomplete";

import useWeatherInfo from "@/hooks/useWeatherInfo";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function MyHeader() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentTime, setCurrentTime] = useState<string>("");

    const calculateCurrentTime = () => {
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

    const { weatherEmoji } = useWeatherInfo();
    const { width } = useWindowDimensions();

    return (
        (pathname !== "/") &&
        <Flex
            as={"header"}
            flexDirection={"row"}
            alignItems={"space-between"}
            justifyContent={"center"}
            position={"fixed"}
        >
            <Flex
                flexDirection={"row"}
            >
                <Heading>
                    <Link
                        as={NextLink}
                        href={"/"}
                    >
                        {(width && width >= 640) ? "Zulaikha Zakiullah" : "Zulaikha"}
                    </Link>
                </Heading>
                <Heading>
                    /
                </Heading>
                <Heading>
                    <Link
                        as={NextLink}
                        href={pathname}
                    >
                        {`${pathname.charAt(1).toUpperCase()}${pathname.slice(2)}`}
                    </Link>
                </Heading>
            </Flex>
            <Flex>
                {weatherEmoji} {currentTime} EST
            </Flex>
        </Flex>
    );
}
