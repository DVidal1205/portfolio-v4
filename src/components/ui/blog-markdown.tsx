"use client";

import { resolveBlogImage } from "@/lib/blog-shared";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface BlogMarkdownProps {
    slug: string;
    content: string;
}

export default function BlogMarkdown({ slug, content }: BlogMarkdownProps) {
    return (
        <div className="blog-prose">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSlug]}
                components={{
                    img: ({ src, alt }) => {
                        if (typeof src !== "string") return null;
                        const resolved = resolveBlogImage(slug, src);
                        const isExternal = /^https?:\/\//i.test(resolved);
                        if (isExternal) {
                            return (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={resolved}
                                    alt={alt ?? ""}
                                    loading="lazy"
                                />
                            );
                        }
                        return (
                            <Image
                                src={resolved}
                                alt={alt ?? ""}
                                width={1600}
                                height={900}
                                className="w-full h-auto"
                                sizes="(max-width: 768px) 100vw, 768px"
                            />
                        );
                    },
                    a: ({ href, children, ...rest }) => {
                        const url = typeof href === "string" ? href : "#";
                        const external = /^https?:\/\//i.test(url);
                        if (external) {
                            return (
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    {...rest}
                                >
                                    {children}
                                </a>
                            );
                        }
                        return (
                            <Link href={url} {...rest}>
                                {children}
                            </Link>
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
