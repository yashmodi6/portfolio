import React, { useState, useEffect, useCallback } from "react";

// Define NavLink type
interface NavLink {
    id: string;
    label: string;
}

// NavItem sub-component
const NavItem: React.FC<{
    id: string;
    label: string;
    isActive: boolean;
    onClick: (id: string) => void;
}> = ({ id, label, isActive, onClick }) => (
    <li>
        <a
            href={`#${id}`}
            onClick={() => onClick(id)}
            className={`block rounded-sm px-3 py-2 transition-transform md:border-0 md:bg-transparent md:p-0 md:hover:-translate-y-0.5 md:hover:bg-transparent ${
                isActive
                    ? "md:text-blue-500 bg-blue-500 text-blue-300"
                    : "text-blue-300 hover:bg-blue-100 hover:text-blue-500"
            }`}
        >
            {label}
        </a>
    </li>
);

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string>("home");

    const handleNavClick = useCallback((id: string) => {
        setActiveLink(id);
        setIsMobileMenuOpen(false);
    }, []);

    const navLinks: NavLink[] = [
        { id: "home", label: "HOME" },
        { id: "about", label: "ABOUT" },
        { id: "projects", label: "PROJECTS" },
        { id: "contact", label: "CONTACT" }
    ];

    return (
        <header>
            <nav className="fixed z-50 mt-14 h-10 w-full px-12 sm:px-16 md:px-20 lg:px-24 xl:px-28">
                <div className="mx-auto flex h-full w-full flex-wrap items-center justify-between rounded-lg bg-white text-xs">
                    <a
                        id="logo-text"
                        href="#home"
                        className="sm:mx-5 mx-2 text-sm font-semibold tracking-widest text-blue-500 hover:animate-tada"
                    >
                        <span>
                            &lt;Y<span className="hidden">ash</span>&gt;
                        </span>
                    </a>

                    {/* Mobile Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="mx-1 inline-flex h-8 w-8 items-center justify-center rounded-lg p-2 text-sm text-blue-500 hover:bg-blue-100 focus:outline-hidden focus:ring-2 focus:ring-blue-200 sm:mx-4 md:hidden"
                        aria-expanded={isMobileMenuOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    {/* Nav Links */}
                    <div
                        className={`${
                            isMobileMenuOpen ? "block" : "hidden"
                        } w-full md:block md:w-auto`}
                    >
                        <ul className="mt-4 flex w-full flex-col rounded-lg bg-white p-4 font-medium tracking-wide md:mt-0 md:flex-row md:space-x-4 md:bg-transparent mr-5 md:p-0">
                            {navLinks.map(link => (
                                <NavItem
                                    key={link.id}
                                    id={link.id}
                                    label={link.label}
                                    isActive={activeLink === link.id}
                                    onClick={handleNavClick}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
