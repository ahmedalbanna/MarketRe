/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Envelopesimple5 } from "../../icons/Envelopesimple5";
import { Button } from "../Button";
import "./style.css";

export const SubscribeForm = ({
  email = "Enter your email here",
  property1,
  style,
  enterYourEmailStyle,
  buttonIcon = (
    <Envelopesimple5
      style={{
        height: "20px",
        minWidth: "20px",
        position: "relative",
      }}
    />
  ),
  buttonHasLeftIcon,
}) => {
  return (
    <div className="subscribe-form" style={style}>
      <input className="enter-your-email" style={enterYourEmailStyle} />
      <Button
        hasLeftIcon={buttonHasLeftIcon}
        href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
        icon={buttonIcon}
        property1="secondary-filled"
        style={{
          justifyContent: "flex-end",
          marginBottom: "-16.00px",
          marginTop: "-16.00px",
        }}
        text="Subscribe"
      />
    </div>
  );
};

SubscribeForm.propTypes = {
  email: PropTypes.string,
  property1: PropTypes.oneOf(["default"]),
  buttonHasLeftIcon: PropTypes.bool,
};
