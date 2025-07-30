import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `
const coder = {
  name: 'Yash',
  age: 17,
  role: 'Full-Stack Developer',
  skills: ['HTML & CSS', 'Tailwind CSS', 'JavaScript', 'React', 'Node.js'],
  hardWorker: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 4
    );
  }
};
`;

const CoderCard: React.FC = () => {
    return (
        <div className="w-full text-[10px] sm:text-xs md:text-sm lg:text-base font-mono leading-relaxed">
            <SyntaxHighlighter
                language="javascript"
                style={atomDark} // atomDark theme
                wrapLongLines={true}
                showLineNumbers={false}
                customStyle={{
                    backgroundColor: "transparent", // Force transparent background
                    padding: 0,
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    overflow: "hidden",
                    maxWidth: "100%",
                    width: "100%",
                    boxSizing: "border-box"
                }}
                codeTagProps={{
                    style: {
                        display: "block",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word"
                    }
                }}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default CoderCard;
