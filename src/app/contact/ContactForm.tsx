"use client";

import {
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Textarea,
    Button,
    useToast,
} from "@chakra-ui/react";
import { MdSend } from "react-icons/md";
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
            from_name: "zulaikha.me",
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
            <Flex flexDirection={{ base: "column", md: "row" }} w={"100%"} gap={3}>
                <FormControl isInvalid={errors.name ? true : false}>
                    <FormLabel
                        fontFamily="heading"
                        fontSize={styles.label.fontSize}
                        color={styles.label.color}
                        _after={styles.required}
                    >
                        Name
                    </FormLabel>
                    <Input
                        type="text"
                        aria-required={true}
                        placeholder="John Doe"
                        disabled={isSubmitting}
                        fontSize={styles.input.fontSize}
                        color={styles.input.color}
                        bgColor={styles.input.bgColor}
                        px={styles.input.paddingX}
                        py={styles.input.paddingY}
                        _focusVisible={styles.input.focusVisible}
                        {...register("name", {
                            required: "Name is required.",
                        })}
                    />
                    <FormErrorMessage>{errors.name?.message?.toString()}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.email ? true : false}>
                    <FormLabel
                        fontFamily="heading"
                        fontSize={styles.label.fontSize}
                        color={styles.label.color}
                        _after={styles.required}
                    >
                        Email
                    </FormLabel>
                    <Input
                        type="email"
                        aria-required={true}
                        placeholder="john.doe@example.com"
                        disabled={isSubmitting}
                        fontSize={styles.input.fontSize}
                        color={styles.input.color}
                        bgColor={styles.input.bgColor}
                        px={styles.input.paddingX}
                        py={styles.input.paddingY}
                        _focusVisible={styles.input.focusVisible}
                        {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Please enter a valid email.",
                            },
                        })}
                    />
                    <FormErrorMessage>{errors.email?.message?.toString()}</FormErrorMessage>
                </FormControl>
            </Flex>
            <FormControl isInvalid={errors.message ? true : false}>
                <FormLabel
                    fontFamily="heading"
                    fontSize={styles.label.fontSize}
                    color={styles.label.color}
                    _after={styles.required}
                >
                    Message
                </FormLabel>
                <Textarea
                    aria-required={true}
                    placeholder="Hello! I wanted to talk to you about..."
                    disabled={isSubmitting}
                    rows={8}
                    fontSize={styles.input.fontSize}
                    color={styles.input.color}
                    bgColor={styles.input.bgColor}
                    px={styles.input.paddingX}
                    py={styles.input.textAreaPaddingY}
                    _focusVisible={styles.input.focusVisible}
                    {...register("message", {
                        required: "Message is required.",
                    })}
                />
                <FormErrorMessage>{errors.message?.message?.toString()}</FormErrorMessage>
            </FormControl>
            <Flex flexDirection="column" alignItems="start" w="100%" mt={2}>
                <Button
                    type={"submit"}
                    className={"contact-btn"}
                    rightIcon={<MdSend className={"contact-btn-icon custom-transition-default"} />}
                    isLoading={isSubmitting}
                    loadingText={"Sending"}
                    spinnerPlacement={"end"}
                    w={styles.btn.width}
                    fontSize={styles.btn.fontSize}
                    px={styles.btn.paddingX}
                    py={styles.btn.paddingY}
                    borderWidth={styles.btn.borderWidth}
                    borderColor={styles.btn.colorPrimary}
                    bgColor={styles.btn.colorPrimary}
                    color={styles.btn.colorText}
                    _hover={styles.btn.hover}
                    _focus={styles.btn.hover}
                >
                    Send Message
                </Button>
            </Flex>
        </Flex>
    );
}

const styles = {
    label: {
        fontSize: ["md", "lg", "lg", "xl"],
        color: "white",
    },
    input: {
        fontSize: ["sm", "md", "md", "lg"],
        color: "zz.textGray",
        bgColor: "purple.1200",
        paddingX: [3, 4],
        paddingY: [4, 6],
        textAreaPaddingY: [2, 3],
        outline: "purple.300",
        focusVisible: {
            borderColor: "purple.300",
            boxShadow: "0 0 0 1px #b794f4",
        },
    },
    required: {
        content: "' *'",
        color: "red",
    },
    btn: {
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
        hover: {
            bgColor: "purple.500",
            borderColor: "purple.500",
            color: "white",
        },
    },
};
