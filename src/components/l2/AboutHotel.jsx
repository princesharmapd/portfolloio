import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import sun from "/sun.svg";
import { MaskContainer } from "/src/libraries/aceternity/components/MaskContainer.tsx";
import { Link } from "react-router-dom";

export default function AboutHotel({ isDark, matches }) {
    const about = useRef(null);
    const about2 = useRef(null);
    const sunSvg = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        if (matches) {
            gsap.from(about.current, {
                y: 200,
                opacity: 0,
                scrollTrigger: {
                    trigger: about.current,
                    start: "-200 90%",
                },
            });

            gsap.from(about2.current, {
                y: 200,
                opacity: 0,
                scrollTrigger: {
                    trigger: about2.current,
                    start: "-200 90%",
                },
            });
        }
        gsap.from(sunSvg.current, {
            opacity: 0,
            duration: 3,
            scrollTrigger: {
                trigger: sunSvg.current,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
        });
    });

    const btn = useRef(null);

    return (
        <section className="relative">
            <div className=" sticky top-0 flex justify-center ">
                {matches && (
                    <MaskContainer
                        revealText={
                            <h1
                                ref={about}
                                className="link pointer-events-none -z-[10] w-2/3 text-center text-[2rem] font-bold text-black dark:text-white"
                            >
                                Welcome to{" "}
                                <span className=" text-yellow-600">
                                    Sunrise
                                </span>
                                , where comfort meets luxury and every stay is a
                                memorable experience. Our rooms are designed to
                                be your home away from home, with modern
                                amenities and breathtaking views. Book your stay
                                with us today and discover the essence of
                                hospitality at Sunrise.
                            </h1>
                        }
                    >
                        <div ref={about2}>
                            <h1 className=" text-blue z-[10] mx-auto w-2/3 text-center text-[2rem] font-bold opacity-40 blur-[2px] dark:text-black ">
                                Welcome to{" "}
                                <span className="text-yellow-600">Sunrise</span>
                                , where comfort meets luxury and every stay is a
                                memorable experience. Our rooms are designed to
                                be your home away from home, with modern
                                amenities and breathtaking views. Book your stay
                                with us today and discover the essence of
                                hospitality at Sunrise.
                            </h1>

                            <Link to="/rooms">
                                <button
                                    style={{
                                        boxShadow: `-10px 10px 5px ${isDark ? "black" : "white"}`,
                                    }}
                                    className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 -skew-x-6 overflow-hidden bg-yellow-600 px-6 py-6 text-[2rem] transition duration-500 hover:scale-105"
                                >
                                    <div className="absolute left-0 top-0 grid h-full w-full place-items-center *:scale-0 *:hover:scale-[15]  ">
                                        <div
                                            ref={btn}
                                            className="-z-10 h-4 w-4 rounded-full bg-yellow-700 transition-all duration-1000 "
                                        ></div>
                                    </div>
                                    <h1 className="pointer-events-none">
                                        Book Now
                                    </h1>
                                </button>
                            </Link>
                        </div>
                    </MaskContainer>
                )}

                <img
                    alt="half sun"
                    ref={sunSvg}
                    src={sun}
                    style={{ filter: "drop-shadow(-10px 10px 5px black)" }}
                    className="absolute bottom-0 left-1/2 h-52 -translate-x-1/2"
                ></img>
            </div>
        </section>
    );
}
