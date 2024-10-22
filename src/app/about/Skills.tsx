"use client";

import { useEffect, useRef, useState } from "react";
import {
    Flex,
    Heading,
    Text,
    Wrap,
    WrapItem,
    Badge,
    Link,
    Image,
} from "@chakra-ui/react";
import {
    FaPython,
    FaJava,
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
    FaJenkins,
    FaLinux,
    FaDocker,
    FaMicrochip,
} from "react-icons/fa6";
import {
    BiLogoCPlusPlus,
    BiLogoGoLang,
    BiLogoJavascript,
    BiLogoTypescript,
    BiLogoTailwindCss,
    BiLogoRedux,
    BiLogoPostgresql,
    BiLogoGraphql,
    BiLogoMongodb,
    BiLogoSpringBoot,
    BiLogoVisualStudio,
    BiSolidMicrochip,
} from "react-icons/bi";
import {
    SiRuby,
    SiFirebase,
    SiKicad,
    SiAltiumdesigner,
    SiLtspice,
    SiStmicroelectronics,
    SiEspressif,
    SiProteus,
    SiAutocad,
} from "react-icons/si";
import { TbMathMaxMin } from "react-icons/tb";
import { GiCircuitry } from "react-icons/gi";
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

    const [filteredSkills, setFilteredSkills] = useState<SkillFilters[]>([]);

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
                    Displaying {filteredSkills.length} of {skills.length} skills
                </Text>
                <Wrap>
                    {skills.map((skill, index) => {
                        return (
                            <WrapItem
                                key={index}
                            >
                                <Badge
                                    display={"flex"}
                                    flexDirection={"row"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    bgColor={skill.bgColor}
                                    color={skill.color}
                                    fontSize={"lg"}
                                    fontWeight={"semibold"}
                                    px={2}
                                    gap={1}
                                    whiteSpace={"nowrap"}
                                    textTransform={"none"}
                                >
                                    {skill.icon}
                                    {skill.text}
                                </Badge>
                            </WrapItem>
                        );
                    })}
                </Wrap>
            </Flex>
        </Flex>
    );
}

const skills = [
    {
        icon: <FaPython color={"#306998"} />,
        text: "Python",
        bgColor: "#ffd43b",
        color: "black",
        filters: [],
    },
    {
        icon: <BiLogoCPlusPlus />,
        text: "C/C++",
        bgColor: "#004482",
        color: "white",
        filters: [],
    },
    {
        icon: <FaJava color={"#5382a1"} />,
        text: "Java",
        bgColor: "#f89820",
        color: "black",
        filters: [],
    },
    {
        icon: <TbMathMaxMin color={"#e76e38"} />,
        text: "MATLAB",
        bgColor: "#0076a8",
        color: "white",
        filters: [],
    },
    {
        icon: <SiRuby />,
        text: "Ruby",
        bgColor: "#d51f06", // lighter: #de3f24, darker: #d51f06
        color: "white",
        filters: [],
    },
    {
        icon: <BiLogoGoLang />,
        text: "Go",
        bgColor: "#00ADD8",
        color: "white",
        filters: [],
    },
    {
        icon: <BiLogoJavascript />,
        text: "JavaScript",
        bgColor: "#f0db4f",
        color: "#323330",
        filters: [],
    },
    {
        icon: <BiLogoTypescript />,
        text: "TypeScript",
        bgColor: "#3178c6",
        color: "white",
        filters: [],
    },
    {
        icon: <FaHtml5 />, // #f06529
        text: "HTML",
        bgColor: "#e34c26",
        color: "white",
        filters: [],
    },
    {
        icon: <FaCss3Alt />,
        text: "CSS",
        bgColor: "#264de4",
        color: "white",
        filters: [],
    },
    {
        icon: <FaSass />,
        text: "Sass/SCSS",
        bgColor: "#cd6799",
        color: "white",
        filters: [],
    },
    {
        icon: <FaReact />,
        text: "React",
        bgColor: "#06bcee",
        color: "#20232a",
        filters: [],
    },
    {
        icon: <FaVuejs color={"#34495e"} />,
        text: "Vue",
        bgColor: "#41b883",
        color: "white",
        filters: [],
    },
    {
        icon: <FaAngular />,
        text: "Angular",
        bgColor: "#c3002f",
        color: "white",
        filters: [],
    },
    {
        icon: <BiLogoTailwindCss />,
        text: "Tailwind CSS",
        bgColor: "#06b6d4",
        color: "white",
        filters: [],
    },
    {
        icon: <BiLogoRedux />,
        text: "Redux",
        bgColor: "#764abc",
        color: "white",
        filters: [],
    },
    {
        icon: <FaAndroid />,
        text: "Android",
        bgColor: "#32de84",
        color: "black",
        filters: [],
    },
    {
        icon: <FaReact />,
        text: "React Native",
        bgColor: "#06bcee",
        color: "#20232a",
        filters: [],
    },
    {
        icon: <FaNodeJs />,
        text: "Node.js",
        bgColor: "#3c873a",
        color: "white",
        filters: [],
    },
    {
        icon: <FaPhp />,
        text: "PHP",
        bgColor: "#777bb3",
        color: "black",
        filters: [],
    },
    {
        icon: <BiLogoPostgresql />,
        text: "PosgreSQL",
        bgColor: "#336791",
        color: "white",
        filters: [],
    },
    {
        icon: <BiLogoGraphql />,
        text: "GraphQL",
        bgColor: "#e10098",
        color: "white",
        filters: [],
    },
    {
        icon: <SiFirebase />,
        text: "Firebase",
        bgColor: "#ff9100",
        color: "black",
        filters: [],
    },
    {
        icon: <BiLogoMongodb />,
        text: "MongoDB",
        bgColor: "#00684a",
        color: "white",
        filters: [],
    },
    {
        icon: <BiLogoSpringBoot />,
        text: "Spring",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaAws />,
        text: "AWS",
        bgColor: "#ff9900",
        color: "black",
        filters: [],
    },
    {
        icon: <FaGitAlt />,
        text: "Git",
        bgColor: "#f34f29",
        color: "white",
        filters: [],
    },
    {
        icon: <FaJenkins />,
        text: "Jenkins",
        bgColor: "#f0d6b7",
        color: "black",
        filters: [],
    },
    {
        icon: <FaLinux />,
        text: "Linux",
        bgColor: "white",
        color: "black",
        filters: [],
    },
    {
        icon: <FaDocker />,
        text: "Docker",
        bgColor: "#1d63ed",
        color: "white",
        filters: [],
    },
    {
        icon: <BiLogoVisualStudio />,
        text: "VS Code",
        bgColor: "#0078d7",
        color: "white",
        filters: [],
    },
    {
        icon: <BiSolidMicrochip />,
        text: "Verilog",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <FaMicrochip />,
        text: "Verilog",
        bgColor: "",
        color: "",
        filters: [],
    },
    {
        icon: <SiKicad />,
        text: "KiCad",
        bgColor: "#314cb0",
        color: "white",
        filters: [],
    },
    {
        icon: <SiAltiumdesigner />,
        text: "Altium Designer",
        bgColor: "#d6bc81",
        color: "#3d3d3d",
        filters: [],
    },
    {
        icon: <SiLtspice />,
        text: "LTspice",
        bgColor: "#910029",
        color: "white",
        filters: [],
    },
    {
        icon: <GiCircuitry color={"#eb1c2e"} />,
        text: "Cadence",
        bgColor: "white",
        color: "#242021",
        filters: [],
    },
    {
        icon: <SiStmicroelectronics />,
        text: "STM32",
        bgColor: "#3bb5e8",
        color: "#19233e",
        filters: [],
    },
    {
        icon: <SiEspressif />,
        text: "ESP32",
        bgColor: "#e8362d",
        color: "black",
        filters: [],
    },
    {
        icon: <SiProteus />,
        text: "Proteus",
        bgColor: "#006074",
        color: "white",
        filters: [],
    },
    {
        icon: <SiAutocad />,
        text: "AutoCAD",
        bgColor: "#770829",
        color: "white",
        filters: [],
    },
];
