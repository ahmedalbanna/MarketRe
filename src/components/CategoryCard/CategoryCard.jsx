/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Paintbrush25 } from "../../icons/Paintbrush25";
import "./style.css";

export const CategoryCard = ({ categoryName = "Category", property1, style, photoIconStyle, categoryIconStyle }) => {
  return (
    <div className={`category-card property-1-${property1}`} style={style}>
      <div className="photo-icon" style={photoIconStyle}>
        <div className="category-icon" style={categoryIconStyle}>
          <Paintbrush25
            style={
              property1 === "category-card-small"
                ? {
                    height: "80px",
                    minWidth: "80px",
                    position: "relative",
                    transition: "all 0.3s ease",
                  }
                : {
                    height: "100px",
                    minWidth: "100px",
                    position: "relative",
                    transition: "all 0.3s ease",
                  }
            }
          />
        </div>
      </div>
      <div className="category-name-wrapper">
        <div className="category-name">{categoryName}</div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  categoryName: PropTypes.string,
  property1: PropTypes.oneOf(["category-card-small", "category-card"]),
};
