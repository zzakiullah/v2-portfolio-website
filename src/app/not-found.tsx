import NextLink from "next/link";
import { Flex, Heading, Text, Link } from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex
            as={"main"}
            className={"min-h-screen"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={8}
        >
            <Flex
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                zIndex={5}
            >
                <Heading
                    as={"h1"}
                    color={"white"}
                    fontSize={["4xl", "5xl", "6xl", "7xl", "7xl", "8xl"]}
                    fontWeight={"semibold"}
                    textAlign={"center"}
                >
                    404
                </Heading>
                <Text
                    color={"zz.textGray"}
                    fontSize={["lg", "xl", "xl", "2xl", "2xl", "3xl"]}
                    textAlign={"center"}
                >
                    Looks like the page you were looking for doesn&apos;t exist. 🙁
                </Text>
                <Text
                    color={"zz.textGray"}
                    fontSize={["lg", "xl", "xl", "2xl", "2xl", "3xl"]}
                    textAlign={"center"}
                >
                    <Link
                        as={NextLink}
                        href={"/"}
                        color={"white"}
                        textDecoration={"underline"}
                    >
                        Click here
                    </Link>
                    &nbsp;to go home.
                </Text>
            </Flex>
        </Flex>
    );
}
