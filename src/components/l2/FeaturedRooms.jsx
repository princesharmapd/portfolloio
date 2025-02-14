import { useRef } from "react";
import room1 from "/src/assets/images/rooms/room1.png";
import room2 from "/src/assets/images/rooms/room2.webp";
import room3 from "/src/assets/images/rooms/room3.jpg";
import room4 from "/src/assets/images/rooms/room4.jpg";
import room5 from "/src/assets/images/rooms/room5.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Room = ({ roomNo, id, currImg }) => {
    const image = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(image.current, {
            opacity: 0,
            y: 200,
            duration: Math.random() * 0.7 + 1.3,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: currImg.current,
                start: "top bottom",
                toggleActions: "play none none reset",
            },
        });
    });

    const handleImgHover = (roomNo) => {
        currImg.current.style.opacity = 0.4;
        currImg.current.style.backgroundImage = `url('${roomNo}')`;
    };

    const handleImgOut = () => {
        currImg.current.style.opacity = 0;
    };

    return (
        <div
            ref={image}
            className=" relative h-fit w-fit overflow-hidden rounded-2xl transition-[filter] duration-300 hover:brightness-[1.2]"
        >
            <div>
                <span className="pointer-events-none absolute -bottom-[0.7rem] left-5 z-10 text-5xl font-bold text-[--lighty] dark:text-[--darky]">
                    0{id}
                </span>
                <img
                    alt={`featured room ${id}`}
                    onMouseOver={() => handleImgHover(roomNo)}
                    onMouseOut={() => handleImgOut()}
                    src={roomNo}
                    className="h-96 w-40 rounded-2xl object-cover transition-all duration-500 hover:h-[27rem] hover:w-96"
                />
            </div>
        </div>
    );
};

const RoomSlide = ({ id, roomNo, isDark }) => {
    return (
        <>
            <span className="pointer-events-none absolute -bottom-[0.7rem] z-10 rounded-tr-3xl bg-[--lighty] p-2 text-5xl font-bold blur-[1px] dark:bg-[--darky] ">
                0{id}
            </span>
            <span
                style={{
                    boxShadow: `inset 0 0 10px 10px ${isDark ? "#2B2B28" : "#F1EFE6"}`,
                }}
                className=" absolute h-full w-full rounded-2xl"
            ></span>
            <img
                alt="featured room 1"
                src={roomNo}
                className="m-auto h-96 w-full rounded-2xl object-cover outline-none"
            ></img>
        </>
    );
};

export default function FeaturedRooms({ isDark, matches }) {
    const currImg = useRef(null);
    const featuredText = useRef(null);
    const sect = useRef(null);
    const scBar = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(featuredText.current, {
            wordSpacing: matches ? "1vw" : "0",
            letterSpacing: matches ? "2vw" : "6px",
            delay: matches ? "0.3" : "1",
            opacity: "0",
            duration: 1,
            fontSize: matches ? "5vw" : "none",
            scrollTrigger: {
                trigger: featuredText.current,
                toggleActions: "play none none reset",
                start: "top bottom",
            },
        });

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
        <section ref={sect} className="mb-44 mt-10 md:my-auto md:h-[200dvh] ">
            <div className="sticky top-0 h-[150%] overflow-hidden md:h-dvh">
                <span
                    ref={scBar}
                    className="absolute hidden md:inline-block  h-1 w-full bg-gradient-to-r from-yellow-200 to-yellow-600 dark:h-[0.1rem]"
                ></span>
                <h1
                    ref={featuredText}
                    className="mx-auto mb-24 mt-8 w-auto bg-gradient-to-br from-yellow-200  to-yellow-700 bg-clip-text text-center text-[2rem] font-bold uppercase text-transparent md:mb-8 md:w-fit"
                >
                    Featured Rooms
                </h1>

                {matches && (
                    <span className=" absolute h-full w-full">
                        <div
                            ref={currImg}
                            className=" blursm h-full w-full bg-cover bg-center opacity-0 blur-sm transition-all duration-300"
                            style={{ backgroundImage: `url('${room1}')` }}
                        ></div>
                    </span>
                )}

                {matches ? (
                    <div className=" mx-auto h-96 w-fit items-center justify-center gap-2 rounded-2xl md:flex md:translate-y-[30%]">
                        <Room
                            isDark={isDark}
                            currImg={currImg}
                            roomNo={room1}
                            id={1}
                        />
                        <Room
                            isDark={isDark}
                            currImg={currImg}
                            roomNo={room2}
                            id={2}
                        />
                        <Room
                            isDark={isDark}
                            currImg={currImg}
                            roomNo={room3}
                            id={3}
                        />
                        <Room
                            isDark={isDark}
                            currImg={currImg}
                            roomNo={room4}
                            id={4}
                        />
                        <Room
                            isDark={isDark}
                            currImg={currImg}
                            roomNo={room5}
                            id={5}
                        />
                    </div>
                ) : (
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        slidesPerView={"auto"}
                        loop={true}
                        spaceBetween={30}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 2,
                            depth: 500,
                            modifier: 1,
                        }}
                        pagination={{ dynamicBullets: true, clickable: true }}
                        modules={[EffectCoverflow, Pagination]}
                        className="h-96 w-[80vw] overflow-hidden rounded-2xl"
                    >
                        <SwiperSlide className="relative h-full w-full rounded-2xl">
                            <RoomSlide id={1} roomNo={room1} isDark={isDark} />
                        </SwiperSlide>
                        <SwiperSlide className="relative h-full w-full rounded-2xl">
                            <RoomSlide id={2} roomNo={room2} isDark={isDark} />
                        </SwiperSlide>
                        <SwiperSlide className="relative h-full w-full rounded-2xl">
                            <RoomSlide id={3} roomNo={room3} isDark={isDark} />
                        </SwiperSlide>
                        <SwiperSlide className="relative h-full w-full rounded-2xl">
                            <RoomSlide id={4} roomNo={room4} isDark={isDark} />
                        </SwiperSlide>
                        <SwiperSlide className="relative h-full w-full rounded-2xl">
                            <RoomSlide id={5} roomNo={room5} isDark={isDark} />
                        </SwiperSlide>
                    </Swiper>
                )}
            </div>
        </section>
    );
}
