"use client";
import Carousel from "@/components/ui/carousel";
import { InfoDialog } from "@/components/ui/info-dialog";
import { LinkPreview } from "@/components/ui/link-preview";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const heroImages = [
    {
        title: "My Favorite Headshot (taken by Maria, Knight Hacks Alum)",
        src: "/headshot.png",
        infoDialog: (
            <InfoDialog
                title="My Favorite Headshot (taken by Maria, Knight Hacks Alum)"
                text="This headshot was taken by [Maria](https://www.linkedin.com/in/mariachm/), a Knight Hacks Alum, for one of our **Fall 2025 Kickstart** events. Kickstart is our semester-long mentorship program, where we helped over **100** students break into tech with pro-dev events like resume reviews, mock interviews, and exclusive networking opportunities. We took headshots for over **60** members of the Kickstart cohort fully covered by club funds, helping participants transform their digital footprint on professional platforms like **LinkedIn** and **GitHub**."
                image="/headshot.png"
            />
        ),
    },
];

export function About() {
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
                            <div className="lg:max-w-2xl">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
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
                                    Professionally, I am a Software Engineer
                                    Intern at{" "}
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
                                <div className="aspect-video w-full overflow-hidden rounded-md">
                                    <Carousel slides={heroImages} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="h-64 md:h-96 w-full lg:h-[29rem] lg:w-[51rem] overflow-hidden rounded-md">
                            <Carousel slides={heroImages} />
                        </div>
                        <div className="text-foreground text-sm md:text-lg mt-6 md:mt-16 max-w-3xl gap-2 px-2">
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
            <div className="text-center text-foreground text-3xl md:text-5xl font-bold mb-4 md:mb-10 lg:pt-20">
                My Core{" "}
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    Values
                </span>
            </div>
            <StickyScroll />
        </div>
    );
}
