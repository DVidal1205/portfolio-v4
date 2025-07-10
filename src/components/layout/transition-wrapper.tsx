"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface TransitionWrapperProps {
    children: ReactNode;
}

export default function TransitionWrapper({
    children,
}: TransitionWrapperProps) {
    const pathname = usePathname();

    // Reset fade classes when route changes
    useEffect(() => {
        const contentContainer = document.querySelector(".content-container");
        if (contentContainer) {
            contentContainer.classList.remove("fade-out");
            contentContainer.classList.add("fade-in");

            setTimeout(() => {
                contentContainer.classList.remove("fade-in");
            }, 800); // Default duration
        }
    }, [pathname]);

    return <div className="content-container">{children}</div>;
}
