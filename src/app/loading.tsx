import { Flex } from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex
            as={"main"}
            className={"min-h-screen"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={8}
        ></Flex>
    );
}
