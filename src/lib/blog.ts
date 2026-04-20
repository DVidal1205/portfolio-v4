import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import type { BlogPost, BlogPostMeta } from "./blog-shared";

export type { BlogPost, BlogPostMeta } from "./blog-shared";
export { formatBlogDate, resolveBlogImage } from "./blog-shared";

const BLOG_DIR = path.join(process.cwd(), "src", "blog");

function ensureStringArray(value: unknown): string[] {
    if (Array.isArray(value)) {
        return value
            .filter((item) => typeof item === "string")
            .map((item) => (item as string).trim())
            .filter(Boolean);
    }
    if (typeof value === "string") {
        return value
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);
    }
    return [];
}

function formatDate(value: unknown): string {
    if (value instanceof Date) {
        return value.toISOString().slice(0, 10);
    }
    if (typeof value === "string") {
        return value.slice(0, 10);
    }
    return new Date().toISOString().slice(0, 10);
}

export function getAllBlogSlugs(): string[] {
    if (!fs.existsSync(BLOG_DIR)) return [];
    return fs
        .readdirSync(BLOG_DIR)
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(/\.md$/, ""));
}

export function getBlogPost(slug: string): BlogPost | null {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
        slug,
        title: typeof data.title === "string" ? data.title : slug,
        description:
            typeof data.description === "string" ? data.description : "",
        date: formatDate(data.date),
        tags: ensureStringArray(data.tags),
        cover: typeof data.cover === "string" ? data.cover : undefined,
        readingTime: stats.text,
        readingMinutes: Math.max(1, Math.round(stats.minutes)),
        content,
    };
}

export function getAllBlogPosts(): BlogPost[] {
    return getAllBlogSlugs()
        .map((slug) => getBlogPost(slug))
        .filter((post): post is BlogPost => post !== null)
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllBlogPostMeta(): BlogPostMeta[] {
    return getAllBlogPosts().map(({ content: _content, ...meta }) => {
        void _content;
        return meta;
    });
}
