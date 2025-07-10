export type SkillType = "programming" | "tools" | "webdev" | "aiml" | "appdev";

export const skillColors: Record<SkillType, string> = {
    programming:
        "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent",
    tools: "bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent",
    webdev: "bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent",
    aiml: "bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 bg-clip-text text-transparent",
    appdev: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent",
};

export interface Skill {
    text: string;
    type: SkillType;
}

export const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export const programmingSkills: string[] = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "C",
    "C#",
    "SQL",
    "PHP",
];

export const toolsSkills: string[] = [
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "Grafana",
    "Loki",
    "Confluence",
    "Vercel",
    "Node.js",
    "Bun",
    "pnpm",
    "Coolify",
    "Monorepo",
];

export const webdevSkills: string[] = [
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "tRPC",
    "Prisma",
    "Drizzle",
    "NextAuth",
    "Selenium",
    "Three.js",
    "Shadcn UI",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
    "CI/CD",
    "Express.js",
    "WebSockets",
];

export const aimlSkills: string[] = [
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "LangChain",
    "Gemini",
    "Google ADK",
    "Jupyter Notebooks",
    "Computer Vision",
    "RAG",
    "YOLO",
    "LLMs",
    "Deep Learning",
    "Neural Networks",
    "Agentic AI",
];

export const appdevSkills: string[] = [
    "Qt",
    "PySide6",
    "Nextcord",
    "Tkinter",
    "Pygame",
    "PyQt5",
];

export const allSkills: Skill[] = [
    ...programmingSkills.map((skill) => ({
        text: skill,
        type: "programming" as const,
    })),
    ...toolsSkills.map((skill) => ({ text: skill, type: "tools" as const })),
    ...webdevSkills.map((skill) => ({ text: skill, type: "webdev" as const })),
    ...aimlSkills.map((skill) => ({ text: skill, type: "aiml" as const })),
    ...appdevSkills.map((skill) => ({ text: skill, type: "appdev" as const })),
];

export const skillCategories = {
    programming: programmingSkills,
    tools: toolsSkills,
    webdev: webdevSkills,
    aiml: aimlSkills,
    appdev: appdevSkills,
} as const;
