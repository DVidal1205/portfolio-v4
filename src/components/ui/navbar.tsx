"use client";
import FriendContent from "@/components/ui/friend-content";
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
import TransitionLink from "@/components/ui/transition-link";
import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandInstagram,
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
            name: "Skills",
            link: "/skills",
        },
        {
            name: "Features",
            link: "/features",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 inset-x-0 z-[300]">
            <Navbar>
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-2">
                        <FriendContent>
                            <Link
                                href="https://www.instagram.com/dylanvidal1205/"
                                target="_blank"
                            >
                                <NavbarButton
                                    as="button"
                                    variant="secondary"
                                    className="flex items-center px-2 py-2 lg:px-3 lg:py-3"
                                >
                                    <IconBrandInstagram
                                        size={24}
                                        className="lg:w-[30px] lg:h-[30px]"
                                    />
                                </NavbarButton>
                            </Link>
                        </FriendContent>
                        <FriendContent>
                            <Link
                                href="http://discordapp.com/users/238081392481665025"
                                target="_blank"
                            >
                                <NavbarButton
                                    as="button"
                                    variant="secondary"
                                    className="flex items-center px-2 py-2 lg:px-3 lg:py-3"
                                >
                                    <IconBrandDiscord
                                        size={24}
                                        className="lg:w-[30px] lg:h-[30px]"
                                    />
                                </NavbarButton>
                            </Link>
                        </FriendContent>
                        <Link
                            href="https://github.com/DVidal1205"
                            target="_blank"
                        >
                            <NavbarButton
                                as="button"
                                variant="secondary"
                                className="flex items-center px-2 py-2 lg:px-3 lg:py-3"
                            >
                                <IconBrandGithub
                                    size={24}
                                    className="lg:w-[30px] lg:h-[30px]"
                                />
                            </NavbarButton>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/dylanvidal1205/"
                            target="_blank"
                        >
                            <NavbarButton
                                as="button"
                                variant="secondary"
                                className="flex items-center px-2 py-2 lg:px-3 lg:py-3"
                            >
                                <IconBrandLinkedin
                                    size={24}
                                    className="lg:w-[30px] lg:h-[30px]"
                                />
                            </NavbarButton>
                        </Link>

                        <Link href="/resume.pdf" target="_blank">
                            <NavbarButton
                                as="button"
                                variant="secondary"
                                className="flex items-center px-2 py-2 lg:px-3 lg:py-3"
                            >
                                <IconFileText
                                    size={24}
                                    className="lg:w-[30px] lg:h-[30px]"
                                />
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
                            <TransitionLink
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </TransitionLink>
                        ))}
                        <div className="flex w-full gap-3 flex-wrap justify-center">
                            <FriendContent>
                                <Link
                                    href="https://www.instagram.com/dylanvidal1205/"
                                    target="_blank"
                                >
                                    <NavbarButton
                                        as="button"
                                        variant="secondary"
                                        className="flex items-center"
                                    >
                                        <IconBrandInstagram size={30} />
                                    </NavbarButton>
                                </Link>
                            </FriendContent>
                            <FriendContent>
                                <Link
                                    href="http://discordapp.com/users/238081392481665025"
                                    target="_blank"
                                >
                                    <NavbarButton
                                        as="button"
                                        variant="secondary"
                                        className="flex items-center"
                                    >
                                        <IconBrandDiscord size={30} />
                                    </NavbarButton>
                                </Link>
                            </FriendContent>
                            <Link
                                href="https://github.com/DVidal1205"
                                target="_blank"
                            >
                                <NavbarButton
                                    as="button"
                                    variant="secondary"
                                    className="flex items-center"
                                >
                                    <IconBrandGithub size={30} />
                                </NavbarButton>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/dylanvidal1205/"
                                target="_blank"
                            >
                                <NavbarButton
                                    as="button"
                                    variant="secondary"
                                    className="flex items-center"
                                >
                                    <IconBrandLinkedin size={30} />
                                </NavbarButton>
                            </Link>

                            <Link href="/resume.pdf" target="_blank">
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
