/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArtistCard } from "../ArtistCard";
import "./style.css";

export const CollectionCard = ({
  collectionName = "Happy Robots",
  additionalNftsNumber = "1025+",
  property1,
  frameStyle,
  style,
}) => {
  return (
    <div className={`collection-card ${property1}`} style={style}>
      <div className="photos-number-of">
        <div className="primary-photo" />
        <div className="frame" style={frameStyle}>
          <div className="secondary-photo" />
          <div className="secondary-photo-2" />
          <div className="number-of-additional">
            <div className="element-6">{additionalNftsNumber}</div>
          </div>
        </div>
      </div>
      <div className="collection-info">
        <div className="collection-name">{collectionName}</div>
        {property1 === "mobile-card" && (
          <ArtistCard
            artistName="@Robotica"
            dishStudioStyle={{
              flex: "1",
              marginTop: "-1.00px",
              width: "unset",
            }}
            property1="horizontal-small"
            style={{
              alignItems: "flex-start",
              alignSelf: "stretch",
              backgroundColor: "unset",
              padding: "unset",
              width: "unset",
            }}
          />
        )}
      </div>
    </div>
  );
};

CollectionCard.propTypes = {
  collectionName: PropTypes.string,
  additionalNftsNumber: PropTypes.string,
  property1: PropTypes.oneOf(["desktop-card", "mobile-card"]),
};
