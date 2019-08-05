import React from "react";

const OpeButton = ({ name, handleClick, className }) => {
  return (
    <button className={className + " btn"} onClick={() => handleClick()}>
      {name}
    </button>
  );
};

export default OpeButton;
