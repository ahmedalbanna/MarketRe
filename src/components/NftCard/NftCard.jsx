/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const NftCard = ({
  NFTName = "NFT Name",
  additionalInfo = true,
  artistName = "NFT Artist",
  NFTName1 = true,
  artistAvatarName = true,
  priceNumber = "1.63 USD",
  bidNumber = "15000 COINS",
  property1,
  style,
  imageStyle,
  imagePlaceholderStyle,
}) => {
  return (
    <div className={`NFT-card property-1-5-${property1}`} style={style}>
      <div className="image" style={imageStyle}>
        <div className="image-placeholder" style={imagePlaceholderStyle} />
      </div>
      <div className="NFT-info">
        <div className="artst-info">
          <div className="NFT-name">{NFTName}</div>
          {artistAvatarName && <div className="artist-avatar-name" />}
        </div>
        {additionalInfo && (
          <div className="additional-info-4">
            <div className="price">
              <div className="price-2">Price</div>
              <div className="element-USD-2">{priceNumber}</div>
            </div>
            <div className="highest-bid">
              <div className="PACKAGE">PACKAGE</div>
              <div className="element-COINS">{bidNumber}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

NftCard.propTypes = {
  NFTName: PropTypes.string,
  additionalInfo: PropTypes.bool,
  artistName: PropTypes.string,
  NFTName1: PropTypes.bool,
  artistAvatarName: PropTypes.bool,
  priceNumber: PropTypes.string,
  bidNumber: PropTypes.string,
  property1: PropTypes.oneOf(["small", "default"]),
};
