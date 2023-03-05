import React, { useState } from "react";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          isOpen === true ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        {title}
      </div>
      {isOpen === true && <div>{content}</div>}
    </div>
  );
};

export default Dropdown;
