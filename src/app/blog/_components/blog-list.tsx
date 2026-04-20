"use client";

import TransitionLink from "@/components/ui/transition-link";
import { formatBlogDate, type BlogPostMeta } from "@/lib/blog-shared";
import { IconArrowUpRight, IconSearch } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

interface BlogListProps {
    posts: BlogPostMeta[];
}

export default function BlogList({ posts }: BlogListProps) {
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return posts;
        return posts.filter((post) => {
            const haystack = [post.title, post.description, ...post.tags]
                .join(" ")
                .toLowerCase();
            return haystack.includes(q);
        });
    }, [posts, query]);

    return (
        <div className="w-full">
            <label className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 focus-within:border-primary-400/50 transition-colors duration-200">
                <IconSearch
                    size={18}
                    className="text-foreground/40 shrink-0"
                />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search posts..."
                    className="w-full bg-transparent outline-none text-foreground placeholder:text-foreground/40 text-sm"
                    aria-label="Search blog posts"
                />
                <span className="hidden sm:block text-xs text-foreground/40 shrink-0">
                    {filtered.length} / {posts.length}
                </span>
            </label>

            <ul className="mt-8 flex flex-col divide-y divide-white/[0.06] border-y border-white/[0.06]">
                <AnimatePresence initial={false}>
                    {filtered.map((post, index) => (
                        <motion.li
                            key={post.slug}
                            layout
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{
                                duration: 0.3,
                                delay: Math.min(index * 0.04, 0.24),
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <TransitionLink
                                href={`/blog/${post.slug}`}
                                className="group block py-6 md:py-7"
                            >
                                <div className="flex gap-4 md:gap-6 items-start">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground/50 mb-2">
                                            <time dateTime={post.date}>
                                                {formatBlogDate(post.date)}
                                            </time>
                                            <span
                                                aria-hidden
                                                className="h-1 w-1 rounded-full bg-foreground/20"
                                            />
                                            <span>
                                                {post.readingMinutes} min read
                                            </span>
                                        </div>
                                        <h2 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-300 group-hover:via-secondary-300 group-hover:to-primary-300 transition-all duration-300">
                                            {post.title}
                                        </h2>
                                        {post.description && (
                                            <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                                                {post.description}
                                            </p>
                                        )}
                                        {post.tags.length > 0 && (
                                            <div className="mt-3 flex flex-wrap gap-2">
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
                                    </div>

                                    <div
                                        className="shrink-0 mt-1 text-foreground/30 group-hover:text-secondary-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        aria-hidden
                                    >
                                        <IconArrowUpRight size={20} />
                                    </div>
                                </div>
                            </TransitionLink>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>

            {filtered.length === 0 && (
                <div className="py-16 text-center">
                    <p className="text-foreground/60 text-sm">
                        No posts match &ldquo;{query}&rdquo;
                    </p>
                </div>
            )}
        </div>
    );
}
