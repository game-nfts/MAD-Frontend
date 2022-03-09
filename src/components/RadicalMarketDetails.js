import React from "react";
import ArrowLeft from "../assets/arrow_left.svg";
import RMLocation from "./RMLocation";
import RMPrice from "./RMPrice";
import GavelExpand from "../assets/gavel_expand.svg";
import EthIcon from "../assets/eth_black.svg";
import PriceTag from "../assets/price_tag.svg";

function RadicalMarketDetails() {
  return (
    <div className="w-full flex flex-col text-gray-95 font-commuter">
      <div className="w-full flex flex-col pt-20 px-10 bg-gray-490">
        <div className="w-full flex md:flex-row justify-center">
          <div className="flex flex-col w-full mx-auto md:ml-10 md:mr-12 mb-auto text-left">
            <div className=" mt-16 mx-auto md:mx-0 text-center md:text-left ">
              <div className="flex cursor-pointer">
                <img src={ArrowLeft} alt="back" className="mr-1" />
                <p className="font-commuter text-2xl font-normal">
                  Back to List
                </p>
              </div>
              <div className="mt-9 flex space-x-8">
                <div className="w-5/12">
                  <RMLocation />
                </div>
                <div className="w-7/12">
                  <p className="text-green-30 text-2xl mb-7">Cryptovoxels</p>
                  <p className="text-white text-4xl mb-14">312 Neutron Tower</p>
                  <RMPrice />
                </div>
              </div>
              <div className="mt-28">
                <div className="flex items-center">
                  <span className="mr-7 text-green-30 text-4xl">OFFERS</span>
                  <img src={GavelExpand} alt="gavel-icon" />
                </div>
                <div class="flex flex-col mt-6 mb-12">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden">
                        <table class="min-w-full ">
                          <thead class="bg-transparent text-white text-opacity-30 font-normal text-lg">
                            <tr>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left uppercase tracking-wider"
                              >
                                FROM
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left uppercase tracking-wider"
                              >
                                PRICE
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left uppercase tracking-wider"
                              >
                                TOTAL VALUE
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left uppercase tracking-wider"
                              >
                                DATE
                              </th>
                            </tr>
                          </thead>
                          <tbody class="bg-transparent text-lg font-normal">
                            <tr>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex">
                                  0xE124...A27E
                                </span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                  <div class="flex-shrink-0 w-2.5">
                                    <img
                                      class="rounded-full"
                                      src={EthIcon}
                                      alt="eth-icon"
                                    />
                                  </div>
                                  <div class="ml-2">
                                    <span class="px-2 inline-flex">10 ETH</span>
                                  </div>
                                </div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex">$ 4,712.45</span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex">35 min ago</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center font-commuter">
                <span className="uppercase text-4xl leading-7 font-semibold mr-2">
                  Price History
                </span>
                <img src={PriceTag} alt="price-tag" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadicalMarketDetails;
