import React from "react";
import EthIcon from "../assets/eth_black.svg";
import Button from "./Button";

function RMPrice() {
  return (
    <div className="bg-black-20 w-full lg:px-5 lg:py-9 px-3 py-5 border border-gray-35 rounded-2xl font-commuter text-left">
      <p className="text-gray-85 lg:text-3xl text-base mb-5">Market Value</p>
      <div className="flex text-gray-110 items-center lg:mb-11 mb-3">
        <img src={EthIcon} alt="eth-icon" className="mr-3" />
        <span className="lg:text-4xl text-lg font-semibold mr-2">1.39</span>
        <p className="lg:text-2xl text-xl font-light">(3646usd)</p>
      </div>
      <p className="text-gray-85 lg:text-3xl text-base mb-5">MAD Price:</p>
      <div className="flex text-gray-110 items-center lg:mb-11 mb-3">
        <img src={EthIcon} alt="eth-icon" className="mr-3" />
        <span className="lg:text-4xl text-lg font-semibold mr-2">0.04/Day</span>
        <p className="lg:text-2xl text-xl font-light">(105usd)</p>
      </div>
      <p className="text-gray-85 lg:text-3xl text-base mb-5">Stake Now:</p>
      <div className="lg:flex block text-gray-110 items-center lg:mb-11 mb-3">
        <div className="flex">
          <img src={EthIcon} alt="eth-icon" className="mr-4 md:w-4" />
          <input
            className="lg:w-40 w-24 lg:h-16 h-8 bg-transparent border border-white border-opacity-30 rounded-md text-2xl px-1"
            type="text"
          />
          <span className="ml-2.5 lg:text-xl text-sm mt-auto lg:mt-0">
            --Days
          </span>
        </div>
        <Button
          text="Stake and Bid"
          className="text-center text-gray-490 bg-green-60 hover:bg-pink-10 font-nexa font-bold lg:text-xl text-12 hover:text-gray-500 w-full sm:w-auto sm:ml-auto lg:px-5 px-3 lg:py-2.5 py-1.5  lg:mt-0 mt-4"
        />
      </div>
    </div>
  );
}

export default RMPrice;
