"use client";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog";

interface InfoDialogProps {
    title: string;
    text: string;
    image?: string;
    className?: string;
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
                                                className=" text-primary-500 font-semibold underline hover:text-primary-400 transition-colors"
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

export function InfoDialog({ title, text, image, className }: InfoDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <span
                    className={cn(
                        "inline-flex items-center align-middle rounded-full focus:outline-none bg-bg-purple-900 p-1 md:p-2 sm:p-2.5 border border-primary-500 focus:ring-2 focus:ring-primary-500",
                        className
                    )}
                    aria-label="Show info"
                >
                    <InfoIcon
                        className="text-primary-500 hover:text-primary-400 transition-colors align-middle"
                        size={20}
                    />
                </span>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] min-w-0 p-6 sm:max-w-3xl sm:min-w-2xl sm:p-6">
                <DialogHeader>
                    <DialogTitle className="sm:text-2xl font-bold text-foreground mb-2">
                        {title}
                    </DialogTitle>
                </DialogHeader>

                {image && (
                    <div className="w-full flex justify-center mb-3 sm:mb-4">
                        <Image
                            src={
                                typeof image === "string"
                                    ? image
                                    : "/headshot.png"
                            }
                            alt={title}
                            width={220}
                            height={120}
                            className="rounded-xl shadow-md object-contain max-h-32 sm:max-h-48 overflow-hidden"
                        />
                    </div>
                )}
                <div className="text-foreground text-xs sm:text-base leading-relaxed">
                    {parseHighlight(text)}
                </div>
            </DialogContent>
        </Dialog>
    );
}
