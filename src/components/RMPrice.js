import React, { useEffect, useState } from "react";
import EthIcon from "../assets/eth_black.svg";
import { getCurrentEthPriceInUsd } from "../helpers/chainlink";
import Button from "./Button";

function RMPrice(props) {
  const { marketValue, madPrice, stakeAndBid } =  props;

  const [madPriceUsd, handleMadPriceUsd] = useState('--');
  const [marketValueUsd, handleMarketValueUsd] = useState('--');
  const [bid, handleBid] = useState(0);
  const [days, handleDays] = useState('--');
  
  useEffect(() => {
    (async () => {
      handleMadPriceUsd(((await getCurrentEthPriceInUsd()) * madPrice).toFixed(2));
      handleMarketValueUsd(((await getCurrentEthPriceInUsd()) * marketValue).toFixed(2));
    })();
  }, []);

  const updateDays = (e) => {
    try {
      if(!e.target.value) {
        handleDays('--');
        handleBid(0);
      } else {
        let input = parseFloat(e.target.value);
        handleBid(input);
        handleDays((input / madPrice).toFixed(2));
      }
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div className="bg-black-20 w-full lg:px-5 lg:py-9 px-3 py-5 border border-gray-35 rounded-2xl font-commuter text-left">
      <p className="text-gray-85 lg:text-3xl text-base mb-5">Market Value</p>
      <div className="flex text-gray-110 items-center flex-wrap lg:mb-11 mb-3">
        <img src={EthIcon} alt="eth-icon" className="mr-3 md:w-7 w-4" />
        <span className="lg:text-4xl text-lg font-semibold mr-2">{`${marketValue}`}</span>
        <p className="lg:text-2xl text-xl font-light">({`${marketValueUsd}usd`})</p>
      </div>
      <p className="text-gray-85 lg:text-3xl text-base mb-5">MAD Price:</p>
      <div className="flex text-gray-110 items-center lg:mb-11 mb-3 flex-wrap">
        <img src={EthIcon} alt="eth-icon" className="mr-3 md:w-7 w-4" />
        <span className="lg:text-4xl text-lg font-semibold mr-2">{`${madPrice}/Day`}</span>
        <p className="lg:text-2xl text-xl font-light">({`${madPriceUsd}usd`})</p>
      </div>
      <p className="text-gray-85 lg:text-3xl text-base mb-5">Stake Now:</p>
      <div className="lg:flex md:block flex text-gray-110 items-center lg:mb-2 mb-3 flex-wrap md:space-y-5">
        <div className="flex items-center flex-wrap">
          <img
            src={EthIcon}
            alt="eth-icon"
            className="mr-4 md:w-7 w-4 sm:h-11"
          />
          <input
            className="lg:w-40 w-24 lg:h-16 h-8 bg-transparent border border-white border-opacity-30 rounded-md lg:text-2xl text-xl px-1 outline-none"
            type="numeric"
            onChange={(e) => updateDays(e)}
          />
          <span className="ml-2.5 lg:text-xl text-sm mt-auto">{days} Days</span>
        </div>
        <Button
          text="Stake and Bid"
          onClick={() => stakeAndBid(madPrice, bid)}
          className="text-center text-gray-490 bg-green-60 hover:bg-pink-10 font-nexa font-bold lg:text-xl text-12 hover:text-gray-500 w-auto ml-auto lg:px-5 px-3 lg:py-2.5 py-1.5  lg:mt-0 mt-4"
        />
      </div>
    </div>
  );
}

export default RMPrice;
