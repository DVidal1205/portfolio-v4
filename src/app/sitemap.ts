import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://dvidal.dev";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${baseUrl}/experience`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/features`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/skills`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ];
}
