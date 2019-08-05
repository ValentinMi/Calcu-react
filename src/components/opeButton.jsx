import React from "react";

const OpeButton = ({ name, handleClick, className }) => {
  return (
    <button className={className} onClick={() => handleClick()}>
      {name}
    </button>
  );
};

export default OpeButton;
