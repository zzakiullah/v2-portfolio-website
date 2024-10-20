"use client";

import { useEffect, useRef, useState } from "react";
import {
    Flex,
    Heading,
    Text,
    Badge,
    Link,
    Image,
} from "@chakra-ui/react";
import {
    FaPython,
    FaJava,
    FaGem,
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaReact,
    FaVuejs,
    FaAngular,
    FaAndroid,
    FaNodeJs,
    FaPhp,
    FaAws,
    FaGitAlt,
    FaLinux,
    FaJenkins,
    FaDocker,
} from "react-icons/fa6";
import {
    BiLogoCPlusPlus,
    BiLogoJavascript,
    BiLogoTypescript,
    BiLogoTailwindCss,
    BiLogoRedux,
    BiLogoPostgresql,
    BiLogoGraphql,
    BiLogoFirebase,
    BiLogoMongodb,
} from "react-icons/bi";
import { useInViewport } from "react-in-viewport";

import ProgressBar from "@/components/ProgressBar";

enum SkillFilters {

};

export default function Skills() {
    const ref = useRef(null);

    const { enterCount } = useInViewport(
        ref,
        { rootMargin: "-40% 0% -40% 0%" },
        { disconnectOnLeave: false },
        {},
    );

    return (
        <Flex
            ref={ref}
            className={"w-full"}
            flexDir={"row"}
            gap={12}
            // border="1px solid red"
        >
            <Flex
                flexDir={"column"}
                alignItems={"end"}
                flexBasis={["100px"]}
                flexGrow={0}
                flexShrink={0}
                // border="1px solid red"
            >
                <ProgressBar
                    circleColor={""}
                    lineStartColor={""}
                    lineEndColor={""}
                    // icon={<MdOutlineFace />}
                />
            </Flex>
            <Flex      
                className={"custom-transition-default"}
                flexDir={"column"}
                alignItems={"start"}
                justifyContent={"center"}
                gap={2}
                opacity={enterCount > 0 ? 1 : 0.2}
            >
                <Heading
                    as={"h2"}
                    color={"white"}
                    fontWeight={"medium"}
                    fontSize={["4xl"]}
                >
                    Skills &amp; Technologies
                </Heading>
                <Text
                    color={"zz.textGray"}
                    fontSize={["2xl"]}
                >
                    I&apos;ve built up a diverse skillset over the years, spanning multiple
                    technical disciplines, and am in constant pursuit of learning more. If
                    there&apos;s a certain subset of skills you&apos;re interested in checking
                    out, use the filter below.
                </Text>
                <Text
                    color={"zz.textGray"}
                    fontSize={["2xl"]}
                >
                    Hello ...
                </Text>
                <Text
                    color={"zz.textGray"}
                    fontSize={["2xl"]}
                >
                    Hello ...
                </Text>
                <Flex>
                    {skills.map((skill, index) => {
                        return (
                            <Badge
                                key={index}
                                display={"flex"}
                                flexDirection={"row"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                bgColor={skill.bgColor}
                                color={skill.color}
                                fontSize={"lg"}
                                px={2}
                                gap={1}
                            >
                                {skill.icon}
                                {skill.text}
                            </Badge>
                        );
                    })}
                </Flex>
            </Flex>
        </Flex>
    );
}

const skills = [
    {
        icon: <FaPython />,
        text: "Python",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <BiLogoCPlusPlus />,
        text: "C/C++",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaJava />,
        text: "Java",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaGem />,
        text: "Ruby",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <BiLogoJavascript />,
        text: "JavaScript",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <BiLogoTypescript />,
        text: "TypeScript",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaHtml5 />,
        text: "HTML",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaCss3Alt />,
        text: "CSS",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaSass />,
        text: "Sass/SCSS",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaReact />,
        text: "React",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaVuejs />,
        text: "Vue",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaAngular />,
        text: "Angular",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <BiLogoTailwindCss />,
        text: "Tailwind CSS",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <BiLogoRedux />,
        text: "Redux",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaAndroid />,
        text: "Android",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaReact />,
        text: "React Native",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaNodeJs />,
        text: "Node.js",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaPhp />,
        text: "PHP",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <BiLogoPostgresql />,
        text: "PosgreSQL",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <BiLogoGraphql />,
        text: "GraphQL",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <BiLogoFirebase />,
        text: "Firebase",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <BiLogoMongodb />,
        text: "MongoDB",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaAws />,
        text: "AWS",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaGitAlt />,
        text: "Git",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaLinux />,
        text: "Linux",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaJenkins />,
        text: "Jenkins",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaDocker />,
        text: "Docker",
        bgColor: "",
        color: "",
        filters: [],
    },
];
