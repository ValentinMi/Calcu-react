import React from "react";

const NbrButton = ({ value, handleClick }) => {
  return <button onClick={() => handleClick()}>{value}</button>;
};

export default NbrButton;
