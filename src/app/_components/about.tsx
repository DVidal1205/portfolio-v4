"use client";
import Carousel from "@/components/ui/carousel";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const heroImage = [
    {
        title: "Daniel Vidal",
        src: "/headshot.png",
    },
];

export function About() {
    return (
        <div className="w-full bg-[#200c3c] relative pt-96">
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
            <div className="relative z-10 mt-80 mb-[28rem]">
                <div className="relative flex flex-col lg:flex-row lg:space-x-32 justify-center rounded-md px-4 lg:px-10">
                    <div className="div relative flex items-start px-2 lg:px-4 w-full lg:w-auto">
                        <div className="w-full lg:max-w-4xl">
                            <div className="lg:max-w-2xl">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                                    Welcome to my{" "}
                                    <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                        Portfolio!
                                    </span>
                                </h1>
                                <p className="text-foreground mt-6">
                                    Passionate about the pursuit of knowledge
                                    and helping others break into the tech
                                    industry.
                                </p>
                            </div>
                            <div className="mt-8 lg:hidden">
                                <div className="h-64 w-full overflow-hidden rounded-md">
                                    <Carousel slides={heroImage} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden h-[29rem] w-[51rem] overflow-hidden rounded-md lg:block">
                        <Carousel slides={heroImage} />
                    </div>
                </div>
            </div>

            {/* Values Sticky Scroll */}
            <StickyScroll />
        </div>
    );
}
