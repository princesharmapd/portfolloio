import React, { useEffect, useState } from "react";
import { useData } from "../components/global/DataContext";
import Navbar from "../components/global/Navbar";

export default function RoomsPage() {
    const { isDark, toggleDarkMode, matches } = useData();

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div
            className={` font-['Poppins'] text-[--darky] transition duration-300 selection:bg-yellow-600 selection:text-yellow-200 dark:text-[--lighty] ${isDark ? "dark bg-[--darky]" : "bg-[--lighty]"}`}
        >
            <Navbar
                matches={matches}
                toggleDarkMode={toggleDarkMode}
                isDark={isDark}
                active="Rooms"
            />
            <div className="h-[400dvh]"></div>
        </div>
    );
}
