import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import pool from "/src/assets/images/facility/pool.jpg";
import food from "/src/assets/images/facility/food.jpg";
import spa from "/src/assets/images/facility/spa.jpg";
import gym from "/src/assets/images/facility/gym.jpg";
import theatre from "/src/assets/images/facility/theatre.jpg";
import gymSvg from "/src/assets/images/facility/svgs/gym.svg";
import foodSvg from "/src/assets/images/facility/svgs/food.svg";
import spaSvg from "/src/assets/images/facility/svgs/spa.svg";
import poolSvg from "/src/assets/images/facility/svgs/pool.svg";
import theatreSvg from "/src/assets/images/facility/svgs/theatre.svg";

const Facility = ({ id, name, imgSvg, imgNo, isDark, matches }) => {
    const element = useRef(null);
    const card = useRef(null);
    const cardImg = useRef(null);
    const cardText = useRef(null);
    const icon = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        if (matches) {
            gsap.to(element.current, {
                opacity: 0,
                rotateX: "90deg",
                scrollTrigger: {
                    trigger: element.current,
                    start: "top 10%",
                    toggleActions: "play none none reverse",
                },
            });
        } else {
            gsap.to(cardText.current, {
                borderRadius: "1rem",
                boxShadow: `-5px 5px 0 2px ${!isDark ? "#2B2B28" : "#F1EFE6"}`,
                border: `1px solid ${!isDark ? "#2B2B28" : "#F1EFE6"}`,
                color: "white",
                scrollTrigger: {
                    trigger: card.current,
                    start: `${id == 5 ? "top" : "bottom"} 60%`,
                    toggleActions: "play none none reverse",
                },
            });

            gsap.to(cardImg.current, {
                opacity: 0,
                scrollTrigger: {
                    trigger: card.current,
                    start: `${id == 5 ? "top" : "bottom"} ${id * 5 + 40}%`,
                    toggleActions: "play none none reverse",
                },
            });
        }
    }, [isDark]);

    if (matches) {
        const imgHover = () => {
            icon.current.style.transform = "translateX(-100px)";
        };

        const imgLeave = () => {
            icon.current.style.transform = "translateX(120px)";
        };

        return (
            <div
                ref={element}
                style={{ transform: "perspective(90cm)" }}
                className="relative text-[white] flex h-52 items-center justify-between overflow-hidden"
            >
                <h1
                    style={{
                        filter: `drop-shadow(0 0 40px ${isDark ? "black" : "white"})`,
                    }}
                    className="pointer-events-none z-10 ml-4 -skew-x-12 text-[5rem] font-bold"
                >
                    {name}
                </h1>
                <img
                    alt={`facility icon ${id}`}
                    ref={icon}
                    src={imgSvg}
                    className={` pointer-events-none z-10 h-28 w-28 translate-x-[120px] opacity-100 drop-shadow-[0_0_10px_${isDark ? "black" : "white"}] transition  duration-500 invert`}
                ></img>

                <img
                    alt={`facility ${id}`}
                    src={imgNo}
                    onMouseOver={imgHover}
                    onMouseOut={imgLeave}
                    className=" absolute h-full w-full bg-bottom object-cover opacity-30 transition-all duration-500 hover:opacity-100 dark:opacity-20 dark:hover:opacity-70 "
                ></img>
            </div>
        );
    } else {
        return (
            <div
                ref={card}
                className={`sticky mx-auto h-72 w-[80%]`}
                style={{ top: `calc(2rem + ${id * 5}rem)` }}
            >
                <div
                    ref={cardText}
                    className=" flex h-16 items-center gap-6 rounded-t-2xl px-4 py-2 text-2xl font-bold uppercase"
                >
                    <img
                        alt={`facility icon ${id}`}
                        ref={icon}
                        src={imgSvg}
                        className={`h-10 w-10 dark:invert drop-shadow-[0_0_10px_${isDark ? "black" : "white"}] transition  duration-500 `}
                    ></img>

                    <h1 className="leading-6 text-black dark:text-white">
                        {name}
                    </h1>
                </div>
                <img
                    alt={`facility ${id}`}
                    ref={cardImg}
                    className="h-full w-full rounded-xl object-cover"
                    src={imgNo}
                ></img>
            </div>
        );
    }
};

export default function Offers({ isDark, matches }) {
    const offerText = useRef(null);
    const sect = useRef(null);
    const scBar = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        if (matches) {
            gsap.from(offerText.current, {
                wordSpacing: "1vw",
                letterSpacing: "2vw",
                fontSize: "5vw",
                opacity: 0,
                delay: 0.3,
                duration: 1,
                ease: "circ.out",
                scrollTrigger: {
                    trigger: offerText.current,
                    toggleActions: "play none none reset",
                    start: "top bottom",
                },
            });
        } else {
            gsap.from(offerText.current, {
                wordSpacing: "0",
                letterSpacing: "6px",
                delay: "1",
                opacity: "0",
                duration: 1,
                fontSize: "none",
                scrollTrigger: {
                    trigger: offerText.current,
                    toggleActions: "play none none reset",
                    start: "top bottom",
                },
            });
        }

        gsap.from(scBar.current, {
            scaleX: 0,
            stagger: 0.01,
            scrollTrigger: {
                trigger: sect.current,
                end: "bottom bottom",
                start: "top top",
                scrub: true,
            },
        });
    });

    return (
        <section ref={sect} className="relative w-full">
            <div
                ref={scBar}
                className="sticky top-0 h-1 dark:h-[0.1rem] w-full bg-gradient-to-r from-yellow-200 to-yellow-600"
            ></div>

            <h1
                ref={offerText}
                className="sticky top-8 mx-auto  w-fit overflow-hidden bg-gradient-to-br from-yellow-200 to-yellow-700 bg-clip-text text-center text-[2rem] font-bold  uppercase  text-transparent md:mt-auto"
            >
                What we offer
            </h1>
            <div className="mt-24 grid h-[3000px] md:mt-56 md:h-auto md:gap-10 md:overflow-hidden ">
                <Facility
                    id={1}
                    matches={matches}
                    isDark={isDark}
                    imgSvg={poolSvg}
                    imgNo={pool}
                    name={"swimming pool"}
                />
                <Facility
                    id={2}
                    matches={matches}
                    imgSvg={gymSvg}
                    isDark={isDark}
                    imgNo={gym}
                    name={"gym"}
                />
                <Facility
                    id={3}
                    matches={matches}
                    imgSvg={foodSvg}
                    isDark={isDark}
                    imgNo={food}
                    name={"food & beverages"}
                />
                <Facility
                    id={4}
                    matches={matches}
                    isDark={isDark}
                    imgSvg={spaSvg}
                    imgNo={spa}
                    name={"spa"}
                />
                <Facility
                    id={5}
                    matches={matches}
                    imgSvg={theatreSvg}
                    isDark={isDark}
                    imgNo={theatre}
                    name={"entertainment"}
                />
            </div>
        </section>
    );
}
