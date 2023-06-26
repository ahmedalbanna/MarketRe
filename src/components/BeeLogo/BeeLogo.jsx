/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const BeeLogo = ({ style }) => {
  return (
    <div
      className="bee-logo"
      style={{
        ...{
          backgroundImage:
            "url(https://generation-sessions.s3.amazonaws.com/48796276b7b58aa5cb2ae3f1f2a6a92c/img/bee-logo-1-7@2x.png)",
        },
        ...style,
      }}
    />
  );
};
