/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { PropertyMediumWrapper } from "../PropertyMediumWrapper";
import "./style.css";

export const ArtistCard = ({
  rankingNumber2 = true,
  additionalInfo = true,
  artistName = "Dish Studio",
  totalSales = "Total Sales:",
  rankingNumber = "1",
  salesNumber = "34.53 USD",
  property1,
  style,
  dishStudioStyle,
}) => {
  return (
    <div className={`artist-card ${property1}`} style={style}>
      {["default", "horizontal-big"].includes(property1) && (
        <>
          <div className="artist-avatar">
            <PropertyMediumWrapper
              property1={property1 === "horizontal-big" ? "medium" : "big"}
              style={
                property1 === "horizontal-big"
                  ? {
                      width: "60px",
                    }
                  : {
                      width: "120px",
                    }
              }
            />
          </div>
          <div className="artist-info">
            <div className="dish-studio">{artistName}</div>
            {additionalInfo && (
              <div className="additional-info-3">
                <div className="total-sales">{totalSales}</div>
                <div className="element-USD">{salesNumber}</div>
              </div>
            )}
          </div>
          <>
            {rankingNumber2 && (
              <div className="ranking-number">
                <div className="element-7">{rankingNumber}</div>
              </div>
            )}
          </>
        </>
      )}

      {["horizontal-medium", "horizontal-small"].includes(property1) && (
        <>
          <PropertyMediumWrapper
            property1="small"
            style={{
              transition: "all 0.3s ease",
            }}
          />
          <div className="dish-studio-2" style={dishStudioStyle}>
            {artistName}
          </div>
        </>
      )}
    </div>
  );
};

ArtistCard.propTypes = {
  rankingNumber2: PropTypes.bool,
  additionalInfo: PropTypes.bool,
  artistName: PropTypes.string,
  totalSales: PropTypes.string,
  rankingNumber: PropTypes.string,
  salesNumber: PropTypes.string,
  property1: PropTypes.oneOf(["horizontal-medium", "horizontal-big", "horizontal-small", "default"]),
};
