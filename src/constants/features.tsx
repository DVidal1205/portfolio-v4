import { InfoDialog } from "@/components/ui/info-dialog";

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
    infoDialog?: React.ReactNode;
}

export const featuredItems: FeatureItem[] = [
    {
        name: "We Are Knight Hacks",
        description:
            "Our post-event promo for Knight Hacks VIII, which welcomed nearly 1,000 hackers from across the globe. This event was my last Hackathon as President, and I was super happy to have seen it so well documented.",
        date: "October 2025",
        image: "/features/we-are-kh.png",
        links: [
            {
                label: "YouTube",
                url: "https://www.youtube.com/watch?v=OzW_4QeCfM0",
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/posts/knight-hacks_knighthacks-technology-development-activity-7389696750027980800-ZvGD",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/p/DQcJqIdkQAI",
            },
        ],
    },
    {
        name: "Knight Hacks, Hack Days, and Hackathons - UCF Today",
        description:
            "An interview with myself, Leonard Gofman, and Richard Phillips, discussing what it is like to be an undergraduate technologist and how to make an impact and overcome impostor syndrome.",
        date: "October 2025",
        image: "/features/ucftoday.png",
        links: [
            {
                label: "UCF Today",
                url: "https://www.ucf.edu/news/knight-hacks-hack-days-and-hackathons/",
            },
            {
                label: "UCF Department of Computer Science",
                url: "https://www.linkedin.com/posts/ucfcomputersci_ahead-of-their-annual-hackathon-this-friday-activity-7386857062489628672-mOaS",
            },
            {
                label: "UCF College of Engineering and Computer Science",
                url: "https://www.linkedin.com/posts/ucfcecs_ahead-of-their-annual-hackathon-this-friday-activity-7386826807259611136-3ovw",
            },
        ],
    },
    {
        name: "VL-ADK Showcase",
        description:
            "In wake of our resounding success at ShellHacks 2025 with our project VL-ADK, we were invited to interview with INIT, the organizing team, to highlight our achievement and understand VL-ADK.",
        date: "September 2025",
        image: "/projects/vl-adk-hotdog.png",
        links: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/posts/init-fiu_shellhacks-initatfiu-vladk-activity-7385053244114440192-fRa9",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/p/DP2fD7CjNc2/",
            },
        ],
    },
    {
        name: "MLH Top 50 2025",
        description:
            "The MLH Top 50 is a list of 50 members of the Global Hackathon Community. Hackers, Organizers, and Alumni from around the globe are recognized each year on this esteemed list for their contributions to the Hacker community.",
        date: "September 2025",
        image: "/features/mlh-top50.png",
        links: [
            {
                label: "Dylan Vidal - MLH Top 50 2025",
                url: "https://top.mlh.io/2025/profiles/dylan-vidal",
            },
            {
                label: "MLH Top 50 2025",
                url: "https://top.mlh.io/2025",
            },
            {
                label: "YouTube Reveal",
                url: "https://www.youtube.com/watch?v=VCqnQssZ1u0",
            },
            {
                label: "LinkedIn Announcement",
                url: "https://www.linkedin.com/posts/major-league-hacking_50-hackers-endless-impact-every-year-activity-7373392377643835392-Q6qO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk",
            },
        ],
    },
    {
        name: "Hackcon 2025 Speaker Series",
        description:
            "Every August, Major League Hacking hosts Hackcon: a 3-day conference for Hackathon Organizers around the globe. I was selected to speak on teaching organizers about making their events memorable and unforgettable experiences.",
        date: "August 2025",
        image: "/features/hackcon.png",
        links: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/posts/dylanvidal1205_super-excited-to-share-that-i-will-be-speaking-activity-7349206575451942912-vT6A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk",
            },
            {
                label: "Slides",
                url: "/features/hackcon.pdf",
            },
        ],
    },
    {
        name: "Google Cloud AI Agent Bake Off",
        description:
            "I built an AI Fashion Agent in only 3-hours on the pilot episode of Google Cloud's AI Agent Bake Off Series. This event was a BLAST and I learned so much about the Google AI Ecosystem. Check out the full episode!",
        date: "July 2025",
        image: "/features/bakeoff.png",
        links: [
            {
                label: "Full Episode",
                url: "https://www.youtube.com/watch?v=UPFk3_FUKtI",
            },
            {
                label: "LinkedIn Trailer",
                url: "https://www.youtube.com/watch?v=UPFk3_FUKtI",
            },
            {
                label: "Dylan & Luis Introduction",
                url: "https://x.com/GoogleCloudTech/status/1948065585570382033",
            },
        ],
    },
    {
        name: "GitHub Campus Expert",
        description:
            "I am a member of the GitHub Campus Experts program, which helps me empower my local community at UCF to break into the tech industry with the support of GitHub.",
        date: "June 2025",
        image: "/features/ghce.jpg",
        links: [
            {
                label: "GitHub Campus Experts Profile",
                url: "https://githubcampus.expert/DVidal1205/",
            },
            {
                label: "GitHub Campus Experts Program",
                url: "https://github.com/education/students/campus-expert/",
            },
        ],
    },
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
        infoDialog: (
            <InfoDialog
                title="MLH Developer Showcase - VisuWorld"
                text="Believe it or not, this project was also selected to be pitched to **Google Deepmind** for their weekly internal Friday Developer Showcase series. During the pitch, we live generated this [Mountain Scene](https://create.visuworld.tech/?id=681e4826885c9378197a56f8) using Gemini 2.5 Pro - the Demo Gods were clearly in our favor!"
                image="/features/visuworld-mountains.png"
                className="bg-none border-none bg-transparent p-0"
            />
        ),
    },
    {
        name: "Knight Hacks Wins Multiple Awards from Bitcamp XI - UCF Today",
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
        infoDialog: (
            <InfoDialog
                title="Knight Hacks Short Video"
                text="This video was filmed on-site over the entire course of the Knight Hacks VII Hackathon by [Ryan Baez](https://ryanbaez.myportfolio.com/). It was a super fun experience and I am grateful for being able to spread the mission of Knight Hacks!"
                image="/features/whatiskh.png"
                className="bg-none border-none bg-transparent p-0"
            />
        ),
    },
    {
        name: "Linux Magazine for Open Source Software - Lootcode",
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
        infoDialog: (
            <InfoDialog
                title="Linux Magazine for Open Source Software - Lootcode"
                text="This article was written by [Nate Drake](https://www.linux-magazine.com/content/search?SearchText=nate+drake&x=0&y=0), a contributor to the Linux FOSS Magazine. We gained recognition for this article after our app soared in popularity overnight - with over **55,000** page views in the first month, and a total of **550** hours of play time to date."
                image="/features/lootcodefoss.png"
                className="bg-none border-none bg-transparent p-0"
            />
        ),
    },
];
