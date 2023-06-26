/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BurgerMenu } from "../../icons/BurgerMenu";
import { User1 } from "../../icons/User1";
import { BeeLogo } from "../BeeLogo";
import { Button } from "../Button";
import "./style.css";

export const Navigation = ({
  property1,
  style,
  buttonIcon = (
    <User1
      style={{
        height: "20px",
        minWidth: "20px",
        position: "relative",
      }}
    />
  ),
  href,
}) => {
  return (
    <div className={`navigation ${property1}`} style={style}>
      <a className="nav-logo" href={href} rel="noopener noreferrer" target="_blank">
        <div className="div">
          {["navigation-mobile", "navigation-tablet"].includes(property1) && (
            <div className="logo">
              <BeeLogo
                style={
                  property1 === "navigation-tablet"
                    ? {
                        backgroundImage:
                          "url(https://generation-sessions.s3.amazonaws.com/48796276b7b58aa5cb2ae3f1f2a6a92c/img/bee-logo-1-5@2x.png)",
                        height: "24px",
                        left: "0",
                        position: "absolute",
                        top: "0",
                        width: "24px",
                      }
                    : {
                        height: "22px",
                        left: "0",
                        position: "absolute",
                        top: "0",
                        width: "22px",
                      }
                }
              />
              <img
                className="BEE-marketplace"
                alt="Bee marketplace"
                src={
                  property1 === "navigation-tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/48796276b7b58aa5cb2ae3f1f2a6a92c/img/bee-marketplace-4.svg"
                    : "https://generation-sessions.s3.amazonaws.com/48796276b7b58aa5cb2ae3f1f2a6a92c/img/bee-marketplace-3.svg"
                }
              />
            </div>
          )}

          {property1 === "navigation-desktop" && (
            <>
              <BeeLogo
                style={{
                  left: "0",
                  position: "absolute",
                  top: "0",
                }}
              />
              <img
                className="img"
                alt="Bee marketplace"
                src="https://generation-sessions.s3.amazonaws.com/48796276b7b58aa5cb2ae3f1f2a6a92c/img/bee-marketplace-6.svg"
              />
            </>
          )}
        </div>
      </a>
      <div className="nav-nav-menu">
        {["navigation-mobile", "navigation-tablet"].includes(property1) && (
          <BurgerMenu
            style={{
              height: "24px",
              minWidth: "24px",
              position: "relative",
            }}
          />
        )}

        {property1 === "navigation-desktop" && (
          <>
            <Button
              hasLeftIcon={false}
              property1="tertiary-filled"
              style={{
                backgroundColor: "unset",
                padding: "0px 20px",
              }}
              text="Marketplace"
            />
            <Button
              hasLeftIcon={false}
              property1="tertiary-filled"
              style={{
                backgroundColor: "unset",
                padding: "0px 20px",
              }}
              text="Rankings"
            />
            <Button
              hasLeftIcon={false}
              property1="tertiary-filled"
              style={{
                backgroundColor: "unset",
                padding: "0px 20px",
              }}
              text="Connect a wallet"
            />
            <Button
              icon={buttonIcon}
              property1="secondary-filled"
              style={{
                padding: "0px 30px",
              }}
              text="Sign Up"
            />
          </>
        )}
      </div>
    </div>
  );
};

Navigation.propTypes = {
  property1: PropTypes.oneOf(["navigation-tablet", "navigation-desktop", "navigation-mobile"]),
  href: PropTypes.string,
};
