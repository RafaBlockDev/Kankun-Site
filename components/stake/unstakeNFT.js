import { stakingABI, stakingAddress, nftABI, nftAddress } from "../../data/contats";
import { useAccount, useSigner } from "wagmi";
import toast, { Toaster } from "react-hot-toast";
import { ethers } from "ethers";
import {
    ThirdwebNftMedia,
    useContract,
    useNFT,
    Web3Button,
} from "@thirdweb-dev/react";

export const UnstakeNFT = ({ tokenId }) => {
    const { address, isConnected } = useAccount();
    const { data: signer } = useSigner();
    const { contract } = useContract(nftAddress, "nft-drop");
    const { data: nft } = useNFT(contract, tokenId);

    const nftContract = new ethers.Contract(nftAddress, nftABI, signer);

    const getData = async() => {
        const contract = new ethers.Contract(stakingAddress, stakingABI, signer);
        const overNFT = await contract.getStakeInfo(address);
        console.log("Over NFT: ", overNFT)
    }

    const unstakeNFT = async(tokenId) => {
        if(!isConnected) {
            toast("Please connect your wallet 🦊")
        } else {
            const stakingContract = new ethers.Contract(stakingAddress, stakingABI, signer);
            //const claimRewards = await stakingContract.claimRewards();
            try{
                await stakingContract.withdraw([tokenId]);
                toast.success("Unstaked succesfully")
            } catch(error){
                toast.error(`Error ${error.code}`);
            }
        }
    }
    
    return (
        <>
        {nft && (
        <div className="w-auto bg-white rounded-lg shadow-soft-xl">
            <Toaster />
            <br />
            <div className="rounded-lg">
                {nft.metadata && (
                    <ThirdwebNftMedia className="object-cover w-full rounded-md" width={"200px"} height={"200px"} metadata={nft.metadata}/>
                )}
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-50 rounded-b-md">
                <div className="mt-2">
                    <h2 className="text-xl text-black">Gorilla Collection 🦍</h2>
                    <p className="text-gray-600 mt-2 justify-center flex">#{nft.metadata.id}</p>
                </div>
                    {/*<div className="flex-grow mt-2">
                        <p className="text-gray-600">Description: {nft.description?.substr(0, 150)}</p>
                    </div>*/}
                <div className="flex justify-center mb-2 mt-3">
                    <button onClick={() => unstakeNFT(nft.metadata.id)} className="py-2 px-4 bg-indigo-600 w-10/12 text-center rounded-lg text-white cursor-pointer">Unstake</button>
                    {/*<button className="py-2 px-4 bg-indigo-600 w-10/12 text-center rounded-lg text-white cursor-pointer">Unstake</button>*/}
                </div>
            </div>
        </div>
        )}
        </>
    )
}
