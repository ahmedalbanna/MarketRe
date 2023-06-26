/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Eye6 } from "../../icons/Eye6";
import { Button } from "../Button";
import { NftCard } from "../NftCard";
import "./style.css";

export const DiscoverMoreNfts = ({
  screen,
  style,
  sectionHeadlineStyle,
  buttonIcon = (
    <Eye6
      style={{
        height: "20px",
        minWidth: "20px",
        position: "relative",
      }}
    />
  ),
  NFTCardsRowStyle,
  NFTCardNftName = "Nft Name",
  NFTCardImageStyle,
  NFTCardImagePlaceholderStyle,
  NFTCardNftName1 = "Nft Name",
  NFTCardImageStyleOverride,
  NFTCardImagePlaceholderStyleOverride,
  NFTCardNftName2 = "Nft Name",
  NFTCardImagePlaceholderWrapperStyle,
  NFTCardDivStyle,
}) => {
  return (
    <div className={`discover-more-nfts screen-20-${screen}`} style={style}>
      {["desktop", "tablet"].includes(screen) && (
        <>
          <div className="section-headline-5" style={sectionHeadlineStyle}>
            <div className="section-headline-6">
              <div className="discover-more-bee">Discover More Bee</div>
              <div className="explore-new-trending">
                {screen === "desktop" && <>Explore New Trending Bees</>}

                {screen === "tablet" && <>Explore new trending BEEs</>}
              </div>
            </div>
            <Button icon={buttonIcon} property1="secondary-outlined" text="See All" />
          </div>
          <div className="NFT-cards-row" style={NFTCardsRowStyle}>
            {screen === "desktop" && (
              <>
                <NftCard
                  NFTName={NFTCardNftName}
                  bidNumber="15000 COINS"
                  imagePlaceholderStyle={NFTCardImagePlaceholderStyle}
                  imageStyle={NFTCardImageStyle}
                  priceNumber="1.63 USD"
                  property1="default"
                  style={{
                    flex: "1",
                    width: "unset",
                  }}
                />
                <NftCard
                  NFTName={NFTCardNftName1}
                  bidNumber="15000 COINS"
                  imagePlaceholderStyle={NFTCardImagePlaceholderStyleOverride}
                  imageStyle={NFTCardImageStyleOverride}
                  priceNumber="1.63 USD"
                  property1="default"
                  style={{
                    flex: "1",
                    width: "unset",
                  }}
                />
                <NftCard
                  NFTName={NFTCardNftName2}
                  bidNumber="15000 COINS"
                  imagePlaceholderStyle={NFTCardDivStyle}
                  imageStyle={NFTCardImagePlaceholderWrapperStyle}
                  priceNumber="1.63 USD"
                  property1="default"
                  style={{
                    flex: "1",
                    width: "unset",
                  }}
                />
              </>
            )}

            {screen === "tablet" && (
              <>
                <NftCard
                  NFTName="Nft Name"
                  bidNumber="15000 COINS"
                  priceNumber="1.63 USD"
                  property1="default"
                  style={{
                    flex: "1",
                    width: "unset",
                  }}
                />
                <NftCard
                  NFTName="Nft Name"
                  bidNumber="15000 COINS"
                  priceNumber="1.63 USD"
                  property1="default"
                  style={{
                    flex: "1",
                    width: "unset",
                  }}
                />
              </>
            )}
          </div>
        </>
      )}

      {screen === "mobile" && (
        <>
          <div className="section-headline-7">
            <div className="section-headline-8">
              <div className="discover-more-bee-2">Discover More Bee</div>
              <div className="explore-new-trending-2">Explore new trending BEEs</div>
            </div>
          </div>
          <div className="frame-2">
            <div className="NFT-card-wrapper">
              <NftCard
                NFTName="Nft Name"
                bidNumber="15000 COINS"
                imagePlaceholderStyle={{
                  minWidth: "315px",
                }}
                priceNumber="1.63 USD"
                property1="small"
                style={{
                  flex: "1",
                  width: "unset",
                }}
              />
            </div>
            <div className="NFT-card-instance-wrapper">
              <NftCard
                NFTName="Nft Name"
                bidNumber="15000 COINS"
                imagePlaceholderStyle={{
                  minWidth: "315px",
                }}
                priceNumber="1.63 USD"
                property1="small"
                style={{
                  flex: "1",
                  width: "unset",
                }}
              />
            </div>
            <div className="NFT-cards-row-2">
              <NftCard
                NFTName="Nft Name"
                bidNumber="15000 COINS"
                imagePlaceholderStyle={{
                  minWidth: "315px",
                }}
                priceNumber="1.63 USD"
                property1="small"
                style={{
                  flex: "1",
                  width: "unset",
                }}
              />
            </div>
          </div>
          <div className="button-instance-wrapper">
            <Button
              icon={
                <Eye6
                  style={{
                    height: "20px",
                    minWidth: "20px",
                    position: "relative",
                  }}
                />
              }
              property1="secondary-outlined"
              style={{
                flex: "1",
                width: "unset",
              }}
              text="See All"
            />
          </div>
        </>
      )}
    </div>
  );
};

DiscoverMoreNfts.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  NFTCardNftName: PropTypes.string,
  NFTCardNftName1: PropTypes.string,
  NFTCardNftName2: PropTypes.string,
};
