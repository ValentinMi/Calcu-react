import React, { useState, useEffect } from "react";
import OpeButton from "./opeButton";
import NbrButton from "./nbrButton";
import Screen from "./screen";
import "../styles/calculator.css";

const Calculator = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operator, setOperator] = useState("");
  const [screenValue, setScreenValue] = useState(0);

  const opeButtons = [
    { name: "+" },
    { name: "-" },
    { name: "x" },
    { name: "/" }
  ];

  const nbrButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];

  const handleResult = () => {
    if (operator === "") return console.log("no ope");
    let result;
    let float1 = parseFloat(value1);
    let float2 = parseFloat(value2);
    // Check operator and calcul
    switch (operator) {
      case "+":
        result = float1 + float2;
        break;
      case "-":
        result = float1 - float2;
        break;
      case "x":
        result = float1 * float2;
        break;
      case "/":
        result = float1 / float2;
        break;
      default:
        break;
    }
    // Clean screen & assign result to value1
    handleClear();
    setValue1(result);
  };

  const handleNbrClick = value => {
    // Check if operator is undefined
    if (operator === "") {
      // If yes set value 1
      setValue1(`${value1}${value}`);
      setScreenValue(value);
    } else {
      // If ope set value2 and refresh screen with ope
      setValue2(`${value2}${value}`);
    }
  };

  const handleOpeClick = ope => {
    // Check if we have a first value
    if (value1 === "") return;
    setOperator(ope);
  };

  const handleClear = () => {
    // Reset to initial states
    setValue1("");
    setValue2("");
    setOperator("");
  };

  useEffect(() => {
    // Update the screen after each change
    setScreenValue(value1 + " " + operator + " " + value2);
  }, [value1, operator, value2]);

  return (
    <div className="calculator">
      <Screen value={screenValue} />
      <div className="keyboard">
        <div>
          <button onClick={() => handleClear()} className="clear-btn">
            clear
          </button>
          <div className="nbr-btn">
            {nbrButtons.map(nbr => (
              <NbrButton
                key={nbr}
                value={nbr}
                handleClick={() => handleNbrClick(nbr)}
              />
            ))}
          </div>
        </div>
        <div className="ope-btn">
          {opeButtons.map(btn => (
            <OpeButton
              key={btn.name}
              name={btn.name}
              func={btn.func}
              className={btn.className}
              handleClick={() => handleOpeClick(btn.name)}
            />
          ))}
          <button className="equal-btn" onClick={() => handleResult()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
