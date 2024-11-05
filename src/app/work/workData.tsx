import { Link } from "@chakra-ui/react";

import { Tag } from "@/constants/tags";

const workData = [
    {
        company: "University of Waterloo - SiBio Lab",
        positions: [
            {
                name: "Research Assistant",
                duration: "Jan 2024 - Apr 2024",
            },
            {
                name: "Hardware Designer",
                duration: "Sep 2023 - Dec 2023",
            },
        ],
        description: (
            <>
                For my sixth and final co-op term, I worked as a Hardware Designer at the Silicon
                Bioelectronics Laboratory at the University of Waterloo, and later continued as an
                Undergraduate Research Assistant while studying full-time. My work primarily
                involved bring-up of our team&apos;s custom-designed IC for non-invasive continuous
                glucose and ketone monitoring. After electrical testing was complete, I collaborated
                with another lab to perform electrochemical tests on the chip, including cyclic
                voltammetry and chronoamperometry.
            </>
        ),
        url: "https://uwaterloo.ca/silicon-bioelectronics-laboratory",
        // tags: [Tag.Verilog, Tag.Python, Tag.AltiumDesigner, Tag.Cadence],
        tags: ["Verilog", "Python", "Vivado", "Altium Designer", "Cadence"],
    },
    {
        company: "University of Waterloo - WCBS Lab",
        positions: [
            {
                name: "Research Assistant",
                duration: "May 2023 - Aug 2023",
            },
            {
                name: "Research Assistant",
                duration: "Jan 2022 - Apr 2022",
            },
        ],
        description: (
            <>
                For two terms, I worked as an Undergraduate Research Assistant at the Composite
                Biomaterial Systems Laboratory at the University of Waterloo while studying
                full-time. My main work involved developing an algorithm to precisely map the
                progression of crack tips in cortical bone over time, given collected bone sample
                strain data.
            </>
        ),
        url: "https://uwaterloo.ca/waterloo-composite-biomaterial-systems-lab",
        // tags: [Tag.MATLAB],
        tags: ["MATLAB"],
    },
    {
        company: "Onsemi",
        positions: [
            {
                name: "Hardware & Systems Developer",
                duration: "Jan 2023 - Apr 2023",
            },
        ],
        description: (
            <>
                For my fifth co-op term, I worked as a Hardware &amp; Systems Developer at Onsemi.
                There, I primarily worked on feature support and hardware validation of the RSL15,
                an ultra-low power wireless MCU designed for connecting smart devices in industrial
                and medical applications. I also got to design and test a proof-of-concept
                temperature control module to be used in our fabrication laboratory.
            </>
        ),
        url: "https://www.onsemi.com",
        // tags: [Tag.CPlusPlus, Tag.Python],
        tags: ["C/C++", "PIC32", "Python", "Behave"],
    },
    {
        company: "St Michael's Hospital",
        positions: [
            {
                name: "Software Developer",
                duration: "Aug 2021 - Aug 2022",
            },
        ],
        description: (
            <>
                For my third and fourth co-op terms, I worked as a Software Developer on a research
                team at St. Michael&apos;s Hospital. There, I mainly contributed to the&nbsp;
                <Link
                    href={"https://easthma.ca"}
                    isExternal
                    color={"white"}
                    _hover={{ color: "purple.200" }}
                >
                    eAMS (electronic asthma management system)
                </Link>
                , a clinical decision support system for asthma that recommends medication based a
                patient&apos;s asthma condition as per Canadian guidelines. I also helped design and
                deploy a bilingual&nbsp;
                <Link
                    href={"https://asthmadecisionaid.com"}
                    isExternal
                    color={"white"}
                    _hover={{ color: "purple.200" }}
                >
                    asthma decision aid tool
                </Link>
                &nbsp;for patients and providers.
            </>
        ),
        url: "https://unityhealth.to",
        // tags: [Tag.Python, Tag.Java, Tag.JavaScript, Tag.HTML, Tag.CSS, Tag.React, Tag.Spring],
        tags: ["Python", "Java", "Selenium", "JavaScript", "HTML", "CSS", "React", "Spring"],
    },
    {
        company: "Ford Motor Company",
        positions: [
            {
                name: "Software Developer",
                duration: "Jan 2021 - Apr 2021",
            },
        ],
        description: (
            <>
                For my second co-op term, I came back to Ford as a Software Developer. This time, I
                worked on the infotainment systems under the product development team, where I
                developed APIs, unit test suites, and test Android apps.
            </>
        ),
        url: "https://www.ford.ca",
        // tags: [Tag.Java, Tag.Android, Tag.Jenkins, Tag.Linux],
        tags: ["Java", "JUnit", "Android Studio", "Jenkins", "Linux"],
    },
    {
        company: "Ford Motor Company",
        positions: [
            {
                name: "Test Automation Developer",
                duration: "May 2020 - Aug 2020",
            },
        ],
        description: (
            <>
                For my first co-op term, I worked at Ford as a Test Automation Developer. There, I
                under the test automation team to develop various APIs and automated services to
                improve our testing suites.
            </>
        ),
        url: "https://www.ford.ca",
        // tags: [Tag.Python, Tag.CPlusPlus, Tag.Jenkins, Tag.Linux],
        tags: ["Python", "C/C++", "Jenkins", "Linux"],
    },
    {
        company: "Greater Essex County District School Board",
        positions: [
            {
                name: "Summer Learning Tutor",
                duration: "Jul 2019",
            },
        ],
        description: (
            <>
                During summer school, I worked as a tutor under the school board for high school
                students in English, math, physics, and chemistry.
            </>
        ),
        url: "https://www.publicboard.ca",
        tags: [],
    },
];

export default workData;
