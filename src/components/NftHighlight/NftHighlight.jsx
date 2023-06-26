/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Eye6 } from "../../icons/Eye6";
import { Button } from "../Button";
import "./style.css";

export const NftHighlight = ({
  screen,
  style,
  frameStyle,
  buttonIcon = (
    <Eye6
      style={{
        height: "20px",
        marginBottom: "-2.00px",
        marginTop: "-2.00px",
        minWidth: "20px",
        position: "relative",
      }}
    />
  ),
}) => {
  return (
    <div className={`NFT-highlight screen-25-${screen}`} style={style}>
      <div className="frame-wrapper">
        <div className="frame-3" style={frameStyle}>
          {["desktop", "tablet"].includes(screen) && (
            <>
              <div className="NFT-artst-name">
                <div className="payment-process">Payment Process</div>
                <Button
                  buttonStyle={{
                    color: "#2b2b2b",
                    marginBottom: "-2.00px",
                    marginTop: "-4.00px",
                  }}
                  icon={buttonIcon}
                  property1="secondary-filled"
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "22px 50px",
                  }}
                  text="See Option"
                />
              </div>
              <div className="auction-timer">
                <div className="check-in-time">Check-in time:</div>
                <div className="timer">
                  <div className="hours">
                    <div className="element-8">59</div>
                    <div className="hours-2">Hours</div>
                  </div>
                  <div className="element-9">:</div>
                  <div className="minutes">
                    <div className="element-10">59</div>
                    <div className="minutes-2">Minutes</div>
                  </div>
                  <div className="element-11">:</div>
                  <div className="seconds">
                    <div className="element-12">59</div>
                    <div className="seconds-2">Seconds</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {screen === "mobile" && (
            <div className="NFT-artst-name-2">
              <div className="payment-process-2">Payment Process</div>
              <div className="auction-timer-2">
                <div className="check-in-time-2">Check-in time:</div>
                <div className="timer-2">
                  <div className="hours-3">
                    <div className="element-13">59</div>
                    <div className="hours-4">Hours</div>
                  </div>
                  <div className="element-14">:</div>
                  <div className="minutes-3">
                    <div className="element-15">59</div>
                    <div className="minutes-4">Minutes</div>
                  </div>
                  <div className="element-16">:</div>
                  <div className="seconds-3">
                    <div className="element-17">59</div>
                    <div className="seconds-4">Seconds</div>
                  </div>
                </div>
              </div>
              <Button
                buttonStyle={{
                  color: "#2b2b2b",
                  marginBottom: "-2.00px",
                  marginTop: "-4.00px",
                }}
                icon={
                  <Eye6
                    style={{
                      height: "20px",
                      marginBottom: "-2.00px",
                      marginTop: "-2.00px",
                      minWidth: "20px",
                      position: "relative",
                    }}
                  />
                }
                property1="secondary-filled"
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#ffffff",
                  padding: "22px 50px",
                  width: "unset",
                }}
                text="See Option"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

NftHighlight.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};
