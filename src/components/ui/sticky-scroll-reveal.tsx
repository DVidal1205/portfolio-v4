"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useRef } from "react";
import Carousel from "./carousel";
import { LinkPreview } from "./link-preview";

const peopleImages = [
    {
        title: "Knight Hacks @ Bitcamp XI",
        src: "/about/people/bitcampxi.jpg",
    },
    {
        title: "Knight Hacks VII Organizing Team",
        src: "/about/people/knighthacksvii.jpg",
    },
    {
        title: "Knight Hacks @ HackUSF",
        src: "/about/people/hackusf.jpg",
    },
];

const passionImages = [
    {
        title: "First Hackathon (Shell Hacks 2023)",
        src: "/about/passion/firsthackathon.jpg",
    },
    {
        title: "Elected President for 2024-2025",
        src: "/about/passion/elections25.jpg",
    },
    {
        title: "Elected President for 2025-2026",
        src: "/about/passion/elections26.jpg",
    },
];

const progressImages = [
    {
        title: "First Hackathon Win (VoiceBoard @ Shell Hacks 2024)",
        src: "/about/progress/firstwin.jpg",
    },
    {
        title: "My Knight Hacks Mentorship Group (Kickstart-1)",
        src: "/about/progress/mentorship.jpg",
    },
    {
        title: "Winner of Google Gemini Challenge (VisuWorld @ Bitcamp XI)",
        src: "/about/progress/bigwin.jpg",
    },
];

const contentSections = [
    {
        content: <Carousel slides={passionImages} />,
    },
    {
        content: <Carousel slides={peopleImages} />,
    },
    {
        content: <Carousel slides={progressImages} />,
    },
];

export const StickyScroll = ({
    contentClassName,
}: {
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });
    const cardLength = 3; // Number of sections

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = Array.from(
            { length: cardLength },
            (_, index) => {
                return (index / (cardLength - 1)) * 0.8 + 0.1;
            }
        );

        let closestBreakpointIndex = 0;
        let minDistance = Math.abs(latest - cardsBreakpoints[0]);

        cardsBreakpoints.forEach((breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            if (distance < minDistance) {
                minDistance = distance;
                closestBreakpointIndex = index;
            }
        });

        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = ["#200c3c", "#2f2447", "#181424"];

    return (
        <motion.div
            animate={{
                backgroundColor:
                    backgroundColors[activeCard % backgroundColors.length],
            }}
            className="relative flex flex-col lg:flex-row lg:space-x-32 justify-center rounded-md px-4 py-8 lg:px-10 lg:py-16"
            ref={ref}
        >
            <div className="div relative flex items-start px-2 lg:px-4 w-full lg:w-auto">
                <div className="w-full lg:max-w-4xl">
                    {/* Section 1 - Passion */}
                    <div className="my-20 lg:my-60">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === 0 ? 1 : 0.3 }}
                            className="text-2xl lg:text-3xl font-bold text-primary-500"
                        >
                            Passion
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === 0 ? 1 : 0.3 }}
                            className="text-base lg:text-lg mt-6 lg:mt-10 w-full lg:max-w-2xl text-slate-300"
                        >
                            <div>
                                At my core, I am passionate about everything I
                                do. From my work as the President of{" "}
                                <LinkPreview
                                    url="https://knighthacks.org"
                                    className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                >
                                    Knight Hacks
                                </LinkPreview>
                                , to my experiences as a Software Engineer at{" "}
                                <LinkPreview
                                    url="https://www.nvidia.com"
                                    className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                >
                                    NVIDIA
                                </LinkPreview>{" "}
                                or{" "}
                                <LinkPreview
                                    url="https://www.pheratech.com"
                                    className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                >
                                    Pheratech Systems
                                </LinkPreview>
                                , I am always giving everything my all. When I
                                am passionate about something, I am willing to
                                put in the work to make it happen.
                            </div>
                        </motion.div>

                        {/* Mobile carousel for Passion section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === 0 ? 1 : 0.3 }}
                            className="mt-8 lg:hidden"
                        >
                            <div className="h-64 w-full overflow-hidden rounded-md">
                                <Carousel slides={passionImages} />
                            </div>
                        </motion.div>
                    </div>

                    {/* Section 2 - People */}
                    <div className="my-20 lg:my-60">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === 1 ? 1 : 0.3 }}
                            className="text-2xl lg:text-3xl font-bold text-primary-500"
                        >
                            People
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === 1 ? 1 : 0.3 }}
                            className="text-base lg:text-lg mt-6 lg:mt-10 w-full lg:max-w-2xl text-slate-300"
                        >
                            <div>
                                I am a socially driven person, and I firmly
                                believe in the importance of community across
                                all facets of life. Throughout my time at UCF, I
                                have been fortunate to have joined many
                                developer communities, like{" "}
                                <LinkPreview
                                    url="https://blade.knighthacks.org"
                                    className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                >
                                    Knight Hacks
                                </LinkPreview>
                                ,{" "}
                                <LinkPreview
                                    url="https://mlh.io"
                                    className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                >
                                    MLH
                                </LinkPreview>
                                , and the{" "}
                                <LinkPreview
                                    url="https://github.com/education"
                                    className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                >
                                    GitHub Education Team
                                </LinkPreview>{" "}
                                as a{" "}
                                <LinkPreview
                                    url="https://githubcampus.expert/DVidal1205/"
                                    className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                >
                                    GitHub Campus Expert
                                </LinkPreview>
                                .
                            </div>
                        </motion.div>

                        {/* Mobile carousel for People section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === 1 ? 1 : 0.3 }}
                            className="mt-8 lg:hidden"
                        >
                            <div className="h-64 w-full overflow-hidden rounded-md">
                                <Carousel slides={peopleImages} />
                            </div>
                        </motion.div>
                    </div>

                    {/* Section 3 - Progress */}
                    <div className="my-20 lg:my-60">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === 2 ? 1 : 0.3 }}
                            className="text-2xl lg:text-3xl font-bold text-primary-500"
                        >
                            Progress
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === 2 ? 1 : 0.3 }}
                            className="text-base lg:text-lg mt-6 lg:mt-10 w-full lg:max-w-2xl text-slate-300"
                        >
                            <div>
                                To me, the most important metric of success is
                                consistent and continuous progress. I take
                                advantage of every opportunity to learn and
                                grow, either technically, professionally, or
                                personally. I also aim to help inspire progress
                                in others, which I have cultivated through my
                                work with the{" "}
                                <LinkPreview
                                    url="https://blade.knighthacks.org"
                                    className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                >
                                    Knight Hacks
                                </LinkPreview>{" "}
                                community and various{" "}
                                <LinkPreview
                                    url="https://www.youtube.com/c/KnightHacks"
                                    className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                >
                                    workshops
                                </LinkPreview>
                                .
                            </div>
                        </motion.div>

                        {/* Mobile carousel for Progress section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === 2 ? 1 : 0.3 }}
                            className="mt-8 lg:hidden"
                        >
                            <div className="h-64 w-full overflow-hidden rounded-md">
                                <Carousel slides={progressImages} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Desktop sticky carousel */}
            <div
                className={cn(
                    "sticky top-[max(theme(spacing.20),50vh-12rem)] hidden h-[29rem] w-[51rem] overflow-hidden rounded-md lg:block",
                    contentClassName
                )}
            >
                {contentSections[activeCard].content}
            </div>
        </motion.div>
    );
};
