"use client";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    duration?: number;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const addTransitionStyles = () => {
    if (typeof document === "undefined") return;

    if (document.getElementById("transition-styles")) return;

    const styleEl = document.createElement("style");
    styleEl.id = "transition-styles";
    styleEl.textContent = `
        .content-container {
            opacity: 1;
            transition: opacity var(--transition-duration, 800ms) ease;
        }
        .content-container.fade-out {
            opacity: 0;
        }
        .content-container.fade-in {
            opacity: 0;
            animation: fadeIn var(--transition-duration, 800ms) ease forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(styleEl);
};

export default function TransitionLink({
    href,
    children,
    className,
    duration = 300,
    onClick,
    ...props
}: TransitionLinkProps) {
    const router = useRouter();
    const pathname = usePathname();
    const hasInitialized = useRef(false);

    useEffect(() => {
        // Only run the initialization once
        if (!hasInitialized.current) {
            addTransitionStyles();
            document.documentElement.style.setProperty(
                "--transition-duration",
                `${duration}ms`
            );
            hasInitialized.current = true;
        }
    }, [duration]);

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        // Call the additional onClick handler first if provided
        if (onClick) {
            onClick(e);
        }

        e.preventDefault();

        if (pathname === href) return;

        const contentContainer = document.querySelector(".content-container");
        contentContainer?.classList.add("fade-out");

        await new Promise((resolve) => setTimeout(resolve, duration));

        router.push(href);
    };

    return (
        <Link
            href={href}
            {...props}
            onClick={handleTransition}
            className={className}
        >
            {children}
        </Link>
    );
}
