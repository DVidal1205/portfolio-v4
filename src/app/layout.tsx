import Footer from "@/components/ui/footer";
import { NavbarHome } from "@/components/ui/navbar";
import type { Metadata } from "next";
import { Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dylan Vidal",
    description: "Dylan Vidal's Personal Website",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        images: [
            {
                url: "/headshot.png",
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
                className={`${sora.variable} ${geistMono.variable} antialiased w-screen max-w-screen text-foreground overflow-x-hidden`}
            >
                <NavbarHome />
                {children}
                <Footer />
            </body>
        </html>
    );
}
