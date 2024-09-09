import { Flex, Heading, Text, Button, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      as={"main"}
      className={"main-bg min-h-screen"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <Heading
        as={"h1"}
        color={"white"}
        fontSize={["7xl"]}
      >
        Hi, I&apos;m Zulaikha
      </Heading>
      {/* <Text
        color={"white"}
        fontSize={["4xl"]}
      >
        I make stuff
      </Text> */}
    </Flex>
  );
}
