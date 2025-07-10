export interface FeatureLink {
    label: string;
    url: string;
}

export interface FeatureItem {
    name: string;
    description: string;
    date: string;
    image: string;
    links: FeatureLink[];
}

/* 
google ai agent bake off
bitcamp ucf today
knight hacks ucf today
visuworld developer mlh
hackcon mlh
linux foss magazine
what is knight hacks
*/

export const featuredItems: FeatureItem[] = [
    {
        name: "MLH Developer Showcase - VisuWorld",
        description:
            "A showcase of our project, VisuWorld, by the Major League Hacking Developer Showcase Series. First place winner of the Google Gemini Challenge.",
        date: "June 2025",
        image: "/features/visuworld.png",
        links: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/posts/major-league-hacking_builtwithmlh-hackathonlife-geminiai-activity-7340441943610376193-8Ml0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/reel/DK-KKhqygNS/",
            },
        ],
    },
    {
        name: "Knight Hacks Wins Multiple Awards from Bitcamp XI",
        description:
            "An interview with myself and our Treasurer, Adrian, about Knight Hacks' grand success at Bitcamp XI. Despite only being 3% of the hacker population, we took home ~23% of the prizes.",
        date: "May 2025",
        image: "/about/people/bitcampxi.jpg",
        links: [
            {
                label: "UCF Today",
                url: "https://www.cs.ucf.edu/2025/05/16/knight-hacks-wins-multiple-awards-from-bitcamp-xi/",
            },
        ],
    },
    {
        name: "What is Knight Hacks?",
        description:
            "Appeared in a short video about the Knight Hacks Hackathon, filmed during Knight Hacks VII. Aimed to introduce our Hackathon to the Florida hackers community.",
        date: "October 2024",
        image: "/features/whatiskh.png",
        links: [
            {
                label: "Video",
                url: "https://www.youtube.com/watch?v=OU1q02v1Vrw",
            },
        ],
    },
    {
        name: "Linux FOSS Magazine - Lootcode",
        description:
            "A short article with myself and the team behind Lootcode, a gamified DSA learning platform and 1st place winner of Knight Hacks Projects Showcase. Written by Nate Drake.",
        date: "August 2024",
        image: "/features/lootcodefoss.png",
        links: [
            {
                label: "Lootcode Section",
                url: "/features/lootcode.pdf",
            },
            {
                label: "Linux FOSS Magazine",
                url: "https://www.linux-magazine.com/index.php/Issues/2024/285/FOSSPicks/(language)/eng-US",
            },
        ],
    },
];
