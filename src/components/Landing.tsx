"use client";

import NextLink from "next/link";
import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Link,
    Tooltip,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import {
    FaArrowRight,
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaFileLines,
    FaRegCopyright,
} from "react-icons/fa6";

export default function Landing() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex
                as={"main"}
                className={"min-h-screen"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
                p={8}
            >
                <Box className="main-bg min-h-screen fixed inset-0" zIndex={0} />
                <Box className="star-field">
                    <Box className="layer"></Box>
                    <Box className="layer"></Box>
                    <Box className="layer"></Box>
                </Box>
                <Flex
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                ></Flex>
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
                        Hi, I&apos;m Zulaikha
                    </Heading>
                    <Text
                        color={"zz.textGray"}
                        fontSize={["lg", "xl", "xl", "2xl", "2xl", "3xl"]}
                        textAlign={"center"}
                    >
                        Welcome to my space. (Some things are still under construction.)
                        {/* Welcome to my space. Feel free to&nbsp;
                        <Box
                            as={"button"}
                            className={"secret-btn custom-transition-default"}
                            color={"white"}
                            _hover={{ color: "purple.200" }}
                            _focus={{ color: "purple.200" }}
                        >
                            click things
                        </Box>
                        . */}
                    </Text>
                    <Flex
                        className={"custom-btn-wrapper"}
                        flexDirection={["column", "row"]}
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={2}
                        mt={4}
                        zIndex={5}
                    >
                        <Tooltip
                            label={"WIP - check back soon!"}
                            aria-label={"WIP - check back soon!"}
                            placement={"top"}
                            hasArrow
                        >
                            <Button
                                disabled
                                opacity={0.2}
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
                                // _hover={styles.mainBtn.hoverPrimary}
                                // _focus={styles.mainBtn.hoverPrimary}
                            >
                                <Flex
                                    as="span"
                                    w={"100%"}
                                    flexDirection={"row"}
                                    alignItems={"center"}
                                    justifyContent={"space-between"}
                                    gap={2}
                                >
                                    <Flex as="span">Get to know me</Flex>
                                    <FaArrowRight
                                        className={"external-link-icon custom-transition-default"}
                                    />
                                </Flex>
                            </Button>
                        </Tooltip>
                        <Button
                            as={Link}
                            href={"/assets/Resume_Zulaikha_Zakiullah.pdf"}
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
                                flexDirection={"row"}
                                alignItems={"center"}
                                justifyContent={"space-between"}
                                gap={2}
                            >
                                <Flex as={"span"}>Get my resume</Flex>
                                <FaArrowRight
                                    className={"external-link-icon custom-transition-default"}
                                />
                            </Flex>
                        </Button>
                    </Flex>
                </Flex>
                <Flex
                    className={"main-icon-link-wrapper"}
                    flexDirection={"row"}
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
                        href={"/assets/Resume_Zulaikha_Zakiullah.pdf"}
                        isExternal
                        aria-label={"Open Zulaikha's resume"}
                        color={"white"}
                    >
                        <FaFileLines className={"main-icon custom-transition-slow"} />
                    </Link>
                    <Box
                        as={"button"}
                        onClick={onOpen}
                        className={"main-icon-link"}
                        aria-label={"Open modal showing copyright"}
                        color={"white"}
                    >
                        <FaRegCopyright className={"main-icon custom-transition-slow"} />
                    </Box>
                </Flex>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent bgColor={"zz.spaceBg"}>
                    <ModalCloseButton
                        color="white"
                        _hover={{ color: "purple.200" }}
                        _focus={{ color: "purple.200" }}
                        zIndex={10}
                    />
                    <Flex
                        flexDirection={"column"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        mx={6}
                        my={8}
                        color={"white"}
                        fontSize={["md", "lg", "xl"]}
                    >
                        <Text>Galaxy background image from Freepik</Text>
                        <Text>Designed and developed by me</Text>
                        <Text>Copyright &copy; Zulaikha Zakiullah 2025</Text>
                    </Flex>
                </ModalContent>
            </Modal>
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
            color: "white",
        },
        hoverSecondary: {
            bgColor: "transparent",
            color: "white",
            textDecor: "none",
            borderColor: "purple.200",
            boxShadow:
                "inset 0 1px 0 #d6bcfa, inset 0 -1px 0 #d6bcfa, inset 1px 0 0 #d6bcfa, inset -1px 0 0 #d6bcfa",
        },
    },
};
