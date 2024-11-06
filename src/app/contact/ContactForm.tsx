"use client";

import {
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function ContactForm() {
    const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ?? "";

    const {
        register,
        reset,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm();

    const toast = useToast();

    const { submit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_name: "Zulaikha's Website",
            subject: "New message from contact form",
        },
        onSuccess: (message, data) => {
            reset();
            toast({
                title: "Thank you for your message!",
                description: "I've received it and will get back to you shortly.",
                status: "success",
                duration: 8000,
                isClosable: true,
            });
            console.log(message);
        },
        onError: (message, data) => {
            toast({
                title: "Something went wrong!",
                description: "Your message failed to send. Please try again later.",
                status: "error",
                duration: 8000,
                isClosable: true,
            });
            console.log(message);
        },
    });

    function onFormSubmit(data: any, event: any) {
        submit({
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
        });
    }

    return (
        <Flex
            as={"form"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            w={["100%", "90%", "90%", "85%", "80%", "70%"]}
            gap={3}
            onSubmit={handleSubmit(onFormSubmit)}
        >

        </Flex>
    );
}
