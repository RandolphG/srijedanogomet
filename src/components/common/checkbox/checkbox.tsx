import React from "react";
import "./styles/_checkboxStyles.scss";

type CheckboxProps = {
  selected: boolean;
  label: string;
  onClick: () => void;
};

/**
 * Checkbox
 * @param selected
 * @param onClick
 * @param label
 * @param effect
 */
const Checkbox = ({ selected, label, onClick }: CheckboxProps) => {
  const length = 126.36953735351562;

  return (
    <div className="wrapper" onClick={onClick}>
      <div className="wrapper_checkbox">
        <svg
          className="wrapper_checkbox_check"
          viewBox="0 0 100 100"
          style={{ height: "5rem", width: "5rem" }}
        >
          <path
            stroke="lightgreen"
            strokeWidth="16"
            fill="none"
            d="M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16"
            strokeDashoffset={selected ? 0 : length}
            style={{
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transition: "stroke-dashoffset 0.2s ease-in-out",
              strokeDasharray: `${length} ${length}`,
            }}
          />
        </svg>
      </div>
      {label && (
        <div
          className="wrapper_label"
          style={{ color: selected ? "lightgreen" : "white" }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
