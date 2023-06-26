import { NftCard } from ".";

export default {
  title: "Components/NftCard",
  component: NftCard,
};

export const Default = {
  args: {
    NFTName: "NFT Name",
    additionalInfo: true,
    artistName: "NFT Artist",
    NFTName1: true,
    artistAvatarName: true,
    priceNumber: "1.63 USD",
    bidNumber: "15000 COINS",
    property1: "small",
    style: {},
    imageStyle: {},
    imagePlaceholderStyle: {},
  },
};
