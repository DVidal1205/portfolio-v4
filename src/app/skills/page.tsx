import FallingText from "@/components/ui/falling-text";
import { allSkills, shuffleArray, skillColors } from "@/constants/skills";
import { Metadata } from "next";
import { useMemo } from "react";

const pageTitle = "Skills | Dylan Vidal";
const pageDescription =
    "An overview of my technical skills, including programming languages, frameworks, and tools.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "https://dvidal.dev/skills",
        type: "website",
        images: [
            {
                url: "/banner.png",
                alt: pageTitle,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: ["/banner.png"],
    },
};

export default function SkillsPage() {
    // Randomize skills order for better color distribution
    const shuffledSkills = useMemo(() => shuffleArray(allSkills), []);

    return (
        <div className="min-h-screen pt-20 p-4 md:pt-24">
            <div className="text-center mb-8">
                <h1 className=" text-2xl md:text-4xl animate-fade-up delay-100 font-bold gradient-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent mb-2">
                    My Skills
                </h1>
                <p className="px-2 text-foreground text-sm md:text-base animate-fade-up delay-300">
                    Most skills sections are boring... so I made this one a bit
                    more fun!
                </p>
                <div className="mt-4 flex justify-center gap-4 flex-wrap text-sm md:text-lg">
                    <span
                        className={`${skillColors.programming} animate-fade-up delay-[700ms]`}
                    >
                        ● Programming Languages
                    </span>
                    <span
                        className={`${skillColors.tools} animate-fade-up delay-[900ms]`}
                    >
                        ● Tools & Technologies
                    </span>
                    <span
                        className={`${skillColors.appdev} animate-fade-up delay-[1100ms]`}
                    >
                        ● App Development
                    </span>
                    <span
                        className={`${skillColors.aiml} animate-fade-up delay-[1300ms]`}
                    >
                        ● AI/ML & Data Science
                    </span>
                    <span
                        className={`${skillColors.leadership} animate-fade-up delay-[1500ms]`}
                    >
                        ● Leadership
                    </span>
                </div>
            </div>

            <div className=" h-[60vh] md:h-[70vh] animate-fade-up">
                <FallingText
                    skills={shuffledSkills}
                    trigger="auto"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.2}
                    mobileSize="text-sm"
                    desktopSize="text-3xl"
                    mouseConstraintStiffness={0.3}
                />
            </div>
        </div>
    );
}
