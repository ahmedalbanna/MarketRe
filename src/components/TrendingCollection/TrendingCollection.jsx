/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CollectionCard } from "../CollectionCard";
import "./style.css";

export const TrendingCollection = ({ screen, style }) => {
  return (
    <div className={`trending-collection screen-1-${screen}`} style={style}>
      <div className="section-headline">
        <div className="heading">
          <div className="text-wrapper-2">Trending Collection</div>
        </div>
        <div className="subhead">
          <p className="checkout-our-weekly">
            {screen === "desktop" && <>Checkout Our Weekly Updated Trending Collection.</>}

            {["mobile", "tablet"].includes(screen) && <>Checkout our weekly updated trending collection.</>}
          </p>
        </div>
      </div>
      <div className="collection-card-row">
        {screen === "desktop" && (
          <>
            <CollectionCard
              additionalNftsNumber="1025+"
              collectionName="Happy Robots"
              frameStyle={{
                display: "none",
                width: "0",
              }}
              property1="desktop-card"
            />
            <CollectionCard
              additionalNftsNumber="1025+"
              collectionName="Happy Robots"
              frameStyle={{
                display: "none",
                width: "0",
              }}
              property1="desktop-card"
            />
          </>
        )}

        {["desktop", "tablet"].includes(screen) && (
          <CollectionCard additionalNftsNumber="1025+" collectionName="Happy Robots" property1="desktop-card" />
        )}

        {screen === "tablet" && (
          <CollectionCard additionalNftsNumber="1025+" collectionName="Happy Robots" property1="desktop-card" />
        )}

        {screen === "mobile" && (
          <CollectionCard
            additionalNftsNumber="1025+"
            collectionName="Happy Robots"
            property1="mobile-card"
            style={{
              flex: "1",
              width: "unset",
            }}
          />
        )}
      </div>
    </div>
  );
};

TrendingCollection.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};
