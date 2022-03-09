import React from "react";

const DropdownItem = ({ icon, name, href }) => {
  // const navigate = useNavigate();

  const handleClick = () => {
    // navigate(href);
  };

  return (
    <div
      className="group flex items-center px-3 py-3 text-sm"
      role="dropdownitem"
      tabIndex={-1}
      id="dropdown-item-0"
      onClick={handleClick}
    >
      {icon}
      <span className="font-commuter text-gray-100 font-normal text-xl">
        {name}
      </span>
    </div>
  );
};

export default DropdownItem;
