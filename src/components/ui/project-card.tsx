"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar, ChevronRight, Trophy } from "lucide-react";
import Image from "next/image";
import { ReactElement, useState } from "react";

export interface ProjectData {
    id: string;
    title: string;
    period: string;
    description: string;
    winner: boolean;
    longDescription: string;
    images: {
        src: string;
        title: string;
        infoDialog?: ReactElement;
    }[];
    colors: {
        cardBackground: string; // Background color of the card bottom section
        cardText: string; // Text color for card content
        panelBackground: string; // Background color of the sliding panel
        panelText: string; // Text color within the sliding panel
        accent: string; // Accent color for buttons, badges, icons
    };
    links?: {
        label: string;
        url: string;
        icon: "github" | "external";
    }[];
    skills: string[];
}

interface ProjectCardProps {
    project: ProjectData;
    projectId: string;
}

export default function ProjectCard({ project, projectId }: ProjectCardProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const handleCardClick = () => {
        const event = new CustomEvent("projectSelected", {
            detail: { projectId },
        });
        window.dispatchEvent(event);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleCardClick();
        }
    };

    return (
        <div
            className="h-full"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
        >
            <div
                onClick={handleCardClick}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${project.title} project`}
                className={cn(
                    "cursor-pointer rounded-xl overflow-hidden h-full flex flex-col transition-all duration-500 group relative",
                    "border-2 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                    "focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                )}
                style={{
                    background: `linear-gradient(45deg, ${project.colors.cardBackground}22, transparent)`,
                    boxShadow:
                        hoveredId === project.id
                            ? `0 10px 30px ${project.colors.accent}40`
                            : undefined,
                    borderColor:
                        hoveredId === project.id
                            ? `${project.colors.accent}80`
                            : project.colors.accent + "22",
                }}
            >
                <div className="relative aspect-[16/9] overflow-hidden">
                    {project.images[0]?.src?.endsWith(".gif") ? (
                        <img
                            src={project.images[0].src}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                        />
                    ) : (
                        <Image
                            src={project.images[0]?.src || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNWExOWU1IiBvcGFjaXR5PSIwLjIiLz48L3N2Zz4="
                        />
                    )}

                    {project.winner && (
                        <div className="absolute top-2 right-2 z-30">
                            <Badge
                                className="flex items-center gap-1.5 px-3 py-1.5 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                                style={{
                                    backgroundColor: `${project.colors.accent}E6`,
                                    borderColor: project.colors.accent,
                                    color:
                                        project.colors.cardBackground ||
                                        "#FFFFFF",
                                    boxShadow:
                                        hoveredId === project.id
                                            ? `0 8px 20px ${project.colors.accent}60`
                                            : undefined,
                                }}
                            >
                                <Trophy className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" />
                                <span className="font-semibold text-sm">
                                    Winner
                                </span>
                            </Badge>
                        </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-1 z-30">
                        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-2 inline-block">
                            <h3 className="text-sm md:text-base font-semibold text-white drop-shadow-lg transition-all duration-500 group-hover:from-primary-400 group-hover:to-secondary-400">
                                {project.title}
                            </h3>
                        </div>
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
                    <p className="text-xs md:text-sm mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    {/* SEO: Hidden rich content for search engines */}
                    <div className="sr-only">
                        <h2>{project.title} - Detailed Information</h2>
                        <p>{project.longDescription}</p>
                        <h3>Technologies Used</h3>
                        <ul>
                            {project.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                        <h3>Project Links</h3>
                        <ul>
                            {project.links?.map((link, index) => (
                                <li key={index}>
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
                            className="w-full justify-between group bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent transition-all duration-300 hover:-translate-y-0.5 focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
                            style={{
                                color: project.colors.accent,
                                borderColor: `${project.colors.accent}33`,
                                backgroundColor: "transparent",
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCardClick();
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.stopPropagation();
                                    handleCardClick();
                                }
                            }}
                        >
                            <span>View Details</span>
                            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
