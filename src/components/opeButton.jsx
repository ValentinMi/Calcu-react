import React from "react";

const OpeButton = ({ name, handleClick }) => {
  return (
    <button key={name} className={"btn"} onClick={() => handleClick()}>
      {name}
    </button>
  );
};

export default OpeButton;
