/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon10 } from "../../icons/Icon10";
import { Icon9 } from "../../icons/Icon9";
import "./style.css";

export const InfoCard = ({
  title = true,
  bodyText = true,
  title1 = "Setup your wallet",
  bodyText1 = "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
  property1,
  icon = (
    <Icon9
      style={{
        height: "250px",
        minWidth: "250px",
        position: "relative",
      }}
    />
  ),
  style,
  text = "Setup Your Wallet",
  overlapGroupStyle,
  override = (
    <Icon10
      style={{
        height: "197px",
        left: "0",
        position: "absolute",
        top: "0",
        width: "197px",
      }}
    />
  ),
  cardDetailsStyle,
  text1 = "Setup Your wallet",
}) => {
  return (
    <div className={`info-card property-1-${property1}`} style={style}>
      {property1 === "info-card" && (
        <>
          {icon}
          <div className="card-details">
            <div className="setup-your-wallet">{text}</div>
            <p className="set-up-your-wallet">{bodyText1}</p>
          </div>
        </>
      )}

      {["info-card-horizontal", "info-card-small"].includes(property1) && (
        <div className="overlap-group" style={overlapGroupStyle}>
          {override}
          <div className="card-details-2" style={cardDetailsStyle}>
            <div className="setup-your-wallet-2">{text1}</div>
            <p className="set-up-your-wallet-2">{bodyText1}</p>
          </div>
        </div>
      )}
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.bool,
  bodyText: PropTypes.bool,
  title1: PropTypes.string,
  bodyText1: PropTypes.string,
  property1: PropTypes.oneOf(["info-card", "info-card-small", "info-card-horizontal"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
