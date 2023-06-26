/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Discordlogo2 } from "../../icons/Discordlogo2";
import { Envelopesimple5 } from "../../icons/Envelopesimple5";
import { Instagramlogo4 } from "../../icons/Instagramlogo4";
import { Twitterlogo2 } from "../../icons/Twitterlogo2";
import { Youtubelogo3 } from "../../icons/Youtubelogo3";
import { BeeLogo } from "../BeeLogo";
import { Button } from "../Button";
import { SubscribeForm } from "../SubscribeForm";
import "./style.css";

export const Footer = ({
  screen,
  style,
  footerInfoStyle,
  beeLogoBeeLogoStyle,
  BEEMarketplace = "https://generation-sessions.s3.amazonaws.com/48796276b7b58aa5cb2ae3f1f2a6a92c/img/bee-marketplace-6.svg",
  icon = (
    <Twitterlogo2
      color="#858584"
      style={{
        height: "32px",
        minWidth: "32px",
        position: "relative",
      }}
    />
  ),
  frameStyle,
  divider = "https://generation-sessions.s3.amazonaws.com/48796276b7b58aa5cb2ae3f1f2a6a92c/img/divider.svg",
}) => {
  return (
    <div className={`footer screen-42-${screen}`} style={style}>
      <div className="footer-info" style={footerInfoStyle}>
        <div className="NFT-marketplace-info">
          <div className="logo-2">
            <BeeLogo style={beeLogoBeeLogoStyle} />
            <img className="BEE-marketplace-2" alt="Bee marketplace" src={BEEMarketplace} />
          </div>
          <div className="additional-info-5">
            <p className="bee-marketplace-UI-3">Bee marketplace UI created with Albanaa for Mustafa.</p>
            <div className="community-info">
              <div className="join-our-community">Join our community</div>
              <div className="icons">
                <Discordlogo2
                  color="#858584"
                  style={{
                    height: "32px",
                    minWidth: "32px",
                    position: "relative",
                  }}
                />
                <Youtubelogo3
                  color="#858584"
                  style={{
                    height: "32px",
                    minWidth: "32px",
                    position: "relative",
                  }}
                />
                {icon}
                <Instagramlogo4
                  color="#858584"
                  style={{
                    height: "32px",
                    minWidth: "32px",
                    position: "relative",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="explore">
          <div className="explore-2">Explore</div>
          <div className="pages">
            <div className="marketplace">Marketplace</div>
            <div className="rankings">Rankings</div>
            <div className="connect-a-wallet">Connect a wallet</div>
          </div>
        </div>
        <div className="subscribe">
          <div className="join-our-weekly-2">Join Our Weekly Digest</div>
          <div className="subscribe-form-info">
            {["desktop", "tablet"].includes(screen) && (
              <>
                <p className="get-exclusive-2">Get exclusive promotions &amp; updates straight to your inbox.</p>
                <SubscribeForm
                  buttonHasLeftIcon={false}
                  enterYourEmailStyle={{
                    minWidth: "209px",
                  }}
                  property1="default"
                />
              </>
            )}

            {screen === "mobile" && (
              <>
                <p className="get-exclusive-3">Get exclusive promotions &amp; updates straight to your inbox.</p>
                <div className="subscribe-widget-2">
                  <div className="enter-your-email-wrapper">
                    <input className="enter-your-email-2" />
                  </div>
                  <Button
                    href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
                    icon={
                      <Envelopesimple5
                        style={{
                          height: "20px",
                          minWidth: "20px",
                          position: "relative",
                        }}
                      />
                    }
                    property1="tertiary-filled"
                    style={{
                      alignSelf: "stretch",
                      width: "unset",
                    }}
                    text="Subscribe"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="frame-5" style={frameStyle}>
        <img
          className="divider"
          alt="Divider"
          src={
            screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/48796276b7b58aa5cb2ae3f1f2a6a92c/img/divider-1.svg"
              : screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/48796276b7b58aa5cb2ae3f1f2a6a92c/img/divider-2.svg"
              : divider
          }
        />
        <p className="BEE-market-shipping">Ⓒ BEE Market. Shipping resources online.</p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  BEEMarketplace: PropTypes.string,
  divider: PropTypes.string,
};
