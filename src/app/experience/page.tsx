import { Metadata } from "next";

const pageTitle = "Experience | Dylan Vidal";
const pageDescription =
    "A timeline of my professional experiences in a variety of different environments - startups, non-profits, large tech companies, and even university positions.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "https://dvidal.dev/experience",
        type: "website",
        images: [
            {
                url: "/banner.png",
                width: 1200,
                height: 630,
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

import ExperienceCard from "@/components/ui/experience-card";
import { experiences } from "@/constants/experience";

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-background pt-20 md:pt-24 pb-4 md:pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-bold gradient-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent mb-2 animate-fade-up delay-100">
                        Professional Experience
                    </h1>
                    <p className="px-2 text-foreground text-sm md:text-base max-w-4xl mx-auto animate-fade-up delay-300">
                        A comprehensive overview of my professional journey from
                        start to finish. I&apos;ve gotten to work in a variety
                        of different environments - startups, non-profits, large
                        tech companies, and even university positions!
                    </p>
                </div>
                <div className="relative">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                            index={index}
                            isLast={index === experiences.length - 1}
                        />
                    ))}
                </div>
            </div>
            {/* SEO: Comprehensive experience information for search engines */}
            <section className="sr-only">
                <h2>Professional Experience - Complete Details</h2>
                {experiences.map((exp) => (
                    <article key={exp.id}>
                        <h3>
                            {exp.title} at {exp.company}
                        </h3>
                        <p>
                            <strong>Period:</strong> {exp.period}
                        </p>
                        <p>
                            <strong>Location:</strong> {exp.location}
                        </p>
                        <p>
                            <strong>Description:</strong> {exp.description}
                        </p>
                        <div>
                            <h4>Responsibilities</h4>
                            <ul>
                                {exp.responsibilities.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4>Achievements</h4>
                            <ul>
                                {exp.achievements.map((a, i) => (
                                    <li key={i}>{a}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4>Technologies & Skills</h4>
                            <ul>
                                {exp.skills.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {exp.links && <h4>Links</h4>}
                            <ul>
                                {exp.links?.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}
