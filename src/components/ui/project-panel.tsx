"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/ui/carousel";
import { ProjectData } from "@/components/ui/project-card";
import { setProjectPanelOpen } from "@/hooks/usePanelOpen";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, Code, ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ProjectPanelProps {
    projects: ProjectData[];
}

export default function ProjectPanel({ projects }: ProjectPanelProps) {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
        null
    );
    const [maximizedImageIndex, setMaximizedImageIndex] = useState<number | null>(null);

    const renderIcon = (iconType: "github" | "external") => {
        return iconType === "github" ? (
            <Github className="h-4 w-4" />
        ) : (
            <ExternalLink className="h-4 w-4" />
        );
    };

    const closePanel = () => setSelectedProject(null);

    // Listen for project selection events
    useEffect(() => {
        const handleProjectSelected = (event: CustomEvent) => {
            const projectId = event.detail.projectId;
            const project = projects.find((p) => p.id === projectId);
            if (project) {
                setSelectedProject(project);
            }
        };

        window.addEventListener(
            "projectSelected",
            handleProjectSelected as EventListener
        );
        return () => {
            window.removeEventListener(
                "projectSelected",
                handleProjectSelected as EventListener
            );
        };
    }, [projects]);

    // Update panel state when selectedProject changes
    useEffect(() => {
        setProjectPanelOpen(selectedProject !== null);
    }, [selectedProject]);

    // Handle escape key to close panel or maximized image
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (maximizedImageIndex !== null) {
                    setMaximizedImageIndex(null);
                } else if (selectedProject) {
                    closePanel();
                }
            }
        };

        if (selectedProject || maximizedImageIndex !== null) {
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [selectedProject, maximizedImageIndex]);

    // Handle arrow keys for image navigation when maximized
    useEffect(() => {
        const handleArrowKeys = (e: KeyboardEvent) => {
            if (maximizedImageIndex === null || !selectedProject) return;

            if (e.key === "ArrowLeft") {
                const prevIndex = maximizedImageIndex > 0 
                    ? maximizedImageIndex - 1 
                    : selectedProject.images.length - 1;
                setMaximizedImageIndex(prevIndex);
            } else if (e.key === "ArrowRight") {
                const nextIndex = maximizedImageIndex < selectedProject.images.length - 1
                    ? maximizedImageIndex + 1
                    : 0;
                setMaximizedImageIndex(nextIndex);
            }
        };

        if (maximizedImageIndex !== null) {
            document.addEventListener("keydown", handleArrowKeys);
            return () => document.removeEventListener("keydown", handleArrowKeys);
        }
    }, [maximizedImageIndex, selectedProject]);

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
                <p key={pi} className={pi > 0 ? "mt-6" : undefined}>
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
        <>
            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            key="panel-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="fixed inset-0 bg-black/50 z-[350] backdrop-blur-sm"
                            onClick={closePanel}
                        />

                        <motion.div
                            key="panel-content"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 200,
                                mass: 0.8,
                            }}
                            className="fixed top-0 right-0 h-full w-full max-w-full md:w-2/3 lg:w-1/2 xl:w-2/5 z-[400] overflow-y-auto"
                            style={{
                                backgroundColor:
                                    selectedProject.colors.panelBackground,
                                color: selectedProject.colors.panelText,
                            }}
                        >
                        <div
                            className="sticky top-0 z-50 backdrop-blur-md border-b p-4 flex justify-between items-center"
                            style={{
                                backgroundColor: `${selectedProject.colors.panelBackground}E6`, // 90% opacity
                                borderBottomColor: `${selectedProject.colors.accent}33`,
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center gap-2 min-w-0 flex-1">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor:
                                            selectedProject.colors.accent,
                                    }}
                                >
                                    <Code className="h-4 w-4 text-white" />
                                </div>
                                <h3
                                    className="text-xl font-bold truncate"
                                    style={{
                                        color: selectedProject.colors.panelText,
                                    }}
                                >
                                    {selectedProject.title}
                                </h3>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    closePanel();
                                }}
                                className="relative z-20 hover:bg-black/10 active:bg-black/20 transition-colors"
                                style={{
                                    color: selectedProject.colors.panelText,
                                }}
                            >
                                <X
                                    className="h-5 w-5"
                                    style={{
                                        color: selectedProject.colors.panelText,
                                    }}
                                />
                            </Button>
                        </div>

                        <div className="p-4 md:p-6">
                            <div
                                className="relative w-full h-64 md:h-96 lg:h-[29rem] rounded-xl mb-6 overflow-visible"
                                style={{
                                    backgroundColor:
                                        selectedProject.colors.panelBackground,
                                }}
                            >
                                <Carousel
                                    slides={selectedProject.images.map(
                                        (img: {
                                            src: string;
                                            title: string;
                                            infoDialog?: React.ReactNode;
                                        }) => ({
                                            src: img.src,
                                            title: img.title,
                                            infoDialog: img.infoDialog,
                                        })
                                    )}
                                    accentColor={selectedProject.colors.accent}
                                    onImageClick={(index) => setMaximizedImageIndex(index)}
                                />
                            </div>

                            <div className="flex flex-wrap gap-3 mb-6 text-sm md:text-base">
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

                            <div className="prose prose-sm max-w-none text-sm md:text-base mb-8">
                                <div
                                    style={{
                                        color: selectedProject.colors.panelText,
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
                                    className=" font-semibold mb-3  md:text-lg"
                                    style={{
                                        color: selectedProject.colors.panelText,
                                    }}
                                >
                                    Skills & Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2 text-sm md:text-base">
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
                                {selectedProject.links && (
                                    <h4
                                        className="font-semibold mb-3 md:text-lg"
                                        style={{
                                            color: selectedProject.colors
                                                .panelText,
                                        }}
                                    >
                                        Links
                                    </h4>
                                )}

                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.links?.map(
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

            {/* Maximized Image Modal */}
            <AnimatePresence>
                {maximizedImageIndex !== null && selectedProject && (
                    <>
                        <motion.div
                            key="image-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/90 z-[500] backdrop-blur-sm"
                            onClick={() => setMaximizedImageIndex(null)}
                        />
                        <motion.div
                            key="image-content"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="fixed inset-0 z-[600] flex items-center justify-center p-4"
                            onClick={() => setMaximizedImageIndex(null)}
                        >
                            <div
                                className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setMaximizedImageIndex(null)}
                                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                                >
                                    <X className="h-5 w-5" />
                                </Button>

                                {/* Previous Button */}
                                {selectedProject.images.length > 1 && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => {
                                            const prevIndex = maximizedImageIndex > 0 
                                                ? maximizedImageIndex - 1 
                                                : selectedProject.images.length - 1;
                                            setMaximizedImageIndex(prevIndex);
                                        }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </Button>
                                )}

                                {/* Next Button */}
                                {selectedProject.images.length > 1 && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => {
                                            const nextIndex = maximizedImageIndex < selectedProject.images.length - 1
                                                ? maximizedImageIndex + 1
                                                : 0;
                                            setMaximizedImageIndex(nextIndex);
                                        }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </Button>
                                )}

                                {/* Image */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src={selectedProject.images[maximizedImageIndex].src}
                                        alt={selectedProject.images[maximizedImageIndex].title}
                                        width={1920}
                                        height={1080}
                                        className="max-w-full max-h-[95vh] object-contain rounded-lg"
                                        quality={100}
                                        priority
                                    />
                                </div>

                                {/* Image Counter */}
                                {selectedProject.images.length > 1 && (
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm text-white text-sm">
                                        {maximizedImageIndex + 1} / {selectedProject.images.length}
                                    </div>
                                )}

                                {/* Image Title */}
                                <div className="absolute bottom-4 left-4 z-10 bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm text-white text-sm max-w-md">
                                    {selectedProject.images[maximizedImageIndex].title}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
