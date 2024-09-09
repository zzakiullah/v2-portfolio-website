import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaRegCopyright, FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <Flex
      as={"main"}
      className={"main-bg min-h-screen p-8"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box className="star-field">
        <Box className="layer"></Box>
        <Box className="layer"></Box>
        <Box className="layer"></Box>
      </Box>
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      ></Flex>
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        zIndex={10}
      >
        <Heading
          as={"h1"}
          color={"white"}
          fontSize={["7xl"]}
        >
          Hi, I&apos;m Zulaikha
        </Heading>
        <Text
          color={"white"}
          fontSize={["2xl"]}
        >
          Welcome to my space. Feel free to&nbsp;
          <Box
            as={"button"}
            className={"secret-btn"}
          >
            click things
          </Box>
          .
        </Text>
        <Flex
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          mt={4}
          zIndex={10}
        >
          <Button>
            Explore
          </Button>
          <Button>
            Resume
          </Button>
        </Flex>
      </Flex>
      <Flex
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={8}
        zIndex={10}
      >
        <Link
          href={"mailto:zzakiullah1@gmail.com"}
          isExternal
          color={"white"}
        >
          <FaEnvelope className={"main-icon"} />
        </Link>
        <Link
          href={"https://linkedin.com/in/zulaikha-zakiullah"}
          isExternal
          color={"white"}
        >
          <FaLinkedin className={"main-icon"} />
        </Link>
        <Link
          href={"https://github.com/zzakiullah"}
          isExternal
          color={"white"}
        >
          <FaGithub className={"main-icon"} />
        </Link>
        <Link
          href={"#"}
          isExternal
          color={"white"}
        >
          <FaRegCopyright className={"main-icon"} />
        </Link>
      </Flex>
    </Flex>
  );
}
