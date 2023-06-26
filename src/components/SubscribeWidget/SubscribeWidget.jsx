/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Envelopesimple4 } from "../../icons/Envelopesimple4";
import { Envelopesimple5 } from "../../icons/Envelopesimple5";
import { Button } from "../Button";
import { SubscribeForm } from "../SubscribeForm";
import "./style.css";

export const SubscribeWidget = ({
  screen,
  style,
  subscribeWidgetStyle,
  frameStyle,
  subscribeFormButtonIcon = (
    <Envelopesimple5
      style={{
        height: "20px",
        minWidth: "20px",
        position: "relative",
      }}
    />
  ),
}) => {
  return (
    <div className={`subscribe-widget screen-34-${screen}`} style={style}>
      <div className="div-2" style={subscribeWidgetStyle}>
        <div className="photo" />
        <div className="frame-4" style={frameStyle}>
          <div className="headline-subhead-3">
            <div className="join-our-weekly">Join Our Weekly Digest</div>
            <p className="get-exclusive">
              {["mobile", "tablet"].includes(screen) && (
                <>Get exclusive promotions &amp; updates straight to your inbox.</>
              )}

              {screen === "desktop" && <>Get Exclusive Promotions &amp; Updates Straight To Your Inbox.</>}
            </p>
          </div>
          {screen === "desktop" && (
            <SubscribeForm
              buttonIcon={subscribeFormButtonIcon}
              enterYourEmailStyle={{
                minWidth: "182px",
              }}
              property1="default"
              style={{
                alignSelf: "stretch",
                width: "unset",
              }}
            />
          )}

          {["mobile", "tablet"].includes(screen) && (
            <div className="div-3">
              <div className="type-form">
                <input className="input" />
              </div>
              <Button
                href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
                icon={
                  screen === "mobile" ? (
                    <Envelopesimple5
                      style={{
                        height: "20px",
                        minWidth: "20px",
                        position: "relative",
                      }}
                    />
                  ) : (
                    <Envelopesimple4
                      style={{
                        height: "20px",
                        minWidth: "20px",
                        position: "relative",
                      }}
                    />
                  )
                }
                property1="tertiary-filled"
                style={{
                  alignSelf: "stretch",
                  width: "unset",
                }}
                text="Subscribe"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

SubscribeWidget.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};
