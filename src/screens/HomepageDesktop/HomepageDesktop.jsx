import React from "react";
import { CategoryCard } from "../../components/CategoryCard";
import { DiscoverMoreNfts } from "../../components/DiscoverMoreNfts";
import { Footer } from "../../components/Footer";
import { HeroSection } from "../../components/HeroSection";
import { HowItWorks } from "../../components/HowItWorks";
import { Navigation } from "../../components/Navigation";
import { NftHighlight } from "../../components/NftHighlight";
import { SubscribeWidget } from "../../components/SubscribeWidget";
import { TopRatedArtists } from "../../components/TopRatedArtists";
import { TrendingCollection } from "../../components/TrendingCollection";
import { Envelopesimple5 } from "../../icons/Envelopesimple5";
import { Eye6 } from "../../icons/Eye6";
import { Icon12 } from "../../icons/Icon12";
import { Icon13 } from "../../icons/Icon13";
import { Icon14 } from "../../icons/Icon14";
import { Paintbrush25 } from "../../icons/Paintbrush25";
import { Rocketlaunch13 } from "../../icons/Rocketlaunch13";
import { Twitterlogo4 } from "../../icons/Twitterlogo4";
import { User1 } from "../../icons/User1";
import "./style.css";

export const HomepageDesktop = () => {
  return (
    <div className="homepage-desktop">
      <Navigation
        buttonIcon={
          <User1
            style={{
              height: "20px",
              minWidth: "20px",
              position: "relative",
            }}
          />
        }
        href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
        property1="navigation-desktop"
        style={{
          alignSelf: "stretch",
          width: "unset",
        }}
      />
      <HeroSection
        buttonIcon={
          <Rocketlaunch13
            color="white"
            style={{
              height: "20px",
              minWidth: "20px",
              position: "relative",
            }}
          />
        }
        elementStyle={{
          flex: "unset",
        }}
        heroSectionFrameStyle={{
          alignItems: "flex-start",
          marginLeft: "-80.00px",
          marginRight: "-80.00px",
        }}
        heroTextButtonsStyle={{
          gap: "30px",
        }}
        highlightedNftStyle={{
          alignItems: "center",
          flex: "1",
          width: "unset",
        }}
        screen="dekstop"
        style={{
          alignSelf: "stretch",
          width: "unset",
        }}
      />
      <TrendingCollection
        screen="desktop"
        style={{
          alignSelf: "stretch",
          width: "unset",
        }}
      />
      <TopRatedArtists
        artistCardsGridStyle={{
          alignSelf: "unset",
          marginLeft: "-80.00px",
          marginRight: "-80.00px",
          width: "fit-content",
        }}
        artistCardsRowStyle={{
          alignSelf: "unset",
          width: "1050px",
        }}
        artistCardsRowStyleOverride={{
          alignSelf: "unset",
          width: "1050px",
        }}
        buttonIcon={
          <Rocketlaunch13
            color="#A259FF"
            style={{
              height: "20px",
              minWidth: "20px",
              position: "relative",
            }}
          />
        }
        divStyle={{
          alignSelf: "unset",
          width: "1050px",
        }}
        screen="desktop"
        sectionHeadlineStyle={{
          alignSelf: "unset",
          marginLeft: "-80.00px",
          marginRight: "-80.00px",
          width: "1050px",
        }}
        sectionHeadlineStyleOverride={{
          flex: "unset",
          width: "703px",
        }}
        style={{
          alignItems: "center",
          alignSelf: "stretch",
          width: "unset",
        }}
      />
      <div className="browse-categories">
        <div className="section-headline-10">
          <div className="text-wrapper-4">Browse Categories</div>
        </div>
        <div className="category-cards-grid">
          <div className="category-cards-row">
            <CategoryCard
              categoryName="Art"
              property1="category-card"
              style={{
                flex: "1",
                width: "unset",
              }}
            />
            <CategoryCard
              categoryName="Collectibles"
              property1="category-card"
              style={{
                flex: "1",
                width: "unset",
              }}
            />
            <CategoryCard
              categoryName="Music"
              property1="category-card"
              style={{
                flex: "1",
                width: "unset",
              }}
            />
            <CategoryCard
              categoryName="Photography"
              property1="category-card"
              style={{
                flex: "1",
                width: "unset",
              }}
            />
          </div>
          <div className="category-cards-row-2">
            <CategoryCard
              categoryName="Video"
              property1="category-card"
              style={{
                flex: "1",
                width: "unset",
              }}
            />
            <CategoryCard
              categoryName="Utility"
              property1="category-card"
              style={{
                flex: "1",
                width: "unset",
              }}
            />
            <div className="category-card-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="image-placeholder-wrapper">
                    <div className="image-placeholder-2" />
                  </div>
                  <div className="paint-brush-wrapper">
                    <Paintbrush25
                      style={{
                        height: "100px",
                        minWidth: "100px",
                        position: "relative",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="collection-name-2">
                <div className="category-name-2">Sport</div>
              </div>
            </div>
            <div className="category-card-3">
              <div className="photo-icon-2">
                <div className="overlap-group-3">
                  <div className="image-placeholder-3">
                    <div className="image-placeholder-4" />
                  </div>
                  <div className="paintbrush-25-wrapper">
                    <Paintbrush25
                      style={{
                        height: "100px",
                        minWidth: "100px",
                        position: "relative",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="collection-name-3">
                <div className="category-name-3">Virtual Worlds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DiscoverMoreNfts
        NFTCardDivStyle={{
          flex: "unset",
        }}
        NFTCardImagePlaceholderStyle={{
          flex: "unset",
        }}
        NFTCardImagePlaceholderStyleOverride={{
          flex: "unset",
        }}
        NFTCardImagePlaceholderWrapperStyle={{
          flex: "unset",
        }}
        NFTCardImageStyle={{
          flex: "unset",
        }}
        NFTCardImageStyleOverride={{
          flex: "unset",
        }}
        NFTCardNftName="Distant Galaxy"
        NFTCardNftName1="Life On Edena"
        NFTCardNftName2="Astrofiction"
        NFTCardsRowStyle={{
          alignSelf: "unset",
          marginLeft: "-80.00px",
          marginRight: "-80.00px",
          width: "1050px",
        }}
        buttonIcon={
          <Eye6
            style={{
              height: "20px",
              minWidth: "20px",
              position: "relative",
            }}
          />
        }
        screen="desktop"
        sectionHeadlineStyle={{
          alignSelf: "unset",
          marginLeft: "-80.00px",
          marginRight: "-80.00px",
          width: "1050px",
        }}
        style={{
          alignItems: "center",
          alignSelf: "stretch",
          width: "unset",
        }}
      />
      <NftHighlight
        buttonIcon={
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
        frameStyle={{
          marginLeft: "-80.00px",
          marginRight: "-80.00px",
        }}
        screen="desktop"
        style={{
          alignSelf: "stretch",
          width: "unset",
        }}
      />
      <HowItWorks
        cardRowStyle={{
          alignSelf: "unset",
          marginLeft: "-80.00px",
          marginRight: "-80.00px",
          width: "fit-content",
        }}
        findOutHowToGetStyle={{
          alignSelf: "unset",
          width: "1050px",
        }}
        howItWorksStyle={{
          alignSelf: "unset",
          width: "1050px",
        }}
        infoCardIcon={
          <Icon12
            style={{
              height: "250px",
              minWidth: "250px",
              position: "relative",
            }}
          />
        }
        infoCardIcon1={
          <Icon14
            style={{
              height: "250px",
              minWidth: "250px",
              position: "relative",
            }}
          />
        }
        infoCardPropertyInfoCardStyle={{
          alignSelf: "stretch",
        }}
        infoCardPropertyInfoCardStyleOverride={{
          alignSelf: "stretch",
        }}
        override={
          <Icon13
            style={{
              height: "250px",
              minWidth: "250px",
              position: "relative",
            }}
          />
        }
        screen="desktop"
        sectionHeadlineStyle={{
          alignSelf: "unset",
          marginLeft: "-80.00px",
          marginRight: "-80.00px",
          width: "fit-content",
        }}
        style={{
          alignItems: "center",
          alignSelf: "stretch",
          width: "unset",
        }}
      />
      <SubscribeWidget
        frameStyle={{
          flex: "unset",
          width: "425px",
        }}
        screen="desktop"
        style={{
          alignItems: "center",
          alignSelf: "stretch",
          padding: "40px 195px 80px",
          width: "unset",
        }}
        subscribeFormButtonIcon={
          <Envelopesimple5
            style={{
              height: "20px",
              minWidth: "20px",
              position: "relative",
            }}
          />
        }
        subscribeWidgetStyle={{
          alignSelf: "unset",
          marginLeft: "-80.00px",
          marginRight: "-80.00px",
          width: "1050px",
        }}
      />
      <Footer
        BEEMarketplace="https://generation-sessions.s3.amazonaws.com/48796276b7b58aa5cb2ae3f1f2a6a92c/img/bee-marketplace-7.svg"
        beeLogoBeeLogoStyle={{
          backgroundImage:
            "url(https://generation-sessions.s3.amazonaws.com/48796276b7b58aa5cb2ae3f1f2a6a92c/img/bee-logo-1-8@2x.png)",
          left: "0",
          position: "absolute",
          top: "0",
        }}
        divider="https://generation-sessions.s3.amazonaws.com/48796276b7b58aa5cb2ae3f1f2a6a92c/img/divider-3.svg"
        footerInfoStyle={{
          alignSelf: "unset",
          marginLeft: "-48.71px",
          marginRight: "-48.71px",
          width: "fit-content",
        }}
        frameStyle={{
          alignSelf: "unset",
          marginLeft: "-79.71px",
          marginRight: "-79.71px",
          width: "1049.41px",
        }}
        icon={
          <Twitterlogo4
            style={{
              height: "32px",
              minWidth: "32px",
              position: "relative",
            }}
          />
        }
        screen="desktop"
        style={{
          alignItems: "center",
          alignSelf: "stretch",
          gap: "30px",
          height: "auto",
          mixBlendMode: "normal",
          width: "unset",
        }}
      />
    </div>
  );
};
