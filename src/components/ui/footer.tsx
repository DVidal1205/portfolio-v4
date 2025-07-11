"use client";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileText,
    IconHeart,
} from "@tabler/icons-react";
import Link from "next/link";
import { NavbarLogo } from "./resizable-navbar";

export default function Footer() {
    // Smooth scroll to top handler
    const handleBackToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full bg-bg-purple-900/80 border-t border-bg-purple-800 py-8 px-4 flex flex-col items-center gap-4">
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:justify-between gap-6">
                {/* Left: Logo */}
                <div className="w-full flex justify-center md:justify-start">
                    <NavbarLogo />
                </div>
                {/* Center: Made with love and Back to top */}
                <div className="w-full flex flex-col items-center order-3 md:order-none">
                    <span className="flex items-center text-foreground text-base md:text-lg font-medium">
                        Made with
                        <IconHeart
                            className="mx-1 text-primary-500 animate-pulse"
                            size={18}
                        />
                        by Dylan
                    </span>
                    <button
                        onClick={handleBackToTop}
                        className="mt-2 text-primary-500 hover:text-primary-400 underline text-sm transition-colors focus:outline-none"
                        aria-label="Back to top"
                    >
                        Back to top
                    </button>
                </div>
                <div className="w-full flex justify-center md:justify-end">
                    <div className="flex items-center gap-4">
                        <Link href="https://github.com/DVidal1205">
                            <div className="flex items-center p-2 rounded-md hover:bg-primary-800 transition-colors">
                                <IconBrandGithub size={30} />
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/dylanvidal1204/">
                            <div className="flex items-center p-2 rounded-md hover:bg-primary-800 transition-colors">
                                <IconBrandLinkedin size={30} />
                            </div>
                        </Link>
                        <Link href="/resume.pdf">
                            <div className="flex items-center p-2 rounded-md hover:bg-primary-800 transition-colors">
                                <IconFileText size={30} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-xs text-foreground/60 mt-2">
                &copy; {new Date().getFullYear()} Dylan Vidal. All rights
                reserved.
            </div>
        </footer>
    );
}
