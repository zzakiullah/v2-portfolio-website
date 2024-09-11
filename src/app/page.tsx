import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileLines, FaArrowRight } from "react-icons/fa6";
import { MdVolumeUp } from "react-icons/md";

import MyNav from "@/components/MyNav";
import MyFooter from "@/components/MyFooter";
import ProgressBar from "@/components/ProgressBar";

import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Flex
        as={"header"}
        className={"min-h-screen p-8"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
          className="main-bg min-h-screen fixed inset-0"
          zIndex={0}
        />
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
          zIndex={5}
        >
          <Heading
            as={"h1"}
            color={"white"}
            fontSize={["4xl", "5xl", "6xl", "7xl", "7xl", "8xl"]}
            fontWeight={"semibold"}
            textAlign={"center"}
          >
            Hi, I&apos;m Zulaikha
          </Heading>
          <Text
            color={"zz.textGray"}
            fontSize={["lg", "xl", "xl", "2xl", "2xl", "3xl"]}
            textAlign={"center"}
          >
            Welcome to my space. Feel free to&nbsp;
            <Box
              as={"button"}
              className={"secret-btn custom-transition-default"}
              color={"white"}
              _hover={{ color: "purple.200" }}
              _focus={{ color: "purple.200" }}
            >
              click things
            </Box>
            .
          </Text>
          <Flex
            className={"custom-btn-wrapper"}
            flexDir={["column", "row"]}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            mt={4}
            zIndex={5}
          >
            <Button
              className={"custom-btn"}
              w={["100%", "auto"]}
              fontSize={["sm", "md", "md", "lg"]}
              px={[3, 3, 3, 4]}
              py={[4, 4, 4, 5]}
              border={"2px solid white"}
              bgColor={"white"}
              color={"black"}
              _hover={{ bgColor: "white", color: "black" }}
              _focus={{ bgColor: "white", color: "black" }}
            >
              <Flex
                as="span"
                w={"100%"}
                flexDir={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={2}
              >
                <Flex as="span">Get to know me</Flex>
                <FaArrowRight className={"go-down-icon custom-transition-default"} />
              </Flex>
            </Button>
            <Button
              as={Link}
              href={"#"}
              isExternal
              className={"custom-btn"}
              w={["100%", "auto"]}
              fontSize={["sm", "md", "md", "lg"]}
              px={[3, 3, 3, 4]}
              py={[4, 4, 4, 5]}
              border={"2px solid white"}
              bgColor={"transparent"}
              color={"white"}
              _hover={{ bgColor: "transparent", color: "white", textDecor: "none" }}
              _focus={{ bgColor: "transparent", color: "white", textDecor: "none" }}
            >
              <Flex
                as="span"
                w={"100%"}
                flexDir={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={2}
              >
                <Flex as="span">Get my resume</Flex>
                <FaArrowRight className={"external-link-icon custom-transition-default"} />
              </Flex>
            </Button>
          </Flex>
        </Flex>
        <Flex
          className={"main-icon-link-wrapper"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={[6, 8]}
          zIndex={5}
        >
          <Link
            className={"main-icon-link"}
            href={"mailto:zzakiullah1@gmail.com"}
            isExternal
            aria-label={"Send an email to Zulaikha"}
            color={"white"}
          >
            <FaEnvelope className={"main-icon custom-transition-slow"} />
          </Link>
          <Link
            className={"main-icon-link"}
            href={"https://linkedin.com/in/zulaikha-zakiullah"}
            isExternal
            aria-label={"Go to Zulaikha's LinkedIn page"}
            color={"white"}
          >
            <FaLinkedin className={"main-icon custom-transition-slow"} />
          </Link>
          <Link
            className={"main-icon-link"}
            href={"https://github.com/zzakiullah"}
            isExternal
            aria-label={"Go to Zulaikha's GitHub page"}
            color={"white"}
          >
            <FaGithub className={"main-icon custom-transition-slow"} />
          </Link>
          <Link
            className={"main-icon-link"}
            href={"#"}
            isExternal
            aria-label={"Open Zulaikha's resume"}
            color={"white"}
          >
            <FaFileLines className={"main-icon custom-transition-slow"} />
          </Link>
        </Flex>
      </Flex>
      <Flex
        as={"main"}
        className={"min-h-screen px-8 py-48"}
        bgColor={"zz.spaceBg"}
        flexDir={"column"}
        alignItems={"center"}
        zIndex={10}
        px={["2rem"]}
        py={["12rem"]}
      >
        <MyNav />
        <Flex
          className={"w-full"}
          flexDir={"row"}
          gap={12}
          // border="1px solid red"
        >
          <Flex
            flexDir={"column"}
            alignItems={"end"}
            w={["160px"]}
          >
            <ProgressBar
              color={""}
              circleColor={""}
              lineColor={""}
            />
          </Flex>
          <Flex
            flexDir={"column"}
            alignItems={"start"}
            justifyContent={"center"}
            gap={2}
            my={[2]}
            // w={["1000px"]}
            // border="1px solid blue"
          >
            <Heading
              as={"h2"}
              fontSize={["7xl"]}
              fontWeight={"medium"}
              color={"white"}
            >
              Now, before you ask...
            </Heading>
            <Text
              fontSize={["3xl"]}
              color={"zz.textGray"}
            >
              It&apos;s pronounced&nbsp;
              <Box
                as={"button"}
                className={"custom-transition-default"}
                fontFamily={"arabic"}
                textDecoration={"underline"}
                textDecorationStyle={"dotted"}
                color={"white"}
                _hover={{ color: "purple.200" }}
                _focus={{ color: "purple.200" }}
              >
                <Flex
                  as={"span"}
                  flexDir={"row"}
                  alignItems={"center"}
                  gap={2}
                >
                  زُلَيْخَة
                  <MdVolumeUp />
                </Flex>
              </Box>
              &nbsp;but you can just call me&nbsp;
              <Flex
                as={"span"}
                display={"inline"}
                color={"white"}
              >
                &quot;Zoo-lay-ka&quot;
              </Flex>
              &nbsp;if that&apos;s easier. 🙂
            </Text>
          </Flex>
        </Flex>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <MyFooter />
      </Flex>
    </>
  );
}
