import React, {
    createContext,
    useLayoutEffect,
    useState,
    useContext,
    useEffect,
} from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches,
    );

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener("change", (e) => setMatches(e.matches));

        const data = window.localStorage.getItem("isDark");
        const isDark = JSON.parse(data);
        if (isDark !== null) setIsDark(isDark);
    }, []);

    useEffect(() => {
        window.localStorage.setItem("isDark", JSON.stringify(isDark));
    }, [isDark]);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    useLayoutEffect(() => {
        gsap.context(() => {
            const lenis = new Lenis({
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smooth: true,
            });

            function raf(time) {
                lenis.raf(time);
                ScrollTrigger.update();
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
        });
    }, []);

    return (
        <DataContext.Provider
            value={{
                isDark,
                toggleDarkMode,
                matches,
                setMatches,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
