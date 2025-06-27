"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useRef } from "react";
import Carousel from "./carousel";
import { InfoDialog } from "./info-dialog";
import { LinkPreview } from "./link-preview";

const passionImages = [
    {
        title: "My Knight Hacks Mentorship Group (Kickstart-1)",
        src: "/about/passion/mentorship.jpg",
        infoDialog: (
            <InfoDialog
                title="My Knight Hacks Mentorship Group (Kickstart-1)"
                text="After building a few projects, landing a research position, and finding my passion for software, I decided to become a mentor for the **Knight Hacks Kickstart Mentorship Program** for Fall 2025. I served as a mentor for four new members to the club, [Carlos Catala](https://www.linkedin.com/in/cataladev/), [Daniel Efres](https://www.linkedin.com/in/daniel-efres/), [Carlos Lopez](https://www.linkedin.com/in/carloselopezjr/) (who we call Carfos to deal with the duplicate names) and [Sam Borges](https://www.linkedin.com/in/samuel-xavier-borges/), pictured left to right. \\n\\n Now at this time in my career, I was not where I am today. I had no super crazy industry experiences, or big accolades to boast. But I felt I had something to teach this group, and that was **passion**. Beyond just the handful of technical skills I taught them from our workshops, I instilled in them a passion for software, learning, and the **Knight Hacks** community. And it paid off. Each of them are off interning, researching, building awesome projects, and now running **Knight Hacks** right along side me - and I couldn't be more proud."
                image="/about/passion/mentorship.jpg"
            />
        ),
    },
    {
        title: "Elected President for 2024-2025",
        src: "/about/passion/elections25.jpg",
        infoDialog: (
            <InfoDialog
                title="Elected President for 2024-2025"
                text="At the end of my very **first year** at UCF, I was elected as Secretary of **Knight Hacks**. It was rather unheard of for a freshman to assume leadersip in a student-ran organization, but I didn't let that stop me. Up to this point, I'd have attended every single **Knight Hacks** event but a few, and my determination was clear. \\n\\n About 4 months later, I was re-elected as the **President** of Knight Hacks after a board vacancy opened, making me the youngest President in the club's history. In our first year, our board was able to completely re-imagine the limits of the organization and ran an amazing Hackathon for **550+** hackers from all throughout Florida. In only one year, I'd have gone from **hacker** to **organizer**. It was the **passion** for the club and the culture that kept me going."
                image="/about/passion/elections25.jpg"
            />
        ),
    },
    {
        title: "Elected President for 2025-2026",
        src: "/about/passion/elections26.jpg",
        infoDialog: (
            <InfoDialog
                title="Elected President for 2025-2026"
                text="After serving roughly 4 months as a re-elected **President** of **Knight Hacks**, the elections for the 2025-2026 school year came. At this point, I went well beyond just proving myself as a new face in the organization. To most, the organization was the best it has ever been. \\n\\n With a **unanimous** vote by the general body of the club, I was re-elected to serve a **second term** as President. Up to this point, the organization has **never** had a President run twice, let alone be re-elected. Alongside me was one of my own mentees, [Daniel Efres](https://www.linkedin.com/in/daniel-efres/), who was elected as the **Secretary** of the club, with my other mentee [Carlos Lopez](https://www.linkedin.com/in/carloselopezjr/) as runner-up in the first-ever runoff election in the clubs history. Along Daniel served my two close friends, [Leonard](https://www.linkedin.com/in/leonard-gofman-208578236/) and [Adrian](https://www.linkedin.com/in/adrianosoriob/), serving as **Vice President** and **Treasurer** respectively."
                image="/about/passion/elections26.jpg"
            />
        ),
    },
];

const peopleImages = [
    {
        title: "Knight Hacks @ Bitcamp XI",
        src: "/about/people/bitcampxi.jpg",
        infoDialog: (
            <InfoDialog
                title="Knight Hacks @ Bitcamp XI"
                text="One of the biggest triumphs of my community was the **Knight Hacks** performance at **Bitcamp XI** Hackathon, held at the **University of Maryland, College Park**. After our reputation was acknowledged by UCF for our success with [Knight Hacks VI](https://www.ucf.edu/news/success-hacks-700-students-attend-ucf-knight-hacks-largest-hackathon/), we were able to secure senate funding to send **25** members of **Knight Hacks** to compete. Across **7 teams**, representing only **3%** of hackers, we took home **~25%** of the prizes. \\n\\n This was a huge win for our community, and it showed just how powerful teamwork is. Even though we were not on projects together, all 25 of us were one team, helping keep each other sane (and caffeinated), and being shoulders to lean on. With such a grand success, we were yet again acknowledged by UCF in a celebratory [article](https://www.cs.ucf.edu/2025/05/16/knight-hacks-wins-multiple-awards-from-bitcamp-xi/), allowing our win to gain even more reputation for our awesome community of technologists."
                image="/about/people/bitcampxi.jpg"
            />
        ),
    },
    {
        title: "Knight Hacks VII Organizing Team",
        src: "/about/people/knighthacksvii.jpg",
        infoDialog: (
            <InfoDialog
                title="Knight Hacks VII Organizing Team"
                text="After over **3 days** of hacking, and **8+ months** of preparation, this picture was taken at the end of our 7th Hackathon, **Knight Hacks VII**. I can say confidently that running this event was one of the most **impactful** experiences of my entire life. This event would not be possible without the collective effort of the officers, directors, organizers, and operation teams members working tirelessly night after night. A perfect example of the collective efforts of a **community**."
                image="/about/people/knighthacksvii.jpg"
            />
        ),
    },
    {
        title: "Knight Hacks @ HackUSF",
        src: "/about/people/hackusf.jpg",
        infoDialog: (
            <InfoDialog
                title="Knight Hacks @ HackUSF"
                text="A community can mean lots of things, and beyond just **Knight Hacks**, I am a member of the **Florida Hacker Community**. Hackathons at universities all over the state of Florida work towards the same goals as I do - help people break into technology. \\n\\n With that in mind, we **support** as many Florida Hackathons as possible, across many partner organizations just like **HackUSF** pictured above. Year after year, we show up as a united front and support the statewide community on behalf of our own."
                image="/about/people/hackusf.jpg"
            />
        ),
    },
];

const progressImages = [
    {
        title: "First Hackathon (Shell Hacks 2023)",
        src: "/about/progress/firsthackathon.jpg",
        infoDialog: (
            <InfoDialog
                title="First Hackathon (Shell Hacks 2023)"
                text="**Shell Hacks 2023** was my first experience of the Hackathon Culture in Florida. At this point of my journey, I had only been programming for about **5 months**, and I was extremely **intimidated**. But, I thought why not give it a shot, and so I did. I was exposed to this opportunity in my first weeks of school by **Knight Hacks**, so I had a community to fall back on. \\n\\n The project was a **disaster**, and it took us the first 12 hours just to set up a GitHub repository. We all ended up splitting up and making our own solo projects, but it was still the **best learning experience** I had thus far in my journey through software."
                image="/about/progress/firsthackathon.jpg"
            />
        ),
    },
    {
        title: "First Hackathon Win (VoiceBoard @ Shell Hacks 2024)",
        src: "/about/progress/firstwin.jpg",
        infoDialog: (
            <InfoDialog
                title="First Hackathon Win (VoiceBoard @ Shell Hacks 2024)"
                text="At Shell Hacks 2024, exactly **1 year** after my first Hackathon, my team and I were able to win **1st Place** in the **Google Hack for Social Good Challenge** award. This win was a huge milestone for me, as it wasn't only my first win, but was the first Hackathon where I truly felt **capable** and **confident** in my abilities as a developer. The sky is the limit. \\n\\n We built **VoiceBoard**, a web-app that allows users to voice whiteboarded diagrams onto a canvas. We built it to help those who may be physically impaired convey their ideas better, since we realized we could not be the developers we are without whiteboarding. Feel free to check it out in my [projects section](https://dvidal.dev/projects)."
                image="/about/progress/firstwin.jpg"
            />
        ),
    },
    {
        title: "Winner of Google Gemini Challenge (VisuWorld @ Bitcamp XI)",
        src: "/about/progress/bigwin.jpg",
        infoDialog: (
            <InfoDialog
                title="Winner of Google Gemini Challenge (VisuWorld @ Bitcamp XI)"
                text="One of the many **Knight Hacks** wins at **Bitcamp XI**, my team and I won **1st Place** in both the **Prettiest Hack Challenge** and the **Best Use of Google Gemini** challenge. The most recent of my grand successes, this win was a huge moment for my team and I. We spent **18 hours**, or half the event, just coming up with an idea. And while that was super annoying, this showed me that I am held back not by my abilities, but by an idea. I felt that, given enough time and resources, I was on the path to being able to build **anything**. \\n\\n We built **VisuWorld**, a web-app that uses a RAG-empowered Google Gemini pipeline to generate 3D scenes using GLSL shader code as a parsing layer. This project gained a lot of attention, and has been [featured](https://www.linkedin.com/posts/major-league-hacking_builtwithmlh-hackathonlife-geminiai-ugcPost-7340441876530937856-sYp5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk) by MLH and pitched to the **Google Deepmind** team for their developer showcase series. This was a big inflection point for me and my career as I started gaining **visibility** for myself and my work."
                image="/about/progress/bigwin.jpg"
            />
        ),
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

    // Independent carousel state for each section
    const [passionCurrent, setPassionCurrent] = React.useState(0);
    const [peopleCurrent, setPeopleCurrent] = React.useState(0);
    const [progressCurrent, setProgressCurrent] = React.useState(0);

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
            className="relative flex flex-col lg:flex-row lg:space-x-32 justify-center rounded-md px-4 py-8 lg:px-10 lg:py-16 mb-8 lg:mb-40"
            ref={ref}
        >
            <div className="div relative flex items-start px-2 lg:px-4 w-full lg:w-auto">
                <div className="w-full lg:max-w-4xl">
                    {/* Section 1 - Passion */}
                    <div className="mb-20 lg:mb-80 lg:mt-8">
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
                            className="text-sm md:text-lg mt-6 lg:mt-10 w-full lg:max-w-2xl text-foreground"
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
                            <div className="text-sm md:text-lg mt-6 lg:mt-10 w-full lg:max-w-2xl text-foreground">
                                As a part of helping others find their way into
                                the tech industry, I often find that passion is
                                what truly makes the difference. Beyond just
                                cultivating knowledge in others, I strive to
                                ignite the flame of passion deep in their
                                hearts. I often tell others to build something
                                they love, and passion will follow!
                            </div>
                        </motion.div>

                        {/* Mobile carousel for Passion section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === 0 ? 1 : 0.3 }}
                            className="mt-8 lg:hidden"
                        >
                            <div className="h-64 md:h-96 w-full lg:h-[29rem] lg:w-[51rem] overflow-hidden rounded-md">
                                <Carousel
                                    slides={passionImages}
                                    current={passionCurrent}
                                    setCurrent={setPassionCurrent}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Section 2 - People */}
                    <div className="my-20 lg:my-80">
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
                            className="text-sm md:text-lg mt-6 lg:mt-10 w-full lg:max-w-2xl text-foreground"
                        >
                            <div>
                                I am a socially driven person, and I firmly
                                believe in the importance of community across
                                all facets of life. Throughout my time at UCF, I
                                have been fortunate to have joined many
                                developer communities, like{" "}
                                <LinkPreview
                                    url="https://guild.knighthacks.org"
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
                            <div className="text-sm md:text-lg mt-6 lg:mt-10 w-full lg:max-w-2xl text-foreground">
                                Based on my personal experiences, community is
                                one of the most important things for my success.
                                The collective wisdom and effort of my
                                community, both professionally and technically,
                                has been invaluable in my journey. Thus, I
                                strive to contribute to every community I am
                                apart of and give back the same wisdom I have
                                received.
                            </div>
                        </motion.div>

                        {/* Mobile carousel for People section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === 1 ? 1 : 0.3 }}
                            className="mt-8 lg:hidden"
                        >
                            <div className="h-64 md:h-96 w-full lg:h-[29rem] lg:w-[51rem] overflow-hidden rounded-md">
                                <Carousel
                                    slides={peopleImages}
                                    current={peopleCurrent}
                                    setCurrent={setPeopleCurrent}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Section 3 - Progress */}
                    <div className="my-20 lg:mt-80 lg:mb-18">
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
                            className="text-sm md:text-lg mt-6 lg:mt-10 w-full lg:max-w-2xl text-foreground"
                        >
                            <div>
                                To me, the most important metric of success is
                                consistent and continuous progress. I take
                                advantage of every opportunity to learn and
                                grow, either technically, professionally, or
                                personally. I also aim to help inspire others to
                                work towards their own progress, which I have
                                cultivated through my work with the{" "}
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
                            <div className="text-sm md:text-lg mt-6 lg:mt-10 w-full lg:max-w-2xl text-foreground">
                                I am a firm believer in the importance of
                                starting small and building up to bigger goals.
                                As engineers, we often get caught up in our
                                current capabilities, feeling Imposter Syndrome
                                or doubt when we are just starting out. However,
                                I believe the best way to overcome this feeling
                                of doubt is by simply doing. Drop the tutorials
                                and docs, and just start building. Fail fast,
                                learn even faster.
                            </div>
                        </motion.div>

                        {/* Mobile carousel for Progress section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === 2 ? 1 : 0.3 }}
                            className="mt-8 lg:hidden"
                        >
                            <div className="h-64 md:h-96 w-full lg:h-[29rem] lg:w-[51rem] overflow-hidden rounded-md">
                                <Carousel
                                    slides={progressImages}
                                    current={progressCurrent}
                                    setCurrent={setProgressCurrent}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Desktop sticky carousel */}
            <div
                className={cn(
                    "sticky top-[15rem] hidden h-64 md:h-96 w-full lg:h-[29rem] lg:w-[51rem] overflow-hidden rounded-md lg:block",
                    contentClassName
                )}
            >
                {/* Show the correct carousel for the active card */}
                {activeCard === 0 && (
                    <Carousel
                        slides={passionImages}
                        current={passionCurrent}
                        setCurrent={setPassionCurrent}
                    />
                )}
                {activeCard === 1 && (
                    <Carousel
                        slides={peopleImages}
                        current={peopleCurrent}
                        setCurrent={setPeopleCurrent}
                    />
                )}
                {activeCard === 2 && (
                    <Carousel
                        slides={progressImages}
                        current={progressCurrent}
                        setCurrent={setProgressCurrent}
                    />
                )}
            </div>
        </motion.div>
    );
};
