"use client";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    duration?: number;
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
    duration = 550,
    ...props
}: TransitionLinkProps) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        addTransitionStyles();

        document.documentElement.style.setProperty(
            "--transition-duration",
            `${duration}ms`
        );

        const contentContainer = document.querySelector(".content-container");
        if (contentContainer) {
            contentContainer.classList.add("fade-in");
            setTimeout(() => {
                contentContainer.classList.remove("fade-in");
            }, duration);
        }
    }, [duration]);

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
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
