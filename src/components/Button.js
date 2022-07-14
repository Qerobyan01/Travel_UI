import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];
const SIZES = ["btn--medium", "btn-large"];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonSTYLES = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSIZES = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonSTYLES} ${checkButtonSIZES}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
