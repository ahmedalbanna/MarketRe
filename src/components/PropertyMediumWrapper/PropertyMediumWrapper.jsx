/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../Avatar";
import "./style.css";

export const PropertyMediumWrapper = ({ property1, style }) => {
  return (
    <div className="property-medium-wrapper" style={style}>
      <Avatar
        style={
          property1 === "big"
            ? {
                minWidth: "120px",
                position: "relative",
                width: "unset",
              }
            : property1 === "small"
            ? {
                height: "24px",
                minWidth: "24px",
                position: "relative",
                width: "unset",
              }
            : {
                height: "60px",
                minWidth: "60px",
                position: "relative",
                width: "unset",
              }
        }
      />
    </div>
  );
};

PropertyMediumWrapper.propTypes = {
  property1: PropTypes.oneOf(["small", "medium", "big"]),
};
