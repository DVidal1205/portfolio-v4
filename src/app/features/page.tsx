import FeatureCard from "@/components/ui/feature-card";
import { LinkPreview } from "@/components/ui/link-preview";
import WorkshopCard from "@/components/ui/workshop-card";
import { featuredItems } from "@/constants/features";
import { workshopItems } from "@/constants/workshops";

export default function FeaturesPage() {
    return (
        <>
            <div className="min-h-screen pb-4 md:pb-10 pt-24 md:pt-36">
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-bold gradient-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent mb-2 animate-fade-up delay-100">
                        As Seen On...
                    </h1>
                    <p className=" px-2 text-foreground text-sm md:text-base max-w-4xl mx-auto animate-fade-up delay-300">
                        During my time as a software engineer and leader,
                        I&apos;ve had the opportunity to be recognized in a
                        variety of awesome different ways. Feel free to check
                        out a few of my features and publications!
                    </p>
                    <div className="mt-8 px-4 flex flex-col justify-center gap-8 flex-wrap text-base md:text-lg">
                        {featuredItems.map((item, index) => (
                            <FeatureCard
                                key={item.name}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="min-h-screen pb-4 md:pb-10 pt-8 md:pt-16">
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-bold gradient-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent mb-2 animate-fade-up delay-100">
                        Workshops (WIP)
                    </h1>
                    <div className=" px-2 text-foreground text-sm md:text-base max-w-4xl mx-auto animate-fade-up delay-300">
                        My goal is to help aspiring technologists break into the
                        industry and feel confident in their abilities. To help,
                        I&apos;ve run a series of technical workshops for Knight
                        Hacks, all hosted on our{" "}
                        <LinkPreview
                            url="https://www.youtube.com/@KnightHacks"
                            className="text-primary-400 underline hover:text-primary-500"
                        >
                            YouTube
                        </LinkPreview>{" "}
                        channel.
                    </div>
                    <div className="mt-8 px-4 flex flex-col justify-center gap-8 flex-wrap text-base md:text-lg">
                        {workshopItems.map((item, index) => (
                            <WorkshopCard
                                key={item.name}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
