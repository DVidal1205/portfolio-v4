import BlogMarkdown from "@/components/ui/blog-markdown";
import { Separator } from "@/components/ui/separator";
import TransitionLink from "@/components/ui/transition-link";
import GithubSlugger from "github-slugger";
import {
    formatBlogDate,
    getAllBlogSlugs,
    getBlogPost,
    resolveBlogImage,
} from "@/lib/blog";
import { IconArrowLeft } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import TocDropdown, { type TocItem } from "../_components/toc-dropdown";

interface Props {
    params: Promise<{ slug: string }>;
}

function cleanupHeadingText(text: string): string {
    return text
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/[`*_~]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function buildToc(content: string): TocItem[] {
    const lines = content.split("\n");
    const toc: TocItem[] = [];
    const slugger = new GithubSlugger();
    let inCodeFence = false;

    for (const line of lines) {
        if (/^(```|~~~)/.test(line.trim())) {
            inCodeFence = !inCodeFence;
            continue;
        }
        if (inCodeFence) continue;

        const match = line.match(/^(#{1,6})\s+(.+?)\s*$/);
        if (!match) continue;

        const level = match[1].length;
        const text = cleanupHeadingText(match[2].replace(/\s+#+\s*$/, ""));
        if (!text) continue;

        toc.push({
            id: slugger.slug(text),
            text,
            level,
        });
    }

    return toc;
}

export function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return { title: "Not Found | Dylan Vidal" };

    const title = `${post.title} | Dylan Vidal`;
    const image = post.cover
        ? resolveBlogImage(slug, post.cover)
        : "/banner.png";

    return {
        title,
        description: post.description,
        openGraph: {
            title,
            description: post.description,
            url: `https://dvidal.dev/blog/${slug}`,
            type: "article",
            publishedTime: post.date,
            tags: post.tags,
            images: [{ url: image, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: post.description,
            images: [image],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) notFound();

    const coverSrc = post.cover ? resolveBlogImage(slug, post.cover) : null;
    const tocItems = buildToc(post.content);

    return (
        <article className="relative min-h-screen bg-background pt-28 md:pt-32 pb-24 md:pb-36 overflow-hidden">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-24 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(69,46,185,0.32),transparent_60%)]"
            />

            <div className="relative max-w-3xl mx-auto px-5 md:px-8">
                <div className="animate-fade-up delay-100">
                    <TransitionLink
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-secondary-300 transition-colors duration-200"
                    >
                        <IconArrowLeft size={16} />
                        All posts
                    </TransitionLink>
                </div>

                <header className="mt-8 md:mt-10 animate-fade-up delay-200">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground/50">
                            <time dateTime={post.date}>
                                {formatBlogDate(post.date)}
                            </time>
                            <span
                                aria-hidden
                                className="h-1 w-1 rounded-full bg-foreground/20"
                            />
                            <span>{post.readingMinutes} min read</span>
                        </div>
                        <TocDropdown items={tocItems} />
                    </div>

                    <h1
                        className="mt-6 text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] leading-[1.05] tracking-[-0.02em] text-foreground"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        {post.title}
                    </h1>

                    {post.description && (
                        <p className="mt-6 text-base md:text-lg text-foreground/60 leading-relaxed italic">
                            {post.description}
                        </p>
                    )}

                    {post.tags.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs px-2 py-0.5 rounded-md border border-white/10 text-foreground/60 bg-white/[0.02]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                </header>

                <div className="mt-10 md:mt-12 animate-fade-up delay-300">
                    <Separator className="bg-white/[0.08]" />
                </div>

                {coverSrc && (
                    <div className="mt-10 animate-fade-up delay-400 rounded-xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-40px_rgba(69,46,185,0.6)]">
                        <Image
                            src={coverSrc}
                            alt={post.title}
                            width={1600}
                            height={900}
                            priority
                            className="w-full h-auto"
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>
                )}

                <div className="mt-10 md:mt-14 animate-fade-up delay-500">
                    <BlogMarkdown slug={slug} content={post.content} />
                </div>

                <div className="mt-16 md:mt-24 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <p className="text-sm text-foreground/50 italic">
                        — Dylan Vidal
                    </p>
                    <TransitionLink
                        href="/blog"
                        className="group inline-flex items-center gap-2 text-sm text-secondary-300 hover:text-foreground transition-colors duration-200"
                    >
                        <IconArrowLeft
                            size={16}
                            className="transition-transform duration-200 group-hover:-translate-x-1"
                        />
                        Back to all posts
                    </TransitionLink>
                </div>
            </div>
        </article>
    );
}
