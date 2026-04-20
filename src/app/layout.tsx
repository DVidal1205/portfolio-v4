import FriendDetector from "@/components/layout/friend-detector";
import TransitionWrapper from "@/components/layout/transition-wrapper";
import Footer from "@/components/ui/footer";
import { NavbarHome } from "@/components/ui/navbar";
import ConvaiWidget from "@/components/ui/voice-agent";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Sora } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
    title: "About | Dylan Vidal",
    description:
        "Software Engineer at NVIDIA, former President of Knight Hacks, and 3rd Year Computer Science Student at UCF. Passionate about helping others break into tech, and building impactful performant software.",
    keywords: [
        "Dylan Vidal",
        "Software Engineer",
        "NVIDIA",
        "Knight Hacks",
        "AI Research",
        "Computer Vision",
        "Machine Learning",
        "UCF",
        "University of Central Florida",
        "GitHub Campus Expert",
        "Python",
        "React",
        "Next.js",
        "Computer Science",
    ],
    authors: [{ name: "Dylan Vidal" }],
    creator: "Dylan Vidal",
    publisher: "Dylan Vidal",

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://dvidal.dev",
        title: "About | Dylan Vidal",
        description:
            "Software Engineer at NVIDIA, former President of Knight Hacks, and 3rd Year Computer Science Student at UCF. Passionate about helping others break into tech, and building impactful performant software.",
        siteName: "Dylan Vidal",
        images: [
            {
                url: "/banner.png",
                alt: "Dylan Vidal - Software Engineer",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${sora.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased w-screen max-w-screen text-foreground overflow-x-hidden`}
            >
                <Suspense fallback={null}>
                    <FriendDetector />
                </Suspense>
                <NavbarHome />
                <main>
                    <TransitionWrapper>{children}</TransitionWrapper>
                </main>
                <Footer />
                <ConvaiWidget />
                <Analytics />
            </body>
        </html>
    );
}
