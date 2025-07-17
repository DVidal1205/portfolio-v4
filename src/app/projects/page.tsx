"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/ui/carousel";
import ProjectCard, { ProjectData } from "@/components/ui/project-card";
import { projects } from "@/constants/projects";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink, Github, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Global state for project panel
let isProjectPanelOpen = false;
const listeners: ((isOpen: boolean) => void)[] = [];

export const setProjectPanelOpen = (isOpen: boolean) => {
    isProjectPanelOpen = isOpen;
    listeners.forEach((listener) => listener(isOpen));
};

export const useProjectPanelState = () => {
    const [isOpen, setIsOpen] = useState(isProjectPanelOpen);

    useEffect(() => {
        const listener = (isOpen: boolean) => setIsOpen(isOpen);
        listeners.push(listener);
        return () => {
            const index = listeners.indexOf(listener);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, []);

    return isOpen;
};

function ProjectsPageContent() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
        null
    );
    const isPanelOpen = useProjectPanelState();

    const renderIcon = (iconType: "github" | "external") => {
        return iconType === "github" ? (
            <Github className="h-4 w-4" />
        ) : (
            <ExternalLink className="h-4 w-4" />
        );
    };

    const closePanel = () => setSelectedProject(null);

    // Update panel state when selectedProject changes
    useEffect(() => {
        setProjectPanelOpen(selectedProject !== null);
    }, [selectedProject]);

    function parseHighlight(text: string, accentColor: string) {
        // Convert all literal \n to real newlines, then remove any remaining stray backslashes
        let normalized = text.replace(/\\n/g, "\n");
        normalized = normalized.replace(/\\/g, "");
        // Split into paragraphs on double newlines
        const paragraphs = normalized.split(/\n\n/);
        return paragraphs.map((para, pi) => {
            // Split paragraph into lines on single newline
            const lines = para.split(/\n/);
            return (
                <p key={pi} className={pi > 0 ? "mt-2" : undefined}>
                    {lines.map((line, li) => {
                        // Regex to match **highlight**, [text](url), or plain text
                        const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^\)]+\))/g;
                        const parts = line.split(regex);
                        return (
                            <React.Fragment key={li}>
                                {parts.map((part, i) => {
                                    if (/^\*\*[^*]+\*\*$/.test(part)) {
                                        // Highlight
                                        return (
                                            <span
                                                key={i}
                                                className="font-semibold"
                                                style={{ color: accentColor }}
                                            >
                                                {part.replace(/\*\*/g, "")}
                                            </span>
                                        );
                                    } else if (
                                        /^\[[^\]]+\]\([^\)]+\)$/.test(part)
                                    ) {
                                        // Markdown link
                                        const match = part.match(
                                            /^\[([^\]]+)\]\(([^\)]+)\)$/
                                        );
                                        if (match) {
                                            const [, text, url] = match;
                                            return (
                                                <Link
                                                    key={i}
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-semibold underline transition-colors"
                                                    style={{
                                                        color: accentColor,
                                                        textDecorationColor:
                                                            accentColor,
                                                    }}
                                                >
                                                    {text}
                                                </Link>
                                            );
                                        }
                                    }
                                    // Plain text
                                    return part;
                                })}
                                {li < lines.length - 1 && <br />}
                            </React.Fragment>
                        );
                    })}
                </p>
            );
        });
    }

    return (
        <main className="min-h-screen bg-background pt-24 md:pt-36">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
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
                    {projects.map((project: ProjectData) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onSelect={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                            onClick={closePanel}
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 200,
                                mass: 0.8,
                            }}
                            className="fixed top-0 right-0 h-full w-full max-w-full md:w-2/3 lg:w-1/2 xl:w-2/5 z-[70] overflow-y-auto"
                            style={{
                                backgroundColor:
                                    selectedProject.colors.panelBackground,
                                color: selectedProject.colors.panelText,
                            }}
                        >
                            <div
                                className="sticky top-0 z-10 backdrop-blur-md border-b p-4 flex justify-between items-center"
                                style={{
                                    backgroundColor: `${selectedProject.colors.panelBackground}E6`, // 90% opacity
                                    borderBottomColor: `${selectedProject.colors.accent}33`,
                                }}
                            >
                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{
                                            backgroundColor:
                                                selectedProject.colors.accent,
                                        }}
                                    >
                                        <Briefcase className="h-4 w-4 text-white" />
                                    </div>
                                    <h3
                                        className="text-xl font-bold truncate"
                                        style={{
                                            color: selectedProject.colors
                                                .panelText,
                                        }}
                                    >
                                        {selectedProject.title}
                                    </h3>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={closePanel}
                                >
                                    <X
                                        className="h-5 w-5"
                                        style={{
                                            color: selectedProject.colors
                                                .panelText,
                                        }}
                                    />
                                </Button>
                            </div>

                            <div className="p-4 md:p-6">
                                <div
                                    className="relative aspect-video rounded-xl overflow-hidden mb-6"
                                    style={{
                                        backgroundColor:
                                            selectedProject.colors
                                                .panelBackground,
                                    }}
                                >
                                    <Carousel
                                        slides={selectedProject.images.map(
                                            (img: {
                                                src: string;
                                                title: string;
                                            }) => ({
                                                src: img.src,
                                                title: img.title,
                                            })
                                        )}
                                    />
                                </div>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <div
                                        className="flex items-center gap-1"
                                        style={{
                                            color: `${selectedProject.colors.panelText}80`,
                                        }}
                                    >
                                        <Calendar className="h-4 w-4" />
                                        <span>{selectedProject.period}</span>
                                    </div>
                                </div>

                                <div className="prose prose-sm max-w-none mb-8">
                                    <div
                                        style={{
                                            color: selectedProject.colors
                                                .panelText,
                                        }}
                                    >
                                        {parseHighlight(
                                            selectedProject.longDescription,
                                            selectedProject.colors.accent
                                        )}
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4
                                        className="text-lg font-semibold mb-3"
                                        style={{
                                            color: selectedProject.colors
                                                .panelText,
                                        }}
                                    >
                                        Skills & Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.skills.map(
                                            (skill: string) => (
                                                <Badge
                                                    key={skill}
                                                    className="transition-all hover:scale-105 text-xs md:text-sm"
                                                    style={{
                                                        backgroundColor: `${selectedProject.colors.accent}22`,
                                                        color: selectedProject
                                                            .colors.accent,
                                                        borderColor: `${selectedProject.colors.accent}44`,
                                                    }}
                                                >
                                                    {skill}
                                                </Badge>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <h4
                                        className="text-lg font-semibold mb-3"
                                        style={{
                                            color: selectedProject.colors
                                                .panelText,
                                        }}
                                    >
                                        Links
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.links.map(
                                            (
                                                link: {
                                                    label: string;
                                                    url: string;
                                                    icon: "github" | "external";
                                                },
                                                index: number
                                            ) => (
                                                <Link
                                                    key={index}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Badge
                                                        className="transition-all hover:scale-105 text-xs md:text-sm cursor-pointer"
                                                        style={{
                                                            backgroundColor: `${selectedProject.colors.accent}22`,
                                                            color: selectedProject
                                                                .colors.accent,
                                                            borderColor: `${selectedProject.colors.accent}44`,
                                                        }}
                                                    >
                                                        {renderIcon(link.icon)}
                                                        <span className="ml-1 truncate">
                                                            {link.label}
                                                        </span>
                                                    </Badge>
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
}

export default function ProjectsPage() {
    return <ProjectsPageContent />;
}
