import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileLines, FaRegCopyright, FaArrowRight } from "react-icons/fa6";

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
          fontSize={["8xl"]}
          fontWeight={"semibold"}
        >
          Hi, I&apos;m Zulaikha
        </Heading>
        <Text
          color={"white"}
          fontSize={["3xl"]}
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
          <Button
            fontSize={["lg"]}
          >
            Learn more about me
          </Button>
          <Button
            fontSize={["lg"]}
          >
           Just get my resume
          </Button>
        </Flex>
      </Flex>
      <Flex
        className={"main-icon-link-wrapper"}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={8}
        zIndex={10}
      >
        <Link
          className={"main-icon-link"}
          href={"mailto:zzakiullah1@gmail.com"}
          isExternal
          color={"white"}
        >
          <FaEnvelope className={"main-icon custom-transition-slow"} />
        </Link>
        <Link
          className={"main-icon-link"}
          href={"https://linkedin.com/in/zulaikha-zakiullah"}
          isExternal
          color={"white"}
        >
          <FaLinkedin className={"main-icon custom-transition-slow"} />
        </Link>
        <Link
          className={"main-icon-link"}
          href={"https://github.com/zzakiullah"}
          isExternal
          color={"white"}
        >
          <FaGithub className={"main-icon custom-transition-slow"} />
        </Link>
        <Link
          className={"main-icon-link"}
          href={"#"}
          isExternal
          color={"white"}
        >
          <FaFileLines className={"main-icon custom-transition-slow"} />
        </Link>
        {/* <Link
          className={"main-icon-link"}
          href={"#"}
          isExternal
          color={"white"}
        >
          <FaRegCopyright className={"main-icon custom-transition-slow"} />
        </Link> */}
      </Flex>
    </Flex>
  );
}
