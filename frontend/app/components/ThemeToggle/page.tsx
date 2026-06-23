"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const temaSalvo = localStorage.getItem("theme");

        if (temaSalvo === "dark" || (!temaSalvo && document.documentElement.classList.contains("dark"))) {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    if (!mounted) return <div className="w-9 h-9" />;

    return (
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border transition-all duration-200 cursor-pointer shadow-sm flex items-center justify-center group w-9 h-9
                ${isDarkMode
                    ? "bg-zinc-800 border-zinc-700 text-amber-400 hover:bg-zinc-700"
                    : "bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                }`}
            title={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
        >
            {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.56 1.56m12.44 12.44l1.56 1.56M21 12h-2.25m-13.5 0H3m22.34-5.64l-1.56 1.56m-12.44 12.44l-1.56 1.56M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
            )}
        </button>
    );
}