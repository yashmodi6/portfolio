import { useEffect } from "react";

const useScrollToHome = () => {
    useEffect(() => {
        const handleHomeLinkClick = (e: Event) => {
            const target = e.target as HTMLElement;

            // Traverse up in case inner elements (like <span>) are clicked inside <a>
            const anchor = target.closest("a");

            if (
                anchor &&
                anchor.getAttribute("href") === "#home"
            ) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.pushState(null, "", "#home"); // Optional: updates URL
            }
        };

        document.addEventListener("click", handleHomeLinkClick);

        return () => {
            document.removeEventListener("click", handleHomeLinkClick);
        };
    }, []);
};

export default useScrollToHome;