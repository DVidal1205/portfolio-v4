"use client";
import Carousel from "@/components/ui/carousel";
import { InfoDialog } from "@/components/ui/info-dialog";
import { LinkPreview } from "@/components/ui/link-preview";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const aboutImages = [
    {
        title: "Opening Ceremony @ Knight Hacks VIII",
        src: "/about/kh-viii-crowd.png",
        infoDialog: (
            <InfoDialog
                title="Opening Ceremony @ Knight Hacks VIII"
                text="This picture was taken at the opening ceremony for Knight Hacks VIII, where I set the tone for the weekend and welcomed nearly 1,000 hackers to UCF for a weekend full of innovating and building!"
                image="/about/kh-viii-crowd.png"
            />
        ),
    },
    {
        title: "NVIDIA Intern Picture w/ Jensen Huang",
        src: "/about/jensen.png",
        infoDialog: (
            <InfoDialog
                title="NVIDIA Intern Picture w/ Jensen Huang"
                text="No... this is not AI Generated. At the end of my Internship at NVIDIA, we got to meet and chat with Jensen!"
                image="/about/jensen.png"
            />
        ),
    },
    {
        title: "My First Speaker Event (Hackcon 2025)",
        src: "/about/hackcon.png",
        infoDialog: (
            <InfoDialog
                title="My First Speaker Event (Hackcon 2025)"
                text="This picture was taken at the **Hackcon 2025** Speaker Series, where I was able to speak on teaching organizers about making their events memorable and unforgettable experiences. I was able to share my experiences as a Hackathon Organizer and how I was able to make my events more engaging and memorable for participants."
                image="/about/hackcon.png"
            />
        ),
    },
    {
        title: "My First Headshot",
        src: "/headshot.png",
        infoDialog: (
            <InfoDialog
                title="My Headshot (taken by Maria, Knight Hacks Alum)"
                text="This headshot was taken by [Maria](https://www.linkedin.com/in/mariachm/), a Knight Hacks Alum, for one of our **Fall 2025 Kickstart** events. Kickstart is our semester-long mentorship program, where we helped over **100** students break into tech with pro-dev events like resume reviews, mock interviews, and exclusive networking opportunities. We took headshots for over **60** members of the Kickstart cohort fully covered by club funds, helping participants transform their digital footprint on professional platforms like **LinkedIn** and **GitHub**."
                image="/headshot.png"
            />
        ),
    },
    {
        title: "The Knight Hacks Pirate Crew (Knight Hacks VII)",
        src: "/about/thecrew.jpg",
        infoDialog: (
            <InfoDialog
                title="The Knight Hacks Pirate Crew (Knight Hacks VII)"
                text="This picture was taken at the **Knight Hacks VII** Hackathon, where we decided to make fools of ourselves for the annual midnight scavenger hunt. This year was pirate theme, and featured a rag-tag crew of scallywags, pictured above."
                image="/about/thecrew.jpg"
            />
        ),
    },
    {
        title: "First Week in the Bay Area",
        src: "/about/firstweek.jpg",
        infoDialog: (
            <InfoDialog
                title="First Week in the Bay Area"
                text="This picture was taken at the Twin Peaks park in San Francisco, where I was able to lay eyes on the city where I'd be spending my summer while interning at **NVIDIA**. I took the first week to explore the city with my girlfriend **Kylie**, and it was a great time. My excitement for the summer only grew greater as I took in the sights and the city. \\n\\n Don't mind the hair... it was **really** windy up there."
                image="/about/firstweek.jpg"
            />
        ),
    },
    {
        title: "First Knight Hacks (2023)",
        src: "/about/firstkh.jpg",
        infoDialog: (
            <InfoDialog
                title="First Knight Hacks (2023)"
                text="This picture was taken at my very first **Knight Hacks** Hackathon, which I attended during my **first semester** of being at UCF. **Knight Hacks VI** was a lot of fun and inspired me to learn more about tech, as well as step up and run the organization myself some day. I partnered up with [Leonard](https://www.linkedin.com/in/leonard-gofman-208578236/) to build a D&D AI Character Generator called Project Wildspace, which was a lot of fun to build and use."
                image="/about/firstkh.jpg"
            />
        ),
    },
    {
        title: "Tabling for K-8 at Engineers-Week",
        src: "/about/eweek.jpg",
        infoDialog: (
            <InfoDialog
                title="Tabling for K-8 at Engineers-Week"
                text="This picture was taken at the **Engineers-Week** event at UCF, where we were able to table for **K-8** students to help them understand what a career in engineering is like. We were able to talk to over **100** students, and I was able to answer questions about my own experiences in the field. It was a great experience, and I was able to help a lot of students understand what a career in engineering is like. \\n\\n Telling the children I knew people working at places like Roblox and Instagram (technically Meta) definitely got some of them excited to join tech someday. It was a great time to see the excitement in the room."
                image="/about/eweek.jpg"
            />
        ),
    },
];

export function About() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const valuesTitleRef = useRef<HTMLHeadingElement>(null);
    const footerTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation with text reveal effect
            if (titleRef.current) {
                gsap.fromTo(
                    titleRef.current,
                    {
                        y: 50,
                        opacity: 0,
                        scale: 0.95,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: "top 70%",
                            end: "top 30%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // Content text animations with staggered reveal
            if (contentRef.current) {
                const textElements = contentRef.current.querySelectorAll("div");
                gsap.fromTo(
                    textElements,
                    {
                        y: 30,
                        opacity: 0,
                        skewY: 1,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        skewY: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: contentRef.current,
                            start: "top 65%",
                            end: "top 25%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // Values title animation
            if (valuesTitleRef.current) {
                gsap.fromTo(
                    valuesTitleRef.current,
                    {
                        y: 60,
                        opacity: 0,
                        scale: 0.9,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: valuesTitleRef.current,
                            start: "top 70%",
                            end: "top 30%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // Footer text animation
            if (footerTextRef.current) {
                gsap.fromTo(
                    footerTextRef.current,
                    {
                        y: 40,
                        opacity: 0,
                        scale: 0.95,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: footerTextRef.current,
                            start: "top 75%",
                            end: "top 25%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // Subtle link hover effects
            const links = document.querySelectorAll("a");
            links.forEach((link) => {
                gsap.set(link, { transformOrigin: "center" });

                link.addEventListener("mouseenter", () => {
                    gsap.to(link, {
                        scale: 1.02,
                        duration: 0.2,
                        ease: "power2.out",
                    });
                });

                link.addEventListener("mouseleave", () => {
                    gsap.to(link, {
                        scale: 1,
                        duration: 0.2,
                        ease: "power2.out",
                    });
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full bg-[#200c3c] relative pt-8 md:pt-24 lg:pt-96">
            <Image
                src="/about/desktop-waves.svg"
                alt="desktop waves"
                width={1440}
                height={500}
                className="absolute top-0 left-0 w-full h-auto z-0 hidden lg:block pointer-events-none"
            />
            <Image
                src="/about/mobile-waves.svg"
                alt="mobile waves"
                width={375}
                height={500}
                className="absolute top-0 left-0 w-full h-auto z-0 lg:hidden pointer-events-none"
            />
            <div className="relative z-10 mt-56 mb-56 lg:mb-[28rem] lg:mt-44">
                <div className="relative flex flex-col lg:flex-row lg:space-x-32 justify-center rounded-md px-4 lg:px-10">
                    <div className="div relative flex items-start px-2 w-full lg:w-auto">
                        <div className="w-full lg:max-w-4xl">
                            <div ref={contentRef} className="lg:max-w-2xl">
                                <h1
                                    ref={titleRef}
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground"
                                >
                                    Welcome to my{" "}
                                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                                        Portfolio!
                                    </span>
                                </h1>
                                <div className="text-foreground text-sm md:text-lg mt-6">
                                    My name is Dylan Vidal, and I am a
                                    passionate Software Engineer and Computer
                                    Science Student at the{" "}
                                    <LinkPreview
                                        url="https://www.ucf.edu/"
                                        className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                    >
                                        University of Central Florida
                                    </LinkPreview>
                                    , where I am a second-year student pursuing
                                    a Bachelor of Science in Computer Science. I
                                    am the President of the{" "}
                                    <LinkPreview
                                        url="https://club.knighthacks.org/"
                                        className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                    >
                                        Knight Hacks
                                    </LinkPreview>
                                    , UCF&apos;s Software Development Club and
                                    Hackathon Organization, where I make it my
                                    mission to empower as many aspiring
                                    technologists as I can. I am also a{" "}
                                    <LinkPreview
                                        url="https://githubcampus.expert/DVidal1205/"
                                        className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                    >
                                        GitHub Campus Expert
                                    </LinkPreview>
                                    , which enables me to do my very best in
                                    achieving that goal.
                                </div>
                                <div className="text-foreground text-sm md:text-lg mt-6">
                                    Professionally, I was a former and returning
                                    Software Engineer Intern at{" "}
                                    <LinkPreview
                                        url="https://www.nvidia.com/"
                                        className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                    >
                                        NVIDIA
                                    </LinkPreview>{" "}
                                    for the Summer 2025 Season as an Ignite
                                    Intern working in the SW-GPU department on
                                    the autonomous hardware recovery team as a
                                    subset of{" "}
                                    <LinkPreview
                                        url="https://www.nvidia.com/en-us/data-center/mission-control/"
                                        className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                    >
                                        NVIDIA Mission Control
                                    </LinkPreview>
                                    . I have also worked as a Software Engineer
                                    Intern for{" "}
                                    <LinkPreview
                                        url="https://www.pheratech.com/"
                                        className="text-primary-500 hover:text-primary-400 underline transition-colors"
                                    >
                                        Pheratech Systems
                                    </LinkPreview>
                                    , where I built an internal inventory and
                                    user management system for operations and
                                    implemented Computer Vision practices to
                                    help achieve company MVP and raise funding.
                                </div>
                                <div className="text-foreground text-sm md:text-lg mt-6">
                                    As for my personal life, I am a huge fan of
                                    Tabletop Roleplaying games like Dungeons and
                                    Dragons, which most of my initial software
                                    projects were built for. I am also super
                                    into weightlifting and being in good health.
                                </div>
                            </div>
                            <div className="mt-8 lg:hidden">
                                <div className="w-full lg:w-[51rem] overflow-visible rounded-md">
                                    <Carousel slides={aboutImages} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="hidden lg:block w-full lg:w-[51rem] overflow-visible rounded-md">
                            <Carousel slides={aboutImages} />
                        </div>
                        <div
                            ref={footerTextRef}
                            className="text-foreground text-sm md:text-lg mt-6 md:mt-16 max-w-3xl gap-2 px-2"
                        >
                            Thanks for taking the time to check out my
                            portfolio! While you&apos;re here, be on the lookout
                            for any{" "}
                            <InfoDialog
                                title="Good Catch!"
                                text="Nice eye, this was merely a **test** to see if you were paying attention."
                                className="mx-1 bg-none border-none bg-transparent p-0"
                                image="/about/infotest.png"
                            />{" "}
                            icons scattered around the site, which are clickable
                            info snippets with some fun extra details.
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Sticky Scroll */}
            <div
                ref={valuesTitleRef}
                className="text-center text-foreground text-3xl md:text-5xl font-bold mb-4 md:mb-10 lg:pt-20"
            >
                My Core{" "}
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    Values
                </span>
            </div>
            <StickyScroll />
        </div>
    );
}
