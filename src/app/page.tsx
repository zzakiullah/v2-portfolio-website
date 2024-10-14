import NextLink from "next/link";
import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileLines, FaArrowRight } from "react-icons/fa6";

import MyNav from "@/components/MyNav";
import MyFooter from "@/components/MyFooter";

// import Intro from "@/app/about/Intro";
// import About from "@/sections/About";
// import Skills from "@/sections/Skills";
// import Experience from "@/sections/Experience";
// import Projects from "@/sections/Projects";
// import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Flex
        as={"main"}
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
              as={NextLink}
              href={"/about"}
              className={"custom-btn"}
              w={styles.mainBtn.width}
              fontSize={styles.mainBtn.fontSize}
              px={styles.mainBtn.paddingX}
              py={styles.mainBtn.paddingY}
              borderWidth={styles.mainBtn.borderWidth}
              borderColor={styles.mainBtn.colorPrimary}
              bgColor={styles.mainBtn.colorPrimary}
              color={styles.mainBtn.colorText}
              _hover={styles.mainBtn.hoverPrimary}
              _focus={styles.mainBtn.hoverPrimary}
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
                <FaArrowRight className={"external-link-icon custom-transition-default"} />
              </Flex>
            </Button>
            <Button
              as={Link}
              href={"#"}
              isExternal
              className={"custom-btn"}
              w={styles.mainBtn.width}
              fontSize={styles.mainBtn.fontSize}
              px={styles.mainBtn.paddingX}
              py={styles.mainBtn.paddingY}
              borderWidth={styles.mainBtn.borderWidth}
              borderColor={styles.mainBtn.colorSecondary}
              bgColor={styles.mainBtn.bgSecondary}
              color={styles.mainBtn.colorText}
              _hover={styles.mainBtn.hoverSecondary}
              _focus={styles.mainBtn.hoverSecondary}
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
      {/* <Flex
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
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <MyFooter />
      </Flex> */}
    </>
  );
}

const styles = {
  mainBtn: {
    width: ["100%", "auto"],
    fontSize: ["sm", "md", "md", "lg"],
    paddingX: [3, 3, 3, 4],
    paddingY: [4, 4, 4, 5],
    borderWidth: "2px",
    bgSecondary: "transparent",
    colorPrimary: "purple.600",
    colorPrimaryAccent: "purple.500",
    colorSecondary: "purple.300",
    colorSecondaryAccent: "purple.200",
    colorText: "white",
    hoverPrimary: {
      bgColor: "purple.500",
      borderColor: "purple.500",
      color: "white"
    },
    hoverSecondary: {
      bgColor: "transparent",
      color: "white",
      textDecor: "none",
      borderColor: "purple.200",
      boxShadow: "inset 0 1px 0 #d6bcfa, inset 0 -1px 0 #d6bcfa, inset 1px 0 0 #d6bcfa, inset -1px 0 0 #d6bcfa",
    },
  },
};
