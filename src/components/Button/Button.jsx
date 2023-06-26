/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Rocketlaunch13 } from "../../icons/Rocketlaunch13";
import "./style.css";

export const Button = ({
  hasLeftIcon = true,
  hasText = true,
  text = "Button",
  property1,
  style,
  icon = (
    <Rocketlaunch13
      color="white"
      style={{
        height: "20px",
        minWidth: "20px",
        position: "relative",
      }}
    />
  ),
  buttonStyle,
  href,
}) => {
  return (
    <a className={`button ${property1}`} style={style} href={href} rel="noopener noreferrer" target="_blank">
      {hasLeftIcon && <>{icon}</>}

      {hasText && (
        <div className="text-wrapper" style={buttonStyle}>
          {text}
        </div>
      )}
    </a>
  );
};

Button.propTypes = {
  hasLeftIcon: PropTypes.bool,
  hasText: PropTypes.bool,
  text: PropTypes.string,
  property1: PropTypes.oneOf([
    "primary-filled",
    "secondary-outlined",
    "primary-outlined",
    "tertiary-filled",
    "tertiary-outlined",
    "secondary-filled",
  ]),
  href: PropTypes.string,
};
