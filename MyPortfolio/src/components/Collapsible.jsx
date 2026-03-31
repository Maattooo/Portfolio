import React, { useState } from "react";
import { LuChevronRight } from "react-icons/lu";


const Collapsible = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="collapsible-root">
      <button
        className="collapsible-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={`collapsible-content-${title}`}
      >
        <span
          className="collapsible-indicator"
          style={{
            display: "inline-flex",
            transition: "transform 0.2s",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            marginRight: "0.5em"
          }}
        >
          <LuChevronRight />
        </span>
        {title}
      </button>
      <div
        className="collapsible-content"
        id={`collapsible-content-${title}`}
        style={{
          display: open ? "block" : "none",
          marginTop: open ? "0.7em" : 0
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
