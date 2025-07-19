import ProjectCard, { ProjectData } from "@/components/ui/project-card";
import ProjectPanel from "@/components/ui/project-panel";
import { projects } from "@/constants/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects - Dylan Vidal | Software Engineer Portfolio",
    description:
        "Explore my software engineering projects including VisuWorld, CodeJoust, AirJam, VoiceBoard, and more. Full-stack development, AI/ML, and innovative solutions.",
    keywords: [
        "software engineer projects",
        "full-stack development",
        "AI projects",
        "machine learning",
        "web development",
        "React projects",
        "TypeScript",
        "Python development",
        "hackathon projects",
        "portfolio",
    ],
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background pt-20 md:pt-24 pb-4 md:pb-20">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-bold gradient-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent mb-2 animate-fade-up delay-100">
                        Projects
                    </h1>
                    <p className=" px-2 text-foreground text-sm md:text-base max-w-4xl mx-auto animate-fade-up delay-300">
                        Throughout my journey through learning software,
                        I&apos;ve gotten around to building some pretty cool
                        stuff. Whether a personal, class, or Hackathon project,
                        here are a few that I find worth showing off!
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                    {projects.map((project: ProjectData, index: number) => (
                        <div
                            key={project.id}
                            className="w-full animate-fade-up animate-duration-[800ms] animate-delay-[100ms]"
                            style={{
                                animationDelay: `${150 * index + 400}ms`,
                                transformOrigin: "center",
                            }}
                        >
                            <ProjectCard
                                project={project}
                                projectId={project.id}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* SEO: Comprehensive project information for search engines */}
            <section className="sr-only">
                <h2>Portfolio Projects - Complete Details</h2>
                {projects.map((project: ProjectData) => (
                    <article key={project.id}>
                        <h3>{project.title}</h3>
                        <p>
                            <strong>Period:</strong> {project.period}
                        </p>
                        <p>
                            <strong>Description:</strong> {project.description}
                        </p>
                        <div>
                            <h4>Detailed Information</h4>
                            <p>{project.longDescription}</p>
                        </div>
                        <div>
                            <h4>Technologies & Skills</h4>
                            <ul>
                                {project.skills.map((skill: string) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {project.links && <h4>Project Links</h4>}
                            <ul>
                                {project.links?.map(
                                    (
                                        link: {
                                            label: string;
                                            url: string;
                                            icon: string;
                                        },
                                        index: number
                                    ) => (
                                        <li key={index}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </article>
                ))}
            </section>

            {/* Client-side interactive panel */}
            <ProjectPanel projects={projects} />
        </div>
    );
}
