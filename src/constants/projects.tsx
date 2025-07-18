import { InfoDialog } from "@/components/ui/info-dialog";
import { ProjectData } from "@/components/ui/project-card";
import { readProjectMarkdown } from "@/lib/markdown";

export const projects: ProjectData[] = [
    {
        id: "visuworld",
        title: "VisuWorld",
        period: "Bitcamp XI Hackathon",
        description:
            "Winner of Best use of Google Gemini, VisuWorld is a unique approach to generative 3D scene creation using LLMs and Google Gemini.",
        longDescription: readProjectMarkdown("visuworld"),
        images: [
            {
                src: "/projects/visuworld-ocean.png",
                title: "VisuWorld Ocean Scene",
                infoDialog: (
                    <InfoDialog
                        title="VisuWorld - Ocean Scene"
                        text="This ocean scene was generated at about **4,000 GLSL Sample Embeddings** deep, and was our first Eureka moment. We honestly weren't quite sure if this would even work, but at this point, it was clear we had something real."
                        image="/projects/visuworld-ocean.png"
                    />
                ),
            },
            {
                src: "/projects/visuworld-scene.png",
                title: "VisuWorld 3D Scene Generation",
            },
            {
                src: "/projects/visuworld-team.png",
                title: "VisuWorld Team",
            },
            {
                src: "/projects/visuworld-gallery.png",
                title: "VisuWorld Public Gallery",
            },
            {
                src: "/projects/visuworld-mandelbulb.png",
                title: "VisuWorld Mandelbulb Scene",
            },
            {
                src: "/projects/visuworld-raymarching.png",
                title: "VisuWorld Raymarching Scene",
            },
        ],
        colors: {
            cardBackground: "#1e293a",
            cardText: "#FFFFFF",
            panelBackground: "#1e293a",
            panelText: "#FFFFFF",
            accent: "#e42fc4",
        },
        links: [
            {
                label: "VisuWorld Repository",
                url: "https://github.com/Bitcamp-2025-RLD/visuworld",
                icon: "github",
            },
            {
                label: "VisuWorld DevPost",
                url: "https://devpost.com/software/visuworld",
                icon: "external",
            },
            {
                label: "VisuWorld Create Page",
                url: "https://create.visuworld.tech",
                icon: "external",
            },
            {
                label: "VisuWorld Gallery Page",
                url: "https://create.visuworld.tech/gallery",
                icon: "external",
            },
            {
                label: "MLH Developer Showcase (LinkedIn)",
                url: "https://www.linkedin.com/posts/major-league-hacking_builtwithmlh-hackathonlife-geminiai-activity-7340441943610376193-8Ml0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk",
                icon: "external",
            },
            {
                label: "MLH Developer Showcase (Instagram)",
                url: "https://www.instagram.com/reel/DK-KKhqygNS/",
                icon: "external",
            },
        ],
        skills: [
            "Gemini",
            "RAG",
            "GLSL",
            "React",
            "Next.js",
            "Tailwind",
            "TypeScript",
            "FastAPI",
            "MongoDB",
            "WebGL",
            "Three.js",
        ],
    },
    {
        id: "codejoust",
        title: "CodeJoust",
        period: "February 2025 - Present",
        description:
            "CodeJoust is a platform made to help developers learn DSA by enabling them to practice with their friends in an real-time combat game.",
        longDescription: readProjectMarkdown("codejoust"),
        images: [
            {
                src: "/projects/codejoust-match.png",
                title: "CodeJoust Game Match",
            },
            {
                src: "/projects/codejoust-account.png",
                title: "CodeJoust Elo Dashboard",
            },
            {
                src: "/projects/codejoust-problems.png",
                title: "CodeJoust Problem Page",
            },
            {
                src: "/projects/codejoust-lobby.png",
                title: "CodeJoust Lobby",
            },
            {
                src: "/projects/codejoust-leaderboard.png",
                title: "CodeJoust Leaderboard",
            },
        ],
        colors: {
            cardBackground: "#000000",
            cardText: "#FFFFFF",
            panelBackground: "#000000",
            panelText: "#FFFFFF",
            accent: "#74d4f4",
        },
        links: [
            {
                label: "CodeJoust",
                url: "https://play.codejoust.xyz",
                icon: "external",
            },
        ],
        skills: [
            "WebSockets",
            "LeetCode",
            "JWTs",
            "React",
            "Tailwind",
            "TypeScript",
            "Express",
            "MongoDB",
            "Resend",
        ],
    },
    {
        id: "airjam",
        title: "AirJam",
        period: "HackUSF 2025 Hackathon",
        description:
            "AirJam is an AI-powered music exploration tool that helps users make music, anytime, anywhere. Play up to 30 instruments with just your webcam.",
        longDescription: readProjectMarkdown("airjam"),
        images: [
            {
                src: "/projects/airjam-play.png",
                title: "AirJam Music Interface",
            },
            {
                src: "/projects/airjam-team.png",
                title: "AirJam Team",
            },
            {
                src: "/projects/airjam-developing.png",
                title: "Developing AirJam",
            },
        ],
        colors: {
            cardBackground: "#203434",
            cardText: "#FFFFFF",
            panelBackground: "#203434",
            panelText: "#FFFFFF",
            accent: "#476ab4",
        },
        links: [
            {
                label: "AirJam Repository",
                url: "https://github.com/AirJamAI/airjam",
                icon: "github",
            },
            {
                label: "AirJam DevPost",
                url: "https://devpost.com/software/airjam",
                icon: "external",
            },
            {
                label: "AirJam Studio",
                url: "https://play.airjam.studio",
                icon: "external",
            },
        ],
        skills: [
            "OpenCV",
            "YOLO",
            "Mediapipe",
            "WebAudioFonts",
            "React",
            "Tailwind",
            "TypeScript",
            "Python",
            "FastAPI",
        ],
    },
    {
        id: "voiceboard",
        title: "VoiceBoard",
        period: "Shell Hacks 2024 Hackathon",
        description:
            "Winner of Google's Social Good Challenge, Voiceboard AI makes whiteboarding accessible to all by using speech-to-diagram technology.",
        longDescription: readProjectMarkdown("voiceboard"),
        images: [
            {
                src: "/projects/voiceboard-dashboard.png",
                title: "VoiceBoard Dashboard Interface",
            },
            {
                src: "/projects/voiceboard-team.png",
                title: "VoiceBoard Team",
            },
            {
                src: "/projects/voiceboard-win.png",
                title: "VoiceBoard Winning Hack",
            },
        ],
        colors: {
            cardBackground: "#d0ecac",
            cardText: "#000000",
            panelBackground: "#d0ecac",
            panelText: "#000000",
            accent: "#000000",
        },
        links: [
            {
                label: "VoiceBoard Repository",
                url: "https://github.com/DVidal1205/voiceboard",
                icon: "github",
            },
            {
                label: "VoiceBoard DevPost",
                url: "https://devpost.com/software/voiceboard-83vn1e",
                icon: "external",
            },
            {
                label: "VoiceBoard Draw Page",
                url: "https://voiceboard.app/draw",
                icon: "external",
            },
        ],
        skills: [
            "Gemini",
            "Speech Recognition",
            "Mermaid",
            "React",
            "Next.js",
            "Tailwind",
            "TypeScript",
            "tRPC",
        ],
    },
    {
        id: "forge",
        title: "Forge",
        period: "July 2024 - Present",
        description:
            "Forge is the Knight Hacks monorepo, and contains all of our organizations core infrastructure. Built and maintained by the Knight Hacks team.",
        longDescription: readProjectMarkdown("forge"),
        images: [
            {
                src: "/projects/forge-blade.png",
                title: "Knight Hacks Monolith Application",
            },
            {
                src: "/projects/forge-2025.png",
                title: "Knight Hacks VIII Website",
            },
            {
                src: "/projects/forge-guild.png",
                title: "Knight Hacks Guild Collective",
            },
            {
                src: "/projects/forge-club.png",
                title: "Knight Hacks Club Website",
            },
        ],
        colors: {
            cardBackground: "#030712",
            cardText: "#FFFFFF",
            panelBackground: "#030712",
            panelText: "#FFFFFF",
            accent: "#6d28d9",
        },
        links: [
            {
                label: "Forge Monorepo",
                url: "https://github.com/KnightHacks/forge",
                icon: "github",
            },
            {
                label: "Blade",
                url: "https://blade.knighthacks.org",
                icon: "external",
            },
            {
                label: "Knight Hacks VIII",
                url: "https://2025.knighthacks.org",
                icon: "external",
            },
            {
                label: "Guild",
                url: "https://guild.knighthacks.org",
                icon: "external",
            },
            {
                label: "Club",
                url: "https://club.knighthacks.org",
                icon: "external",
            },
            {
                label: "Discord",
                url: "https://discord.knighthacks.org",
                icon: "external",
            },
        ],
        skills: [
            "Monorepo",
            "UI/UX",
            "User Management",
            "TypeScript",
            "React",
            "Tailwind",
            "Next.js",
            "Coolify",
            "tRPC",
            "Drizzle",
            "PostgreSQL",
        ],
    },
    {
        id: "lootcode",
        title: "Lootcode",
        period: "February 2024 - May 2024",
        description:
            "Winner of the Knight Hacks Projects Program, Lootcode aims to make learning DSA fun and engaging with a fantasy D&D-esque campaign.",
        longDescription: readProjectMarkdown("lootcode"),
        images: [
            {
                src: "/projects/lootcode-dashboard.png",
                title: "Lootcode World Map",
                infoDialog: (
                    <InfoDialog
                        title="Lootcode - World Map"
                        text="We aren't the best at drawing... but thankfully our friend Michael is! While not a direct participant, he helped us worldbuild and craft the mysterious world of Alogrion. Here is a link to his [digital portfolio](https://www.instagram.com/sirmikelart/)."
                        image="/projects/lootcode-dashboard.png"
                    />
                ),
            },
            {
                src: "/projects/lootcode-game.png",
                title: "Lootcode Editor View",
            },
            {
                src: "/projects/lootcode-map.png",
                title: "Lootcode Chapter Map",
                infoDialog: (
                    <InfoDialog
                        title="Lootcode - Chapter Map"
                        text="Each node in the level maps are methodically placed to be silly DSA puns. If you want to see a good one, log in and look at the Forest (it definitely won't look like a Binary Tree...)"
                        image="/projects/lootcode-map.png"
                    />
                ),
            },
            {
                src: "/projects/lootcode-items.png",
                title: "Lootcode Item Shop",
            },
            {
                src: "/projects/lootcode-combat.png",
                title: "Lootcode Combat",
            },
            {
                src: "/projects/lootcode-leaderboard.png",
                title: "Lootcode Leaderboard",
                infoDialog: (
                    <InfoDialog
                        title="Lootcode - Leaderboard"
                        text="Our first place winner is a member of the UCF Competitive Programming Team, and decided to speedrun Lootcode in under 11 hours. While we were worried we made it too easy, no one has come close to [Brian](https://www.linkedin.com/in/brian-barak/)'s crazy record time!"
                        image="/projects/lootcode-leaderboard.png"
                    />
                ),
            },
            {
                src: "/projects/lootcode-article.png",
                title: "Lootcode Linux FOSS Article",
            },
        ],
        colors: {
            cardBackground: "#1f1b4c",
            cardText: "#FFFFFF",
            panelBackground: "#1f1b4c",
            panelText: "#FFFFFF",
            accent: "#ffef8a",
        },
        links: [
            {
                label: "Lootcode Repository",
                url: "https://github.com/Lootcode-Dev/lootcode",
                icon: "github",
            },
            {
                label: "Lootcode DevPost",
                url: "https://devpost.com/software/lootcode",
                icon: "external",
            },
            {
                label: "Lootcode Website",
                url: "https://www.lootcode.dev",
                icon: "external",
            },
            {
                label: "Linux FOSS Article",
                url: "/features/lootcode.pdf",
                icon: "external",
            },
            {
                label: "Lootcode YouTube Demo",
                url: "https://youtu.be/gGHtOWyCOKs?si=wygJs686zVxPF2_p",
                icon: "external",
            },
        ],
        skills: [
            "Linux",
            "Docker",
            "Zx Shell",
            "TypeScript",
            "React",
            "Next.js",
            "tRPC",
        ],
    },
    {
        id: "apa-scan",
        title: "APA-Scan + AS-Quant",
        period: "March 2024 - August 2024",
        description:
            "Built for my research position, the APA-Scan and AS-Quant pipelines use parallelized Python to assist in the analysis of large genetic datasets.",
        longDescription: readProjectMarkdown("apa-scan"),
        images: [
            {
                src: "/projects/as-quant.png",
                title: "Alternative Splicing",
            },
        ],
        colors: {
            cardBackground: "#231d1f",
            cardText: "#FFFFFF",
            panelBackground: "#231d1f",
            panelText: "#FFFFFF",
            accent: "#eabe17",
        },
        links: [
            {
                label: "GitHub",
                url: "https://github.com/compbiolabucf",
                icon: "github",
            },
        ],
        skills: [
            "Python",
            "Multiprocessing",
            "NumPy",
            "Pandas",
            "Samtools",
            "Cython",
        ],
    },
    {
        id: "wildspace-web",
        title: "Wildspace Web",
        period: "December 2023 - February 2024",
        description:
            "Wildspace Web is an AI-powered worldbuilding SaaS tool for dungeon masters that creates immersive and engaging worlds.",
        longDescription: readProjectMarkdown("wildspace-web"),
        images: [
            {
                src: "/projects/wildspace-web-landing.png",
                title: "Wildspace Web Landing Page",
            },
            {
                src: "/projects/wildspace-web-character.png",
                title: "Character Page",
            },
            {
                src: "/projects/wildspace-web-creation.png",
                title: "Creation Page",
            },
            {
                src: "/projects/wildspace-web-pricing.png",
                title: "Pricing Page",
            },
        ],
        colors: {
            cardBackground: "#111111",
            cardText: "#FFFFFF",
            panelBackground: "#111111",
            panelText: "#FFFFFF",
            accent: "#1bc07a",
        },
        links: [
            {
                label: "Wildspace Web Repository",
                url: "https://github.com/DVidal1205/wildspace-web",
                icon: "github",
            },
            {
                label: "Wildspace Web",
                url: "https://www.projectwild.space",
                icon: "external",
            },
            {
                label: "YouTube Demo",
                url: "https://www.youtube.com/watch?v=EGwAVXVsP9M",
                icon: "external",
            },
        ],
        skills: [
            "OpenAI",
            "Stripe",
            "Next.js",
            "TypeScript",
            "React",
            "Kinde Auth",
            "Tailwind",
            "tRPC",
            "Prisma",
            "MySQL",
        ],
    },
    {
        id: "project-wildspace",
        title: "Project Wildspace",
        period: "Knight Hacks VI Hackathon",
        description:
            "Predecessor to Wildspace Web, built as a desktop app using PySide and Qt for the Knight Hacks VI Hackathon.",
        longDescription: readProjectMarkdown("project-wildspace"),
        images: [
            {
                src: "/projects/wildspace-desktop-app.png",
                title: "Project Wildspace Desktop Interface",
            },
            {
                src: "/projects/wildspace-desktop-landing.png",
                title: "Download Landing Page",
            },
            {
                src: "/projects/wildspace-desktop-team.png",
                title: "Project Wildspace Team",
            },
            {
                src: "/projects/wildspace-desktop-pitch.png",
                title: "Project Wildspace Pitch",
            },
        ],
        colors: {
            cardBackground: "#282a36",
            cardText: "#86e591",
            panelBackground: "#282a36",
            panelText: "#86e591",
            accent: "#b89ce4",
        },
        links: [
            {
                label: "Project Wildspace Repository",
                url: "https://github.com/DVidal1205/wildspace-desktop",
                icon: "github",
            },
            {
                label: "Project Wildspace DevPost",
                url: "https://devpost.com/software/project-wildspace",
                icon: "external",
            },
        ],
        skills: ["PySide", "Qt", "LangChain", "Python", "Inno Installer"],
    },
    {
        id: "ucf-activities-bot",
        title: "UCF Activities Bot",
        period: "November 2023 - December 2023",
        description:
            "A Discord bot that scrapes the UCF Events Calendar and posts events every morning. Viewed daily by over 3000 UCF students.",
        longDescription: readProjectMarkdown("ucf-activities-bot"),
        images: [
            {
                src: "/projects/event-bot.png",
                title: "UCF Activities Bot Discord",
            },
        ],
        colors: {
            cardBackground: "#1b1a1e",
            cardText: "#FFFFFF",
            panelBackground: "#1b1a1e",
            panelText: "#FFFFFF",
            accent: "#5663f0",
        },
        skills: ["Python", "Selenium", "Nextcord", "Raspbian"],
    },
    {
        id: "dndttk",
        title: "DNDTTK",
        period: "Shell Hacks 2023 Hackathon",
        description:
            "My first Hackathon project, DNDTTK is a Dungeons and Dragons themed character generator built with Tkinter.",
        longDescription: readProjectMarkdown("dndttk"),
        images: [
            {
                src: "/projects/dndttk.png",
                title: "DNDTTK Character Generator",
            },
        ],
        colors: {
            cardBackground: "#e0c99a",
            cardText: "#FFFFFF",
            panelBackground: "#e0c99a",
            panelText: "#FFFFFF",
            accent: "#e16e22",
        },
        links: [
            {
                label: "DNDTTK Repository",
                url: "https://github.com/DVidal1205/misc/tree/main/DNDTTK",
                icon: "github",
            },
            {
                label: "DNDTTK DevPost",
                url: "https://devpost.com/software/dungeons-and-dragons-npc-generator",
                icon: "external",
            },
        ],
        skills: ["Python", "Tkinter"],
    },
    {
        id: "wordle-desktop",
        title: "Wordle Desktop",
        period: "August 2023 - September 2023",
        description:
            "A clone of the popular game Wordle, and my first desktop application built with Qt in C++. Built for my first GUI-based project.",
        longDescription: readProjectMarkdown("wordle-desktop"),
        images: [
            {
                src: "/projects/wordle.png",
                title: "Wordle Desktop Game Interface",
            },
        ],
        colors: {
            cardBackground: "#fbfffe",
            cardText: "#7a7b7f",
            panelBackground: "#fbfffe",
            panelText: "#7a7b7f",
            accent: "#6aab65",
        },
        links: [
            {
                label: "Wordle Desktop Repository",
                url: "https://github.com/DVidal1205/misc/tree/main/WordleQt",
                icon: "github",
            },
        ],
        skills: ["C++", "Qt", "Qt Creator"],
    },
];
