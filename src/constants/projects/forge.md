Forge is the **core infrastructure monorepo** for Knight Hacks, and has a LOT of different projects and moving pieces. With every new elected executive team, Knight Hacks would often discard last years codebases and start again. We built Forge to centralize all of these lose projects to help with onboarding, maintenance, and data retention. We are also proud to state that Forge is almost **entirely SaaS free**, instead opting into **Open Source Services**. We focused on owning all of our core infrastructure to make hand-off easy - no more managing 10 different SaaS logins and services. Here are some of the cool projects I've helped build on Forge:

**Blade** - the centralized monolith application for all Knight Hacks projects. Before blade, we had a different database for each year, separate auth providers, and separate deployment systems. With Blade, we moved all **functional** logic for any web app into a single application to standardize data storage and authentication.

**Knight Hacks VIII** - the frontend marketing website for the Knight Hacks VIII 2025 Hackathon. This was a super fun UI/UX focused project, doing our best to make a thrilling impression that will get hackers excited to register. All backend logic was built directly into blade, and this was our first experiment of the multi-tenant architecture (it was a success).

**Guild** - sourcing user profiles from Blade, the Guild Collective is a webring project that allows users to connect with other users in the Knight Hacks community. This project was also built to help connect external users, like alumni, recruiters, or sponsors with current members.

**Club Site** - the frontend marketing website for the Knight Hacks organization. This is our top search result for the Knight Hacks organization, and is the first thing people see when they search for Knight Hacks. We use this site to showcase our programs, passion, and mission - bridging the gap between the classroom and the tech industry.

**T.K Discord Bot** - themed after our AI-robot mascot, T.K, this Discord bot helps with user engagement by sending out frequent reminders about our upcoming events. It also can be chatted with via commands, and sends daily memes and animal pictures to start some friendly conversation.

Highlights:
• **Monorepo architecture** for unified development workflow
• **Core organization tools** and management systems
• **Coolify deployment** for streamlined infrastructure management
• **Type-safe APIs** with tRPC for reliable data communication
• **Self-rolled CI/CD with Coolify** for streamlined deployment
• **Self-rolled Authentication** with NextAuth.js
• **Self-rolled S3 Storage** with Minio

Contributors: [Forge Repository](https://github.com/KnightHacks/forge/graphs/contributors)
