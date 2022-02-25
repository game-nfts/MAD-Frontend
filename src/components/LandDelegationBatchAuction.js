import Button from "./Button";
import BatchAuctionImage from '../assets/auction_bg.svg';
import EthIcon from '../assets/eth_logo.svg';
import Hammer from '../assets/hammer.png';
import Gavel from '../assets/GAVEL_1.gif';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentEthPriceInUsd } from "../helpers/chainlink";

export default function LandDelegationBatchAuction(props) {

  const [auctionBidEth, handleAuctionBidEth] = useState(1.2);
  const [ethToDollars, handleEthToDollars] = useState('$--');
  const [hours, handleHours] = useState(20);
  const [minutes, handleMinutes] = useState(45);
  const [seconds, handleSeconds] = useState(9);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const val = (await getCurrentEthPriceInUsd()) * auctionBidEth;
      handleEthToDollars('$' + val.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
    })();
  }, [auctionBidEth]);

  return (
    <>
			<div className="flex flex-col-reverse md:flex-row md:justify-between">
        <div className="h-full w-full md:w-48/100">
          <div className="h-full relative flex flex-col w-full overflow-hidden md:overflow-visible my-8 md:my-auto">
            <div className="absolute top-0 right-0 left-0 right-0 z-10 h-full w-full">
              <img className="h-full w-full object-cover md:object-fill" src={BatchAuctionImage}/>
              <div className="absolute right-0 bottom-0 z-30">
                <img className="h-48 w-48 hidden md:block xl:h-56 xl:w-56 md:ml-24 md:-mr-24 lg:ml-12 lg:-mr-12 lg:-mb-4 lg:mt-4" src={Gavel}/>
              </div>
            </div>
            <div className="z-20 m-auto">
              <div className="h-full w-full -mt-4 mb-4 bg-gray-490 border-2 py-4 px-8 border-gray-60 shadow-aucbanner">
                <div className="text-center mb-0 md:mb-4 md:text-left text-2xl sm:text-3xl md:text-4xl">Auction</div>
                <div className="flex flex-row md:flex-col w-full justify-evenly md:justify-start">
                  <div className="mt-6 md:mt-2 lg:mt-4">
                    <div className="text-gray-80 mr-6 md:mr-0">Highest Bid</div>
                    <div className="flex flex-row my-2">
                      <img className="h-8 mr-2 my-auto" src={EthIcon}/>
                      <div className="text-4xl">{auctionBidEth}</div>
                    </div>
                    <div className="text-gray-80 text-sm">{ethToDollars}</div>
                  </div>
                  <div className="mt-6 md:mt-2 lg:mt-6">
                    <div className="text-gray-80 text-right md:text-left">Auction Ends In</div>
                    <div className="flex flex-row">
                      <div className="flex flex-col">
                        <div className="text-4xl font-bold my-2 md:mb-0 md:mt-1 text-right md:text-left">{hours}</div>
                        <div className="text-sm text-gray-80 text-center md:text-left">Hours</div>
                      </div>
                      <div className="flex flex-col mx-4 md:mx-8">
                        <div className="text-4xl font-bold my-2 md:mb-0 md:mt-1 text-right md:text-left">{minutes}</div>
                        <div className="text-sm text-gray-80 text-center md:text-left">Minutes</div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-4xl font-bold my-2 md:mb-0 md:mt-1 text-right md:text-left">{seconds}</div>
                        <div className="text-sm text-gray-80 text-center md:text-left">Seconds</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-48/100 md:my-10">
          <div className="w-full flex flex-col px-6 md:pl-0 md:pr-16">
            <div className="text-purple-mad-purple text-3xl md:text-4xl font-commuter font-semibold text-center sm:text-left">{`Land Delegation & Batch Auction`}</div>
            <div className="text-white mt-3 mb-6 text-center sm:text-left">As MAD batches chunks of lands together, advertisement rights are auctioned. With a collection of land owners, the value of parcels will increase and can be put to greater use.</div>
            <Button onClick={() => {navigate('../auction', {replace: true})}} text="Attend Auction" borderColor="yellow-mad-yellow" className="text-center text-yellow-mad-yellow bg-gray-500 hover:bg-yellow-mad-yellow hover:text-gray-500 w-full sm:w-auto sm:mr-auto px-8" />

            <div className="text-white mt-12 mb-6 text-center sm:text-right">Land providers can delegate any amount of land in the metaverse worlds to the DAO. Landowners can view current yield and harvest their yield on MAD.</div>
            <Button onClick={() => {navigate('../lease', {replace: true})}} text="I Have Land!" borderColor="pink-10" className="text-center text-pink-10 bg-gray-500 hover:bg-pink-10 hover:text-gray-500 w-full sm:w-auto sm:ml-auto px-8" />
          </div>
        </div>
      </div>
    </>
  );
}
