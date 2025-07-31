import React from "react";

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.132 3H23L15.893 10.49 24 21h-6.421l-5.054-6.17L6.804 21H1.93l7.689-8.056L0 3h6.63l4.643 5.677L20.132 3zm-2.249 16h2.068L7.31 5H5.112l12.771 14z" />
  </svg>
);

export default XIcon;