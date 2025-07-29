import { useEffect } from "react";

/**
 * Moves an element vertically with scroll.
 * @param id The DOM element ID (e.g., 'movingElement')
 */
const useMovingElement = (id: string) => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const element = document.getElementById(id);
            if (!element) return;

            if (scrollPosition < 100) {
                element.style.bottom = "0px";
            } else {
                element.style.bottom = `${scrollPosition - 90}px`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [id]);
};

export default useMovingElement;