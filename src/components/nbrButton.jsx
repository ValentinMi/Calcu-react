import React from "react";

const NbrButton = ({ value, handleClick }) => {
  return (
    <button className="btn" onClick={() => handleClick()}>
      {value}
    </button>
  );
};

export default NbrButton;
