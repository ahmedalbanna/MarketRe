/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon } from "../../icons/Icon";
import { Icon1 } from "../../icons/Icon1";
import { Icon2 } from "../../icons/Icon2";
import { Icon3 } from "../../icons/Icon3";
import { Icon4 } from "../../icons/Icon4";
import { Icon5 } from "../../icons/Icon5";
import { Icon6 } from "../../icons/Icon6";
import { Icon7 } from "../../icons/Icon7";
import { Icon8 } from "../../icons/Icon8";
import { InfoCard } from "../InfoCard";
import "./style.css";

export const HowItWorks = ({
  screen,
  style,
  sectionHeadlineStyle,
  howItWorksStyle,
  findOutHowToGetStyle,
  cardRowStyle,
  infoCardIcon = (
    <Icon
      style={{
        height: "250px",
        minWidth: "250px",
        position: "relative",
      }}
    />
  ),
  override = (
    <Icon1
      style={{
        height: "250px",
        minWidth: "250px",
        position: "relative",
      }}
    />
  ),
  infoCardPropertyInfoCardStyle,
  infoCardIcon1 = (
    <Icon2
      style={{
        height: "250px",
        minWidth: "250px",
        position: "relative",
      }}
    />
  ),
  infoCardPropertyInfoCardStyleOverride,
}) => {
  return (
    <div className={`how-it-works screen-29-${screen}`} style={style}>
      <div className="section-headline-9" style={sectionHeadlineStyle}>
        <div className="text-wrapper-3" style={howItWorksStyle}>
          How It Works
        </div>
        <p className="find-out-how-to-get" style={findOutHowToGetStyle}>
          {screen === "desktop" && <>Find Out How To Get Started</>}

          {["mobile", "tablet"].includes(screen) && <>Find out how to get started</>}
        </p>
      </div>
      <div className="card-row" style={cardRowStyle}>
        <InfoCard
          bodyText1="Set up your wallet of choice. Connect it to the Bee by clicking the wallet icon in the top right corner."
          cardDetailsStyle={
            screen === "tablet"
              ? {
                  left: "18px",
                  top: "203px",
                  width: "170px",
                }
              : screen === "mobile"
              ? {
                  left: "154px",
                  top: "26px",
                }
              : undefined
          }
          icon={infoCardIcon}
          overlapGroupStyle={
            screen === "tablet"
              ? {
                  height: "303px",
                  left: "2px",
                  top: "-13px",
                  width: "205px",
                }
              : screen === "mobile"
              ? {
                  height: "169px",
                  left: "-14px",
                  top: "-6px",
                  width: "309px",
                }
              : undefined
          }
          override={
            screen === "tablet" ? (
              <Icon3
                style={{
                  height: "205px",
                  left: "0",
                  position: "absolute",
                  top: "0",
                  width: "205px",
                }}
              />
            ) : screen === "mobile" ? (
              <Icon6
                style={{
                  height: "169px",
                  left: "0",
                  position: "absolute",
                  top: "0",
                  width: "169px",
                }}
              />
            ) : undefined
          }
          property1={
            screen === "tablet" ? "info-card-small" : screen === "mobile" ? "info-card-horizontal" : "info-card"
          }
          style={
            screen === "tablet"
              ? {
                  alignSelf: "stretch",
                  flex: "1",
                  height: "320px",
                  minWidth: "210px",
                  position: "relative",
                  width: "unset",
                }
              : screen === "mobile"
              ? {
                  alignSelf: "stretch",
                  minWidth: "315px",
                  position: "relative",
                  width: "unset",
                }
              : {
                  flex: "1",
                  width: "unset",
                }
          }
          text={screen === "desktop" ? "Setup Your Wallet" : undefined}
          text1={screen === "mobile" ? "Setup Your wallet" : undefined}
        />
        <InfoCard
          bodyText1="Upload your work and setup your collection. Add a description, social links and floor price."
          cardDetailsStyle={
            screen === "tablet"
              ? {
                  left: "18px",
                  top: "203px",
                  width: "170px",
                }
              : screen === "mobile"
              ? {
                  left: "154px",
                  top: "34px",
                }
              : undefined
          }
          icon={override}
          overlapGroupStyle={
            screen === "tablet"
              ? {
                  height: "303px",
                  left: "2px",
                  top: "-13px",
                  width: "205px",
                }
              : screen === "mobile"
              ? {
                  height: "169px",
                  left: "-14px",
                  top: "-14px",
                  width: "309px",
                }
              : undefined
          }
          override={
            screen === "tablet" ? (
              <Icon4
                style={{
                  height: "205px",
                  left: "0",
                  position: "absolute",
                  top: "0",
                  width: "205px",
                }}
              />
            ) : screen === "mobile" ? (
              <Icon7
                style={{
                  height: "169px",
                  left: "0",
                  position: "absolute",
                  top: "0",
                  width: "169px",
                }}
              />
            ) : undefined
          }
          property1={
            screen === "tablet" ? "info-card-small" : screen === "mobile" ? "info-card-horizontal" : "info-card"
          }
          style={infoCardPropertyInfoCardStyle}
          text={screen === "desktop" ? "Create Collection" : undefined}
          text1={["mobile", "tablet"].includes(screen) ? "Create Collection" : undefined}
        />
        <InfoCard
          bodyText1={
            screen === "desktop"
              ? "Choose between packages and fixed price menus. Start earning by buying your coins in trading games."
              : "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
          }
          cardDetailsStyle={
            screen === "tablet"
              ? {
                  left: "10px",
                  width: "170px",
                }
              : undefined
          }
          icon={infoCardIcon1}
          overlapGroupStyle={
            screen === "tablet"
              ? {
                  height: "295px",
                  left: "10px",
                }
              : undefined
          }
          override={
            screen === "tablet" ? (
              <Icon5
                style={{
                  height: "197px",
                  left: "0",
                  position: "absolute",
                  top: "0",
                  width: "197px",
                }}
              />
            ) : screen === "mobile" ? (
              <Icon8
                style={{
                  height: "164px",
                  left: "0",
                  position: "absolute",
                  top: "0",
                  width: "164px",
                }}
              />
            ) : undefined
          }
          property1={
            screen === "tablet" ? "info-card-small" : screen === "mobile" ? "info-card-horizontal" : "info-card"
          }
          style={infoCardPropertyInfoCardStyleOverride}
          text={screen === "desktop" ? "Start Earning" : undefined}
          text1={["mobile", "tablet"].includes(screen) ? "Start Earning" : undefined}
        />
      </div>
    </div>
  );
};

HowItWorks.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};
