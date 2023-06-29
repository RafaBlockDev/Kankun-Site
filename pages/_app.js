import React from 'react';
import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ThirdwebProvider } from "@thirdweb-dev/react";

const { chains, provider } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: "LGwz4IwmefLdzez-ECFETqU2_ONq2_Ff" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Jttribe Stake',
  projectId: '552b4ede6ba4d5f2e7f5f911aec48bad',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }) {
  return (
      <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider modalSize="compact" chains={chains}>
            <ThirdwebProvider activeChain={"ethereum"}>
              <ThemeProvider attribute="class">
                <Component {...pageProps} />
              </ThemeProvider>
            </ThirdwebProvider>
          </RainbowKitProvider>
      </WagmiConfig>
  );
}

export default MyApp;