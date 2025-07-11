import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FeatureItem } from "@/constants/features";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeatureCard({
    item,
    index = 0,
}: {
    item: FeatureItem;
    index?: number;
}) {
    return (
        <Card
            className={cn(
                "w-full max-w-5xl mx-auto overflow-hidden transition-all duration-500 border border-primary-200 bg-bg-purple-50 dark:bg-bg-purple-900",
                "hover:shadow-[0_10px_30px_rgba(122,92,255,0.25)] hover:border-primary-300 hover:cursor-pointer",
                "animate-fade-up animate-duration-[800ms] animate-delay-[100ms]",
                "group relative"
            )}
            style={{
                animationDelay: `${200 * index + 400}ms`,
                transformOrigin: "center",
            }}
        >
            {/* Invisible overlay link for entire card clickability */}
            <Link
                href={item.links[0]?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${item.name}`}
            />

            <div className="flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-2/5 p-4 lg:p-6">
                    <div className="relative h-[225px] sm:h-[275px] lg:h-[300px] overflow-hidden rounded-xl shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-bg-purple-900/30 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500 rounded-xl" />
                        <div className="absolute inset-0 bg-primary-500/10 mix-blend-overlay z-10 rounded-xl" />

                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110 rounded-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNWExOWU1IiBvcGFjaXR5PSIwLjIiLz48L3N2Zz4="
                            priority={index < 2}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-bg-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-xl" />

                        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-bg-purple-900/90 to-transparent z-20 rounded-b-xl" />
                    </div>
                </div>

                <div className="flex-1 p-2">
                    <CardHeader className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                            <CardTitle className="text-left text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent transition-all duration-500 group-hover:from-primary-500 group-hover:to-secondary-500">
                                {item.name}
                                {item.infoDialog && (
                                    <span className="inline-block ml-2 align-middle relative z-20">
                                        {item.infoDialog}
                                    </span>
                                )}
                            </CardTitle>
                            <Badge
                                variant="outline"
                                className="text-xs font-medium bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 self-start transition-colors duration-300 px-3 py-1 rounded-full"
                            >
                                {item.date}
                            </Badge>
                        </div>
                        <CardDescription className="mt-3 text-left text-sm sm:text-base text-bg-purple-700 dark:text-bg-purple-300">
                            {item.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                        <Separator className="my-4 bg-gradient-to-r from-transparent via-primary-200 to-transparent dark:via-primary-800" />
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {item.links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/60 dark:text-primary-300 transition-all duration-300 hover:bg-primary-200 dark:hover:bg-primary-800 hover:shadow-[0_2px_8px_rgba(122,92,255,0.25)] hover:-translate-y-0.5 relative z-20"
                                >
                                    {link.label}
                                    <ExternalLink className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:rotate-12" />
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </div>
            </div>
        </Card>
    );
}
