import { TimelineExperience } from "@/components/ui/experience-card";

export const experiences: TimelineExperience[] = [
    {
        id: "exp1",
        title: "Dev Lead, Former President 2024 - 2026",
        company: "Knight Hacks",
        period: "February 2024 - Present",
        location: "Orlando, FL",
        description:
            "Knight Hacks is UCF's software development and organization, and the place I conquered impostor syndrome as a developer. Now I take it upon myself as President to empower our members with the same confidence and make sure that our organization continues to operate smoothly, spreading our mission of fostering a community of aspiring developers.",
        responsibilities: [
            "Revamped organizational web infrastructure, migrating from a single server to a distributed system of micro services increasing application availability by **67%**.",
            "Led a team of **12** software engineers to complete biweekly development sprints across various features.",
            "Orchestrated a CI/CD pipeline for core services hosted on **Microsoft Azure** ensuring a positive developer experience and application availability.",
            "Maintained a large mono-repository with **6** applications and **4** services through enforcing code-quality best practices.",
            "Managed a non-profit organization with **800+** members, **1,500+** hackers, and **$75,000** dollars in yearly revenue focused on creating confident, capable, and passionate developers.",
            "Organized the Knight Hacks VIII Hackathon for over **1700+** registrants and **1,024** attendees, with a total of **189** projects submitted.",
            "Organized the Knight Hacks VII Hackathon for over **1200+** registrants and **547** attendees, with a total of **94** projects submitted.",
            "Lead a team of **45** students to achieve deliverables such as **60** technical workshops a year and **100+** member mentorship.",
            "Revamped the mentorship program, expanding the number of participants by **58%** compared to previous school year.",
            "Personally secured nearly **$35,000** for the organization by networking with numerous **Fortune 500** companies over 2 years.",
        ],
        achievements: [],
        images: [
            {
                src: "/about/people/bitcampxi.jpg",
                title: "Knight Hacks Leadership",
            },
        ],
        companyLogo: "/experience/knighthacks-logo.png",
        colors: {
            cardColor: "#1a1939",
            accent: "#b981f5",
            textColor: "#e2e8f0",
        },
        links: [
            {
                label: "Knight Hacks",
                url: "https://club.knighthacks.org/officers",
                icon: "external",
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/posts/dylanvidal1205_im-happy-to-share-that-ive-been-promoted-activity-7241829233256247296-vVbG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk",
                icon: "external",
            },
            {
                label: "What is Knight Hacks?",
                url: "https://www.youtube.com/watch?v=OU1q02v1Vrw",
                icon: "external",
            },
        ],
        skills: [
            "Leadership",
            "Event Planning",
            "Team Management",
            "Fundraising",
            "Community Building",
            "Public Speaking",
            "Project Management",
            "Mentorship",
        ],
    },
    {
        id: "exp2",
        title: "Software Engineer Intern",
        company: "NVIDIA",
        period: "May 2025 - August 2025",
        location: "Santa Clara, CA",
        description:
            "Contributing to the autonomous hardware recovery team (formerly Shoreline.io) for NVIDIA Mission Control, the software layer for AI factories. Working on log analysis pipelines and real-time monitoring systems.",
        responsibilities: [
            "Contributed to the autonomous hardware recovery team for [NVIDIA Mission Control](https://blogs.nvidia.com/blog/mission-control-software/), the software layer for AI factories.",
            "Overhauled **Kubernetes / Helm** infrastructure to achieve zero-downtime rolling upgrades, fully eliminating **10 hours** of scheduled maintenance per year per customer and accelerating development environment build times by **93%**.",
            "Implemented industry standard horizontal scaling techniques to core services, increasing traffic bandwidth.",
            "Optimized network flow by modifying **NGINX** ingress patterns and service-to-service communication, reducing latency.",
            "Developed a log analysis tool that automatically identifies and filters noisy logs, reducing time-to-debug of core services.",
            "Leveraged fine-tuned Llama models to generate **semantic embeddings** for clustering and identifying noisy log patterns.",
            "Engineered a daily **CRON** service to generate noisy log reports and grep pattern files, streamlining daily debugging tasks.",
            "Integrated with real-time **Loki** logs from **Grafana**, and automatically published log anomalies to **Confluence** and **Slack** for immediate developer visibility.",
        ],
        achievements: [],
        images: [
            {
                src: "/experience/nvidia.jpg",
                title: "NVIDIA",
            },
        ],
        companyLogo: "/experience/nvidia-logo.png",
        colors: {
            cardColor: "#000000",
            accent: "#78bc04",
            textColor: "#ffffff",
        },
        links: [
            {
                label: "NVIDIA",
                url: "http://nvidia.com/",
                icon: "external",
            },
            {
                label: "NVIDIA Mission Control",
                url: "https://blogs.nvidia.com/blog/mission-control-software/",
                icon: "external",
            },
            {
                label: "Shoreline.io",
                url: "https://shoreline.io/",
                icon: "external",
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/posts/dylanvidal1205_im-absolutely-thrilled-to-announce-that-activity-7291536925834772482-OjVL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk",
                icon: "external",
            },
        ],
        skills: [
            "Kubernetes",
            "Helm",
            "NGINX",
            "Python",
            "Machine Learning",
            "Llama Models",
            "Loki",
            "Grafana",
            "Confluence",
            "Slack",
            "AI Infrastructure",
        ],
    },
    {
        id: "exp3",
        title: "Campus Expert",
        company: "GitHub",
        period: "May 2025 - Present",
        location: "Orlando, FL",
        description:
            "As a GitHub for the University of Central Florida, I will be interfacing with the GitHub education team to help bring software development resources to my local community, Knight Hacks. I am super excited to help others pave their paths and find their voices in tech.",
        responsibilities: [
            "Serve as an advocate for technologists and developers at the University of Central Florida.",
            "Plan events on-campus to help make software development accessible to the early-technologist community.",
            "Interface with GitHub Education as a Campus Expert to help bring resources and information to my local campus community.",
        ],
        achievements: [],
        images: [
            {
                src: "/features/ghce.jpg",
                title: "GitHub Campus Expert",
            },
        ],
        companyLogo: "/experience/github-logo.png",
        colors: {
            cardColor: "#0d1117",
            accent: "#d71e3c",
            textColor: "#ffffff",
        },
        links: [
            {
                label: "GitHub Campus Experts",
                url: "https://githubcampus.expert/experts",
                icon: "external",
            },
            {
                label: "Dylan Vidal - Campus Expert",
                url: "https://githubcampus.expert/DVidal1205/",
                icon: "external",
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/posts/dylanvidal1205_im-happy-to-share-that-im-now-officially-activity-7331789215522770944-rXHE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk",
                icon: "external",
            },
        ],
        skills: [
            "Community Building",
            "Event Planning",
            "GitHub",
            "Education",
            "Public Speaking",
            "Networking",
            "Student Advocacy",
        ],
    },
    {
        id: "exp4",
        title: "Software Engineer Intern",
        company: "Pheratech Systems",
        period: "December 2024 - April 2025",
        location: "Orlando, FL",
        description:
            "Researched Embodied General Intelligence and Sociobehavioral Robots for crisis and natural disaster search and rescue. Worked on computer vision and inventory management systems.",
        responsibilities: [
            "Researched Embodied General Intelligence and Sociobehavioral Robots for crisis and natural disaster search and rescue.",
            "Rearchitected public facing company website, increasing SEO visibility by **10x**.",
            "Developed an internal inventory management system, reducing unnecessary wasteful restock purchases by **40%**.",
            "Trained custom **YOLOv8** object detection models with a resulting **97%** accuracy in recognizing target objects.",
            "Aided in securing pre-seed funding by contributing to multiple high-impact technical projects across the company.",
        ],
        achievements: [],
        images: [
            {
                src: "/experience/pheratech.gif",
                title: "Pheratech Systems",
            },
        ],
        companyLogo: "/experience/pheratech-logo.png",
        colors: {
            cardColor: "#ffffff",
            accent: "#be3626",
            textColor: "#000000",
        },
        links: [
            {
                label: "Pheratech Systems",
                url: "https://pheratech.com",
                icon: "external",
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/posts/dylanvidal1205_im-happy-to-share-that-ive-joined-the-team-activity-7284032937920987137-Fw5y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk",
                icon: "external",
            },
        ],
        skills: [
            "Python",
            "Computer Vision",
            "YOLOv8",
            "Machine Learning",
            "Robotics",
            "AI Research",
            "Inventory Management",
            "Embedded Systems",
        ],
    },

    {
        id: "exp5",
        title: "Founding Engineer",
        company: "DormDevs LLC.",
        period: "April 2024 - January 2025",
        location: "Orlando, FL",
        description:
            "As a co-founder of DormDevs, I strive to create high-quality website solutions for businesses packaged with analytics and SEO optimization. Furthermore, we serve as a platform for aspiring student developers to gain real-world experience in web development through shadowing and coop opportunities",
        responsibilities: [
            "Empowered businesses with powerful insights and uplifted students with contracted work opportunities.",
            "Developed a business facing dashboard with real time analytics, billing, and a ticketing system for routine maintenance.",
            "Hosted and deployed open source analytics, authentication, and database on a Linux VPS.",
            "Managed a team of contracted freelance developers sourced from local colleges and universities.",
            "Partenered with businesses of various sizes throughout Florida to provide web development services.",
        ],
        achievements: [],
        images: [
            {
                src: "/experience/dormdevs.png",
                title: "DormDevs LLC",
            },
        ],
        companyLogo: "/experience/dormdevs-logo.png",
        colors: {
            cardColor: "#0f172a",
            accent: "#8450e0",
            textColor: "#e0f2fe",
        },
        links: [
            {
                label: "DormDevs",
                url: "https://www.dormdevs.com",
                icon: "external",
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/posts/dylanvidal1205_its-official-im-actually-a-co-founder-activity-7221552143789371392-zYJr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk",
                icon: "external",
            },
        ],
        skills: [
            "Web Development",
            "Analytics",
            "SEO",
            "Linux VPS",
            "Team Management",
            "Business Development",
            "Client Relations",
            "Freelance Management",
        ],
    },
    {
        id: "exp6",
        title: "Undergraduate Researcher",
        company: "UCF Computational Bioinformatics Laboratory",
        period: "March 2024 - August 2024",
        location: "Orlando, FL",
        description:
            "Working in the Computational Bioinformatics Laboratory at UCF, my research focuses on the development of algorithms for the analysis of complex biological data with a focus on RNA-sequencing, Alternative Splicing Detection, and gene quantification.",
        responsibilities: [
            "Reduced the runtime of the AS-Quant and APA-Scan laboratory pipelines by **75%** by leveraging concurrency and parallelism in Python",
            "Assisted in data collection, sanitization, and transformation using numpy and pandas.",
            "Researched Machine Learning solutions for cancer detection with processed RNA-Seq data.",
        ],
        achievements: [],
        images: [
            {
                src: "/experience/ucfcs.png",
                title: "UCF Bioinformatics Lab",
            },
        ],
        companyLogo: "/experience/ucfcs-logo.png",
        colors: {
            cardColor: "#2d6760",
            accent: "#70b9b0",
            textColor: "#f2f9f8",
        },
        links: [
            {
                label: "CompBio Lab Repository",
                url: "https://github.com/compbiolabucf",
                icon: "github",
            },
            {
                label: "UCF Computational Bioinformatics Lab",
                url: "http://genome.ucf.edu/cbb/new_look/pages/software.php",
                icon: "external",
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/posts/dylanvidal1205_im-happy-to-share-that-ive-started-a-new-activity-7217621082973839360-gD8s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk",
                icon: "external",
            },
        ],
        skills: [
            "Python",
            "Bioinformatics",
            "RNA-Sequencing",
            "Machine Learning",
            "Data Analysis",
            "Numpy",
            "Pandas",
            "Research",
        ],
    },
    {
        id: "exp7",
        title: "Honors Team Leader",
        company: "UCF Burnett Honors College",
        period: "July 2024 - December 2024",
        location: "Orlando, FL",
        description:
            "Honors Symposium is a core component of the Honors Curriculum at UCF, where incoming students learn what it means to be apart of the Honors community. I served as a mentor and instructor to 16 students, helping them navigate their first year at UCF, and created an environment where they could feel welcome and make friends.",
        responsibilities: [
            "Led a **15** student breakout room during the Honors Symposium, facilitating discussions and answering questions.",
            "Planned monthly social events for all Symposium students to help them make friends and feel welcome at UCF.",
            "Performed administrative tasks for the breakout room like creating and grading assignments",
        ],
        achievements: [],
        images: [
            {
                src: "/experience/team-leader.png",
                title: "2025 Team Leaders",
            },
        ],
        companyLogo: "/experience/honors-logo.png",
        colors: {
            cardColor: "#2e2712",
            accent: "#ffc904",
            textColor: "#ffffff",
        },
        links: [
            {
                label: "Honors Symposium Team Leader Program",
                url: "https://honors.ucf.edu/university-honors/honors-symposium/team-leader-program/#about-tlp",
                icon: "external",
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/posts/dylanvidal1205_im-happy-to-share-that-im-starting-a-new-activity-7230645805643112448-tsQP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk",
                icon: "external",
            },
        ],
        skills: [
            "Leadership",
            "Mentorship",
            "Event Planning",
            "Student Development",
            "Administration",
            "Public Speaking",
            "Community Building",
        ],
    },
    {
        id: "exp8",
        title: "Honors Orientation Ambassador",
        company: "UCF Burnett Honors College",
        period: "May 2024 - July 2024",
        location: "Orlando, FL",
        description:
            "As an Honors Orientation Ambassador, I was responsible for advising incoming Honors Computer Science students during registration. Meeting with my students over the course of a month, I gave professional assistance with registering for classes, and provided guidance on how to navigate computer science at UCF.",
        responsibilities: [
            "Served as an academic advisor of **20** Computer Science students for course registration at UCF.",
            "Worked our in-person orientation sessions, where students were introduced to the Honors College.",
            "Provided a friendly face and positive attitude to help incoming students feel welcome at the Burnett Honors College.",
        ],
        achievements: [],
        images: [
            {
                src: "/experience/orientation.png",
                title: "UCF Orientation",
            },
        ],
        companyLogo: "/experience/honors-logo.png",
        colors: {
            cardColor: "#2e2712",
            accent: "#ffc904",
            textColor: "#ffffff",
        },
        links: [
            {
                label: "Honors Orientation Ambassadors",
                url: "https://honors.ucf.edu/university-honors/orientation/",
                icon: "external",
            },
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/posts/dylanvidal1205_over-the-past-two-months-i-have-been-able-activity-7217616222098522112-f6yw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-LJhgBdttWmlGndCirvHh-7IA8zh0z8Sk",
                icon: "external",
            },
        ],
        skills: [
            "Academic Advising",
            "Student Support",
            "Course Registration",
            "Orientation",
            "Computer Science",
            "Communication",
            "Mentorship",
        ],
    },
];
