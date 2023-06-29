import Container from "../container";
import React, { useEffect, useState } from "react";
import { NFTCard } from "./card";
import { ClaimCard } from "./claim";
import { UnstakeNFT } from "./unstakeNFT";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useAccount, useConnect, useDisconnect, useSigner } from "wagmi";
import toast, { Toaster } from "react-hot-toast";
import { stakingABI, stakingAddress, nftABI, nftAddress } from "../../data/contats";
import { ethers } from "ethers";
import Spinner from "../animation/spinner";

const OwnNFT = () => {
    const { address, isConnected } = useAccount();
    const [NFTs, setNFTs] = useState([])
    const [stakedNFTs, setStakedNFTs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { signer } = useSigner();

    const [loading, setLoading] = useState(true);

    const { contract, isLoading } = useContract(stakingAddress);
    const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [address]);

    useEffect(() => {
        fetchNFTs();
        fetchStakedNFTs();
        setIsLoaded(true);
    })
 
    const fetchNFTs = async() => {
        let nfts; 
        //console.log("fetching nfts");
        const api_key = "LGwz4IwmefLdzez-ECFETqU2_ONq2_Ff"
        const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`;
        const collection = "0x70E083F440096c3b0D215FFE50365C51897d0a86";
    
        if (!collection.length) {
          var requestOptions = {
            method: 'GET'
          };
          const fetchURL = `${baseURL}?owner=${address}`;
          nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
        } else {
          //console.log("get data: ", nfts);
          const fetchURL = `${baseURL}?owner=${address}&contractAddresses%5B%5D=${collection}`;
          nfts= await fetch(fetchURL, requestOptions).then(data => data.json())
        }
    
        if (nfts) {
          setNFTs(nfts.ownedNfts)
          setIsLoaded(true);
        }
        //console.log(stakedTokens)
    }

    /****** FETCH NFTs STAKED ******/
    
    const fetchStakedNFTs = async() => {
        if(!isConnected) return
        
        let nfts;
        const api_key = "zwCg_SYFQnVQ3Ef9igI186VIJCVci2sU"
        const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`;

        if(!nftAddress.length) {
            var requestOptions = {
                method: 'GET'
            };
            const fetchURL = `${baseURL}?owner=${stakingAddress}`;
            nfts = await fetch(fetchURL, requestOptions).then(data => data.arrayBuffer.json());
        } else {
            const fetchURL = `${baseURL}?owner=${stakingAddress}&contractAddresses%5B%5D=${nftAddress}`;
            nfts = await fetch(fetchURL, requestOptions).then(data => data.json());
        }

        if(nfts) {
            //const indexValue = parseInt(nfts.ownedNfts[0].id.tokenId)
            //const underNFTs = nfts.ownedNfts.filter(nft => )
            setStakedNFTs(nfts.ownedNfts);
            console.log(nfts.ownedNfts)
            setIsLoaded(true);
            //console.log("Second argument: ", stakedTokens)
        }
    }
    
    return (
        <>
        <Toaster />
        <Container>
            <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-black bg-white px-7 py-7 lg:px-8 lg:py-8 lg:flex-nowrap rounded-xl">
                <div className="flex-grow text-center lg:text-left">
                    <h2 className="text-2xl font-medium lg:text-3xl flex justify-center">
                        Your NFTs 👀
                    </h2>
                    <div className="flex flex-col items-center justify-center py-4 gap-y-3">
                        <div className="flex flex-col w-full justify-center items-center gap-y-2">
                            <div class="px-4 mx-auto max-w-screen-xl">
                                <div class="grid gap-12 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {NFTs.length && NFTs.map(nft => {
                                        return (
                                        <NFTCard nft={nft}></NFTCard>
                                        );
                                    })}
                                </div>
                                {/*<button onClick={stakeNFT}>
                                    CLIK ON
                                </button>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <Container>
                <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-black bg-white px-7 py-7 lg:px-8 lg:py-8 lg:flex-nowrap rounded-xl">
                <div className="flex-grow text-center lg:text-left">
                    <h2 className="text-2xl font-medium lg:text-3xl flex justify-center">
                        Your Staked NFTs 🦍
                    </h2>
                    <div className="flex flex-col items-center justify-center py-4 gap-y-3">
                        <div className="flex flex-col w-full justify-center items-center gap-y-2">
                            <div class="px-4 mx-auto max-w-screen-xl">
                                <div class="grid gap-12 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {stakedTokens && stakedTokens[0].map((stakedToken) => {
                                        return (
                                        <UnstakeNFT 
                                            tokenId={stakedToken.toNumber()}
                                            key={stakedToken.toString()}
                                        />
                                        );
                                    })}
                                    
                                    {/*{underNFTs && underNFTs.map(nft => (
                                        <UnstakeNFT nft={nft}></UnstakeNFT>
                                    ))}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <Container>
            <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-black bg-white px-7 py-7 lg:px-8 lg:py-8 lg:flex-nowrap rounded-xl">
                <div className="flex-grow text-center lg:text-left">
                    <h2 className="text-2xl font-medium lg:text-3xl flex justify-center">
                        Your $JERS Balance 💸
                    </h2>
                    <div className="flex flex-col items-center justify-center py-4 gap-y-3">
                        <div className="flex flex-col w-full justify-center items-center gap-y-2">
                            <div class="px-4 mx-auto max-w-screen-xl">
                                <div class="grid gap-12 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                                </div>
                                {/*<button onClick={fetchStakedNFTs}>
                                    CLIK ON
                                </button>*/}
                                <ClaimCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </>
    );
}

export default OwnNFT;