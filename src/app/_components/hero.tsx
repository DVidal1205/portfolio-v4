"use client";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
    const [showCallToAction, setShowCallToAction] = useState(true);
    const heroRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowCallToAction(false);
            } else {
                setShowCallToAction(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            // Initial hero entrance animation
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Profile image animation with floating effect
            tl.fromTo(
                imageRef.current,
                {
                    y: 100,
                    opacity: 0,
                    scale: 0.8,
                    rotation: -5,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 1.2,
                }
            );

            // Add floating animation to image
            gsap.to(imageRef.current, {
                y: -10,
                duration: 2,
                ease: "power2.inOut",
                yoyo: true,
                repeat: -1,
                delay: 1.2,
            });

            // Text animations with staggered reveal
            const h1Element = textRef.current?.querySelector("h1");
            if (h1Element) {
                tl.fromTo(
                    h1Element,
                    {
                        y: 50,
                        opacity: 0,
                        skewY: 5,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        skewY: 0,
                        duration: 0.8,
                    },
                    "-=0.5"
                );
            }

            const pElements = textRef.current?.querySelectorAll("p");
            if (pElements && pElements.length > 0) {
                tl.fromTo(
                    pElements,
                    {
                        y: 30,
                        opacity: 0,
                        scale: 0.95,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.2,
                    },
                    "-=0.3"
                );
            }

            // Gradient text animation
            const gradientElement =
                textRef.current?.querySelector(".gradient-text");
            if (gradientElement) {
                gsap.fromTo(
                    gradientElement,
                    {
                        backgroundPosition: "200% 50%",
                    },
                    {
                        backgroundPosition: "-200% 50%",
                        duration: 3,
                        ease: "power2.inOut",
                        repeat: -1,
                        yoyo: true,
                        delay: 2,
                    }
                );
            }

            // Scroll-triggered animations
            gsap.fromTo(
                heroRef.current,
                {
                    scale: 1,
                },
                {
                    scale: 0.95,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <BackgroundGradientAnimation size={"70%"} className="z-[200]">
            <div
                ref={heroRef}
                className="absolute inset-0 flex items-center justify-center z-[210] px-4"
            >
                <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 text-center">
                    {/* Profile Image */}
                    <div ref={imageRef} className="relative">
                        <Image
                            src="/headshot.png"
                            alt="Dylan Vidal"
                            width={500}
                            height={500}
                            className="rounded-full border-4 border-primary-800 shadow-2xl object-cover aspect-square w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px]"
                        />
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/20 to-secondary-400/20 blur-xl scale-110 opacity-0 animate-pulse" />
                    </div>

                    {/* Hero Text */}
                    <div
                        ref={textRef}
                        className="space-y-3 md:space-y-4 max-w-4xl"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                            Hey there, I&apos;m{" "}
                            <span className="gradient-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent bg-[length:200%_100%]">
                                Dylan!
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-foreground/80 font-medium">
                            Software Engineer, Computer Science Student, and
                            Leader
                        </p>
                        <p className="text-base sm:text-lg text-foreground/60 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                            Passionate about the pursuit of knowledge and
                            helping others break into the tech industry.
                        </p>
                    </div>
                </div>
            </div>

            {/* Pulsing Glow Effect at Bottom */}
            <AnimatePresence>
                {showCallToAction && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-500/20 via-primary-400/10 to-transparent animate-pulse z-[220]"
                    />
                )}
            </AnimatePresence>

            {/* Call to Action - Care to learn more? */}
            <AnimatePresence>
                {showCallToAction && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 3,
                                duration: 0.8,
                                ease: "easeOut",
                            },
                        }}
                        exit={{
                            opacity: 0,
                            y: 50,
                            scale: 0.8,
                            transition: {
                                duration: 0.5,
                                ease: "easeIn",
                            },
                        }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[230] flex flex-col items-center space-y-2"
                    >
                        <motion.p
                            className="text-foreground/80 text-sm md:text-base font-medium"
                            animate={{
                                y: [0, -8, 0],
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        >
                            Care to learn more?
                        </motion.p>
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.2,
                                },
                            }}
                        >
                            <IconChevronDown className="text-primary-400 w-6 h-6 md:w-8 md:h-8" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </BackgroundGradientAnimation>
    );
}
