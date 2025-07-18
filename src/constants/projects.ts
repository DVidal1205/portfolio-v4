import { ProjectData } from "@/components/ui/project-card";

export const projects: ProjectData[] = [
    {
        id: "visuworld",
        title: "VisuWorld",
        period: "Bitcamp 2025 Hackathon",
        description:
            "Winner of Best use of Google Gemini, VisuWorld is a unique approach to generative 3D scene creation using LLMs and Google Gemini.",
        longDescription:
            "**Winner of Best use of Google Gemini** at Bitcamp 2025 Hackathon! VisuWorld is a **revolutionary approach to generative 3D scene creation** using Large Language Models and Google Gemini.\n\nKey achievements:\n• **Hackathon winner** - Best use of Google Gemini\n• **Invited to pitch** to Google Deepmind team\n• **Innovative 3D generation** using LLMs and a **GLSL** parsing layer.\n• **Real-time scene creation** with natural language input\n\nTechnical highlights:\n• **Advanced GLSL shaders** for real-time 3D rendering\n• **WebGL integration** with Three.js for browser-based 3D\n• **RAG implementation** for enhanced context understanding\n• **Gemini API integration** for intelligent scene generation\n",
        images: [
            {
                src: "/projects/visuworld-ocean.png",
                title: "VisuWorld Ocean Scene",
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
            "CodeJoust is a platform made to help developers learn DSA by enabling them to practice with their friends in an engaging gamified way.",
        longDescription:
            "CodeJoust is a **gamified DSA learning platform** designed to make competitive programming engaging and social. The platform enables developers to practice Data Structures and Algorithms with friends in an interactive, competitive environment.\n\nKey features:\n• **Real-time multiplayer** coding challenges with friends\n• **Gamified learning** with points, leaderboards, and achievements\n• **LeetCode integration** for comprehensive problem sets\n• **WebSocket communication** for live competition updates\n\nTechnical implementation:\n• **Real-time synchronization** using WebSockets\n• **JWT authentication** for secure user sessions\n• **Email notifications** via Resend for challenge invites\n• **MongoDB** for flexible data storage and user progress tracking\n\nBuilt with: [React](https://reactjs.org), [Express](https://expressjs.com), [MongoDB](https://mongodb.com), [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)",
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
            "AirJam is an AI-powered music exploration tool that helps users make music, anytime, anywhere. Using Computer Vision, play up to 30 instruments with just your webcam.",
        longDescription:
            "AirJam is an **AI-powered music exploration tool** that revolutionizes how people create music. Using advanced computer vision technology, users can play up to **30 different instruments** using just their webcam and hand gestures.\n\nInnovation highlights:\n• **Computer vision-powered** instrument control\n• **Real-time hand tracking** with MediaPipe\n• **YOLO object detection** for gesture recognition\n• **WebAudioFonts integration** for authentic instrument sounds\n\nTechnical achievements:\n• **30+ instruments** supported through gesture recognition\n• **Real-time processing** with sub-100ms latency\n• **Cross-platform compatibility** via web browser\n• **AI-powered gesture mapping** for intuitive control\n\nBuilt with: [React](https://reactjs.org), [Python](https://python.org), [FastAPI](https://fastapi.tiangolo.com), [OpenCV](https://opencv.org), [MediaPipe](https://mediapipe.dev)",
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
            "Winner of Google's Hack for Social Good Challenge at Shell Hacks 2024, Voiceboard AI makes whiteboarding accessible to all by using speech-to-diagram technology.",
        longDescription:
            "**Winner of Google's Hack for Social Good Challenge** at Shell Hacks 2024! VoiceBoard AI makes **whiteboarding accessible to everyone** by converting speech into diagrams in real-time.\n\nSocial impact:\n• **Accessibility breakthrough** for users with motor disabilities\n• **Speech-to-diagram conversion** using advanced NLP\n• **Real-time diagram generation** with Mermaid.js\n• **Google Gemini integration** for intelligent diagram interpretation\n\nTechnical innovation:\n• **Speech recognition** with real-time processing\n• **Natural language processing** for diagram intent understanding\n• **Mermaid.js integration** for professional diagram rendering\n• **tRPC** for type-safe API communication\n\nBuilt with: [React](https://reactjs.org), [Next.js](https://nextjs.org), [tRPC](https://trpc.io), [Google Gemini](https://ai.google.dev/gemini), [Mermaid](https://mermaid.js.org)",
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
                label: "Live Demo",
                url: "https://voiceboard.app/draw",
                icon: "external",
            },
        ],
        skills: [
            "React",
            "Next.js",
            "Tailwind",
            "TypeScript",
            "tRPC",
            "Gemini",
            "Speech Recognition",
            "Mermaid",
        ],
    },
    {
        id: "forge",
        title: "Forge",
        period: "July 2024 - Present",
        description:
            "Forge is the Knight Hacks monorepo, and contains all of our organizations core infrastructure. Built and maintained by myself and the Knight Hacks team.",
        longDescription:
            "Forge is the **core infrastructure monorepo** for Knight Hacks, containing all essential systems and tools that power our organization. As a key maintainer, I've architected and built critical infrastructure components.\n\nInfrastructure highlights:\n• **Monorepo architecture** for unified development workflow\n• **Core organization tools** and management systems\n• **Coolify deployment** for streamlined infrastructure management\n• **Type-safe APIs** with tRPC for reliable data communication\n\nTechnical stack:\n• **Drizzle ORM** for type-safe database operations\n• **PostgreSQL** for robust data storage\n• **Next.js** for full-stack application development\n• **Coolify** for containerized deployment and management\n\nBuilt with: [TypeScript](https://typescriptlang.org), [Next.js](https://nextjs.org), [Drizzle](https://orm.drizzle.team), [PostgreSQL](https://postgresql.org), [Coolify](https://coolify.io)",
        images: [
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Forge Monorepo Architecture",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Knight Hacks Infrastructure",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Development Workflow",
            },
        ],
        colors: {
            cardBackground: "#F0F4F8",
            cardText: "#2D3748",
            panelBackground: "#EDF2F7",
            panelText: "#2D3748",
            accent: "#E53E3E",
        },
        links: [
            {
                label: "GitHub",
                url: "https://github.com/KnightHacks/forge",
                icon: "github",
            },
        ],
        skills: [
            "Monorepo",
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
            "My team's first place winning project of the Knight Hacks Projects Program, Lootcode aims to make learning Data Structures and Algorithms fun and engaging.",
        longDescription:
            "**First place winner** of the Knight Hacks Projects Program! Lootcode transforms the way students learn Data Structures and Algorithms by making the process **fun, engaging, and gamified**.\n\nEducational innovation:\n• **Gamified learning experience** with rewards and progression\n• **Interactive DSA challenges** with real-time feedback\n• **Linux-based execution environment** for authentic development experience\n• **Docker containerization** for consistent and secure code execution\n\nTechnical implementation:\n• **Zx shell integration** for powerful command-line operations\n• **Containerized execution** for safe code running\n• **Real-time feedback** system for immediate learning\n• **Type-safe APIs** with tRPC for reliable data handling\n\nBuilt with: [TypeScript](https://typescriptlang.org), [Next.js](https://nextjs.org), [tRPC](https://trpc.io), [Docker](https://docker.com), [Linux](https://linux.org)",
        images: [
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Lootcode Learning Interface",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Gamified DSA Challenges",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Real-time Code Execution",
            },
        ],
        colors: {
            cardBackground: "#0D0D0D",
            cardText: "#FFFFFF",
            panelBackground: "#000000",
            panelText: "#FFFFFF",
            accent: "#10A37F",
        },
        links: [
            {
                label: "Live Demo",
                url: "https://www.lootcode.dev",
                icon: "external",
            },
        ],
        skills: [
            "TypeScript",
            "React",
            "Next.js",
            "tRPC",
            "Linux",
            "Docker",
            "Zx Shell",
        ],
    },
    {
        id: "apa-scan",
        title: "APA-Scan + AS-Quant",
        period: "March 2024 - August 2024",
        description:
            "The APA-Scan and AS-Quant pipelines are critical for RNA-Seq analysis in my lab, and use parallelized Python to assist in the analysis of large genetic datasets.",
        longDescription:
            "APA-Scan and AS-Quant are **critical bioinformatics pipelines** for RNA-Seq analysis in my research lab. These tools use **parallelized Python processing** to handle large-scale genetic datasets efficiently.\n\nResearch impact:\n• **Essential tools** for RNA-Seq analysis workflows\n• **Parallelized processing** for handling large genetic datasets\n• **Optimized performance** using Cython for computational bottlenecks\n• **Integration** with standard bioinformatics tools like Samtools\n\nTechnical achievements:\n• **Multiprocessing implementation** for parallel data analysis\n• **Pandas and NumPy** for efficient data manipulation\n• **Cython optimization** for performance-critical sections\n• **Samtools integration** for BAM file processing\n\nBuilt with: [Python](https://python.org), [Multiprocessing](https://docs.python.org/3/library/multiprocessing.html), [Pandas](https://pandas.pydata.org), [NumPy](https://numpy.org), [Cython](https://cython.org)",
        images: [
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "APA-Scan Pipeline Architecture",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "RNA-Seq Analysis Workflow",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Parallel Processing Dashboard",
            },
        ],
        colors: {
            cardBackground: "#1A1A1A",
            cardText: "#FFFFFF",
            panelBackground: "#000000",
            panelText: "#FFFFFF",
            accent: "#CC0000",
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
            "Pandas",
            "NumPy",
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
        longDescription:
            "Wildspace Web is an **AI-powered worldbuilding SaaS** designed specifically for dungeon masters and tabletop RPG enthusiasts. The platform creates **immersive and engaging worlds** using advanced AI technology.\n\nSaaS features:\n• **AI-powered world generation** with customizable parameters\n• **Comprehensive worldbuilding tools** for DMs\n• **Database-driven content** with Prisma ORM\n• **MySQL backend** for reliable data storage\n\nTechnical implementation:\n• **Type-safe APIs** with tRPC for reliable data communication\n• **Prisma ORM** for efficient database operations\n• **Next.js full-stack** for seamless development experience\n• **Tailwind CSS** for modern, responsive design\n\nBuilt with: [TypeScript](https://typescriptlang.org), [Next.js](https://nextjs.org), [tRPC](https://trpc.io), [Prisma](https://prisma.io), [MySQL](https://mysql.com)",
        images: [
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Wildspace Web Worldbuilding Interface",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "AI World Generation",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Dungeon Master Dashboard",
            },
        ],
        colors: {
            cardBackground: "#E8F5E9",
            cardText: "#1B5E20",
            panelBackground: "#F1F8E9",
            panelText: "#1B5E20",
            accent: "#4ECDC4",
        },
        links: [
            {
                label: "Live Demo",
                url: "https://www.projectwild.space",
                icon: "external",
            },
        ],
        skills: [
            "TypeScript",
            "React",
            "Next.js",
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
            "My project for Knight Hacks 2023, Project Wildspace was a proof of concept for using AI to generate immersive and engaging worlds for tabletop roleplaying games.",
        longDescription:
            "Project Wildspace was my **proof of concept** for AI-powered worldbuilding at Knight Hacks 2023. This desktop application demonstrated the potential of using **AI to generate immersive worlds** for tabletop roleplaying games.\n\nInnovation highlights:\n• **AI-powered world generation** using LangChain\n• **Desktop application** built with PySide and Qt\n• **Proof of concept** for AI in tabletop gaming\n• **Professional packaging** with Inno Installer\n\nTechnical achievements:\n• **LangChain integration** for AI-powered content generation\n• **Qt-based GUI** for cross-platform desktop application\n• **Professional installer** with Inno Setup for Windows deployment\n• **Modular architecture** for extensible world generation\n\nBuilt with: [Python](https://python.org), [PySide](https://wiki.qt.io/Qt_for_Python), [Qt](https://qt.io), [LangChain](https://langchain.com), [Inno Installer](https://jrsoftware.org/isinfo.php)",
        images: [
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Project Wildspace Desktop Interface",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "AI World Generation",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Proof of Concept Features",
            },
        ],
        colors: {
            cardBackground: "#1A1A1A",
            cardText: "#FFFFFF",
            panelBackground: "#0A0A0A",
            panelText: "#FFFFFF",
            accent: "#76B900",
        },
        links: [
            {
                label: "GitHub",
                url: "https://github.com/DVidal1205/wildspace-desktop",
                icon: "github",
            },
        ],
        skills: ["Python", "PySide", "Qt", "LangChain", "Inno Installer"],
    },
    {
        id: "ucf-activities-bot",
        title: "UCF Activities Bot",
        period: "November 2023 - December 2023",
        description:
            "A Discord bot that scrapes the UCF Events Calendar and posts events every morning. Accessible to over 1000 UCF students across various servers.",
        longDescription:
            "The UCF Activities Bot is a **Discord automation tool** that keeps the UCF community informed about campus events. The bot scrapes the UCF Events Calendar daily and posts upcoming events to multiple Discord servers.\n\nCommunity impact:\n• **1000+ UCF students** served across various Discord servers\n• **Daily event updates** automatically posted every morning\n• **Web scraping automation** using Selenium for reliable data collection\n• **Raspberry Pi deployment** for 24/7 operation\n\nTechnical implementation:\n• **Selenium web scraping** for reliable event data collection\n• **Nextcord integration** for Discord bot functionality\n• **Raspbian deployment** on Raspberry Pi for continuous operation\n• **Automated scheduling** for daily event posts\n\nBuilt with: [Python](https://python.org), [Selenium](https://selenium-python.readthedocs.io), [Nextcord](https://nextcord.readthedocs.io), [Raspbian](https://raspbian.org)",
        images: [
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "UCF Activities Bot Discord Interface",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Event Scraping Dashboard",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Raspberry Pi Deployment",
            },
        ],
        colors: {
            cardBackground: "#F8F9FA",
            cardText: "#202124",
            panelBackground: "#FFFFFF",
            panelText: "#202124",
            accent: "#4285F4",
        },
        links: [
            {
                label: "Knight Hacks",
                url: "https://2024.knighthacks.org",
                icon: "external",
            },
        ],
        skills: ["Python", "Selenium", "Nextcord", "Raspbian"],
    },
    {
        id: "wordle-desktop",
        title: "Wordle Desktop",
        period: "September 2023 - September 2023",
        description:
            "A clone of the popular game Wordle, and my first desktop application built with Qt in C++. Built after being dissatisfied with being confined to the CLI.",
        longDescription:
            "Wordle Desktop was my **first desktop application** built with Qt in C++. Created after being dissatisfied with CLI-only development, this project marked my transition to **GUI-based application development**.\n\nDevelopment journey:\n• **First GUI application** using Qt and C++\n• **Wordle game clone** with complete game mechanics\n• **Qt Creator IDE** for modern C++ development\n• **Cross-platform compatibility** through Qt framework\n\nTechnical learning:\n• **Qt framework** for cross-platform GUI development\n• **C++ programming** for desktop application development\n• **Qt Creator IDE** for efficient development workflow\n• **Event-driven programming** for interactive user interfaces\n\nBuilt with: [C++](https://isocpp.org), [Qt](https://qt.io), [Qt Creator](https://doc.qt.io/qtcreator/)",
        images: [
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Wordle Desktop Game Interface",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Qt GUI Implementation",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Game Mechanics",
            },
        ],
        colors: {
            cardBackground: "#E7F3FF",
            cardText: "#1C2B33",
            panelBackground: "#F0F8FF",
            panelText: "#1C2B33",
            accent: "#1877F2",
        },
        links: [],
        skills: ["C++", "Qt", "Qt Creator"],
    },
    {
        id: "dndttk",
        title: "DNDTTK",
        period: "September 2023 - September 2023",
        description:
            "One of my very first GUI-based projects, DNDTTK is a Dungeons and Dragons themed character generator built with Tkinter, built for ShellHacks 2023.",
        longDescription:
            "DNDTTK was one of my **very first GUI-based projects**, created for ShellHacks 2023. This Dungeons and Dragons themed character generator marked my **transition from CLI to GUI development**.\n\nProject highlights:\n• **First GUI application** using Python and Tkinter\n• **D&D character generation** with authentic game mechanics\n• **Hackathon project** for ShellHacks 2023\n• **User-friendly interface** for tabletop gaming enthusiasts\n\nTechnical learning:\n• **Tkinter GUI framework** for Python desktop applications\n• **Event-driven programming** for interactive user interfaces\n• **Game mechanics implementation** for D&D character creation\n• **User experience design** for intuitive interfaces\n\nBuilt with: [Python](https://python.org), [Tkinter](https://docs.python.org/3/library/tkinter.html)",
        images: [
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "DNDTTK Character Generator",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "Tkinter GUI Interface",
            },
            {
                src: "/placeholder.svg?height=400&width=600",
                title: "D&D Character Creation",
            },
        ],
        colors: {
            cardBackground: "#F5F5F7",
            cardText: "#1D1D1F",
            panelBackground: "#FBFBFD",
            panelText: "#1D1D1F",
            accent: "#007AFF",
        },
        links: [
            {
                label: "Devpost",
                url: "https://devpost.com/software/dungeons-and-dragons-npc-generator",
                icon: "external",
            },
        ],
        skills: ["Python", "Tkinter"],
    },
];
