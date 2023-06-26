/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Rocketlaunch11 } from "../../icons/Rocketlaunch11";
import { Rocketlaunch13 } from "../../icons/Rocketlaunch13";
import { Button } from "../Button";
import "./style.css";

export const HeroSection = ({
  screen,
  style,
  heroSectionFrameStyle,
  heroTextButtonsStyle,
  buttonIcon = (
    <Rocketlaunch13
      color="white"
      style={{
        height: "20px",
        minWidth: "20px",
        position: "relative",
      }}
    />
  ),
  elementStyle,
  highlightedNftStyle,
}) => {
  return (
    <div className={`hero-section ${screen}`} style={style}>
      <div className="hero-section-frame" style={heroSectionFrameStyle}>
        {["dekstop", "tablet"].includes(screen) && (
          <>
            <div className="hero-text-buttons" style={heroTextButtonsStyle}>
              <div className="headline-subhead">
                <p className="discover-mobile">Discover Mobile Games &amp;charge Coins</p>
                <p className="bee-marketplace-UI">
                  {screen === "dekstop" && (
                    <>
                      Bee Marketplace Ui Created With Albanaa For Figma. Collect, Pay And Buy Bee From More Than 20k
                      Company Support.
                    </>
                  )}

                  {screen === "tablet" && (
                    <>
                      bee marketplace UI created with Albanaa for Figma. Collect, Pay and buy Bee from more than 20k
                      Company Support.
                    </>
                  )}
                </p>
              </div>
              <Button icon={buttonIcon} property1="secondary-filled" text="Get Started" />
              <div className="additional-info">
                <div className="total-sale">
                  <div className="element" style={elementStyle}>
                    240k+
                  </div>
                  <div className="total-sale-2">Total Sale</div>
                </div>
                <div className="auctions">
                  <div className="element-k">100k+</div>
                  <div className="games">Games</div>
                </div>
                <div className="artists">
                  <div className="element-2">240k+</div>
                  <div className="packages">Packages</div>
                </div>
              </div>
            </div>
            <div className="highlighted-NFT" style={highlightedNftStyle} />
          </>
        )}

        {screen === "mobile" && (
          <div className="hero-text-buttons-2">
            <div className="headline-subhead-2">
              <p className="p">Discover Mobile Games &amp;charge Coins</p>
              <p className="bee-marketplace-UI-2">
                bee marketplace UI created with Albanaa for Figma. Collect, Pay and buy Bee from more than 20k Company
                Support.
              </p>
            </div>
            <div className="highlighted-NFT-2" />
            <Button
              icon={
                <Rocketlaunch11
                  style={{
                    height: "20px",
                    minWidth: "20px",
                    position: "relative",
                  }}
                />
              }
              property1="secondary-filled"
              style={{
                alignSelf: "stretch",
                width: "unset",
              }}
              text="Get Started"
            />
            <div className="additional-info-2">
              <div className="total-sale-3">
                <div className="element-3">240k+</div>
                <div className="total-sale-4">Total Sale</div>
              </div>
              <div className="auctions-2">
                <div className="element-4">100k+</div>
                <div className="games-2">Games</div>
              </div>
              <div className="artists-2">
                <div className="element-5">240k+</div>
                <div className="packages-2">Packages</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  screen: PropTypes.oneOf(["dekstop", "tablet", "mobile"]),
};
