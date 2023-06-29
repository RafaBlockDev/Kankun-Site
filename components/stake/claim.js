import { stakingABI, stakingAddress, nftABI, nftAddress, tokenAddress } from "../../data/contats";
import { useAccount, useSigner } from "wagmi";
import toast, { Toaster } from "react-hot-toast";
import { useContract, useTokenBalance, Web3Button } from "@thirdweb-dev/react";
import { ethers, BigNumberish } from "ethers";
import { useEffect, useState } from "react";

export const ClaimCard = ({ nft }) => {
    const { address, isConnected } = useAccount();
    const { contract, isLoading } = useContract(stakingAddress);
    const { contract: tokenContract } = useContract(tokenAddress, "token");
    const [claimableRewards, setClaimableRewards] = useState();
    const { data: signer } = useSigner();
    
    useEffect(() =>{
        if(!address) return;

        const stakingContract = new ethers.Contract(stakingAddress, stakingABI, signer);
        async function loadClaimableRewards() {
            const stakeInfo = await stakingContract.getStakeInfo(address);
            setClaimableRewards(stakeInfo[1]);
        }

        loadClaimableRewards();
    }, [address, contract]);

    const nftContract = new ethers.Contract(nftAddress, nftABI, signer);

    const claim = async() => {
        if(!isConnected) {
            toast("Please connect your wallet 🦊")
        } else {
            const stakingContract = new ethers.Contract(stakingAddress, stakingABI, signer);
            try{
                await stakingContract.claimRewards();
                toast.success("Claimed succesully");
            } catch(error) {
                toast.error(`Error: ${error.code}`);
                error
            }
        }
    }

    function fixUnits(
        value,
        decimals,
        maxDecimalDigits
      ) {
        return ethers.FixedNumber.from(ethers.utils.formatUnits(value, decimals))
          .round(maxDecimalDigits ?? ethers.BigNumber.from(decimals).toNumber())
          .toString();
      }

    return (
        <div className="w-full flex flex-col max-w-md min-h-max rounded-lg shadow-soft-x">
            <Toaster />
            <div className="flex justify-center">
                {/*<p className="text-black text-lg mb-5 underline">O $JERS 😞</p>*/}
                <p className="text-black text-lg mb-5 underline">
                <b>
                    {
                        !claimableRewards
                        ? "Loading..."
                        : fixUnits(ethers.BigNumber.from(`${claimableRewards}`), 18, 1)
                    }
                </b> 🪙
                {/*tokenBalance?.displayValue*/}
                </p>
            </div>
            <div className="flex justify-center mb-2 mt-3">
                <button onClick={() => claim()} className="flex justify-center py-3 px-14 bg-indigo-600 w-10/12 text-center rounded-lg text-white cursor-pointer">Claim</button>
                {/*<button className="flex justify-center py-3 px-14 bg-indigo-600 w-10/12 text-center rounded-lg text-white cursor-pointer">Claim</button>*/}
            </div>
        </div>
    )
}
