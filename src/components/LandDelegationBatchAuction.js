import Button from "./Button";
import BatchAuctionImage from '../assets/batch_auction.svg';
import EthIcon from '../assets/eth_logo.svg';
import Hammer from '../assets/hammer.png';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentEthPriceInUsd } from "../helpers/chainlink";

export default function LandDelegationBatchAuction(props) {

  return (
    <>
			<div className="flex flex-col-reverse md:flex-row">
        <div className="w-full sm:w-1/2">
          
        </div>
        <div className="w-full sm:w-1/2">
          
        </div>
      </div>
    </>
  );
}
