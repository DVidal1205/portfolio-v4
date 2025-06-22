"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

interface SlideData {
    title: string;
    src: string;
}

interface SlideProps {
    slide: SlideData;
    index: number;
    current: number;
    handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
    const slideRef = useRef<HTMLLIElement>(null);

    const xRef = useRef(0);
    const yRef = useRef(0);
    const frameRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return;

            const x = xRef.current;
            const y = yRef.current;

            slideRef.current.style.setProperty("--x", `${x}px`);
            slideRef.current.style.setProperty("--y", `${y}px`);

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const handleMouseMove = (event: React.MouseEvent) => {
        const el = slideRef.current;
        if (!el) return;

        const r = el.getBoundingClientRect();
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
    };

    const handleMouseLeave = () => {
        xRef.current = 0;
        yRef.current = 0;
    };

    const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.style.opacity = "1";
    };

    const { src, title } = slide;

    return (
        <li
            ref={slideRef}
            className="flex flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-full aspect-video flex-shrink-0 z-10"
            onClick={() => handleSlideClick(index)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform:
                    current !== index
                        ? "scale(0.95) rotateX(8deg)"
                        : "scale(1) rotateX(0deg)",
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                transformOrigin: "bottom",
            }}
        >
            <div
                className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-lg overflow-hidden transition-all duration-150 ease-out"
                style={{
                    transform:
                        current === index
                            ? `translate3d(${xRef.current / 30}px, ${
                                  yRef.current / 30
                              }px, 0)`
                            : "none",
                }}
            >
                <Image
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out"
                    style={{
                        opacity: current === index ? 1 : 0.7,
                    }}
                    alt={title}
                    src={src}
                    onLoad={imageLoaded}
                    loading="eager"
                    decoding="sync"
                    width={1000}
                    height={1000}
                />
                {current === index && (
                    <div className="absolute inset-0 bg-black/20 transition-all duration-1000" />
                )}

                {/* Title positioned at bottom right */}
                {current === index && (
                    <div className="absolute bottom-2 md:bottom-12 right-1 p-2 bg-black/70 rounded backdrop-blur-sm">
                        <h2 className="text-xs md:text-sm font-semibold text-white">
                            {title}
                        </h2>
                    </div>
                )}
            </div>
        </li>
    );
};

interface CarouselControlProps {
    type: string;
    title: string;
    handleClick: () => void;
}

const CarouselControl = ({
    type,
    title,
    handleClick,
}: CarouselControlProps) => {
    return (
        <button
            className={`w-8 h-8 flex items-center mx-1 justify-center bg-white/20 hover:bg-white/30 border border-white/30 rounded-full focus:border-white/50 focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
                type === "previous" ? "rotate-180" : ""
            }`}
            title={title}
            onClick={handleClick}
        >
            <IconArrowNarrowRight className="text-white w-4 h-4" />
        </button>
    );
};

interface CarouselProps {
    slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
    const [current, setCurrent] = useState(0);

    const handlePreviousClick = () => {
        const previous = current - 1;
        setCurrent(previous < 0 ? slides.length - 1 : previous);
    };

    const handleNextClick = () => {
        const next = current + 1;
        setCurrent(next === slides.length ? 0 : next);
    };

    const handleSlideClick = (index: number) => {
        if (current !== index) {
            setCurrent(index);
        }
    };

    const id = useId();
    const slideWidth = 100 / slides.length;

    return (
        <div className="relative overflow-hidden w-full h-full">
            <div
                className="relative w-full h-full flex flex-col items-center justify-center"
                aria-labelledby={`carousel-heading-${id}`}
            >
                <div className="relative w-full aspect-video mb-4 overflow-hidden">
                    <ul
                        className="absolute flex transition-transform duration-1000 ease-in-out h-full"
                        style={{
                            transform: `translateX(-${current * slideWidth}%)`,
                            width: `${slides.length * 100}%`,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                style={{ width: `${slideWidth}%` }}
                                className="flex-shrink-0"
                            >
                                <Slide
                                    slide={slide}
                                    index={index}
                                    current={current}
                                    handleSlideClick={handleSlideClick}
                                />
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-center items-center">
                    <CarouselControl
                        type="previous"
                        title="Go to previous slide"
                        handleClick={handlePreviousClick}
                    />

                    <CarouselControl
                        type="next"
                        title="Go to next slide"
                        handleClick={handleNextClick}
                    />
                </div>
            </div>
        </div>
    );
}
