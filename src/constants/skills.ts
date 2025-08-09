export type SkillType =
    | "programming"
    | "tools"
    | "appdev"
    | "aiml"
    | "leadership";

export const skillColors: Record<SkillType, string> = {
    programming:
        "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent",
    tools: "bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent",
    appdev: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent",
    aiml: "bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 bg-clip-text text-transparent",
    leadership:
        "bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent",
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
    "GitLab",
    "Docker",
    "Podman",
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
    "Kubernetes",
    "Helm",
    "CRON",
];

export const appdevSkills: string[] = [
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
    "Qt",
    "PySide6",
    "Nextcord",
    "Tkinter",
    "Pygame",
    "PyQt5",
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

export const leadershipSkills: string[] = [
    "Team Management",
    "Project Management",
    "Product",
    "Organizational Leadership",
    "Fundraising",
    "Marketing",
    "Strategy",
    "Non-Profit",
    "Community Engagement",
    "Branding",
    "Public Speaking",
    "Event Planning",
];

export const allSkills: Skill[] = [
    ...programmingSkills.map((skill) => ({
        text: skill,
        type: "programming" as const,
    })),
    ...toolsSkills.map((skill) => ({ text: skill, type: "tools" as const })),
    ...appdevSkills.map((skill) => ({ text: skill, type: "appdev" as const })),
    ...aimlSkills.map((skill) => ({ text: skill, type: "aiml" as const })),
    ...leadershipSkills.map((skill) => ({
        text: skill,
        type: "leadership" as const,
    })),
];

export const skillCategories = {
    programming: programmingSkills,
    tools: toolsSkills,
    appdev: appdevSkills,
    aiml: aimlSkills,
    leadership: leadershipSkills,
} as const;
