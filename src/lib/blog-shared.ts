export interface BlogPostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    cover?: string;
    readingTime: string;
    readingMinutes: number;
}

export interface BlogPost extends BlogPostMeta {
    content: string;
}

export function resolveBlogImage(slug: string, src: string): string {
    if (/^https?:\/\//i.test(src) || src.startsWith("/")) return src;
    const cleaned = src.replace(/^\.\//, "");
    return `/blog/${slug}/${cleaned}`;
}

export function formatBlogDate(iso: string): string {
    const [y, m, d] = iso.split("-").map(Number);
    if (!y || !m || !d) return iso;
    const date = new Date(Date.UTC(y, m - 1, d));
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}
