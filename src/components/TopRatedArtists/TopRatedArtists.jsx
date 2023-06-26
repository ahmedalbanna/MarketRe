/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Rocketlaunch13 } from "../../icons/Rocketlaunch13";
import { ArtistCard } from "../ArtistCard";
import { Button } from "../Button";
import "./style.css";

export const TopRatedArtists = ({
  screen,
  style,
  sectionHeadlineStyle,
  sectionHeadlineStyleOverride,
  buttonIcon = (
    <Rocketlaunch13
      color="#A259FF"
      style={{
        height: "20px",
        minWidth: "20px",
        position: "relative",
      }}
    />
  ),
  artistCardsGridStyle,
  artistCardsRowStyle,
  artistCardsRowStyleOverride,
  divStyle,
}) => {
  return (
    <div className={`top-rated-artists screen-15-${screen}`} style={style}>
      {["desktop", "tablet"].includes(screen) && (
        <>
          <div className="section-headline-2" style={sectionHeadlineStyle}>
            <div className="section-headline-3" style={sectionHeadlineStyleOverride}>
              <div className="top-games-wrapper">
                <div className="top-games">Top Games</div>
              </div>
              <div className="checkout-top-rated-wrapper">
                <p className="checkout-top-rated">
                  {screen === "desktop" && <>Checkout Top Rated Games On The Bee Marketplace</>}

                  {screen === "tablet" && <>Checkout Top Rated Games on the Bee Marketplace</>}
                </p>
              </div>
            </div>
            <Button icon={buttonIcon} property1="secondary-outlined" text="View Rankings" />
          </div>
          <div className="artist-cards-grid" style={artistCardsGridStyle}>
            <div className="artist-cards-row" style={artistCardsRowStyle}>
              <ArtistCard
                artistName="Dish Studio"
                property1={screen === "desktop" ? "default" : "horizontal-big"}
                rankingNumber="1"
                salesNumber="34.53 USD"
                style={{
                  flex: "1",
                  width: "unset",
                }}
                totalSales="Total Sales:"
              />
              <ArtistCard
                artistName="Dish Studio"
                property1={screen === "tablet" ? "horizontal-big" : "default"}
                rankingNumber="1"
                salesNumber="34.53 USD"
                style={{
                  flex: "1",
                  width: "unset",
                }}
                totalSales="Total Sales:"
              />
              {screen === "desktop" && (
                <>
                  <ArtistCard
                    artistName="Dish Studio"
                    property1="default"
                    rankingNumber="1"
                    salesNumber="34.53 USD"
                    style={{
                      flex: "1",
                      width: "unset",
                    }}
                    totalSales="Total Sales:"
                  />
                  <ArtistCard
                    artistName="Dish Studio"
                    property1="default"
                    rankingNumber="1"
                    salesNumber="34.53 USD"
                    style={{
                      flex: "1",
                      width: "unset",
                    }}
                    totalSales="Total Sales:"
                  />
                </>
              )}
            </div>
            <div className="artist-cards-row-2" style={artistCardsRowStyleOverride}>
              <ArtistCard
                artistName="Dish Studio"
                property1={screen === "desktop" ? "default" : "horizontal-big"}
                rankingNumber="1"
                salesNumber="34.53 USD"
                style={{
                  flex: "1",
                  width: "unset",
                }}
                totalSales="Total Sales:"
              />
              <ArtistCard
                artistName="Dish Studio"
                property1={screen === "tablet" ? "horizontal-big" : "default"}
                rankingNumber="1"
                salesNumber="34.53 USD"
                style={{
                  flex: "1",
                  width: "unset",
                }}
                totalSales="Total Sales:"
              />
              {screen === "desktop" && (
                <>
                  <ArtistCard
                    artistName="Dish Studio"
                    property1="default"
                    rankingNumber="1"
                    salesNumber="34.53 USD"
                    style={{
                      flex: "1",
                      width: "unset",
                    }}
                    totalSales="Total Sales:"
                  />
                  <ArtistCard
                    artistName="Dish Studio"
                    property1="default"
                    rankingNumber="1"
                    salesNumber="34.53 USD"
                    style={{
                      flex: "1",
                      width: "unset",
                    }}
                    totalSales="Total Sales:"
                  />
                </>
              )}
            </div>
            <div className="artist-cards-row-3" style={divStyle}>
              <ArtistCard
                artistName="Dish Studio"
                property1={screen === "desktop" ? "default" : "horizontal-big"}
                rankingNumber="1"
                salesNumber="34.53 USD"
                style={{
                  flex: "1",
                  width: "unset",
                }}
                totalSales="Total Sales:"
              />
              <ArtistCard
                artistName="Dish Studio"
                property1={screen === "tablet" ? "horizontal-big" : "default"}
                rankingNumber="1"
                salesNumber="34.53 USD"
                style={{
                  flex: "1",
                  width: "unset",
                }}
                totalSales="Total Sales:"
              />
              {screen === "desktop" && (
                <>
                  <ArtistCard
                    artistName="Dish Studio"
                    property1="default"
                    rankingNumber="1"
                    salesNumber="34.53 USD"
                    style={{
                      flex: "1",
                      width: "unset",
                    }}
                    totalSales="Total Sales:"
                  />
                  <ArtistCard
                    artistName="Dish Studio"
                    property1="default"
                    rankingNumber="1"
                    salesNumber="34.53 USD"
                    style={{
                      flex: "1",
                      width: "unset",
                    }}
                    totalSales="Total Sales:"
                  />
                </>
              )}
            </div>
          </div>
        </>
      )}

      {screen === "mobile" && (
        <>
          <div className="section-headline-wrapper">
            <div className="section-headline-4">
              <div className="div-wrapper">
                <div className="top-games-2">Top Games</div>
              </div>
              <div className="p-wrapper">
                <p className="checkout-top-rated-2">Checkout Top Rated Games on the Bee Marketplace</p>
              </div>
            </div>
          </div>
          <div className="artist-cards-row-4">
            <ArtistCard
              artistName="Dish Studio"
              property1="horizontal-big"
              rankingNumber="1"
              salesNumber="34.53 USD"
              style={{
                alignSelf: "stretch",
                width: "unset",
              }}
              totalSales="Total Sales:"
            />
            <ArtistCard
              artistName="Dish Studio"
              property1="horizontal-big"
              rankingNumber="1"
              salesNumber="34.53 USD"
              style={{
                alignSelf: "stretch",
                width: "unset",
              }}
              totalSales="Total Sales:"
            />
            <ArtistCard
              artistName="Dish Studio"
              property1="horizontal-big"
              rankingNumber="1"
              salesNumber="34.53 USD"
              style={{
                alignSelf: "stretch",
                width: "unset",
              }}
              totalSales="Total Sales:"
            />
            <ArtistCard
              artistName="Dish Studio"
              property1="horizontal-big"
              rankingNumber="1"
              salesNumber="34.53 USD"
              style={{
                alignSelf: "stretch",
                width: "unset",
              }}
              totalSales="Total Sales:"
            />
            <ArtistCard
              artistName="Dish Studio"
              property1="horizontal-big"
              rankingNumber="1"
              salesNumber="34.53 USD"
              style={{
                alignSelf: "stretch",
                width: "unset",
              }}
              totalSales="Total Sales:"
            />
          </div>
          <div className="button-wrapper">
            <Button
              icon={
                <Rocketlaunch13
                  color="#A259FF"
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
              text="View Rankings"
            />
          </div>
        </>
      )}
    </div>
  );
};

TopRatedArtists.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};
