export interface WorkshopItem {
    name: string;
    description: string;
    date: string;
    image: string;
    conceptsCovered: string[];
    youtubeLink: string;
}

export const workshopItems: WorkshopItem[] = [
    {
        name: "Introduction to React Hooks",
        description:
            "A comprehensive workshop covering the fundamentals of React Hooks and how to use them effectively in modern React applications.",
        date: "January 2024",
        image: "/placeholder.svg?height=200&width=400",
        conceptsCovered: [
            "useState",
            "useEffect",
            "Custom Hooks",
            "Hook Rules",
            "Performance Optimization",
        ],
        youtubeLink: "https://youtube.com/watch?v=example1",
    },
    {
        name: "Building REST APIs with Node.js",
        description:
            "Learn to create robust REST APIs using Node.js, Express, and MongoDB with authentication and best practices.",
        date: "November 2023",
        image: "/placeholder.svg?height=200&width=400",
        conceptsCovered: [
            "Express.js",
            "MongoDB",
            "JWT Authentication",
            "Error Handling",
            "API Design",
        ],
        youtubeLink: "https://youtube.com/watch?v=example2",
    },
    {
        name: "TypeScript Fundamentals",
        description:
            "Master TypeScript basics and advanced features to write more maintainable and type-safe JavaScript code.",
        date: "September 2023",
        image: "/placeholder.svg?height=200&width=400",
        conceptsCovered: [
            "Type Annotations",
            "Interfaces",
            "Generics",
            "Enums",
            "Advanced Types",
        ],
        youtubeLink: "https://youtube.com/watch?v=example3",
    },
    {
        name: "Git & GitHub Mastery",
        description:
            "Comprehensive guide to version control with Git and collaboration workflows using GitHub for teams.",
        date: "July 2023",
        image: "/placeholder.svg?height=200&width=400",
        conceptsCovered: [
            "Git Basics",
            "Branching",
            "Merging",
            "Pull Requests",
            "CI/CD Integration",
        ],
        youtubeLink: "https://youtube.com/watch?v=example4",
    },
];
