const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "TgomVhaNiwMAqSmozJMHlh9dr3BsYHnfU0Jre3nJ9I3ymX0bKdgUxnNEbJvW66Ue",
  });

  const address = "0xbf1f95c0a6E16D43bfe9de713eDbC7F6f63d4590";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    mediaItems: true,
    chain,
  });

  console.log(response.result);
  console.log(response.result[0].media.originalMediaUrl);
};

runApp();