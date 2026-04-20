"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface TocDropdownProps {
    items: TocItem[];
}

export default function TocDropdown({ items }: TocDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    if (items.length === 0) return null;

    useEffect(() => {
        const onPointerDown = (event: PointerEvent) => {
            if (!containerRef.current) return;
            if (
                event.target instanceof Node &&
                !containerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("pointerdown", onPointerDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
        };
    }, []);

    const handleJump = (id: string) => {
        const target = document.getElementById(id);
        if (!target) return;

        const targetTop =
            target.getBoundingClientRect().top +
            window.scrollY -
            window.innerHeight * 0.1;

        window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: "smooth",
        });
        setIsOpen(false);
    };

    return (
        <div ref={containerRef} className="relative inline-flex">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex items-center justify-between gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:border-white/20 transition-colors duration-200"
                aria-expanded={isOpen}
                aria-controls="post-table-of-contents"
            >
                <span>Table of contents</span>
                <IconChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id="post-table-of-contents"
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute z-30 top-[calc(100%+8px)] right-0 w-[min(88vw,24rem)] rounded-md border border-white/10 bg-background p-3 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.85)]"
                    >
                        <ul className="space-y-1.5 max-h-[min(50vh,22rem)] overflow-y-auto pr-1">
                            {items.map((item, index) => (
                                <li key={`${item.id}-${index}`}>
                                    <button
                                        type="button"
                                        onClick={() => handleJump(item.id)}
                                        className="w-full text-left text-sm text-foreground/65 hover:text-secondary-300 transition-colors duration-200"
                                        style={{
                                            paddingLeft: `${Math.max(0, item.level - 1) * 12}px`,
                                        }}
                                    >
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
