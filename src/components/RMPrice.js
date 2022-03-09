import React from "react";
import EthIcon from "../assets/eth_black.svg";
import Button from "./Button";

function RMPrice() {
  return (
    <div className="bg-black-20 w-full px-5 py-9  border border-gray-35 rounded-2xl font-commuter">
      <p className="text-gray-85 text-3xl mb-5">Market Value</p>
      <div className="flex text-gray-110 items-center mb-11">
        <img src={EthIcon} alt="eth-icon" className="mr-3" />
        <span className="text-4xl font-semibold mr-2">1.39</span>
        <p className="text-2xl font-light">(3646usd)</p>
      </div>
      <p className="text-gray-85 text-3xl mb-5">MAD Price:</p>
      <div className="flex text-gray-110 items-center mb-11">
        <img src={EthIcon} alt="eth-icon" className="mr-3" />
        <span className="text-4xl font-semibold mr-2">0.04/Day</span>
        <p className="text-2xl font-light">(105usd)</p>
      </div>
      <p className="text-gray-85 text-3xl mb-5">Stake Now:</p>
      <div className="flex text-gray-110 items-center mb-11">
        <img src={EthIcon} alt="eth-icon" className="mr-4" />
        <input
          className="w-40 h-16 bg-transparent border border-white border-opacity-30 rounded-md text-2xl px-1"
          type="text"
        />
        <span className="ml-2.5 text-xl mt-auto">--Days</span>
        <Button
          text="Stake and Bid"
          className="text-center text-gray-490 bg-green-60 hover:bg-pink-10 font-nexa font-bold text-xl hover:text-gray-500 w-full sm:w-auto sm:ml-auto px-5 py-2.5"
        />
      </div>
    </div>
  );
}

export default RMPrice;
