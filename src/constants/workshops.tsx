import { InfoDialog } from "@/components/ui/info-dialog";

export interface WorkshopItem {
    name: string;
    description: string;
    date: string;
    image: string;
    conceptsCovered: string[];
    youtubeLink: string;
    infoDialog?: React.ReactNode;
}

export const workshopItems: WorkshopItem[] = [
    {
        name: "Full Stack 101",
        description:
            "The second workshop in a 2 part series on building web pages and web apps. This workshop goes beyond static pages and introduces functional databases, APIs, and other key concepts via the T3 Stack.",
        date: "April 2025",
        image: "/workshops/fullstack.png",
        conceptsCovered: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Next.js",
            "tRPC",
            "PostgreSQL",
            "Drizzle",
            "SSR",
            "CSR",
            "Authentication",
            "SEO",
        ],
        youtubeLink: "https://www.youtube.com/watch?v=0YUDCU3tOuc&t=2308s",
        infoDialog: (
            <InfoDialog
                title="Full Stack 101"
                text="Just like **Web Development 101**, this workshop also started as a private workshop for my mentees. The only difference is this workshop went over a **TON** of refinements and optimizations before ever making it to Knight Hacks, but I am happy with where it ended up."
                image="/workshops/fullstack.png"
                className="bg-none border-none bg-transparent p-0"
            />
        ),
    },
    {
        name: "Web Development 101",
        description:
            "The first workshop in a 2 part series on building web pages and web apps. This workshop covers the basics of static site technologies and how to use them to build a simple web page like a personal portfolio.",
        date: "March 2025",
        image: "/workshops/webdevelopment.png",
        conceptsCovered: [
            "HTML",
            "JSX",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Tailwind CSS",
            "Next.js",
            "SEO",
            "SSR",
            "CSR",
            "Vercel",
            "Hosting",
        ],
        youtubeLink: "https://www.youtube.com/watch?v=E-V035JrLmk&t=3198s",
        infoDialog: (
            <InfoDialog
                title="Web Development 101"
                text="I actually started this workshop as a private workshop for my mentees from Knight Hacks. Before proceeding to part 2 (**Full Stack 101**), I actually required them to make a static portfolio as an entry ticket. I was **SUPER** impressed with what they came up with! \\n\\n Feel free to check some of them out here: [Carlos Catala](https://www.catala.dev/), [Daniel Efres](https://www.danielefres.dev/), [Carlos Lopez](https://www.carloselopez.dev/), [Samuel Borges](https://www.samborg.dev/), and [Kevin Pereda](https://www.kpereda.dev/)."
                image="/workshops/webdevelopment.png"
                className="bg-none border-none bg-transparent p-0"
            />
        ),
    },
    {
        name: "Self-Hosting Crash Course",
        description:
            "A workshop diving into the complexities of website hosting and the spectrum of bare-metal to full-cloud solutions. Demonstrates how to self-host a website on a VPS using Coolify.",
        date: "February 2025",
        image: "/workshops/selfhosting.png",
        conceptsCovered: [
            "VPS",
            "Coolify",
            "Docker",
            "Nginx",
            "SSL",
            "DNS",
            "SSH",
            "Cloudflare",
            "Cloud Providers",
        ],
        youtubeLink: "https://www.youtube.com/watch?v=Sx8DdFWoP3g",
        infoDialog: (
            <InfoDialog
                title="Self-Hosting Crash Course"
                text="I actually demo'd using **Coolify** live by deploying a full-stack web app to a OVH VPS - database, frontend, and backend included. This workshop was with a bit of a smaller crowd due to weather, but was a lot of fun and super chill."
                image="/workshops/selfhosting.png"
                className="bg-none border-none bg-transparent p-0"
            />
        ),
    },
    {
        name: "UCF Spring 2025 Foundation Exam Review (Part 3)",
        description:
            "A workshop diving into Data Structures and Algorithms of the UCF Spring 2025 Foundation Exam. Covers the basics of the exam, the topics covered, and the format of the exam.",
        date: "January 2025",
        image: "/workshops/fespring25-3.png",
        conceptsCovered: [
            "Data Structures",
            "Algorithms",
            "Time Complexity",
            "Space Complexity",
            "C Programming",
            "Bitwise Operations",
            "Heaps",
            "Tries",
            "Hashing",
            "Hash Tables",
            "Permutations",
        ],
        youtubeLink: "https://www.youtube.com/watch?v=KMXuQssO4IQ",
    },
    {
        name: "UCF Spring 2025 Foundation Exam Review (Part 2)",
        description:
            "A workshop diving into Data Structures and Algorithms of the UCF Spring 2025 Foundation Exam. Covers the basics of the exam, the topics covered, and the format of the exam.",
        date: "January 2025",
        image: "/workshops/fespring25-2.png",
        conceptsCovered: [
            "Data Structures",
            "Algorithms",
            "Time Complexity",
            "Space Complexity",
            "C Programming",
            "Recurrence Relations",
            "Algorithm Analysis",
            "Sorting Algorithms",
            "Binary Search",
            "Binary Search Trees",
            "AVL Trees",
        ],
        youtubeLink: "https://www.youtube.com/watch?v=SU0pEch7H10",
    },
    {
        name: "Intro to Databases",
        description:
            "A workshop diving into the basics of databases and how to use them to store and retrieve data. Covers the basics of SQL and NoSQL databases, their tradeoffs, and basic CRUD operations.",
        date: "December 2024",
        image: "/workshops/databases.png",
        conceptsCovered: [
            "SQL",
            "NoSQL",
            "SQL vs NoSQL",
            "CRUD",
            "ERDs",
            "Horizontal Scaling",
            "Vertical Scaling",
            "Sharding",
            "Relational vs Non-Relational",
            "ACID",
        ],
        youtubeLink: "https://www.youtube.com/watch?v=7rgkwXZrW9o",
    },
    {
        name: "Intro GUI Applications",
        description:
            "A workshop diving into the basics of GUI applications and how to use them to build a simple GUI application. Covers the basics of layouts, widgets, and event handling with Tkinter.",
        date: "September 2024",
        image: "/workshops/gui.png",
        conceptsCovered: [
            "Tkinter",
            "Layouts",
            "Widgets",
            "Event Handling",
            "Event Driven Programming",
        ],
        youtubeLink: "https://www.youtube.com/watch?v=qevEKf47npU",
    },
    {
        name: "UCF Summer 2024 Foundation Exam Review (Part 1)",
        description:
            "My very first workshop! A workshop diving into Data Structures and Algorithms of the UCF Summer 2024 Foundation Exam. Covers the basics of the exam, the topics covered, and the format of the exam.",
        date: "May 2024",
        image: "/workshops/fesummer24.png",
        conceptsCovered: [
            "Data Structures",
            "Algorithms",
            "Time Complexity",
            "Space Complexity",
            "C Programming",
            "Dynamic Memory Allocation",
            "Pointers",
            "Linked Lists",
            "Stacks",
            "Queues",
            "Recursion",
        ],
        youtubeLink: "https://www.youtube.com/watch?v=7rgkwXZrW9o",
        infoDialog: (
            <InfoDialog
                title="UCF Summer 2024 Foundation Exam Review (Part 1)"
                text="I was actually taking the Foundation Exam myself when teaching this workshop! Luckily I got an **89%** (passing score), otherwise I probably would have been giving some pretty bad advice."
                image="/workshops/fesummer24.png"
                className="bg-none border-none bg-transparent p-0"
            />
        ),
    },
];
