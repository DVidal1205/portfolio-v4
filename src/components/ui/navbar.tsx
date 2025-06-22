"use client";
import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    Navbar,
    NavbarButton,
    NavbarLogo,
    NavBody,
    NavItems,
} from "@/components/ui/resizable-navbar";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileText,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export function NavbarHome() {
    const navItems = [
        {
            name: "Experience",
            link: "/experience",
        },
        {
            name: "Projects",
            link: "/projects",
        },
        {
            name: "About",
            link: "/about",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 inset-x-0 z-[200]">
            <Navbar>
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-2">
                        <Link href="https://github.com/DVidal1205">
                            <NavbarButton
                                as="button"
                                variant="secondary"
                                className="flex items-center"
                            >
                                <IconBrandGithub size={30} />
                            </NavbarButton>
                        </Link>
                        <Link href="https://www.linkedin.com/in/dylanvidal1204/">
                            <NavbarButton
                                as="button"
                                variant="secondary"
                                className="flex items-center"
                            >
                                <IconBrandLinkedin size={30} />
                            </NavbarButton>
                        </Link>
                        <Link href="https://www.dvidal.dev/resume.pdf">
                            <NavbarButton
                                as="button"
                                variant="secondary"
                                className="flex items-center"
                            >
                                <IconFileText size={30} />
                            </NavbarButton>
                        </Link>
                    </div>
                </NavBody>

                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full gap-4">
                            <Link href="https://github.com/DVidal1205">
                                <NavbarButton
                                    as="button"
                                    variant="secondary"
                                    className="flex items-center"
                                >
                                    <IconBrandGithub size={30} />
                                </NavbarButton>
                            </Link>
                            <Link href="https://www.linkedin.com/in/dylanvidal1204/">
                                <NavbarButton
                                    as="button"
                                    variant="secondary"
                                    className="flex items-center"
                                >
                                    <IconBrandLinkedin size={30} />
                                </NavbarButton>
                            </Link>
                            <Link href="https://www.dvidal.dev/resume.pdf">
                                <NavbarButton
                                    as="button"
                                    variant="secondary"
                                    className="flex items-center"
                                >
                                    <IconFileText size={30} />
                                </NavbarButton>
                            </Link>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
