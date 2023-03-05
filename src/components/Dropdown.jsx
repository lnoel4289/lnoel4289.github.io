import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="dropButton"
        onClick={() => {
          isOpen === true ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        {title}
        <div className="arrowContainer">
          <MdArrowBackIos className="arrow" />
        </div>
      </div>
      {isOpen === true && <div>{content}</div>}
    </div>
  );
};

export default Dropdown;
