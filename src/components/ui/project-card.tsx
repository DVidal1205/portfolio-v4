"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export interface ProjectData {
    id: string;
    title: string;
    period: string;
    description: string;
    longDescription: string;
    images: {
        src: string;
        title: string;
    }[];
    colors: {
        cardBackground: string; // Background color of the card bottom section
        cardText: string; // Text color for card content
        panelBackground: string; // Background color of the sliding panel
        panelText: string; // Text color within the sliding panel
        accent: string; // Accent color for buttons, badges, icons
    };
    links: {
        label: string;
        url: string;
        icon: "github" | "external";
    }[];
    skills: string[];
}

interface ProjectCardProps {
    project: ProjectData;
    onSelect: (project: ProjectData) => void;
}

function parseHighlight(text: string) {
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
                                            className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent font-semibold"
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
                                                className="text-primary-500 font-semibold underline hover:text-primary-400 transition-colors"
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

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
        >
            <div
                onClick={() => onSelect(project)}
                className={cn(
                    "cursor-pointer rounded-xl overflow-hidden h-full flex flex-col transition-all duration-500 group relative",
                    "border-2 hover:shadow-[0_10px_30px_rgba(122,92,255,0.25)] hover:border-primary-300 hover:-translate-y-1",
                    hoveredId === project.id
                        ? "border-primary/50"
                        : "border-border"
                )}
                style={{
                    background: `linear-gradient(45deg, ${project.colors.cardBackground}22, transparent)`,
                }}
            >
                <div className="relative aspect-[16/9] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-primary-500/10 mix-blend-overlay z-10" />

                    <Image
                        src={project.images[0]?.src || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNWExOWU1IiBvcGFjaXR5PSIwLjIiLz48L3N2Zz4="
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-bg-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                    <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-bg-purple-900/90 to-transparent z-20" />

                    <div className="absolute bottom-0 left-0 right-0 p-3 z-30">
                        <h3 className="text-lg font-semibold text-white transition-all duration-500 group-hover:from-primary-400 group-hover:to-secondary-400">
                            {project.title}
                        </h3>
                    </div>
                </div>

                <div
                    className="p-4 flex flex-col flex-grow"
                    style={{
                        backgroundColor: project.colors.cardBackground,
                        color: project.colors.cardText,
                    }}
                >
                    <div
                        className="text-sm mb-2 flex items-center gap-1"
                        style={{ color: `${project.colors.cardText}80` }}
                    >
                        <Calendar className="h-3 w-3" /> {project.period}
                    </div>
                    <p className="text-sm mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-1 mb-3">
                            {project.skills.slice(0, 3).map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="outline"
                                    className="text-xs transition-all duration-300 hover:scale-105 hover:shadow-[0_2px_8px_rgba(122,92,255,0.25)] hover:-translate-y-0.5"
                                    style={{
                                        borderColor: `${project.colors.accent}44`,
                                        color: project.colors.accent,
                                        backgroundColor: `${project.colors.accent}22`,
                                    }}
                                >
                                    {skill}
                                </Badge>
                            ))}
                            {project.skills.length > 3 && (
                                <Badge
                                    variant="outline"
                                    className="text-xs transition-all duration-300 hover:scale-105 hover:shadow-[0_2px_8px_rgba(122,92,255,0.25)] hover:-translate-y-0.5"
                                    style={{
                                        borderColor: `${project.colors.accent}44`,
                                        color: project.colors.accent,
                                        backgroundColor: `${project.colors.accent}22`,
                                    }}
                                >
                                    +{project.skills.length - 3}
                                </Badge>
                            )}
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-between group bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                color: project.colors.accent,
                                borderColor: `${project.colors.accent}33`,
                                backgroundColor: "transparent",
                            }}
                        >
                            <span>View Details</span>
                            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12" />
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
