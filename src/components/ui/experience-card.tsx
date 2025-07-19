"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
    Building,
    Calendar,
    ChevronDown,
    ExternalLink,
    Github,
    MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// Helper function to parse markdown-like formatting
const parseFormattedText = (text: string) => {
    const parts = [];
    let currentIndex = 0;

    // Match **bold** and [text](url) patterns
    const regex = /(\*\*(.*?)\*\*)|(\[(.*?)\]\((.*?)\))/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
        // Add text before the match
        if (match.index > currentIndex) {
            parts.push({
                type: "text",
                content: text.slice(currentIndex, match.index),
            });
        }

        if (match[1]) {
            // Bold text: **text**
            parts.push({
                type: "bold",
                content: match[2],
            });
        } else if (match[3]) {
            // Link: [text](url)
            parts.push({
                type: "link",
                content: match[4],
                url: match[5],
            });
        }

        currentIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (currentIndex < text.length) {
        parts.push({
            type: "text",
            content: text.slice(currentIndex),
        });
    }

    return parts;
};

export interface TimelineExperience {
    id: string;
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    responsibilities: string[];
    achievements: string[];
    images: {
        src: string;
        title: string;
    }[];
    companyLogo?: string;
    colors: {
        cardColor: string;
        accent: string;
        textColor: string;
    };
    links: {
        label: string;
        url: string;
        icon: "github" | "external";
    }[];
    skills: string[];
}

interface ExperienceCardProps {
    experience: TimelineExperience;
    index: number;
    isLast: boolean;
}

export default function ExperienceCard({
    experience,
    index,
}: ExperienceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const renderIcon = (iconType: "github" | "external") => {
        return iconType === "github" ? (
            <Github className="h-4 w-4" />
        ) : (
            <ExternalLink className="h-4 w-4" />
        );
    };

    // Combine responsibilities and achievements
    const combinedItems = [
        ...experience.responsibilities,
        ...experience.achievements,
    ];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative mb-8 md:mb-12"
        >
            {/* Timeline Line - Hidden on mobile, visible on md+ */}
            {/* Always render line to extend timeline */}
            <motion.div
                className="hidden md:block absolute left-6 top-16 w-0.5 bg-border"
                initial={{ height: 0, opacity: 0 }}
                animate={
                    isInView
                        ? { height: "100%", opacity: 1 }
                        : { height: 0, opacity: 0 }
                }
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                style={{ willChange: "height, opacity" }}
            />
            {/* Timeline Node - Hidden on mobile, visible on md+ */}
            <motion.div
                className="hidden md:block absolute left-4 top-8 w-5 h-5 rounded-full border-4 border-background z-10 shadow-lg"
                style={{ backgroundColor: experience.colors.accent }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
            />
            {/* Content Card */}
            <div className="md:ml-16">
                <motion.div
                    className="relative rounded-xl overflow-hidden shadow-lg border transition-all duration-500 hover:shadow-xl group hover:scale-[1.02] hover:-translate-y-1"
                    style={{
                        borderColor: experience.colors.accent,
                        backgroundColor: experience.colors.cardColor,
                        boxShadow: `0 0 20px ${experience.colors.accent}20`,
                    }}
                >
                    {/* Main Card Container - 16:9 aspect ratio */}
                    <div className="relative aspect-video overflow-hidden">
                        {/* Background Image */}
                        {experience.images.length > 0 && (
                            <Image
                                src={experience.images[0].src}
                                alt={experience.images[0].title}
                                fill
                                className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                quality={100}
                                priority={index < 2}
                            />
                        )}

                        {/* Company Logo overlay */}
                        {experience.companyLogo && (
                            <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20">
                                <img
                                    src={
                                        experience.companyLogo ||
                                        "/placeholder.svg"
                                    }
                                    alt={`${experience.company} logo`}
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-contain shadow-lg"
                                />
                            </div>
                        )}

                        {/* Desktop: Collapsed Content Overlay - Bottom portion */}
                        <div
                            className="hidden md:block absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10"
                            style={{
                                height: "65%",
                                background: `linear-gradient(to top, ${experience.colors.cardColor}ff, ${experience.colors.cardColor}dd, ${experience.colors.cardColor}99, ${experience.colors.cardColor}44, transparent)`,
                            }}
                        >
                            <div
                                className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                                style={{ color: experience.colors.textColor }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold mb-2">
                                    {experience.title}
                                </h3>
                                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 md:gap-4 text-xs md:text-sm opacity-90 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Building className="h-3 w-3 md:h-4 md:w-4" />
                                        <span className="font-medium">
                                            {experience.company}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                                        <span>{experience.period}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                                        <span>{experience.location}</span>
                                    </div>
                                </div>

                                {/* Description - Collapsed */}
                                <p className="text-sm md:text-base leading-relaxed mb-3 font-medium line-clamp-3">
                                    {parseFormattedText(
                                        experience.description
                                    ).map((part, index) => {
                                        if (part.type === "bold") {
                                            return (
                                                <strong
                                                    key={index}
                                                    style={{
                                                        color: experience.colors
                                                            .accent,
                                                    }}
                                                >
                                                    {part.content}
                                                </strong>
                                            );
                                        } else if (part.type === "link") {
                                            return (
                                                <a
                                                    key={index}
                                                    href={part.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline hover:opacity-80 transition-opacity"
                                                    style={{
                                                        color: experience.colors
                                                            .accent,
                                                    }}
                                                >
                                                    {part.content}
                                                </a>
                                            );
                                        } else {
                                            return (
                                                <span key={index}>
                                                    {part.content}
                                                </span>
                                            );
                                        }
                                    })}
                                </p>

                                {/* Skills - Collapsed */}
                                <div className="mb-3">
                                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                                        {experience.skills.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="outline"
                                                className="text-xs font-medium"
                                                style={{
                                                    backgroundColor: `${experience.colors.accent}20`,
                                                    borderColor: `${experience.colors.accent}40`,
                                                    color: experience.colors
                                                        .accent,
                                                }}
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Show More Details Button - On top of image */}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="w-full justify-center group text-sm"
                                    style={{
                                        backgroundColor: `${experience.colors.accent}20`,
                                        borderColor: `${experience.colors.accent}40`,
                                        color: experience.colors.accent,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = `${experience.colors.accent}30`;
                                        e.currentTarget.style.borderColor = `${experience.colors.accent}60`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = `${experience.colors.accent}20`;
                                        e.currentTarget.style.borderColor = `${experience.colors.accent}40`;
                                    }}
                                >
                                    <span className="mr-2">
                                        {isExpanded
                                            ? "Show Less"
                                            : "Show More Details"}
                                    </span>
                                    <motion.div
                                        animate={{
                                            rotate: isExpanded ? 180 : 0,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <ChevronDown className="h-4 w-4" />
                                    </motion.div>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile: Content Card Below Image */}
                    <div className="md:hidden">
                        <div
                            className="p-4"
                            style={{
                                backgroundColor: experience.colors.cardColor,
                                color: experience.colors.textColor,
                            }}
                        >
                            <h3 className="text-lg font-bold mb-2">
                                {experience.title}
                            </h3>
                            <div className="flex flex-col gap-1 text-xs opacity-90 mb-3">
                                <div className="flex items-center gap-1">
                                    <Building className="h-3 w-3" />
                                    <span className="font-medium">
                                        {experience.company}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    <span>{experience.period}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    <span>{experience.location}</span>
                                </div>
                            </div>

                            {/* Description - Mobile */}
                            <p className="text-sm leading-relaxed mb-3 font-medium line-clamp-3">
                                {parseFormattedText(experience.description).map(
                                    (part, index) => {
                                        if (part.type === "bold") {
                                            return (
                                                <strong
                                                    key={index}
                                                    style={{
                                                        color: experience.colors
                                                            .accent,
                                                    }}
                                                >
                                                    {part.content}
                                                </strong>
                                            );
                                        } else if (part.type === "link") {
                                            return (
                                                <a
                                                    key={index}
                                                    href={part.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline hover:opacity-80 transition-opacity"
                                                    style={{
                                                        color: experience.colors
                                                            .accent,
                                                    }}
                                                >
                                                    {part.content}
                                                </a>
                                            );
                                        } else {
                                            return (
                                                <span key={index}>
                                                    {part.content}
                                                </span>
                                            );
                                        }
                                    }
                                )}
                            </p>

                            {/* Skills - Mobile */}
                            <div className="mb-3">
                                <div className="flex flex-wrap gap-1.5">
                                    {experience.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="outline"
                                            className="text-xs font-medium"
                                            style={{
                                                backgroundColor: `${experience.colors.accent}20`,
                                                borderColor: `${experience.colors.accent}40`,
                                                color: experience.colors.accent,
                                            }}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Show More Details Button - Mobile */}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="w-full justify-center group text-sm"
                                style={{
                                    backgroundColor: `${experience.colors.accent}20`,
                                    borderColor: `${experience.colors.accent}40`,
                                    color: experience.colors.accent,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = `${experience.colors.accent}30`;
                                    e.currentTarget.style.borderColor = `${experience.colors.accent}60`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = `${experience.colors.accent}20`;
                                    e.currentTarget.style.borderColor = `${experience.colors.accent}40`;
                                }}
                            >
                                <span className="mr-2">
                                    {isExpanded
                                        ? "Show Less"
                                        : "Show More Details"}
                                </span>
                                <motion.div
                                    animate={{
                                        rotate: isExpanded ? 180 : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </motion.div>
                            </Button>
                        </div>
                    </div>

                    {/* Expanded Content Section */}
                    <AnimatePresence mode="wait">
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                className="overflow-hidden relative z-20"
                                style={{
                                    backgroundColor:
                                        experience.colors.cardColor,
                                    marginTop: "-1px",
                                }}
                            >
                                <div
                                    className="p-4 md:p-6"
                                    style={{
                                        color: experience.colors.textColor,
                                    }}
                                >
                                    {/* Combined Responsibilities & Achievements */}
                                    <div>
                                        <h4 className="font-semibold mb-2 md:mb-3 text-base md:text-lg flex items-center gap-2">
                                            <span
                                                className="w-1 h-4 md:h-6 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        experience.colors
                                                            .accent,
                                                }}
                                            />
                                            Key Responsibilities & Achievements
                                        </h4>
                                        <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                                            {combinedItems.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{
                                                        opacity: 0,
                                                        x: -20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        x: -20,
                                                    }}
                                                    transition={{
                                                        delay: isExpanded
                                                            ? i * 0.05
                                                            : 0,
                                                        duration: 0.3,
                                                    }}
                                                    className="flex items-start gap-2 md:gap-3 text-xs md:text-sm leading-relaxed"
                                                >
                                                    <span
                                                        className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mt-1.5 md:mt-2 flex-shrink-0"
                                                        style={{
                                                            backgroundColor:
                                                                experience
                                                                    .colors
                                                                    .accent,
                                                        }}
                                                    />
                                                    <span>
                                                        {parseFormattedText(
                                                            item
                                                        ).map(
                                                            (
                                                                part,
                                                                partIndex
                                                            ) => {
                                                                if (
                                                                    part.type ===
                                                                    "bold"
                                                                ) {
                                                                    return (
                                                                        <strong
                                                                            key={
                                                                                partIndex
                                                                            }
                                                                            style={{
                                                                                color: experience
                                                                                    .colors
                                                                                    .accent,
                                                                            }}
                                                                        >
                                                                            {
                                                                                part.content
                                                                            }
                                                                        </strong>
                                                                    );
                                                                } else if (
                                                                    part.type ===
                                                                    "link"
                                                                ) {
                                                                    return (
                                                                        <a
                                                                            key={
                                                                                partIndex
                                                                            }
                                                                            href={
                                                                                part.url
                                                                            }
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="underline hover:opacity-80 transition-opacity"
                                                                            style={{
                                                                                color: experience
                                                                                    .colors
                                                                                    .accent,
                                                                            }}
                                                                        >
                                                                            {
                                                                                part.content
                                                                            }
                                                                        </a>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <span
                                                                            key={
                                                                                partIndex
                                                                            }
                                                                        >
                                                                            {
                                                                                part.content
                                                                            }
                                                                        </span>
                                                                    );
                                                                }
                                                            }
                                                        )}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Links */}
                                    {experience.links &&
                                        experience.links.length > 0 && (
                                            <div>
                                                <h4 className="font-semibold mb-2 md:mb-3 text-base md:text-lg flex items-center gap-2">
                                                    <span
                                                        className="w-1 h-4 md:h-6 rounded-full"
                                                        style={{
                                                            backgroundColor:
                                                                experience
                                                                    .colors
                                                                    .accent,
                                                        }}
                                                    />
                                                    Links & Resources
                                                </h4>
                                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                                    {experience.links.map(
                                                        (link, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{
                                                                    opacity: 0,
                                                                    scale: 0.8,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    scale: 1,
                                                                }}
                                                                exit={{
                                                                    opacity: 0,
                                                                    scale: 0.8,
                                                                }}
                                                                transition={{
                                                                    delay: isExpanded
                                                                        ? i *
                                                                          0.1
                                                                        : 0,
                                                                    duration: 0.2,
                                                                }}
                                                            >
                                                                <Link
                                                                    href={
                                                                        link.url
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <Badge
                                                                        variant="outline"
                                                                        className="text-xs transition-all duration-300 hover:scale-105 hover:shadow-[0_2px_8px_rgba(122,92,255,0.25)] hover:-translate-y-0.5 cursor-pointer gap-1.5"
                                                                        style={{
                                                                            borderColor: `${experience.colors.accent}44`,
                                                                            color: experience
                                                                                .colors
                                                                                .accent,
                                                                            backgroundColor: `${experience.colors.accent}22`,
                                                                        }}
                                                                    >
                                                                        {renderIcon(
                                                                            link.icon
                                                                        )}
                                                                        {
                                                                            link.label
                                                                        }
                                                                    </Badge>
                                                                </Link>
                                                            </motion.div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    );
}
