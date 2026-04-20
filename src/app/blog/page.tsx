import { Separator } from "@/components/ui/separator";
import { getAllBlogPostMeta } from "@/lib/blog";
import { Metadata } from "next";
import BlogList from "./_components/blog-list";

const pageTitle = "Blog | Dylan Vidal";
const pageDescription =
    "Essays, playbooks, and notes on building software, breaking into tech, Hackathons, and everything in between.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "https://dvidal.dev/blog",
        type: "website",
        images: [
            {
                url: "/banner.png",
                alt: pageTitle,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: ["/banner.png"],
    },
};

export default function BlogIndexPage() {
    const posts = getAllBlogPostMeta();

    return (
        <div className="min-h-screen bg-background pt-20 md:pt-24 pb-12 md:pb-20">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-bold gradient-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent mb-2 animate-fade-up delay-100">
                        Blog
                    </h1>
                    <p className="px-2 text-foreground text-sm md:text-base max-w-4xl mx-auto animate-fade-up delay-300">
                        Long-form thinking on software, leadership, and the
                        weird paths that got me here. A mix of essays,
                        playbooks, and half-finished thoughts I finally got
                        around to writing down.
                    </p>
                </div>

                <div className="animate-fade-up delay-400">
                    <Separator className="bg-white/[0.08]" />
                </div>

                <div className="mt-8 animate-fade-up delay-500">
                    {posts.length > 0 ? (
                        <BlogList posts={posts} />
                    ) : (
                        <div className="py-16 text-center">
                            <p className="text-foreground/60 text-sm">
                                No posts yet. Check back soon.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
