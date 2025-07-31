import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

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

const customPrismTheme: { [key: string]: React.CSSProperties } = {
  keyword: { color: "#c084fc" },
  boolean: { color: "#c084fc" },
  string: { color: "#a4cafe" },
  number: { color: "#fce96a" },
  property: { color: "#ffffff" },
  "attr-name": { color: "#ffffff" },
  function: { color: "#fce96a" },
  variable: { color: "#fce96a" },
  builtin: { color: "#fce96a" },
  plain: { color: "#ffffff" },
  punctuation: { color: "#d1d5db" },
  operator: { color: "#a4cafe" },
};

const CoderCard: React.FC = () => {
  return (
    <div className="w-full text-[10px] sm:text-xs md:text-sm lg:text-sm font-mono leading-relaxed">
      <SyntaxHighlighter
        language="javascript"
        style={customPrismTheme}
        wrapLongLines
        showLineNumbers={false}
        customStyle={{
          backgroundColor: "transparent",
          padding: 0,
          margin: 0,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflow: "hidden",
          maxWidth: "100%",
          width: "100%",
          boxSizing: "border-box",
          fontFamily: "monospace",
          fontSize: "0.875em",
          lineHeight: "1.5",
        }}
        codeTagProps={{
          style: {
            display: "block",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            color: "#ffffff",
          },
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CoderCard;