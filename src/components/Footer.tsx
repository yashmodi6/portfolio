import React from "react";
import GitHubIcon from "./icons/GitHubIcon";
import XIcon from "./icons/XIcon";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-fit mt-28 text-blue-100 text-center relative px-4 py-8">
      <div className="max-w-screen-md mx-auto flex flex-col items-center gap-4">
        {/* Main Footer Text */}
        <p className="text-[11px] text-blue-200">
          Designed & developed by <span className="font-semibold text-blue-100">Yash Modi</span> — © 2025 All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yashmodi6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-5 h-5 text-blue-200 hover:text-blue-50 transition-colors" />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X.com (Twitter)"
          >
            <XIcon className="w-5 h-5 text-blue-200 hover:text-blue-50 transition-colors" />
          </a>
        </div>

        {/* Scroll to Top Button */}
        <a
          href="#home"
          className="w-8 h-8 mt-2 rounded-md border border-blue-300 flex justify-center items-center hover:bg-sky-950/70 hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;