"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import * as React from "react";

//mask

//z-
export const MaskContainer = ({
    children,
    revealText,
    size = 0,
    revealSize = 400,
    className,
}: {
    children?: string | React.ReactNode;
    revealText?: string | React.ReactNode;
    size?: number;
    revealSize?: number;
    className?: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState<any>({
        x: null,
        y: null,
    });
    const containerRef = useRef<any>(null);
    const updateMousePosition = (e: any) => {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    useEffect(() => {
        containerRef.current.addEventListener("mousemove", updateMousePosition);
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener(
                    "mousemove",
                    updateMousePosition,
                );
            }
        };
    }, []);
    let maskSize = isHovered ? revealSize : size;

    return (
        <motion.div
            ref={containerRef}
            className={cn("relative h-screen", className)}
            animate={
                {
                    // backgroundColor: isHovered ? "var(--slate-900)" : "",
                }
            }
        >
            <motion.div
                className="bg-grid-white/[0.2] absolute flex h-full w-full items-center justify-center bg-black text-white [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
                animate={{
                    WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
                        mousePosition.y - maskSize / 2
                    }px`,
                    WebkitMaskSize: `${maskSize}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
                // style={{boxShadow: '10px 10px 10px blue'}}
            >
                <div
                    className="absolute z-0 h-full w-full bg-black dark:bg-white "
                    // style={{ boxShadow: "10px 10px 10px 5px blue" }}
                />
                <div
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
                    className="relative z-10 mx-auto   text-center  font-bold "
                >
                    {children}
                </div>
            </motion.div>

            <div className="flex h-full w-full items-center justify-center  text-blue-500">
                {revealText}
            </div>
        </motion.div>
    );
};
