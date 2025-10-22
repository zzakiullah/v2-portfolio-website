import type { Metadata } from "next";
import { Flex, Box, Heading, Text, Button, Link } from "@chakra-ui/react";

import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact",
};

export default function Contact() {
    return (
        <Flex
            as={"main"}
            className={"min-h-screen px-8 py-48"}
            bgColor={"zz.spaceBg"}
            flexDir={"column"}
            alignItems={"center"}
            px={["2rem"]}
            py={["12rem"]}
        >
            <ContactForm />
        </Flex>
    );
}
