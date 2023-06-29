import { stakingABI, stakingAddress, nftABI, nftAddress } from "../../data/contats";
import { useAccount, useSigner } from "wagmi";
import toast, { Toaster } from "react-hot-toast";
import { ethers } from "ethers";

export const NFTCard = ({ nft }) => {
    const { address, isConnected } = useAccount();
    const { data: signer } = useSigner();

    const nftContract = new ethers.Contract(nftAddress, nftABI, signer);

    const stakeNFT = async(tokenId) => {
        if(!isConnected) {
            toast("Please connect your wallet 🦊")
        } else {
            const stakingContract = new ethers.Contract(stakingAddress, stakingABI, signer);
            const isApproved = await nftContract.isApprovedForAll(address, stakingAddress);
            if(!isApproved) {
                try{
                    await nftContract.setApprovalForAll(stakingAddress, true);
                    toast.success("Approved succesfully")
                } catch(error) {
                    toast.error(`Error ${error.code}`);
                }
            } else {
                try{
                    await stakingContract.stake([tokenId]);
                    toast.success(`Your NFT ${tokenId} has been staked succesfully`)
                } catch(error) {
                    toast.error(`Error ${error.code}`);
                }
            }
            //console.log(nftContract)
        }
    }

    function hexToDex(hex) {
        return parseInt(hex, 16)
    }

    return (
        <div className="w-full flex flex-col max-w-md min-h-max bg-white border border-gray-200 rounded-lg shadow-soft-xl dark:bg-gray-800 dark:border-zinc-200">
            <Toaster />
            <div className="rounded-md">
                <img className="object-cover h-128 w-full rounded-lg" src={nft.media[0].gateway} ></img>
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-50 rounded-b-md h-110">
                <div className="mt-2">
                    <h2 className="text-xl text-gray-800 justify-center flex">Gorilla Collection 🦍</h2>
                    <p className="text-gray-600 mt-2 justify-center flex">#{hexToDex(nft.id.tokenId)}</p>
                </div>

                {/*<div className="flex-grow mt-2">
                    <p className="text-gray-600">Description: {nft.description?.substr(0, 150)}</p>
                </div>*/}
                <div className="flex justify-center mb-2 mt-3">
                    <button onClick={() => stakeNFT(nft.id.tokenId)} className="py-2 px-4 bg-indigo-600 w-10/12 text-center rounded-lg text-white cursor-pointer">Stake</button> 
                    {/*<button className="py-2 px-4 bg-indigo-600 w-10/12 text-center rounded-lg text-white cursor-pointer">Stake</button>*/}
                </div>
            </div>
        </div>
    )
}
