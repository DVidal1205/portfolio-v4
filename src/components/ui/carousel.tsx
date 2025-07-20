"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";

interface SlideData {
    title: string;
    src: string;
    infoDialog?: React.ReactNode;
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

    const { src, title, infoDialog } = slide;

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
                className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden transition-all duration-150 ease-out"
                style={{
                    transform:
                        current === index
                            ? `translate3d(${xRef.current / 30}px, ${
                                  yRef.current / 30
                              }px, 0)`
                            : "none",
                }}
            >
                {infoDialog && current === index && (
                    <div className="absolute top-2 right-4 z-20">
                        {infoDialog}
                    </div>
                )}
                <Image
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105"
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

                {/* Title positioned at bottom right */}
                {current === index && (
                    <div className="absolute bottom-2 right-1 p-2 bg-black/50 rounded backdrop-blur-sm">
                        <h2 className="text-xs md:text-sm font-semibold text-white drop-shadow-lg">
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
    accentColor,
}: CarouselControlProps & { accentColor?: string }) => {
    return (
        <button
            className={`w-8 h-8 flex items-center mx-1 justify-center border rounded-full focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
                type === "previous" ? "rotate-180" : ""
            }`}
            style={{
                backgroundColor: accentColor
                    ? `${accentColor}20`
                    : "rgba(255, 255, 255, 0.2)",
                borderColor: accentColor
                    ? `${accentColor}40`
                    : "rgba(255, 255, 255, 0.3)",
                color: accentColor ? accentColor : "white",
            }}
            title={title}
            onClick={handleClick}
        >
            <IconArrowNarrowRight className="w-4 h-4" />
        </button>
    );
};

interface CarouselProps {
    slides: SlideData[];
    current?: number;
    setCurrent?: (idx: number) => void;
    accentColor?: string;
}

export default function Carousel({
    slides,
    current: controlledCurrent,
    setCurrent: controlledSetCurrent,
    accentColor,
}: CarouselProps) {
    const [uncontrolledCurrent, setUncontrolledCurrent] = useState(0);
    const isControlled =
        controlledCurrent !== undefined && controlledSetCurrent !== undefined;
    const current = isControlled ? controlledCurrent : uncontrolledCurrent;
    const setCurrent = isControlled
        ? controlledSetCurrent
        : setUncontrolledCurrent;

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
        <div className="relative w-full h-full rounded-xl">
            <div
                className="relative w-full h-full flex flex-col items-center justify-center"
                aria-labelledby={`carousel-heading-${id}`}
            >
                <div className="relative w-full aspect-video overflow-hidden mb-6">
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

                <div className="flex justify-center items-center h-8 relative z-30 mt-1">
                    {slides.length > 1 && (
                        <>
                            <CarouselControl
                                type="previous"
                                title="Go to previous slide"
                                handleClick={handlePreviousClick}
                                accentColor={accentColor}
                            />
                            <span
                                className="mx-2 text-sm select-none"
                                style={{ color: accentColor || "white" }}
                            >
                                {current + 1} / {slides.length}
                            </span>
                            <CarouselControl
                                type="next"
                                title="Go to next slide"
                                handleClick={handleNextClick}
                                accentColor={accentColor}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
