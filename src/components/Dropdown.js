import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

export const DropdownWrapper = ({ header, children }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div onClick={() => setExpanded(!isExpanded)}>{header}</div>
      <div
        className="absolute left-8 mt-2 w-64 rounded-2xl border border-gray-35 bg-black-20 px-4 py-3 z-30"
        role="dropdown"
        aria-orientation="vertical"
        aria-labelledby="dropdown-button"
        tabIndex={-1}
        style={{ display: isExpanded ? "block" : "none" }}
      >
        {children}
        <div
          className="fixed top-0 left-0 z-20 w-screen h-screen"
          onClick={() => setExpanded(!isExpanded)}
        />
      </div>
    </div>
  );
};

const Dropdown = ({ menus, children }) => {
  return (
    <DropdownWrapper header={children}>
      <>
        {menus.map((el, index) => (
          <DropdownItem key={`Dropdown-item-${index}`} {...el} />
        ))}
      </>
    </DropdownWrapper>
  );
};

export default Dropdown;
