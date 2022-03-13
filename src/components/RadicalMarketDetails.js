import React, { useEffect, useState } from "react";
import ArrowLeft from "../assets/arrow_left.svg";
import RMLocation from "./RMLocation";
import RMPrice from "./RMPrice";
import GavelExpand from "../assets/gavel_expand.svg";
import EthIcon from "../assets/eth_black.svg";
import PriceTag from "../assets/price_tag.svg";
import ArrowDownCircle from "../assets/arrow_down_circle.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { getDecentralandParcelData, getOffers } from "../helpers/graphql";
import { BigNumber, ethers } from "ethers";
import { storeNotif } from "../helpers/notifications";

function RadicalMarketDetails(props) {
  
  const { radicalMarketContract, radicalMarketInstance } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const [parcelData, handleParcelData] = useState(null);
  const [layerName, handleLayerName] = useState('Decentraland');
  const [offers, handleOffers] = useState([]);
  const [id, handleId] = useState("");

  useEffect(() => {
    let id = location.pathname.split('/').pop();
    handleId(id);
    (async () => {
      handleParcelData(await getDecentralandParcelData(id));
      handleOffers(await getOffers(0));
    })();
  }, []);

  const bid = async (pricePerDay, bidVal) => {
    if(bidVal > 0 && pricePerDay > 0 && id != "") {
      let tx = await radicalMarketInstance.bid(0, ethers.utils.parseUnits(`${pricePerDay}`, 18), {
        value: ethers.utils.parseUnits(`${bidVal}`, 18)
      });
      tx.wait(1).then(
        // Store notif success
        storeNotif("Bid Successful", "You are now the operator of this parcel.", "success")
      );
    }
  }

  const offersMap = offers.map((offer) => (
    <tr key={`offer-${offer.timestamp}`}>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="inline-flex">
          {offer.from.substring(0, 6)}...{offer.from.substring(offer.from.length - 4)}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-2.5">
            <img
              className="rounded-full"
              src={EthIcon}
              alt="eth-icon"
            />
          </div>
          <div className="ml-2">
            <span className="inline-flex">{offer.pricePerDay / 1e18} ETH</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-2.5">
            <img
              className="rounded-full"
              src={EthIcon}
              alt="eth-icon"
            />
          </div>
          <div className="ml-2">
            <span className="inline-flex">{offer.total / 1e18} ETH</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="inline-flex">{(new Date(offer.timestamp * 1000)).toISOString()}</span>
      </td>
    </tr>
  ));

  return (
    <div className="w-full flex flex-col text-gray-95 font-commuter">
      <div className="w-full flex flex-col pt-20 px-10 bg-gray-490">
        <div className="w-full flex md:flex-row justify-center">
          <div className="flex flex-col w-full mx-auto md:ml-10 md:mr-12 mb-auto text-left">
            <div className=" mt-16 text-center md:text-left ">
              <div className="flex cursor-pointer">
                <img src={ArrowLeft} alt="back" className="mr-1" />
                <p
                  className="font-commuter lg:text-2xl text-12 font-normal"
                  onClick={() => {
                    navigate("../radicalmarket/", {
                      replace: true,
                    });
                  }}
                >
                  Back to List
                </p>
              </div>
              <div className="mt-9 block md:flex md:space-x-12">
                <div className="w-full md:w-1/2">
                  <p className="text-green-30 lg:text-2xl text-base mb-1 text-left md:hidden block">
                    {layerName}
                  </p>
                  <div className="flex md:mb-0 mb-4 md:block ">
                    <p className="text-white lg:text-4xl text-2xl mr-3 md:hidden block">
                      {parcelData?.name}
                    </p>
                    <img
                      src={ArrowDownCircle}
                      alt="arrow-down-circle"
                      className="md:hidden block"
                    />
                  </div>
                  <RMLocation parcel={parcelData} />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-green-30 lg:text-2xl text-base lg:mb-7 mb-1 text-left md:block hidden">
                    {layerName}
                  </p>
                  <div className="flex lg:mb-14 mb-4">
                    <p className="text-white lg:text-4xl text-2xl mr-3 md:block hidden">
                      {parcelData ? parcelData.name ? parcelData.name : `Parcel #${parcelData.tokenId.substring(0, 12)}` : 'Loading...'}
                    </p>
                    <img
                      src={ArrowDownCircle}
                      alt="arrow-down-circle"
                      className="md:block hidden"
                    />
                  </div>
                  <RMPrice marketValue={1.39} madPrice={0.01} stakeAndBid={bid}/>
                </div>
              </div>
              <div className="lg:mt-28 mt-8">
                <div className="flex items-center">
                  <span className="mr-7 text-green-30 lg:text-4xl text-base">
                    OFFERS
                  </span>
                  <img
                    src={GavelExpand}
                    className="lg:block hidden"
                    alt="gavel-icon"
                  />
                </div>
                <div className="flex flex-col mt-6 mb-12">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full ">
                          <thead className="bg-transparent text-white text-opacity-30 font-normal lg:text-lg text-sm">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left uppercase tracking-wider"
                              >
                                FROM
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left uppercase tracking-wider"
                              >
                                BID
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left uppercase tracking-wider"
                              >
                                TOTAL STAKED
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left uppercase tracking-wider"
                              >
                                EXPIRY
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-transparent lg:text-lg text-12 font-normal">
                            {offersMap}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center font-commuter">
                <span className="uppercase lg:text-4xl text-12 leading-7 font-semibold mr-2">
                  Price History
                </span>
                <img
                  src={PriceTag}
                  className="lg:block hidden"
                  alt="price-tag"
                />
              </div> */}

              {/* This is for Chart implementation */}
              {/* <div className="flex justify-around flex-wrap w-full">
                <Chart options={allOptions} className="my-4 w-full sm:w-1/3 p-4"/>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadicalMarketDetails;
